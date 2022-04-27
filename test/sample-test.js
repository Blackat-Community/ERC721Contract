const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

const provider = waffle.provider;


describe("Deploy", function () {
  it("Should Deploy Contract", async function () {
          [
            owner,
            _multiSig,
            _to2,
            ] = await ethers.getSigners();
          const blackat = await ethers.getContractFactory("Blackat");
          mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
          console.log(mockBlackat.address);
        });
  it("Should Generate 6 tokenIds", async function () {
          [
            owner,
            _multiSig,
            _to2,
            ] = await ethers.getSigners();
          const blackat = await ethers.getContractFactory("Blackat");
          mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
          console.log(mockBlackat.address);

          supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_one = await mockBlackat.connect(owner).generateToken(100, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_two = await mockBlackat.connect(owner).generateToken(100, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
          expect(await mockBlackat.getTokenSupply(1)).to.equal(99);
          expect(await mockBlackat.getTokenSupply(2)).to.equal(99);
          expect(await mockBlackat.getTokenSupply(3)).to.equal(99);
          expect(await mockBlackat.getTokenSupply(4)).to.equal(99);
          expect(await mockBlackat.getTokenSupply(5)).to.equal(99);
          expect(await mockBlackat.totalMinted()).to.equal(6);
        });

  it("Should Mint Supporter Tokens", async function () {
          [
            owner,
            _multiSig,
            _to2,
            ] = await ethers.getSigners();
          const blackat = await ethers.getContractFactory("Blackat");
          mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
          console.log(mockBlackat.address);
          supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_one = await mockBlackat.connect(owner).generateToken(100, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_two = await mockBlackat.connect(owner).generateToken(100, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
          expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
          cp = await mockBlackat.currentPrice();
          console.log(cp)
          token_five = await mockBlackat.connect(_to2).mintSupporter(_to2.address, 5, { value: ethers.utils.parseEther("5")})
          cp = await mockBlackat.currentPrice();
          console.log(cp)
          expect(await mockBlackat.getTokenSupply(0)).to.equal(94);
      });
  it("Should Mint Supporter Tokens", async function () {
        [
          owner,
          _multiSig,
          _to2,
          ] = await ethers.getSigners();
        const blackat = await ethers.getContractFactory("Blackat");
        mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
        console.log(mockBlackat.address);
        supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_one = await mockBlackat.connect(owner).generateToken(100, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_two = await mockBlackat.connect(owner).generateToken(100, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
        cp = await mockBlackat.currentPrice();
        console.log(cp)
        token_five = await mockBlackat.connect(_to2).mintSupporter(_to2.address, 5, { value: ethers.utils.parseEther("5")})
        cp = await mockBlackat.currentPrice();
        console.log(cp)
        expect(await mockBlackat.getTokenSupply(0)).to.equal(94);
        expect(await mockBlackat.getTokenSupply(1)).to.equal(94);
        expect(await mockBlackat.balanceOf(_to2.address, 0)).to.equal(5);
        expect(await mockBlackat.balanceOf(_multiSig.address, 1)).to.equal(6);
        expect(await mockBlackat.totalMinted()).to.equal(16);
    });
    it("Should Mint Member Tokens", async function () {
      [
        owner,
        _multiSig,
        _to2,
        ] = await ethers.getSigners();
      const blackat = await ethers.getContractFactory("Blackat");
      mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
      console.log(mockBlackat.address);
      supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_one = await mockBlackat.connect(owner).generateToken(100, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_two = await mockBlackat.connect(owner).generateToken(100, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
      cp = await mockBlackat.currentPrice();
      console.log(cp)
      token_five = await mockBlackat.connect(_to2).mint(_to2.address, 2, 5, { value: ethers.utils.parseEther(".5")})
      cp = await mockBlackat.currentPrice();
      console.log(cp)
      expect(await mockBlackat.getTokenSupply(2)).to.equal(94);
      expect(await mockBlackat.balanceOf(_multiSig.address, 2)).to.equal(1);
      expect(await mockBlackat.balanceOf(_to2.address, 2)).to.equal(5);
      expect(await mockBlackat.totalMinted()).to.equal(11);
      
  });
  it("Should Mint Many Member Tokens", async function () {
        [
          owner,
          _multiSig,
          _to2,
          ] = await ethers.getSigners();
        const blackat = await ethers.getContractFactory("Blackat");
        mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
        console.log(mockBlackat.address);
        supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_one = await mockBlackat.connect(owner).generateToken(100, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_two = await mockBlackat.connect(owner).generateToken(100, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
        six_count = await mockBlackat.totalMinted()
        console.log(six_count)
        expect(await mockBlackat.totalMinted()).to.equal(6);
        expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
        cp = await mockBlackat.currentPrice();
        console.log(cp)
        token_five = await mockBlackat.connect(_to2).mint(_to2.address, 2, 99, { value: ethers.utils.parseEther("9.9")})
        cp = await mockBlackat.currentPrice();
        console.log(cp)
        token_six = await mockBlackat.connect(_to2).mint(_to2.address, 3, 99, { value: ethers.utils.parseEther("9.9")})
        cp = await mockBlackat.currentPrice();
        console.log(cp)
        token_seven = await mockBlackat.connect(_to2).mint(_to2.address, 4, 48, { value: ethers.utils.parseEther("4.8")})
        cp = await mockBlackat.currentPrice();
        tm = await mockBlackat.totalMinted();
        console.log(cp, tm)
        token_five = await mockBlackat.connect(_to2).mintSupporter(_to2.address, 99, { value: ethers.utils.parseEther("99")})
        cp = await mockBlackat.currentPrice();
        tm = await mockBlackat.totalMinted();
        
        console.log("before")
        console.log(cp, tm)
        token_eight = await mockBlackat.connect(_to2).mint(_to2.address, 5, 2, { value: ethers.utils.parseEther("1")})
        cp = await mockBlackat.currentPrice();
        tm = await mockBlackat.totalMinted();
        console.log(cp, tm)
        console.log("after")
        
    });
    it("Should Transfer Balance", async function () {
      [
        owner,
        _multiSig,
        _to2,
        ] = await ethers.getSigners();
      const blackat = await ethers.getContractFactory("Blackat");
      mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
      console.log(mockBlackat.address);
      supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_one = await mockBlackat.connect(owner).generateToken(200, 'Token One', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_two = await mockBlackat.connect(owner).generateToken(600, 'Token Two', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_three = await mockBlackat.connect(owner).generateToken(100, 'Token Three', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_four = await mockBlackat.connect(owner).generateToken(100, 'Token Four', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      token_five = await mockBlackat.connect(owner).generateToken(100, 'Token Five', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      expect(await mockBlackat.getTokenSupply(0)).to.equal(99);
      cp = await mockBlackat.currentPrice();
      token_five = await mockBlackat.connect(_to2).mint(_to2.address, 2, 400, { value: ethers.utils.parseEther("40")})
      newBalance = await provider.getBalance(_multiSig.address);
      console.log(newBalance)
      supporter = await mockBlackat.connect(owner).withdrawAll()
      newBalance = await provider.getBalance(_multiSig.address);
      console.log(newBalance)
  });
  it("Should Error: must have minter role to generate tokens", async function () {
        [
          owner,
          _multiSig,
          _to2,
          ] = await ethers.getSigners();
        const blackat = await ethers.getContractFactory("Blackat");
        mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
        console.log(mockBlackat.address);
        supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
      
        supporter = await mockBlackat.connect(owner).ownerMint(_multiSig.address, 0, 99);
     
    });
    it("Not enough Supply, try to mint lesss", async function () {
      [
        owner,
        _multiSig,
        _to2,
        ] = await ethers.getSigners();
      const blackat = await ethers.getContractFactory("Blackat");
      mockBlackat = await blackat.connect(owner).deploy('Black@ Community', 'Black@', _multiSig.address);
      console.log(mockBlackat.address);
      supporter = await mockBlackat.connect(owner).generateToken(100, 'Supporter', "https://gateway.pinata.cloud/ipfs/QmcAWvVoeGr19MmRiaWPsMmnSHMx5Aqab4raZv7ynswX9R");
    
      supporter = await mockBlackat.connect(owner).mint(_multiSig.address, 2, 100);
   
    });

});
