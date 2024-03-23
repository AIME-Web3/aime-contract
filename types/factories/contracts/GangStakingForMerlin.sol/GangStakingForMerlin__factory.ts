/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  GangStakingForMerlin,
  GangStakingForMerlinInterface,
} from "../../../contracts/GangStakingForMerlin.sol/GangStakingForMerlin";

const _abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSharesIssued",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositNativeToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "emergencyWithdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gangPool",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalShares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gangSharesInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initDepositAmount",
        type: "uint256",
      },
    ],
    name: "openGangPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "openGangPoolNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNativeBalanceNoUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalTokenBalanceNoUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "withdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516121ff61003e600039600081816116a5015281816116ce015261183601526121ff6000f3fe6080604052600436106101a15760003560e01c806357d23c31116100e1578063962c67181161008a578063a217fddf11610064578063a217fddf1461054b578063ad3cb1cc14610560578063c4d66de8146105b6578063d547741f146105d657600080fd5b8063962c6718146104d1578063991ebe3b146105095780639e86d72b1461051157600080fd5b80638456cb59116100bb5780638456cb5914610437578063894760691461044c57806391d148541461046c57600080fd5b806357d23c31146103d85780635c975abb146103f857806379433d8b1461042f57600080fd5b80632f2ff15d1161014e5780633f4ba83a116101285780633f4ba83a1461033c57806344a01c67146103515780634f1ef286146103b057806352d1902d146103c357600080fd5b80632f2ff15d146102dc578063338b5dea146102fc57806336568abe1461031c57600080fd5b8063146801891161017f57806314680189146102125780631af032031461026d578063248a9ca31461028d57600080fd5b806301ffc9a7146101a657806307b18bde146101db57806307eb2135146101fd575b600080fd5b3480156101b257600080fd5b506101c66101c1366004611ec1565b6105f6565b60405190151581526020015b60405180910390f35b3480156101e757600080fd5b506101fb6101f6366004611f07565b61062d565b005b34801561020957600080fd5b506101fb6106a8565b34801561021e57600080fd5b5073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee60005260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d918524545b6040519081526020016101d2565b34801561027957600080fd5b506101fb610288366004611f31565b61079c565b34801561029957600080fd5b5061025f6102a8366004611f4c565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b3480156102e857600080fd5b506101fb6102f7366004611f65565b610865565b34801561030857600080fd5b506101fb610317366004611f07565b6108af565b34801561032857600080fd5b506101fb610337366004611f65565b6109b4565b34801561034857600080fd5b506101fb6109e7565b34801561035d57600080fd5b5061039161036c366004611f31565b600160208190526000918252604090912080549101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101d2565b6101fb6103be366004611fa7565b6109fa565b3480156103cf57600080fd5b5061025f610a15565b3480156103e457600080fd5b506101fb6103f3366004612069565b610a44565b34801561040457600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166101c6565b6101fb610cbc565b34801561044357600080fd5b506101fb610dc4565b34801561045857600080fd5b506101fb610467366004611f31565b610dd7565b34801561047857600080fd5b506101c6610487366004611f65565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104dd57600080fd5b5061025f6104ec3660046120a5565b600260209081526000928352604080842090915290825290205481565b6101fb610e48565b34801561051d57600080fd5b5061025f61052c366004611f31565b6001600160a01b03166000908152600160208190526040909120015490565b34801561055757600080fd5b5061025f600081565b34801561056c57600080fd5b506105a96040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6040516101d291906120f3565b3480156105c257600080fd5b506101fb6105d1366004611f31565b610f3a565b3480156105e257600080fd5b506101fb6105f1366004611f65565b6110c6565b60006001600160e01b03198216637965db0b60e01b148061062757506301ffc9a760e01b6001600160e01b03198316145b92915050565b61063561110a565b6001600160a01b038083166000908152600160205260409020548391166106a35760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f74207365740000000060448201526064015b60405180910390fd5b505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee600081905260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d918523546001600160a01b031661073e5760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f742073657400000000604482015260640161069a565b63665a648042116107915760405162461bcd60e51b815260206004820152601f60248201527f456d657267656e63792074696d657374616d70206e6f74207265616368656400604482015260640161069a565b61079961114f565b50565b6001600160a01b038082166000908152600160205260409020548291166108055760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f742073657400000000604482015260640161069a565b63665a648042116108585760405162461bcd60e51b815260206004820152601f60248201527f456d657267656e63792074696d657374616d70206e6f74207265616368656400604482015260640161069a565b61086182611249565b5050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015461089f81611370565b6108a9838361137a565b50505050565b6108b761110a565b6001600160a01b038083166000908152600160205260409020548391166109205760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f742073657400000000604482015260640161069a565b6001600160a01b0383166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018590526064016020604051808303816000875af1158015610983573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a79190612126565b506106a383836000611450565b6001600160a01b03811633146109dd5760405163334bd91960e11b815260040160405180910390fd5b6106a38282611582565b60006109f281611370565b610799611628565b610a0261169a565b610a0b82611751565b610861828261175c565b6000610a1f61182b565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929610a6e81611370565b6103e8821015610acf5760405162461bcd60e51b815260206004820152602660248201527f47616e675374616b696e673a204465706f73697420616d6f756e7420697320746044820152656f6f206c6f7760d01b606482015260840161069a565b6001600160a01b038416610b255760405162461bcd60e51b815260206004820152601d60248201527f47616e675374616b696e673a20746f6b656e206973206e6f7420736574000000604482015260640161069a565b7fffffffffffffffffffffffff11111111111111111111111111111111111111126001600160a01b03851601610b9d5760405162461bcd60e51b815260206004820152601760248201527f63616e6e6f7420757365206e617469766520746f6b656e000000000000000000604482015260640161069a565b6001600160a01b038316610bf35760405162461bcd60e51b815260206004820152601e60248201527f47616e675374616b696e673a2076546f6b656e206973206e6f74207365740000604482015260640161069a565b6001600160a01b03808516600081815260016020526040812080546001600160a01b031916909217909155548591610c2d91168285611874565b6001600160a01b0381166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018690526064016020604051808303816000875af1158015610c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb49190612126565b505050505050565b610cc461110a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee600081905260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d918523546001600160a01b0316610d5a5760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f742073657400000000604482015260640161069a565b60003411610db95760405162461bcd60e51b815260206004820152602660248201527f47616e675374616b696e673a204465706f73697420616d6f756e7420697320746044820152656f6f206c6f7760d01b606482015260840161069a565b6107993460006118e5565b6000610dcf81611370565b6107996119c4565b610ddf61110a565b6001600160a01b038082166000908152600160205260409020548291166108615760405162461bcd60e51b815260206004820152601c60248201527f47616e675374616b696e673a20506f6f6c206973206e6f742073657400000000604482015260640161069a565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929610e7281611370565b6103e8341015610ed35760405162461bcd60e51b815260206004820152602660248201527f47616e675374616b696e673a204465706f73697420616d6f756e7420697320746044820152656f6f206c6f7760d01b606482015260840161069a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee600081815260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d91852380546001600160a01b0319168317905554610799916001600160a01b039091169034611874565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610f855750825b905060008267ffffffffffffffff166001148015610fa25750303b155b905081158015610fb0575080155b15610fce5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561100257845468ff00000000000000001916680100000000000000001785555b61100a611a1f565b611012611a1f565b61101a611a27565b6110226119c4565b61102d60008761137a565b506110587f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9298761137a565b50600080546001600160a01b0319166001600160a01b0388161790558315610cb457845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015461110081611370565b6108a98383611582565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff161561114d5760405163d93c066560e01b815260040160405180910390fd5b565b60008061115b33611a37565b91509150600082118061116e5750600081115b6111c45760405162461bcd60e51b815260206004820152602160248201527f47616e675374616b696e673a204e6f20746f6b656e20746f20776974686472616044820152607760f81b606482015260840161069a565b81156111f957604051339083156108fc029084906000818181858888f193505050501580156111f7573d6000803e3d6000fd5b505b60405182815273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9033907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb906020015b60405180910390a35050565b60006112558233611ae1565b9050600081116112b15760405162461bcd60e51b815260206004820152602160248201527f47616e675374616b696e673a204e6f20746f6b656e20746f20776974686472616044820152607760f81b606482015260840161069a565b6001600160a01b03821663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af115801561130e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113329190612126565b506040518181526001600160a01b0383169033907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb9060200161123d565b6107998133611b39565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1661143f576000848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556113f53390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610627565b6000915050610627565b5092915050565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa158015611497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bb9190612148565b6001600160a01b0385166000908152600160208190526040909120015490915082156114ee576114eb8483612177565b91505b6000826114fb838761218a565b61150591906121a1565b9050806000036115285760405163d205582d60e01b815260040160405180910390fd5b611533338783611874565b60408051868152602081018390526001600160a01b0388169133917ff5681f9d0db1b911ac18ee83d515a1cf1051853a9eae418316a2fdf7dea427c591015b60405180910390a3505050505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff161561143f576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610627565b611630611bad565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061173357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166117277f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b1561114d5760405163703e46dd60e11b815260040160405180910390fd5b600061086181611370565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156117b6575060408051601f3d908101601f191682019092526117b391810190612148565b60015b6117de57604051634c9c8ce360e01b81526001600160a01b038316600482015260240161069a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461182157604051632a87526960e21b81526004810182905260240161069a565b6106a38383611bef565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461114d5760405163703e46dd60e11b815260040160405180910390fd5b6001600160a01b038083166000908152600260209081526040808320938716835292905290812080548392906118ab9084906121c3565b90915550506001600160a01b038216600090815260016020819052604082200180548392906118db9084906121c3565b9091555050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee600081905260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d91852454479190831561193c576119398584612177565b92505b600083611949838861218a565b61195391906121a1565b9050806000036119765760405163d205582d60e01b815260040160405180910390fd5b611981338483611874565b60408051878152602081018390526001600160a01b0385169133917ff5681f9d0db1b911ac18ee83d515a1cf1051853a9eae418316a2fdf7dea427c59101611572565b6119cc61110a565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2583361167c565b61114d611c45565b611a2f611c45565b61114d611c93565b6001600160a01b03811660009081527f6a26712a1b2f732f4c1fd85f9d6ed8235573aaa2a79aa2bab72c2423a73a9faf6020526040812054819073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee908015611ada57611a98858383611cc6565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee60005260016020527fde3e59ea0eeb6a65f16dd826b7bdfb53723c09ad80c81d458bbf2e138d9185245493505b5050915091565b6001600160a01b0380831660009081526002602090815260408083209385168352929052908120548015611449576001600160a01b038416600090815260016020819052604090912001549150611449838583611cc6565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff166108615760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161069a565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1661114d57604051638dfc202b60e01b815260040160405180910390fd5b611bf882611d2d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115611c3d576106a38282611da4565b610861611e1a565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff1661114d57604051631afcd79f60e31b815260040160405180910390fd5b611c9b611c45565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b6001600160a01b03808316600090815260026020908152604080832093871683529290529081208054839290611cfd908490612177565b90915550506001600160a01b038216600090815260016020819052604082200180548392906118db908490612177565b806001600160a01b03163b600003611d6357604051634c9c8ce360e01b81526001600160a01b038216600482015260240161069a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b031684604051611dc191906121d6565b600060405180830381855af49150503d8060008114611dfc576040519150601f19603f3d011682016040523d82523d6000602084013e611e01565b606091505b5091509150611e11858383611e39565b95945050505050565b341561114d5760405163b398979f60e01b815260040160405180910390fd5b606082611e4e57611e4982611e98565b611e91565b8151158015611e6557506001600160a01b0384163b155b15611e8e57604051639996b31560e01b81526001600160a01b038516600482015260240161069a565b50805b9392505050565b805115611ea85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b600060208284031215611ed357600080fd5b81356001600160e01b031981168114611e9157600080fd5b80356001600160a01b0381168114611f0257600080fd5b919050565b60008060408385031215611f1a57600080fd5b611f2383611eeb565b946020939093013593505050565b600060208284031215611f4357600080fd5b611e9182611eeb565b600060208284031215611f5e57600080fd5b5035919050565b60008060408385031215611f7857600080fd5b82359150611f8860208401611eeb565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611fba57600080fd5b611fc383611eeb565b9150602083013567ffffffffffffffff80821115611fe057600080fd5b818501915085601f830112611ff457600080fd5b81358181111561200657612006611f91565b604051601f8201601f19908116603f0116810190838211818310171561202e5761202e611f91565b8160405282815288602084870101111561204757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060006060848603121561207e57600080fd5b61208784611eeb565b925061209560208501611eeb565b9150604084013590509250925092565b600080604083850312156120b857600080fd5b6120c183611eeb565b9150611f8860208401611eeb565b60005b838110156120ea5781810151838201526020016120d2565b50506000910152565b60208152600082518060208401526121128160408501602087016120cf565b601f01601f19169190910160400192915050565b60006020828403121561213857600080fd5b81518015158114611e9157600080fd5b60006020828403121561215a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062757610627612161565b808202811582820484141761062757610627612161565b6000826121be57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561062757610627612161565b600082516121e88184602087016120cf565b919091019291505056fea164736f6c6343000814000a";

type GangStakingForMerlinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GangStakingForMerlinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GangStakingForMerlin__factory extends ContractFactory {
  constructor(...args: GangStakingForMerlinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GangStakingForMerlin & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): GangStakingForMerlin__factory {
    return super.connect(runner) as GangStakingForMerlin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GangStakingForMerlinInterface {
    return new Interface(_abi) as GangStakingForMerlinInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GangStakingForMerlin {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as GangStakingForMerlin;
  }
}
