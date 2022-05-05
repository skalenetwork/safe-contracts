require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(" Account List ", account.address);
  }
});

// Change this when deploying to different networks
const defaultNetwork = "skaleTestnet";

module.exports = {
  defaultNetwork,
  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    skaleTestnet: {
      url: process.env.ENDPOINT,
      accounts: [process.env.ADMIN_PKEY_TESTNET]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/25fa1ace1a514064af1e74da27d00ff7",
      accounts: [process.env.ADMIN_PKEY_TESTNET]
    },
    // rinkeby: {
    //   url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    //   accounts: [process.env.MM_PKEY_TESTNET]
    // },
    // fantomTestnet: {
    //   url: "https://rpc.testnet.fantom.network'",
    //   accounts: [process.env.MM_PKEY_TESTNET]
    // },

  },
  solidity: {
    compilers: [

      { version: "0.6.12" },
      { version: "0.5.17" },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }



    ],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    }
  },
  etherscan: {
    apiKey: 'ZG3GNW27H3216I9X5JGRXIJWX25CZDABFZ'
  }
};
