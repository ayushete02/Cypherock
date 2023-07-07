const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

async function createWallet(walletName) {
  try {
    const data = {
      name: walletName,
      addresses: [],
    };

    const response = await axios.post(
      `https://api.blockcypher.com/v1/btc/test3/wallets?token=${process.env.API_KEY}`,
      data
    );

    console.log("Wallet created successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("Error creating wallet:", error.message);
  }
}
module.exports = createWallet;