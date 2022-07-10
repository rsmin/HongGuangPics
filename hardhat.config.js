/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// require("@nomicfoundation/hardhat-toolbox");
const { API_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://eth-mainnet.g.alchemy.com/v2/gXfD_-VZ_rFZkd_Zvht8Y10Yd-_theCx",
         accounts: ["a7ebb3eea79d93dd66fdf802b5c2303f2444dd48a14f84e94d91539764f1284b"]
      }
   },
}