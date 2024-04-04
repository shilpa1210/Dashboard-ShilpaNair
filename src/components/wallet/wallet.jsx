import React, { useState } from "react";
import Web3 from "web3";
import "./wallet.css"; 


const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  const connectWallet = async () => {
    if (window.ethereum.isMetaMask) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);

        // Fetch balance
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(address);
        setWalletBalance(web3.utils.fromWei(balance, 'ether')); 

        alert('MetaMask successfully connected!');
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('Failed to connect to MetaMask. Please try again.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to connect your wallet.');
    }
  };

  return (
    <div className="wallet-container">
      <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && (
        <div className="wallet-info">
          <div className="address">
            <h3>Wallet Address:</h3>
            <p>{walletAddress}</p>
          </div>
          <div className="balance">
          <h3>Wallet Balance:</h3>
          <p>{walletBalance} ETH</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
