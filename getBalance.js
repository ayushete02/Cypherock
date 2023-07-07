const axios = require('axios');

async function getBalance(address) {
    try {
      // Generate a random BIP39 mnemonic
      const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`);
      const balance = response.data.final_balance;
      console.log(balance)
    } catch (error) {
            console.error('Error fetching balance:', error.message);
          }
}

module.exports = getBalance;  