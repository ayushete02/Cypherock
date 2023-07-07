const bitcoin = require('bitcoinjs-lib');

function generateBitcoinAddress() {
  const network = bitcoin.networks.bitcoin;
  const keyPair = bitcoin.ECPair.makeRandom({ network });
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network });
  
  console.log('Bitcoin address:', address);
  console.log('Private key:', keyPair.toWIF());
}

module.exports = generateBitcoinAddress;