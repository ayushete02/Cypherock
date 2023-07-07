const readline = require("readline");
const createWallet = require("./createWallet");
const importWalletFromMnemonic = require("./importWallet");
const listWallets = require("./listWallets");
const getBalance = require("./getBalance");
const getTransactions = require("./getTransactions");
const generateBitcoinAddress = require("./generateAddress");

// 1 - Create Wallet
// 2 - Import Wallet
// 3 - List Wallets
// 4 - Get Balance
// 5 - Get Transactions
// 6 - Generate Bitcoin Address

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUserChoice() {
  rl.question("Enter your choice (1-6): ", async (choice) => {
    switch (choice) {
      case "1":
        var walletName = 'Wallet01';
        // rl.question("Enter the wallet name: ", async (walletName) => {
          await createWallet(walletName);
        //   rl.close();
        // });
        break;
      case "2":
         var mnemonic = 'pony magic bright glad describe improve setup secret attract poverty response feature lecture sport text';
        var walletName = 'Wallet02';
        // rl.question("Enter your mnemonic: ", async (mnemonic) => {
        //   rl.question("Enter the wallet name: ", async (walletName) => {
            await importWalletFromMnemonic(walletName, mnemonic);
            // rl.close();
        //   });
        // });
        break;
      case "3":
        listWallets();
        break;
      case "4":
        var address = 'mktg9U8pZ4jhYV612MHUY7CB5dLUaqdvo6'
        // rl.question("Enter the wallet address: ", async (address) => {
          await getBalance(address);
        //   rl.close();
        // });
        break;
      case "5":
        var address = '1Kr6QSydW9bFQG1mXiPNNu6WpJGmUa9i1g'
        // rl.question("Enter the wallet address: ", async (address) => {
          await getTransactions(address);
        //   rl.close();
        // });
        break;
      case "6":
          await generateBitcoinAddress();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }

    askUserChoice();
  });
}

askUserChoice();
