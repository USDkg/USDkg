import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const deployerPrivateKey = process.env.DEPLOYER;
const accounts = deployerPrivateKey ? [deployerPrivateKey] : []

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    mainnet: {
      chainId: 1,
      url: vars.get("ETHEREUM_RPC", ""),
      accounts
    }
  },
  etherscan: {
    apiKey: {
      mainnet: vars.get("ETHERSCAN_API_KEY", ""),
    },
  }
};

export default config;
