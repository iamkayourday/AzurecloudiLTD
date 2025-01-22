import React from "react";
import JobAccordion from "./JobAccordion";

const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      business: "AzureCloudi",
      location: "Remote",
      skills: "React, JavaScript, Tailwind CSS",
      experience: "2+ years",
    },
    {
      id: 2,
      title: "Backend Developer",
      business: "TechCorp",
      location: "San Francisco, CA",
      skills: "Node.js, Express, MongoDB",
      experience: "3+ years",
    },
  ];
  
  // Render JobList in your main component
  <JobList jobs={jobs} />;
  
const JobList = ({ jobs }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#517db9] mb-8">
        Job Opportunities
      </h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobAccordion key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;
