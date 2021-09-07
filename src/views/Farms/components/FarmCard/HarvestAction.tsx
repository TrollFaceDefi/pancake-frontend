import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  depositFeeBP?: number
  lockup?: BigNumber
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, lockup }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)
  const lockuP = getBalanceNumber(lockup)
  const displaylockup = lockuP.toLocaleString()
  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    
    <Flex mb="15px" justifyContent="space-between" alignItems="center">


      <BalanceAndCompound>
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx || lockuP > 0}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {TranslateString(562, 'Harvest')}
        </Button>
      </BalanceAndCompound>
      {lockuP > 0 ? <Heading color={lockuP === 0 ? 'textDisabled' : 'text'}>Harvest Locked for </Heading> : null}
      {lockuP > 0 ? <Heading color={lockuP === 0 ? 'textDisabled' : 'text'}>Days: {Math.trunc(lockuP / 86400)} Hours:  {((lockuP / 86400) % 1 * 24).toFixed(0)}  Mins:    {((lockuP / 86400) % 1 * 24 % 1 * 60).toFixed(0)} </Heading> : null}
    </Flex>
  )
}

export default HarvestAction
