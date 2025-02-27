import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>Home Page</h1>
      <Link href="events/">Go to events page</Link>
    </main>
  )
}

export default HomePage
