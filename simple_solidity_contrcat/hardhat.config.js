require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.GOERLI_ENDPOINT}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
  //etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    //apiKey: "YOUR_ETHERSCAN_API_KEY"
  //}
};

//*require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
  //solidity: "0.8.17",
//};

//https://eth-goerli.g.alchemy.com/v2/282To5gW2eJobtLZFvzoh-yTNUikzRWz
//** @type import('hardhat/config').HardhatUserConfig */
