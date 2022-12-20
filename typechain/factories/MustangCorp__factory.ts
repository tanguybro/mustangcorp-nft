/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MustangCorp, MustangCorpInterface } from "../MustangCorp";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseTokenURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "SUPPLY",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseTokenURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620033f2380380620033f2833981810160405281019062000037919062000363565b6040518060400160405280600b81526020017f4d757374616e67436f72700000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544300000000000000000000000000000000000000000000000000000000008152508160009081620000b49190620005ff565b508060019081620000c69190620005ff565b505050620000e9620000dd6200010260201b60201c565b6200010a60201b60201c565b8060089081620000fa9190620005ff565b5050620006e6565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200023982620001ee565b810181811067ffffffffffffffff821117156200025b576200025a620001ff565b5b80604052505050565b600062000270620001d0565b90506200027e82826200022e565b919050565b600067ffffffffffffffff821115620002a157620002a0620001ff565b5b620002ac82620001ee565b9050602081019050919050565b60005b83811015620002d9578082015181840152602081019050620002bc565b60008484015250505050565b6000620002fc620002f68462000283565b62000264565b9050828152602081018484840111156200031b576200031a620001e9565b5b62000328848285620002b9565b509392505050565b600082601f830112620003485762000347620001e4565b5b81516200035a848260208601620002e5565b91505092915050565b6000602082840312156200037c576200037b620001da565b5b600082015167ffffffffffffffff8111156200039d576200039c620001df565b5b620003ab8482850162000330565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040757607f821691505b6020821081036200041d576200041c620003bf565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000448565b62000493868362000448565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004e0620004da620004d484620004ab565b620004b5565b620004ab565b9050919050565b6000819050919050565b620004fc83620004bf565b620005146200050b82620004e7565b84845462000455565b825550505050565b600090565b6200052b6200051c565b62000538818484620004f1565b505050565b5b8181101562000560576200055460008262000521565b6001810190506200053e565b5050565b601f821115620005af57620005798162000423565b620005848462000438565b8101602085101562000594578190505b620005ac620005a38562000438565b8301826200053d565b50505b505050565b600082821c905092915050565b6000620005d460001984600802620005b4565b1980831691505092915050565b6000620005ef8383620005c1565b9150826002028217905092915050565b6200060a82620003b4565b67ffffffffffffffff811115620006265762000625620001ff565b5b620006328254620003ee565b6200063f82828562000564565b600060209050601f83116001811462000677576000841562000662578287015190505b6200066e8582620005e1565b865550620006de565b601f198416620006878662000423565b60005b82811015620006b1578489015182556001820191506020850194506020810190506200068a565b86831015620006d15784890151620006cd601f891682620005c1565b8355505b6001600288020188555050505b505050505050565b612cfc80620006f66000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063c50497ae11610071578063c50497ae146102e0578063c87b56dd146102fe578063d547cfb71461032e578063e985e9c51461034c578063f2fde38b1461037c57610121565b8063715018a6146102625780638da5cb5b1461026c57806395d89b411461028a578063a22cb465146102a8578063b88d4fde146102c457610121565b80631249c58b116100f45780631249c58b146101c057806323b872dd146101ca57806342842e0e146101e65780636352211e1461020257806370a082311461023257610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611c5f565b610398565b60405161014d9190611ca7565b60405180910390f35b61015e61047a565b60405161016b9190611d52565b60405180910390f35b61018e60048036038101906101899190611daa565b61050c565b60405161019b9190611e18565b60405180910390f35b6101be60048036038101906101b99190611e5f565b610552565b005b6101c8610669565b005b6101e460048036038101906101df9190611e9f565b610702565b005b61020060048036038101906101fb9190611e9f565b610762565b005b61021c60048036038101906102179190611daa565b610782565b6040516102299190611e18565b60405180910390f35b61024c60048036038101906102479190611ef2565b610808565b6040516102599190611f2e565b60405180910390f35b61026a6108bf565b005b6102746108d3565b6040516102819190611e18565b60405180910390f35b6102926108fd565b60405161029f9190611d52565b60405180910390f35b6102c260048036038101906102bd9190611f75565b61098f565b005b6102de60048036038101906102d991906120ea565b6109a5565b005b6102e8610a07565b6040516102f59190611f2e565b60405180910390f35b61031860048036038101906103139190611daa565b610a0c565b6040516103259190611d52565b60405180910390f35b610336610a88565b6040516103439190611d52565b60405180910390f35b6103666004803603810190610361919061216d565b610b16565b6040516103739190611ca7565b60405180910390f35b61039660048036038101906103919190611ef2565b610baa565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610473575061047282610c2d565b5b9050919050565b606060008054610489906121dc565b80601f01602080910402602001604051908101604052809291908181526020018280546104b5906121dc565b80156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050905090565b600061051782610c97565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061055d82610782565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c49061227f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ec610ce2565b73ffffffffffffffffffffffffffffffffffffffff16148061061b575061061a81610615610ce2565b610b16565b5b61065a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065190612311565b60405180910390fd5b6106648383610cea565b505050565b610671610da3565b600061067d6007610e21565b146106bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b4906123a3565b60405180910390fd5b60005b600a8110156106ff5760006106d56007610e21565b90506106e13382610e2f565b6106eb600761104c565b5080806106f7906123f2565b9150506106c0565b50565b61071361070d610ce2565b82611062565b610752576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610749906124ac565b60405180910390fd5b61075d8383836110f7565b505050565b61077d838383604051806020016040528060008152506109a5565b505050565b60008061078e836113f0565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f690612518565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f906125aa565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108c7610da3565b6108d1600061142d565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461090c906121dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610938906121dc565b80156109855780601f1061095a57610100808354040283529160200191610985565b820191906000526020600020905b81548152906001019060200180831161096857829003601f168201915b5050505050905090565b6109a161099a610ce2565b83836114f3565b5050565b6109b66109b0610ce2565b83611062565b6109f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ec906124ac565b60405180910390fd5b610a018484848461165f565b50505050565b600a81565b6060610a17826116bb565b610a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4d9061263c565b60405180910390fd5b6008610a61836116fc565b604051602001610a72929190612730565b6040516020818303038152906040529050919050565b60088054610a95906121dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac1906121dc565b8015610b0e5780601f10610ae357610100808354040283529160200191610b0e565b820191906000526020600020905b815481529060010190602001808311610af157829003601f168201915b505050505081565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610bb2610da3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c18906127c6565b60405180910390fd5b610c2a8161142d565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ca0816116bb565b610cdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd690612518565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d5d83610782565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610dab610ce2565b73ffffffffffffffffffffffffffffffffffffffff16610dc96108d3565b73ffffffffffffffffffffffffffffffffffffffff1614610e1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1690612832565b60405180910390fd5b565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e959061289e565b60405180910390fd5b610ea7816116bb565b15610ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ede9061290a565b60405180910390fd5b610ef56000838360016117ca565b610efe816116bb565b15610f3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f359061290a565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110486000838360016118f0565b5050565b6001816000016000828254019250508190555050565b60008061106e83610782565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110b057506110af8185610b16565b5b806110ee57508373ffffffffffffffffffffffffffffffffffffffff166110d68461050c565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661111782610782565b73ffffffffffffffffffffffffffffffffffffffff161461116d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111649061299c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d390612a2e565b60405180910390fd5b6111e983838360016117ca565b8273ffffffffffffffffffffffffffffffffffffffff1661120982610782565b73ffffffffffffffffffffffffffffffffffffffff161461125f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112569061299c565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46113eb83838360016118f0565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155890612a9a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516116529190611ca7565b60405180910390a3505050565b61166a8484846110f7565b611676848484846118f6565b6116b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ac90612b2c565b60405180910390fd5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff166116dd836113f0565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60606000600161170b84611a7d565b01905060008167ffffffffffffffff81111561172a57611729611fbf565b5b6040519080825280601f01601f19166020018201604052801561175c5781602001600182028036833780820191505090505b509050600082602001820190505b6001156117bf578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816117b3576117b2612b4c565b5b0494506000850361176a575b819350505050919050565b60018111156118ea57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461185e5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118569190612b7b565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146118e95780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118e19190612baf565b925050819055505b5b50505050565b50505050565b60006119178473ffffffffffffffffffffffffffffffffffffffff16611bd0565b15611a70578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611940610ce2565b8786866040518563ffffffff1660e01b81526004016119629493929190612c38565b6020604051808303816000875af192505050801561199e57506040513d601f19601f8201168201806040525081019061199b9190612c99565b60015b611a20573d80600081146119ce576040519150601f19603f3d011682016040523d82523d6000602084013e6119d3565b606091505b506000815103611a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0f90612b2c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a75565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611adb577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611ad157611ad0612b4c565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b18576d04ee2d6d415b85acef81000000008381611b0e57611b0d612b4c565b5b0492506020810190505b662386f26fc100008310611b4757662386f26fc100008381611b3d57611b3c612b4c565b5b0492506010810190505b6305f5e1008310611b70576305f5e1008381611b6657611b65612b4c565b5b0492506008810190505b6127108310611b95576127108381611b8b57611b8a612b4c565b5b0492506004810190505b60648310611bb85760648381611bae57611bad612b4c565b5b0492506002810190505b600a8310611bc7576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c3c81611c07565b8114611c4757600080fd5b50565b600081359050611c5981611c33565b92915050565b600060208284031215611c7557611c74611bfd565b5b6000611c8384828501611c4a565b91505092915050565b60008115159050919050565b611ca181611c8c565b82525050565b6000602082019050611cbc6000830184611c98565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cfc578082015181840152602081019050611ce1565b60008484015250505050565b6000601f19601f8301169050919050565b6000611d2482611cc2565b611d2e8185611ccd565b9350611d3e818560208601611cde565b611d4781611d08565b840191505092915050565b60006020820190508181036000830152611d6c8184611d19565b905092915050565b6000819050919050565b611d8781611d74565b8114611d9257600080fd5b50565b600081359050611da481611d7e565b92915050565b600060208284031215611dc057611dbf611bfd565b5b6000611dce84828501611d95565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e0282611dd7565b9050919050565b611e1281611df7565b82525050565b6000602082019050611e2d6000830184611e09565b92915050565b611e3c81611df7565b8114611e4757600080fd5b50565b600081359050611e5981611e33565b92915050565b60008060408385031215611e7657611e75611bfd565b5b6000611e8485828601611e4a565b9250506020611e9585828601611d95565b9150509250929050565b600080600060608486031215611eb857611eb7611bfd565b5b6000611ec686828701611e4a565b9350506020611ed786828701611e4a565b9250506040611ee886828701611d95565b9150509250925092565b600060208284031215611f0857611f07611bfd565b5b6000611f1684828501611e4a565b91505092915050565b611f2881611d74565b82525050565b6000602082019050611f436000830184611f1f565b92915050565b611f5281611c8c565b8114611f5d57600080fd5b50565b600081359050611f6f81611f49565b92915050565b60008060408385031215611f8c57611f8b611bfd565b5b6000611f9a85828601611e4a565b9250506020611fab85828601611f60565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ff782611d08565b810181811067ffffffffffffffff8211171561201657612015611fbf565b5b80604052505050565b6000612029611bf3565b90506120358282611fee565b919050565b600067ffffffffffffffff82111561205557612054611fbf565b5b61205e82611d08565b9050602081019050919050565b82818337600083830152505050565b600061208d6120888461203a565b61201f565b9050828152602081018484840111156120a9576120a8611fba565b5b6120b484828561206b565b509392505050565b600082601f8301126120d1576120d0611fb5565b5b81356120e184826020860161207a565b91505092915050565b6000806000806080858703121561210457612103611bfd565b5b600061211287828801611e4a565b945050602061212387828801611e4a565b935050604061213487828801611d95565b925050606085013567ffffffffffffffff81111561215557612154611c02565b5b612161878288016120bc565b91505092959194509250565b6000806040838503121561218457612183611bfd565b5b600061219285828601611e4a565b92505060206121a385828601611e4a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121f457607f821691505b602082108103612207576122066121ad565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612269602183611ccd565b91506122748261220d565b604082019050919050565b600060208201905081810360008301526122988161225c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006122fb603d83611ccd565b91506123068261229f565b604082019050919050565b6000602082019050818103600083015261232a816122ee565b9050919050565b7f54686520636f6c6c656374696f6e2068617320616c7265616479206265656e2060008201527f6d696e7465640000000000000000000000000000000000000000000000000000602082015250565b600061238d602683611ccd565b915061239882612331565b604082019050919050565b600060208201905081810360008301526123bc81612380565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123fd82611d74565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361242f5761242e6123c3565b5b600182019050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612496602d83611ccd565b91506124a18261243a565b604082019050919050565b600060208201905081810360008301526124c581612489565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612502601883611ccd565b915061250d826124cc565b602082019050919050565b60006020820190508181036000830152612531816124f5565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612594602983611ccd565b915061259f82612538565b604082019050919050565b600060208201905081810360008301526125c381612587565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612626602f83611ccd565b9150612631826125ca565b604082019050919050565b6000602082019050818103600083015261265581612619565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154612689816121dc565b612693818661265c565b945060018216600081146126ae57600181146126c3576126f6565b60ff19831686528115158202860193506126f6565b6126cc85612667565b60005b838110156126ee578154818901526001820191506020810190506126cf565b838801955050505b50505092915050565b600061270a82611cc2565b612714818561265c565b9350612724818560208601611cde565b80840191505092915050565b600061273c828561267c565b915061274882846126ff565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006127b0602683611ccd565b91506127bb82612754565b604082019050919050565b600060208201905081810360008301526127df816127a3565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061281c602083611ccd565b9150612827826127e6565b602082019050919050565b6000602082019050818103600083015261284b8161280f565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612888602083611ccd565b915061289382612852565b602082019050919050565b600060208201905081810360008301526128b78161287b565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006128f4601c83611ccd565b91506128ff826128be565b602082019050919050565b60006020820190508181036000830152612923816128e7565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612986602583611ccd565b91506129918261292a565b604082019050919050565b600060208201905081810360008301526129b581612979565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612a18602483611ccd565b9150612a23826129bc565b604082019050919050565b60006020820190508181036000830152612a4781612a0b565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612a84601983611ccd565b9150612a8f82612a4e565b602082019050919050565b60006020820190508181036000830152612ab381612a77565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612b16603283611ccd565b9150612b2182612aba565b604082019050919050565b60006020820190508181036000830152612b4581612b09565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612b8682611d74565b9150612b9183611d74565b9250828203905081811115612ba957612ba86123c3565b5b92915050565b6000612bba82611d74565b9150612bc583611d74565b9250828201905080821115612bdd57612bdc6123c3565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000612c0a82612be3565b612c148185612bee565b9350612c24818560208601611cde565b612c2d81611d08565b840191505092915050565b6000608082019050612c4d6000830187611e09565b612c5a6020830186611e09565b612c676040830185611f1f565b8181036060830152612c798184612bff565b905095945050505050565b600081519050612c9381611c33565b92915050565b600060208284031215612caf57612cae611bfd565b5b6000612cbd84828501612c84565b9150509291505056fea2646970667358221220f7641d5f14aaefd8bf21d0cc8abaccf346c8b47d66cea47a6a755d24b255dd1a64736f6c63430008110033";

export class MustangCorp__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MustangCorp> {
    return super.deploy(_baseTokenURI, overrides || {}) as Promise<MustangCorp>;
  }
  getDeployTransaction(
    _baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseTokenURI, overrides || {});
  }
  attach(address: string): MustangCorp {
    return super.attach(address) as MustangCorp;
  }
  connect(signer: Signer): MustangCorp__factory {
    return super.connect(signer) as MustangCorp__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MustangCorpInterface {
    return new utils.Interface(_abi) as MustangCorpInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MustangCorp {
    return new Contract(address, _abi, signerOrProvider) as MustangCorp;
  }
}