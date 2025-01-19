import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1, 
    title: 'Boosted E-Commerce Sales',
    description: 'Increased revenue by 35% for a leading online store through a complete UX redesign.',
    thumbnail: '/Hero.jpg',
    client: 'Leading Online Store',
    category: 'E-Commerce',
    duration: '6 Months',
    challenge: 'The website had a high bounce rate and poor conversion rates, resulting in stagnant sales growth.',
    solution: 'Performed a complete UX redesign of the website with a focus on user experience and mobile optimization. Simplified navigation, enhanced product pages, and optimized the checkout process.',
    results: {
      bounceRateReduction: '40%',
      monthlySalesIncrease: '$50,000',
      revenueGrowth: '35%',
    },
    clientQuote: 'Thanks to the redesign, our sales have skyrocketed, and our customers are happier than ever!',
  },
  {
    id: 2,
    title: 'Streamlined Logistics',
    description: 'Optimized a supply chain, reducing operational costs by 20%.',
    thumbnail: '/Hero.jpg',
    client: 'Global Logistics Company',
    category: 'Logistics & Supply Chain',
    duration: '8 Months',
    challenge: 'Inefficient logistics processes caused delays and high operational costs.',
    solution: 'Implemented a custom logistics management system that optimized route planning, inventory management, and tracking.',
    results: {
      costSavings: '20%',
      deliveryTimeReduction: '15%',
      efficiencyImprovement: 'Significant',
    },
    clientQuote: 'The new system has transformed our operations, saving us time and money!',
  },
  {
    id: 3,
    title: 'Enhanced Financial Services Platform',
    description: 'Revamped an online platform, improving user engagement by 50% and reducing fraud incidents by 30%.',
    thumbnail: '/Hero.jpg',
    client: 'Financial Services Provider',
    category: 'Financial Services',
    duration: '5 Months',
    challenge: 'The client needed to enhance its online platform to improve user experience and engagement.',
    solution: 'Redesigned the platform with an intuitive interface, added personalized financial tools, and integrated advanced security features.',
    results: {
      engagementIncrease: '50%',
      fraudReduction: '30%',
      satisfactionIncrease: '40%',
    },
    clientQuote: 'Our clients love the new platform, and we feel much more secure with the new features in place.',
  },
  {
    id: 4, 
    title: 'Improved Healthcare Services',
    description: 'Modernized a patient management system to improve efficiency and patient care.',
    thumbnail: '/Hero.jpg',
    client: 'Healthcare Provider',
    category: 'Healthcare',
    duration: '7 Months',
    challenge: 'The client needed to modernize its patient management system to improve efficiency and patient care.',
    solution: 'Developed a comprehensive patient management system that streamlined scheduling, billing, and patient records management.',
    results: {
      waitTimeReduction: '25%',
      staffEfficiencyIncrease: '30%',
      patientSatisfactionIncrease: '35%',
    },
    clientQuote: 'The new system has made a significant difference in how we manage our patient care and operations.',
  },
  {
    id: 5, 
    title: 'Optimized Manufacturing Processes',
    description: 'Enhanced production efficiency by automating processes, reducing costs by 15%.',
    thumbnail: '/Hero.jpg',
    client: 'Manufacturing Company',
    category: 'Manufacturing',
    duration: '9 Months',
    challenge: 'The client experienced inefficiencies in its production processes, leading to increased costs and reduced output.',
    solution: 'Implemented an advanced manufacturing execution system (MES) that automated production scheduling and quality control.',
    results: {
      productionOutputIncrease: '20%',
      costReduction: '15%',
      qualityConsistency: 'Enhanced',
    },
    clientQuote: 'The MES has revolutionized our production, making us more efficient and competitive.',
  },
  {
    id: 6, 
    img: "/Hero.jpg",
    title: 'Elevated Digital Marketing Strategies',
    description: 'Boosted ROI by 45% with targeted campaigns and personalized strategies.',
    thumbnail: '/Hero.jpg',
    client: 'Marketing Agency',
    category: 'Digital Marketing',
    duration: '6 Months',
    challenge: 'The client needed to improve the effectiveness of its digital marketing campaigns for a range of clients.',
    solution: 'Developed data-driven marketing strategies, including targeted social media campaigns, SEO optimization, and personalized email marketing.',
    results: {
      campaignRoiIncrease: '45%',
      trafficBoost: '60%',
      clientRetentionImprovement: 'Significant',
    },
    clientQuote: 'The tailored marketing strategies have delivered exceptional results for our clients and helped us grow our business.',
  },
  // More case studies
];

const animationVariants = {
  container: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  },
};

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="container mx-auto px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={animationVariants.container}
    >
      {/* Heading */}
      <header className="text-center mb-12">
        <motion.h2
          className="text-5xl font-bold text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Success Stories
        </motion.h2>
        <motion.p
          className="text-lg text-secondary mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore how we've turned challenges into opportunities for our clients.
        </motion.p>
      </header>

      {/* Case Studies Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {caseStudies.map((caseStudy) => (
          <motion.div
            key={caseStudy.id}
            className="bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={animationVariants.item}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={caseStudy.thumbnail}
              alt={`Thumbnail for ${caseStudy.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2 hover:text-secondary transition-colors">
                <Link to={`/case-studies/${caseStudy.id}`}>{caseStudy.title}</Link>
              </h3>
              <p className="text-gray-600">{caseStudy.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-12 px-6 bg-[#f0f8ff] text-[#517db9] flex flex-col items-center justify-center space-y-6 mt-24 rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3 className="font-extrabold text-center text-4xl md:text-6xl w-auto text-[#517db9]">
          Let’s start something great together!
        </h3>
        <motion.a
          href="/contact-us"
          className="py-4 px-8 bg-[#517db9] text-white text-lg font-semibold rounded-full hover:bg-[#41699e] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Contact us
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudies;
