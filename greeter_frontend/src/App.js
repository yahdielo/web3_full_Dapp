import './App.css';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import Greet from './contracts/Greet.json';

const GreeterAddress = "0xCA43cbf18169bdF654f0da856FD536B6E50B8631";
const network="goerli";

const abi = Greet.abi;

function App() {

  //
  const [currentAccount, setCurrentAccount, greeting, setgreetingvalue] = useState(null);

//if ethereum swallet state is not detected, handle err elseconnect account
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

  }


  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
 }


  //call current greeting
const _getgreeting = async () => {

  if ( window.ethereum !== 'undefined') {  
    //const provider = new ethers.providers.JsonRpcProvider(window.etherum);
    const provider = new ethers.providers.AlchemyProvider(network, process.env.API_KEY);
  
    const contract = new ethers.Contract(GreeterAddress, abi, provider);
    const get_code = provider.getCode(process.env.GREETER_ADDRESS);
    console.log(get_code);
    try {
      const data = await contract.greeting();
      console.log('data', data);
      setgreetingvalue(data);
    } catch (err) {
      console.log("Error: ", err)
    }
  }

};


//set new greeting
async function  setGreeting() {
  
  if (!greeting) return;
  
  if( window.ethereum !== 'undefined') {
    const provider = new ethers.providers.JsonRpcProvider(process.env.API_KEY, 5);
  
    const signer = provider.getSingner();
    const contract = new ethers.Contract(GreeterAddress, abi, signer);
    const transaction = await contract.setGreeting(greeting);
    await transaction.wait();
    _getgreeting();
  }
}

const getgreetButton = () => {
  return (
    <button onClick={_getgreeting} className='cta-button get-current-greeting-button'>Get greet</button>
  )
}


const connectWalletButton = () => {
  return (
    <button onClick={connectWalletHandler} className='cta-button connect-Wallet-Button'>Connect Wallet</button>
  )
}

const walletisConnectedButton = () => {
  return (
    <button onClick={connectWalletHandler} className='cta-button wallet-is-Connected'>Wallet is Connected!</button>
  )
}
useEffect(() => {
  checkWalletIsConnected();
}, [])


  return (
    <div className='main-app'>
      <h1>Greeter Contract</h1>
      <p> your account is : {currentAccount}</p>
        <div>
          {currentAccount ? walletisConnectedButton() : connectWalletButton()  }
        </div>
      <br/>
        <div>
        <p>contract greeting is: {  }</p>
          { getgreetButton() }
        </div>
      
      <br/>
      <input onChange={e => setgreetingvalue(e.target.value)} placeholder="Set new greeting" />
      <br/>
      <button onClick={setGreeting}>Set greeting</button>
     </div>
  )
  
   
};
 export default App