import React from 'react'
import { event, eventWinners } from '../../../constants'
import WinnersCard from './WinnersCard'
import Link from 'next/link'
import Button from '../ui/Button'
import { CirclePlay } from 'lucide-react'

const Winners = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
        {eventWinners.map(winner => (
            <WinnersCard key={winner.event} winners={winner} />
        ))}

        {event.eventHighlight && (
          <div className="col-span-full flex justify-center mt-2">
            <Link href={event.eventHighlight} target="_blank">
                <Button
                    variant="secondary"
                    className="group border-primary/20 hover:border-primary/50"
                >
                    <span className="flex items-center gap-2">
                    Event Highlights
                    <CirclePlay
                        size={22}
                        className="transition-transform group-hover:scale-110"
                    />
                    </span>
                </Button>
            </Link>
        </div>
        )}
    </div>
  )
}

export default Winners