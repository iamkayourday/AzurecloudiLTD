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
         {/* CTA Section */}
      <div
        className="py-12 px-6 bg-[#f0f8ff] text-[#517db9] flex flex-col items-center justify-center space-y-6 mt-24 rounded-xl"
      >
        <h3 className="font-extrabold text-center text-4xl md:text-6xl w-auto text-[#517db9]">
          Let’s start something great together!
        </h3>
        <a
          href="/contact-us"
          className="py-4 px-8 bg-[#517db9] text-white text-lg font-semibold rounded-full hover:bg-[#41699e] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Contact us
        </a>
      </div>
    </div>
  )
}

export default Home