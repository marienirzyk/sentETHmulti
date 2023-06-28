const { ethers } = require('ethers');

// Ethereum provider URL (replace with your provider URL)
const providerUrl = 'https://eth-goerli.g.alchemy.com/v2';

// Recipient addresses (replace with actual recipient addresses)
const recipientAddresses = [
  '0x',
  '0x',
  // Add more recipient addresses as needed
];

// Sender private key (replace with your private key)
const senderPrivateKey = '';

// Amount to send in Ether (replace with desired amount)
const amountToSend = ethers.utils.parseEther('0.001');

// Initialize the Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Create a wallet instance using the sender's private key
const wallet = new ethers.Wallet(senderPrivateKey, provider);

// Send Ether to each recipient address
async function sendEther() {
  try {
    for (const recipientAddress of recipientAddresses) {
      const transaction = {
        to: recipientAddress,
        value: amountToSend,
      };

      const sendTransaction = await wallet.sendTransaction(transaction);
      console.log(`Transaction sent to ${recipientAddress}: ${sendTransaction.hash}`);
    }
  } catch (error) {
    console.error('Error sending Ether:', error);
  }
}

// Call the sendEther function
sendEther();
