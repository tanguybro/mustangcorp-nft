import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
    solidity: '0.8.17',
    networks: {
        mumbai: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`],
        },
    },
};

export default config;
