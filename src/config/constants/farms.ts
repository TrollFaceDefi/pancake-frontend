import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'TROLL',
    lpAddresses: {
      97: '',
      56: '0x7acfc18a420f31c3c5bab17cc869b11b17ebf0a6', // LYPTUS-BUSD LP
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'TROLL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7acfc18a420f31c3c5bab17cc869b11b17ebf0a6',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'TROLL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xae221522eebb4a2d2bc9e537230a2c0707d29609',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    lpSymbol: 'TROLL-DAI LP',
    lpAddresses: {
      97: '',
      56: '0xf7f73668199e69f95d0d72b9714221b36f75f083',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 8,
    lpSymbol: 'TROLL-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xe210f2d80d90ea584be3bfeeea32747fd450e17a',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 9,
    lpSymbol: 'TROLL-BTC LP',
    lpAddresses: {
      97: '',
      56: '0x9d96d0aaf84f3f29c31a10248c18c9fd202415d7',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btc,
  },
  {
    pid: 10,
    lpSymbol: 'TROLL-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xCAA0c079918a7C631152B98Ed7BC7a9043464AfA',
    },
    tokenSymbol: 'TROLL',
    tokenAddresses: {
      97: '',
      56: '0xea27688726a94c21180a300484d55a791f993fc6',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 11,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998', // BNB-BUSD
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623', // BNB-BUSD
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // BNB-BUSD
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    isTokenOnly: true,
    lpSymbol: 'BANANA',
    lpAddresses: {
      97: '',
      56: '0x93f180636f42EFb0aD2BF7e0C945e2De652321c3', // BNB-BUSD
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '',
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    lpSymbol: 'DOT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998', // BNB-BUSD
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    lpSymbol: 'ADA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623', // BNB-BUSD
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // BNB-BUSD
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    lpSymbol: 'BANANA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x93f180636f42EFb0aD2BF7e0C945e2De652321c3', // BNB-BUSD
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '',
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
/////////
  {
    pid: 19,
    lpSymbol: 'USDT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    lpSymbol: 'ETH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 22,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 23,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0xc7c3cCCE4FA25700fD5574DA7E200ae28BBd36A3', // BNB-BUSD
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 24,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
