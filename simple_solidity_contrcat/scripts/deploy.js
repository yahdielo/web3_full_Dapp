const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    //console.log("Account balance:", (await deployer.getBalance()).toString());

    const Greet = await ethers.getContractFactory("Greet");
    
    //set initial state to argument passed
    const greeter = await Greet.deploy("hola");

    console.log("Greet address:", greeter.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });