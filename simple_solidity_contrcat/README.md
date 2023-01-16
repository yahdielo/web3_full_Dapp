# Basic solidity contract

to start the project firt toyu need to install all dependencies.
1 node.js
2 hardhat

the creat a directory for the project

    mkdir basic_sol_contract

and cd to the directory.

## install hardhat

    npm init

now we can instll hard hat:

    npm install --save-dev hardhat

in the same project directory run 

    npx hardhat

ones you run that in your prompt choose this option:

    Create an empty hardhat.config.js

and you should see a hardhat.config.js file apear in the root of your directory.

install more dependencies

    npm install --save-dev @nomicfoundation/hardhat-toolbox

or

    npm --save-dev @nomiclabs/hardhat-ethers ethers @nomic/hardhat-waffle ethereum-waffle chai

or
    npm install -D @nomiclabs/hardhat-waffle ethereum-waffle

## modify hardhat.js

now add this line to your hardhat.config.js file header

    require("@nomicfoundation/hardhat-toolbox");

your file looks simple but it should be good for local testing

    require("@nomicfoundation/hardhat-toolbox");

    /** @type import('hardhat/config').HardhatUserConfig */
    module.exports = {
    solidity: "0.8.9",
    };

# write your .sol contract

now by this time you should have your solidity contract and are ready to compile and test, if not you can feel free to grab say_greetings.sol from the repo and testet following this instructions.

## compile your contract

now you should be ready to compile the contract, so run thi command in your command line:

    npx hardhat compile

you should see and output like this:

    **Compiled 1 Solidity file successfully**

and a fresh directory called artifacts in the root of your project directory.

## Testing your contract

now to the good part and the needy greety of al this, to see your contract behave like it should.

In our tests we're going to use ethers.js
to interact with the Ethereum contract we built in the previous section, and we'll use Mocha
as our test runner.

creat a new directory with the name test and inside creat contract_test.js
in the js file called test_greetings.js in this repo you can use that file to testhe already created smart contract.

just run:
     npx hardhat compile

ones compiled test the contract:

    npx hardhat test    

## deploy to testnet ot live net

to deploy the contract creat a new direcotry in the root of the project called **scripts**
again the code is all in the repo inside scripts deploy.js

also to protect your keys adn prvate info install dotenv.

    npm install dotenv --save

ande create a the create a file name .env
there crear a variable for your wallet private key and api end point

    PRIVATE_KEY = "your private key"
    API_END_POINT = "your api end point"

also we will have to modify our hardhat.config file, you can see the old configuration to test the contract commented bellow the one is currently in use in hte repo config file.

to tell hardhat to connect to a specific network you can use the network parameter in the command

    npx hardhat run scripts/deploy.js --network <network-name>

ones the deployment is successfull we finish the back end part.

also if you want a quick way to verify your contract in etherscan you can install hardhat etherscan and follow this steps.

    npm install @nomiclabs/hardhat-etherscan

and add thois to your hardhat.config.js:

    require("@nomiclabs/hardhat-etherscan");
