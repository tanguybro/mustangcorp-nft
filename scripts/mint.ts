import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';

dotenv.config();

const CONTRACT_ADDRESS = process.env;

async function mintNFT(contractAddress) {
    const NFT = await ethers.getContractFactory('MustangCorp');
    const [owner] = await ethers.getSigners();
    await NFT.attach(contractAddress).mintNFT(owner.address);
    console.log('NFT minted to: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
