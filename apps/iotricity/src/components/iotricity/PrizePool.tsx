import React from 'react'
import { event, prizePool } from '../../../constants'
import PrizePoolCard from './PrizePoolCard'
import Link from 'next/link'
import Button from '../ui/Button'
import { ExternalLink } from 'lucide-react'

const PrizePool = () => {

  const targetedDate = new Date(event.registrationEnd).getTime();
  const now = new Date().getTime();
  const hasTargetDatePassed = now >= targetedDate;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
        {prizePool.map(val => (
            <PrizePoolCard key={val.event} prizePool={val} />
        ))}

        <div className="col-span-full flex justify-center mt-2">
            {!hasTargetDatePassed ? (
                <Link href={event.registrationLink} target="_blank">
                <Button
                    variant="secondary"
                    className="group border-primary/20 hover:border-primary/50"
                >
                    <span className="flex items-center gap-2">
                    Register Now
                    <ExternalLink
                        size={16}
                        className="transition-transform group-hover:scale-110"
                    />
                    </span>
                </Button>
            </Link>
            ) : (
                <div className="cursor-not-allowed w-full sm:w-auto">
                    <Button
                        variant="secondary"
                        className="opacity-50 pointer-events-none w-full" 
                        disabled={true}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                        Registration Closed
                        </span>
                    </Button>
                </div>
            )}
        </div>
    </div>
  )
}

export default PrizePool