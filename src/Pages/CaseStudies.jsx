import React from 'react';

const caseStudies = [
  {
    title: 'Boosted E-Commerce Sales',
    description: 'Increased revenue by 35% for a leading online store through a complete UX redesign.',
    thumbnail: 'https://via.placeholder.com/300x200',
    problem: 'The website had a high bounce rate and poor conversion rates.',
    solution: 'Redesigned the website with a focus on user experience and mobile optimization.',
    results: 'Reduced bounce rate by 40% and increased monthly sales by $50,000.',
  },
  {
    title: 'Streamlined Logistics',
    description: 'Optimized a supply chain, reducing operational costs by 20%.',
    thumbnail: 'https://via.placeholder.com/300x200',
    problem: 'Inefficient logistics processes caused delays and high costs.',
    solution: 'Implemented a custom logistics management system.',
    results: 'Achieved 20% cost savings and reduced delivery times by 15%.',
  },
];

const CaseStudies = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-10 space-y-16">
      <header className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800">Case Studies</h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover how we've transformed challenges into opportunities for our clients.
        </p>
      </header>

      {/* Featured Projects */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <img
                src={caseStudy.thumbnail}
                alt={`Thumbnail for ${caseStudy.title}`}
                className="w-full rounded-md"
              />
              <h4 className="text-xl font-bold text-gray-800">{caseStudy.title}</h4>
              <p className="text-gray-600">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before and After Results */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Before and After Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <h4 className="text-xl font-bold text-gray-800">{caseStudy.title}</h4>
              <div className="flex flex-col space-y-4">
                <div className="bg-gray-200 p-4 rounded-md">
                  <h5 className="text-gray-700 font-semibold">Before:</h5>
                  <p className="text-gray-600">{caseStudy.problem}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                  <h5 className="text-gray-700 font-semibold">After:</h5>
                  <p className="text-gray-600">{caseStudy.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Case Study Layout */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Detailed Case Studies</h3>
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <h4 className="text-xl font-bold text-gray-800">{caseStudy.title}</h4>
              <p className="text-gray-600">{caseStudy.description}</p>
              <div className="space-y-2">
                <h5 className="text-gray-700 font-semibold">Problem:</h5>
                <p className="text-gray-600">{caseStudy.problem}</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-gray-700 font-semibold">Solution:</h5>
                <p className="text-gray-600">{caseStudy.solution}</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-gray-700 font-semibold">Results:</h5>
                <p className="text-gray-600">{caseStudy.results}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
