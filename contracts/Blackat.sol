// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Blackat is ERC1155, AccessControl, ERC1155Burnable, ERC1155Supply {
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    using SafeMath for uint256;

    using Counters for Counters.Counter;

    Counters.Counter private _countTracker;
    string public name;
    string public symbol;
    uint256 public constant TIER_ONE = 0.1 ether;
    uint256 public constant TIER_TWO = 0.3 ether;
    uint256 public constant TIER_THREE = 0.5 ether;
    uint256 public constant TIER_FOUR = 0.75 ether;
    uint256 public constant TIER_FIVE = 1 ether;
    uint256 public constant TIER_SIX = 1.5 ether;

    uint256 public totalTokens; 
    mapping(uint => uint) public tokenMaxAvail;
    mapping(uint => string) public tokenNames;
    mapping(uint => uint) public tokenMinted;
    mapping(uint => string) private _uris;
    address public multiSigOwner;
    uint256 public maxSupply;


    constructor(
        string memory _name, 
        string memory _symbol, 
        address _multiSigOwner
    ) ERC1155("") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(URI_SETTER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        setMultiSig(_multiSigOwner);
        name = _name;
        symbol = _symbol;
        
    }

    function setMultiSig(address _multiSig) public onlyRole(DEFAULT_ADMIN_ROLE) {
        multiSigOwner = _multiSig;
    }


    function uri(uint256 tokenId) override public view returns (string memory) {
        return(_uris[tokenId]);
    }

    function setTokenURI(uint256 tokenId, string memory tokenUri) public onlyRole(URI_SETTER_ROLE) {
        _uris[tokenId] = tokenUri;
    }


    // still to do - whitelist functions and the initial constructor 
    function price(uint256 _supply) internal pure returns (uint256) {
        if (500 >= _supply && _supply >= 451) {
            return TIER_SIX;
        } else if(450 >= _supply && _supply >= 401){
            return TIER_FIVE;
        } else if(400 >= _supply && _supply >= 351){
            return TIER_FOUR;
        } else if(350 >= _supply && _supply >= 301){
            return TIER_THREE;
        } else if( 300 >= _supply && _supply >= 251){
            return TIER_TWO;
        } else {
            return  TIER_ONE;
        }
    }


    function generateToken(
        uint256 quantity,
        string memory tokenName,
        string memory tokenUri
    ) public virtual {
        require(hasRole(MINTER_ROLE, _msgSender()), "must have minter role to generate tokens");
        uint256 newID = totalTokens;
        setTokenURI(newID, tokenUri);
        totalTokens += 1;
        tokenMinted[newID] = 0;
        tokenMaxAvail[newID] = quantity;
        tokenNames[newID] = tokenName;
        maxSupply += quantity;
        tokenMinted[newID] += 1;
        _countTracker.increment();
        _mint(multiSigOwner, newID, 1, "");

    }
    
    function totalMinted() public view returns (uint256) {
        return _countTracker.current();
    }
    

    function getTokenSupply(uint256 _id) public view returns (uint256) {
        uint256 available = tokenMaxAvail[_id];
        uint256 minted = tokenMinted[_id];
        if (available > minted) {
            uint256 _tokenSupply = available - minted;
            return(_tokenSupply);
        } else {
            return(0);
        }
    }
 

    function currentPrice() public view returns (uint256) {
        uint256 total_members_exist = totalMinted() - tokenMinted[0];
        return price(total_members_exist);

    }

    function mint(address account, uint256 id, uint256 amount)
        external 
        payable
    {
        require(amount > 0, "Mint count should be greater than zero");
        require(getTokenSupply(id) >= amount, "Not enough Supply, try to mint less");
        uint256 totalPrice = currentPrice().mul(amount);

        require(msg.value >= totalPrice, "Insufficient funds");
        
        tokenMinted[id] += amount;

        
        for (uint256 i = 0; i < amount; i++) {
            _countTracker.increment();
        }

        _mint(account, id, amount, "");
    }


    function ownerMint(address account, uint256 id, uint256 amount)
        public
        virtual
    {
        require(hasRole(MINTER_ROLE, _msgSender()), "must have minter role to mint");
        uint256 tokenSupply = getTokenSupply(id);

        require(amount > 0, "Mint count should be greater than zero");
        require(tokenSupply >= amount, "Not Enough Token Supply");

        tokenMinted[id] += amount;
        for (uint256 i = 0; i < amount; i++) {
            _countTracker.increment();
            }
        _mint(account, id, amount, "");
    }



    function mintSupporter(address account, uint256 amount)
        external 
        payable
    {
        require(amount > 0, "Mint count should be greater than zero");
        uint256 tokenSupply = getTokenSupply(0);
        require(tokenSupply >= amount, "Not enough Supply, try to mint less");


        uint256 totalPrice = TIER_FIVE * amount;
        tokenMinted[0] += amount;
        tokenMinted[1] += amount;
        uint256 double = amount.mul(2);
        require(msg.value >= totalPrice, "Insufficient funds");
        for (uint256 i = 0; i < double; i++) {
            _countTracker.increment();
            

            }

        _mint(account, 0, amount, "");
        _mint(multiSigOwner, 1, amount, "");
        
    }

    function withdrawAll() public payable onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 balance = address(this).balance;
        require(balance > 0);
        _withdraw(multiSigOwner, balance);
    }

    function _withdraw(address _address, uint256 _amount) private {
        (bool success, ) = _address.call{ value: _amount }("");
        require(success, "Transfer failed.");
    }



    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

