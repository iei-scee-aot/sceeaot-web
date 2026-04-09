import React from 'react'
import { event, prizePool } from '../../../constants'
import PrizePoolCard from './PrizePoolCard'
import Link from 'next/link'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const PrizePool = () => {

  const { registrationEnd, registrationLink } = event;

  const targetedDate = new Date(registrationEnd).getTime();
  const now = new Date().getTime();
  const hasTargetDatePassed = now >= targetedDate;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
        {prizePool.map(val => (
            <PrizePoolCard key={val.event} prizePool={val} />
        ))}

        <div className="col-span-full flex justify-center mt-2">
            {hasTargetDatePassed ? (
                  <div className="cursor-not-allowed w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="opacity-50 pointer-events-none w-full hover:translate-y-1 hover:scale-95 transititon-transform duration-300" 
                      disabled={true}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Registration Closed
                      </span>
                    </Button>
                  </div>
                ) : (
                  <Link href={registrationLink} target='_blank' className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="group relative overflow-hidden w-full hover:translate-y-1 hover:scale-95 transition-transform duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Register Now
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                )}
        </div>
    </div>
  )
}

export default PrizePool