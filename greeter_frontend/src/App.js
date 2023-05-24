import './App.css';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import Greet from './contracts/Greet.json';

const GreeterAddress = "0xa3D7ac309F9dB9CCAAfC8D16cd0bD3f18BB3c2BC";


const abi = Greet.abi;

function App() {

  //
  const [currentAccount, setCurrentAccount] = useState(null);
  const [greeting, setgreetingvalue] = useState(null);

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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const contract = new ethers.Contract(GreeterAddress, abi, provider);
    //const get_code = provider.getCode(process.env.GREETER_ADDRESS);
    //console.log(get_code);
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

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const signer = provider.getSigner();
    const contract = new ethers.Contract(GreeterAddress, abi, signer);
    const transaction = await contract.setGreeting();
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
        <p>contract greeting is: { greeting }</p>
          { getgreetButton() }
        </div>
      
      <br/>
      <input id="set greet" type="text" placeholder="new greeting" />
      <br/>
      <button onClick={ setGreeting() }>Set greeting</button>
     </div>
  )
  
   
};
 export default App