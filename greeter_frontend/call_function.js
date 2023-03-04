//import libaries
import { ethers } from 'ethers';

const GreeterAddress = "0xCA43cbf18169bdF654f0da856FD536B6E50B8631";
const network="goerli";
const provider = new ethers.providers.AlchemyProvider(network, process.env.API_KEY);
const abi = process.env.ABI;
const contract = new ethers.Contract(GreeterAddress, abi, provider.getSigner());


function call() {

contract.methods.greet().call();
}