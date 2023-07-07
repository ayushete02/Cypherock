require("dotenv").config();
const axios = require("axios");

function listWallets() {
  axios
    .get(
      `https://api.blockcypher.com/v1/btc/test3/wallets?token=${process.env.API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching wallets:", error.message);
    });
}

module.exports = listWallets;
