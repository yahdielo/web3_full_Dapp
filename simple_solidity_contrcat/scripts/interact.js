const API_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const API_URL = process.env.API_URL;

const { ethers } = require("hardhat");
//const contract =  require("./artifacts/contracts/Greeter.sol/Greet.json");

//set provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network.goerli, process.env.GOERLI_ENDPOINT);

//define signer msg.sender
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance

const GreeterContract = new ethers.Contract(CONTRACT_ADDRESS, process.env.ABI, signer);


//
async function main(){

    //get current string

    const message = await GreeterContract.greeting();
    console.log(" The greeting is: ", greet);

    console.log("updating the greeting");
    const tx = await GreeterContract.set_greeting("we are good!");

    const newmessage = await GreeterContract.greeting();
    console.log("new string is: ", greet)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log.error(error);
        process.exit();
    });  
