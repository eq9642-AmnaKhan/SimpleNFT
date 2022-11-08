require("@nomicfoundation/hardhat-toolbox");
const { ethers } = require("hardhat");


async function main(){

  const nftContract = await ethers.getContractFactory("NFTee");

  const deployedNFTContract = await nftContract.deploy();

  await deployedNFTContract.deployed();

  console.log("NFT Contract Address: ", deployedNFTContract.address);

  
}

main()
  .then( () => process.exit(0))
  .catch( (error) => {
    console.log(error);
    process.exit(1);
  });