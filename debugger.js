const ethers = require('ethers')
const scABI = require('./abi.json');
require('dotenv').config();

const privateKey = process.env.LOCAL_PKEY;
const wallet = new ethers.Wallet(privateKey);
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_LOCAL);
const account = wallet.connect(provider);


// get Greeting smart contract instance
const address = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';


async function test(){
    const contract = new ethers.Contract(address, scABI, account);

    // run function greet()
    greeting = await contract.greet()

    console.log(greeting);

    //Output: 'Hello, Hardhat!'
    
    // set greeting and run greet() again:
    await contract.setGreeting('Hello, World-----')
    greeting = await contract.greet()
    console.log(greeting);
    //Output: 'Hello, World!'

}

test();

