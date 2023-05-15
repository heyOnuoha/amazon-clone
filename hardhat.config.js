require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({});

const API_KEY_TESTNET = process.env.API_KEY_TESTNET;
const API_KEY_MAINNET = process.env.API_KEY_MAINNET;

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

module.exports = {
    solidity: "0.8.4",
    networks: {
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${API_KEY_TESTNET}`,
            accounts: [WALLET_PRIVATE_KEY],
        },
        mainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${API_KEY_MAINNET}`,
            accounts: [WALLET_PRIVATE_KEY],
        },
    },
};
