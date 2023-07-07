const axios = require("axios");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");
require("dotenv").config();

async function importWalletFromMnemonic(walletName, mnemonic) {
  try {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const network = bitcoin.networks.testnet;
    const hdNode = bitcoin.bip32.fromSeed(seed, network);

    const path = "m/44'/1'/0'/0/0";
    const childNode = hdNode.derivePath(path);
    const { address } = bitcoin.payments.p2pkh({
      pubkey: childNode.publicKey,
      network,
    });

    const walletData = {
      name: walletName, // Replace with the desired wallet name
      addresses: [address],
    };

    const response = await axios.post(
      `https://api.blockcypher.com/v1/btc/test3/wallets?token=${process.env.API_KEY}`,
      walletData
    );

    console.log("Wallet imported successfully:", response.data);
  } catch (error) {
    console.error("Error importing wallet:", error.message);
  }
}

module.exports = importWalletFromMnemonic;
