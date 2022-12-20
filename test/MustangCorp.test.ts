import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Test MustangCorp', async () => {
    let contract;
    let deployer;
    let otherAccount;

    before(async () => {
        [deployer, otherAccount] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory('MustangCorp');
        contract = await Contract.deploy('ipfsURI');
    });

    it('Only owner can mint', async () => {
        await expect(contract.connect(otherAccount).mint()).to.be.reverted;
    });

    it('Should have 10 NFTs of total supply', async function () {
        const supply = await contract.SUPPLY();
        expect(supply).to.equal(10);
    });

    it('Owner can mint all supply', async () => {
        const balanceBeforeMint = await contract.balanceOf(deployer.address);
        expect(balanceBeforeMint).to.equal(0);

        await contract.connect(deployer).mint();

        const balanceAfterMint = await contract.balanceOf(deployer.address);
        expect(balanceAfterMint).to.equal(10);
    });

    it('Can mint only once', async () => {
        await expect(contract.connect(deployer).mint()).to.be.reverted;
    });
});
