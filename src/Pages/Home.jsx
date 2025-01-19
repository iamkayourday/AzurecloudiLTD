import React,{ useEffect }  from "react";
import Hero from '../components/Hero'
import ValueProposition from '../components/ValuePropostion'
import ServicesOverview from '../components/ServiceOverview'

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Hero />
        <ValueProposition />
        <ServicesOverview />
    </div>
  )
}

export default Home