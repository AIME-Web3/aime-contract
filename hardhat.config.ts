import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import type { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";
import type { NetworkUserConfig } from "hardhat/types";
// import "@nomiclabs/hardhat-etherscan";
// import "./tasks/accounts";

// Run 'npx hardhat vars setup' to see the list of variables that need to be set
const mnemonic: string = vars.get("MNEMONIC_");
const ETH_SK: string = vars.get("ETH_SK");
const infuraApiKey: string = vars.get("INFURA_API_KEY");

const chainIds = {
  "merlin-testnet": 686868,
  "arbitrum-mainnet": 42161,
  avalanche: 43114,
  bsc: 56,
  "bsc-testnet": 97,
  ganache: 1337,
  hardhat: 31337,
  mainnet: 1,
  "optimism-mainnet": 10,
  "polygon-mainnet": 137,
  "polygon-mumbai": 80001,
  sepolia: 11155111,
};

function getChainConfig(chain: keyof typeof chainIds): NetworkUserConfig {
  let jsonRpcUrl: string;
  switch (chain) {
    case "merlin-testnet":
      jsonRpcUrl = "https://testnet-rpc.merlinchain.io";
      break;
    case "avalanche":
      jsonRpcUrl = "https://api.avax.network/ext/bc/C/rpc";
      break;
    case "bsc":
      jsonRpcUrl = "https://bsc-dataseed1.binance.org";
      break;
    case "bsc-testnet":
      jsonRpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545";
      break;
    default:
      jsonRpcUrl = "https://" + chain + ".infura.io/v3/" + infuraApiKey;
  }
  return {
    accounts: {
      count: 10,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[chain],
    url: jsonRpcUrl,
    // gasPrice: Number(ethers.parseUnits("20", "gwei").toString()),
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // namedAccounts: {
  //   deployer: 0,
  // },
  etherscan: {
    apiKey: {
      // arbitrumOne: vars.get("ARBISCAN_API_KEY", ""),
      // avalanche: vars.get("SNOWTRACE_API_KEY", ""),
      // bsc: vars.get("BSCSCAN_API_KEY", ""),
      // mainnet: vars.get("ETHERSCAN_API_KEY", ""),
      // optimisticEthereum: vars.get("OPTIMISM_API_KEY", ""),
      // polygon: vars.get("POLYGONSCAN_API_KEY", ""),
      // polygonMumbai: vars.get("POLYGONSCAN_API_KEY", ""),
      sepolia: vars.get("ETHERSCAN_API_KEY", ""),
      // 'bscTestnet': vars.get("BSCSCAN_API_KEY", ""),
    },
  },
  // gasReporter: {
  //   currency: "USD",
  //   enabled: process.env.REPORT_GAS ? true : false,
  //   excludeContracts: [],
  //   src: "./contracts",
  // },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
      chainId: chainIds.hardhat,
    },
    // arbitrum: getChainConfig("arbitrum-mainnet"),
    // avalanche: getChainConfig("avalanche"),
    // bsc: getChainConfig("bsc"),
    // mainnet: getChainConfig("mainnet"),
    // optimism: getChainConfig("optimism-mainnet"),
    // "polygon-mainnet": getChainConfig("polygon-mainnet"),
    // "polygon-mumbai": getChainConfig("polygon-mumbai"),
    sepolia: getChainConfig("sepolia"),
    // 'bsc-testnet': getChainConfig("bsc-testnet"),
    // 'merlin-testnet': getChainConfig("merlin-testnet"),
    polygon: {
      url: "https://rpc.cardona.zkevm-rpc.com",
      chainId: 2442,
      accounts: [ETH_SK as unknown as string],
    },
    linea: {
      url: "https://rpc.goerli.linea.build",
      chainId: 59140,
      accounts: [ETH_SK as unknown as string],
    },
    scroll: {
      url: "https://scroll-testnet-public.unifra.io",
      chainId: 534351,
      accounts: [ETH_SK as unknown as string],
    },
    thundercore: {
      // TODO:
      url: "https://testnet-rpc.thundercore.com",
      chainId: 18,
      accounts: [ETH_SK as unknown as string],
      // gasPrice: 5000000000000,
    },
    op: {
      url: 'https://optimism-sepolia.infura.io/v3/709f66312ff74761a30d551b6e9c5810',
      accounts: [ETH_SK as unknown as string],
    },
    // sepolia: {
    //   url: "https://sepolia.infura.io/v3/709f66312ff74761a30d551b6e9c5810",
    //   chainId: 11155111,
    //   accounts: [ETH_SK as unknown as string],
    // },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.20",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6",
  },
  // defender: {
  //   useDefenderDeploy: false,
  //   apiKey: vars.get("DEFENDER_API_KEY"),
  //   apiSecret: vars.get("DEFENDER_API_SECRET"),
  // }
};
export default config;
