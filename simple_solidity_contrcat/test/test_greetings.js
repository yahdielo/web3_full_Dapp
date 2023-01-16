const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
    it("Should return anew greeting ones is changed by the user", async function () {

        const Greeter = await ethers.getContractFactory("Greet");
        const greeter = await Greeter.deploy("Hello Friends!");

        const Txsetgreeting = await greeter.set_greeting("this is my greetings");        

        expect(await greeter.greeting());
    })
})