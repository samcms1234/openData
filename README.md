# OpenData: The control is with YOU!

OpenData is a decentralized platform that allows users to store and share personal data with approved recipients. The platform uses smart contracts to manage consent and ensure that personal data is only shared with the user's permission.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Solidity
- Javascript
- Node.js
- Hardhat
- Git

### Installing

1. Clone the repository to your local machine

```shell
git clone https://github.com/samcms1234/openData.git
```

2. Install the dependencies

```shell
cd openData
```
```shell
npm install
```

3. Compile and deploy the contracts

```shell
npx hardhat node
```

```shell
npx hardhat run scripts/deploy.js --network localhost
```
```shell
npm hardhat migrate
```

4. Run the tests

```shell
npx hardhat test
```

## Frontend Integration

The OpenData platform can be integrated with a frontend application using web3.js. The contract address must be provided in order to interact with the contract on the blockchain.

Contract address:
 ```shell
 0xAf98944DC52Ef764C404104ec98e180Cf54Fe935
 ```
### Built With

- Ethereum - Blockchain platform
- Solidity - Smart contract language
- Hardhat - Development framework for Ethereum