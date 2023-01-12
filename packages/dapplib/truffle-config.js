require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million pupil hover knife future turkey'; 
let testAccounts = [
"0x8885c9095ade6d27d9e9ea5347571e770efb992f316df5b2823ab7dff0579471",
"0x11106f624e6b54ff1c2e35e89735dc324527f5f5364338d107a43ed35c1c5185",
"0xa0e68ef40595fb3663c5ed026a057d800c804f1969063ae266586de8a1b35b75",
"0xfa86336eb04e58323d83ba7f53ee83a07b4f45c3acc265c8c24eab03011e84a8",
"0x782eedb11c1b6c531efb38b9ebe21c4e0b11fea3db477a2359bd91c78bb0071e",
"0x2829bf740009848d84f8175881aad9859a73f73d106ef28f998e51a7a9c2c5c9",
"0x9146cef2ab40cdfc1f601f1479b4d0e1776e9b2ebce7668ec87390239d9a46bb",
"0x9756cef3f391ac626c3598378b39fcf2b31455a0c8e71b2eead338f5b7d9846f",
"0xe46e07fc3506c020e8f528ffc703dae5f1ec86577a30f006fe7b9476f39d1e46",
"0x250b94484773f73055372a0c18a2eef7346e96d2e67fef8a9138b3aa97762a8b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

