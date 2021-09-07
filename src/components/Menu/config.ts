import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://exchange.trollface.finance/#/swap?outputCurrency=0xea27688726a94c21180a300484d55a791f993fc6',
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.trollface.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/TrollFaceDefi/',
      },
      {
        label: 'Info',
        href: 'https://poocoin.app/tokens/0xea27688726a94c21180a300484d55a791f993fc6',
      },
    ]
  },
]

export default config
