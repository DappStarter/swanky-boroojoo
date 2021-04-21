require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict roast fortune street name raise saddle evil hunt fat swift gasp'; 
let testAccounts = [
"0xf6267d0044a03385d1dc1a606d2aa7c2d43f574dc6cbf02805a9c97eea34e098",
"0x8bb9565f4fd2fb6982df1c5912714e93b378c5685f4c624b8b45c220411a4ed9",
"0x1863e5f023a103b443bd616102badca2a889d8c7ba1d3db923428f43b4697db2",
"0x7623cc71f7008b9c5c90cd9b48ec107b1b3afb9505fb823dc17bf22088794218",
"0x1b63627f4b7dbab48350677fe0ec58d2d630c42abcd23e7a12cbe37b668c55fe",
"0x220f5c3aeaf927b3e952f1b635de5e7d61e65687f2bd2ba76fb093053b0f7930",
"0x7c34bd9899e164fa0c199df2a3a57329d580fd0d5fcd7ffdf8b91914b7d648cd",
"0x32513cc2caf6ad85da0700cb040ccf3332ab17abb0c978fb6c574d6ec9a76c78",
"0x1d366b242fed2a209ad9cf1a7e2380f7790812b78cf80717ee2c7e5ff76418ae",
"0x908c18cf7503f7aad12cfa84488de7adf4b3bfc85ea7b08922c034e6a6f52f1a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


