import { HardhatUserConfig } from "hardhat/types";  // Import Hardhat types
import "@nomicfoundation/hardhat-toolbox";         // Import Hardhat toolbox
import * as dotenv from "dotenv";                  // Import dotenv to load environment variables

dotenv.config(); // Load environment variables from .env file

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    skale: {
     url: "https://testnet.skalenodes.com/v1/juicy-low-small-testnet", // Skale network endpoint
     accounts: process.env.PRIVATE_KEY ? [`0x${process.env.PRIVATE_KEY}`] : [], // Load private key for Skale
    },
  },
};

export default config; // Export the configuration as default
