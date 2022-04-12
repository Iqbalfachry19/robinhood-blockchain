require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/gZuXSg5klVtcYEE4q-WEJWD1taqTkKt3',
      accounts: [
        'f52e846ad42a0ac2603ee2b02a67dff48330c894384fccea516af903ed63ee4a',
      ],
    },
  },
};
