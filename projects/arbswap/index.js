const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  arbitrum_nova: {
    tvl: getUniTVL({
      chain: 'arbitrum_nova',
      useDefaultCoreAssets: true,
      factory: '0xf6239423FcF1c19ED2791D9648A90836074242Fd',
    })
  }
}