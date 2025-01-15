import React from 'react'
import Hero from '../components/Hero'
import ValueProposition from '../components/ValuePropostion'
import ServicesOverview from '../components/ServiceOverview'

const Home = () => {
  return (
    <div>
        <Hero />
        <ValueProposition />
        <ServicesOverview />
    </div>
  )
}

export default Home