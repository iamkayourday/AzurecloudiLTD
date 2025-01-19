import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "Boosted E-Commerce Sales",
    description:
      "Increased revenue by 35% for a leading online store through a complete UX redesign.",
    thumbnail: "/Hero.jpg",
    client: "Leading Online Store",
    category: "E-Commerce",
    duration: "6 Months",
    challenge:
      "The website had a high bounce rate and poor conversion rates, resulting in stagnant sales growth.",
    solution:
      "Performed a complete UX redesign of the website with a focus on user experience and mobile optimization. Simplified navigation, enhanced product pages, and optimized the checkout process.",
    results: {
      bounceRateReduction: "40%",
      monthlySalesIncrease: "$50,000",
      revenueGrowth: "35%",
    },
    clientQuote:
      "Thanks to the redesign, our sales have skyrocketed, and our customers are happier than ever!",
  },
  {
    id: 2,
    title: "Streamlined Logistics",
    description: "Optimized a supply chain, reducing operational costs by 20%.",
    thumbnail: "/Hero.jpg",
    client: "Global Logistics Company",
    category: "Logistics & Supply Chain",
    duration: "8 Months",
    challenge:
      "Inefficient logistics processes caused delays and high operational costs.",
    solution:
      "Implemented a custom logistics management system that optimized route planning, inventory management, and tracking.",
    results: {
      costSavings: "20%",
      deliveryTimeReduction: "15%",
      efficiencyImprovement: "Significant",
    },
    clientQuote:
      "The new system has transformed our operations, saving us time and money!",
  },
  {
    id: 3,
    title: "Enhanced Financial Services Platform",
    description:
      "Revamped an online platform, improving user engagement by 50% and reducing fraud incidents by 30%.",
    thumbnail: "/Hero.jpg",
    client: "Financial Services Provider",
    category: "Financial Services",
    duration: "5 Months",
    challenge:
      "The client needed to enhance its online platform to improve user experience and engagement.",
    solution:
      "Redesigned the platform with an intuitive interface, added personalized financial tools, and integrated advanced security features.",
    results: {
      engagementIncrease: "50%",
      fraudReduction: "30%",
      satisfactionIncrease: "40%",
    },
    clientQuote:
      "Our clients love the new platform, and we feel much more secure with the new features in place.",
  },
  {
    id: 4,
    title: "Improved Healthcare Services",
    description:
      "Modernized a patient management system to improve efficiency and patient care.",
    thumbnail: "/Hero.jpg",
    client: "Healthcare Provider",
    category: "Healthcare",
    duration: "7 Months",
    challenge:
      "The client needed to modernize its patient management system to improve efficiency and patient care.",
    solution:
      "Developed a comprehensive patient management system that streamlined scheduling, billing, and patient records management.",
    results: {
      waitTimeReduction: "25%",
      staffEfficiencyIncrease: "30%",
      patientSatisfactionIncrease: "35%",
    },
    clientQuote:
      "The new system has made a significant difference in how we manage our patient care and operations.",
  },
  {
    id: 5,
    title: "Optimized Manufacturing Processes",
    description:
      "Enhanced production efficiency by automating processes, reducing costs by 15%.",
    thumbnail: "/Hero.jpg",
    client: "Manufacturing Company",
    category: "Manufacturing",
    duration: "9 Months",
    challenge:
      "The client experienced inefficiencies in its production processes, leading to increased costs and reduced output.",
    solution:
      "Implemented an advanced manufacturing execution system (MES) that automated production scheduling and quality control.",
    results: {
      productionOutputIncrease: "20%",
      costReduction: "15%",
      qualityConsistency: "Enhanced",
    },
    clientQuote:
      "The MES has revolutionized our production, making us more efficient and competitive.",
  },
  {
    id: 6,
    img: "/Hero.jpg",
    title: "Elevated Digital Marketing Strategies",
    description:
      "Boosted ROI by 45% with targeted campaigns and personalized strategies.",
    thumbnail: "/Hero.jpg",
    client: "Marketing Agency",
    category: "Digital Marketing",
    duration: "6 Months",
    challenge:
      "The client needed to improve the effectiveness of its digital marketing campaigns for a range of clients.",
    solution:
      "Developed data-driven marketing strategies, including targeted social media campaigns, SEO optimization, and personalized email marketing.",
    results: {
      campaignRoiIncrease: "45%",
      trafficBoost: "60%",
      clientRetentionImprovement: "Significant",
    },
    clientQuote:
      "The tailored marketing strategies have delivered exceptional results for our clients and helped us grow our business.",
  },
  // More case studies
];

const CaseStudyDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === parseInt(id));

  if (!caseStudy) {
    return (
      <motion.div
        className="container mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-600 mt-5">
          Case Study Not Found
        </h2>
        <Link to="/case-studies" className="text-primary underline mt-4">
          Back to Case Studies
        </Link>
      </motion.div>
    );
  }

  // Random case studies logic
  const randomCaseStudies = caseStudies
    .filter((study) => study.id !== parseInt(id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <motion.div
      className="container mx-auto px-6 py-16 max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Case Study Title */}
      <motion.header
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-[#517db9] lg:mt-20">
          {caseStudy.title}
        </h1>
      </motion.header>

      {/* Case Study Image */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="w-full lg:rounded-full object-cover lg:h-[600px] md:h-[400px] md:rounded-full mx-auto"
        />
        <motion.div
          className="absolute lg:bottom-[-75px] md:bottom-[-60px] bottom-[-140px] left-0 right-0 bg-[#f0f8ff] lg:rounded-full md:rounded-full px-4 lg:py-9 lg:max-w-5xl md:max-w-2xl max-w-80 rounded-lg py-4 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center text-[#517db9] lg:text-[14px] text-sm text-center space-y-4 lg:space-y-0 lg:space-x-8">
            <p>
              <strong className="lg:text-xl">Client:</strong> <br />
              {caseStudy.client}
            </p>
            <p>
              <strong className="lg:text-xl">Category:</strong> <br />
              {caseStudy.category}
            </p>
            <p>
              <strong className="lg:text-xl align-middle">Duration:</strong>{" "}
              <br />
              {caseStudy.duration}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="lg:max-w-5xl md:max-w-2xl mx-auto md:mt-32 lg:mt-32 mt-40">
        {/* Challenge */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-primary">Challenge</h2>
          <p className="text-gray-600">{caseStudy.challenge}</p>
        </motion.section>

        {/* Solution */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-primary">Solution</h2>
          <p className="text-gray-600">{caseStudy.solution}</p>
        </motion.section>

        {/* Results */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-primary">Results</h2>
          <ul className="list-disc list-inside text-gray-600">
            {Object.entries(caseStudy.results).map(([key, value]) => (
              <li key={key}>
                <strong className="capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </strong>{" "}
                {value}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Quotes */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-primary">
            Words from {caseStudy.client}
          </h2>
          <p className="text-2xl">"{caseStudy.clientQuote}"</p>
        </motion.section>
      </div>

      {/* Random Case Studies Grid */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8">
          Other Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomCaseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={study.thumbnail}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Link to={`/case-studies/${study.id}`}>
                  <h3 className="text-xl font-semibold text-[#517db9] mb-2">
                    {study.title}
                  </h3>
                </Link>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
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

export default CaseStudyDetails;