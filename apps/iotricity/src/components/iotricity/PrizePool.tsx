import React from 'react'
import { prizePool } from '../../../constants'
import PrizePoolCard from './PrizePoolCard'

const PrizePool = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
        {prizePool.map(val => (
            <PrizePoolCard key={val.event} prizePool={val} />
        ))}
    </div>
  )
}

export default PrizePool