# npm start

to start the project run 

    npm start

react will initialize every thing you need to get to work right away

# lest do some clean up

Go to public/index.html and change the title and meta description of your website. This step is optional.

Next, go to the src folder and delete the "App.test.js", "logo.svg", and "setupTests.js" files. We will not be needing these files.

Go to the App.js and delet everything inside and replace it with this snipped

    import './App.css';

    function App() {
     return (
         <h1>Hello World</h1>
        );
    }   

    export default App;

you should see a big **Hello World** on the top left of your template

## contract ABI

For our React frontend to be able to connect and communicate with our smart contract, it needs the contract’s ABI and address.

The ABI (Aplication Binary Interface) is a json file wish is automatically generated in the artifacts directory when contract is compile, to find this file go to   artifacts/contracts/Greeter.sol/Greet.jsoncode