const axios = require("axios");

async function getTransactions(walletAddress) {
  try {
    const apiUrl = `https://blockchain.info/rawaddr/${walletAddress}`;
    const response = await axios.get(apiUrl);
    const transactions = response.data.txs;
    console.log(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
  }
}

module.exports = getTransactions;
