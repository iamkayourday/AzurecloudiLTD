import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMoneyBillWave, FaIndustry, FaUserTie, FaCalendarAlt, FaTools, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobAccordion = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      business: "Randstad Technologies",
      location: "Newcastle upon Tyne",
      salary: "£33k - £80k per annum",
      industry: "IT",
      jobType: "Permanent",
      contact: "Nehal Kankriya",
      postedDate: "Today",
      skills: ["React", "TypeScript", "WebSockets", "SignalR"],
      experience: "2+ years",
      description: `
        Join our team to drive impactful technical projects and innovate with cutting-edge technologies.

        **What You'll Do:**
        - Own and deliver key technical products and projects.
        - Challenge systems and processes to drive innovation.
        - Collaborate across teams and engage directly with users.
        - Stay ahead of industry trends and ensure great UX.

        **What We're Looking For:**
        - Expertise in React and TypeScript.
        - Experience with WebSockets, SignalR, or similar technologies.
        - Knowledge of containers and orchestration.
        - Passion for solving business problems and delivering excellent usability.
        - Entrepreneurial mindset and willingness to take ownership.
        - Financial services experience is a plus but not essential.
      `,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      business: "Creative Minds Studio",
      location: "Edinburgh, UK",
      salary: "£40k - £70k per annum",
      industry: "Design & Tech",
      jobType: "Full-Time",
      contact: "Emily Jones",
      postedDate: "Yesterday",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      experience: "3+ years",
      description: `
        We are looking for a passionate UI/UX Designer to create stunning user interfaces and seamless experiences.
  
        **Responsibilities:**
        - Conduct user research to gather insights.
        - Design wireframes, mockups, and prototypes.
        - Collaborate with developers and product managers.
        - Ensure designs align with business goals and brand identity.
  
        **Requirements:**
        - Proficiency in Figma and Adobe XD.
        - Strong understanding of design principles.
        - Ability to translate user needs into functional designs.
        - Familiarity with responsive and mobile-first design.
  
        Take your creativity to the next level with us!
      `,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      business: "CloudSync Technologies",
      location: "London, UK",
      salary: "£55k - £90k per annum",
      industry: "IT",
      jobType: "Contract",
      contact: "James Walker",
      postedDate: "2 Days Ago",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      experience: "4+ years",
      description: `
        We are seeking a DevOps Engineer to streamline and enhance our cloud infrastructure.
  
        **Key Responsibilities:**
        - Implement and maintain CI/CD pipelines.
        - Manage cloud-based infrastructure using AWS.
        - Automate deployment processes and monitoring systems.
        - Collaborate with development teams for optimal performance.
  
        **Preferred Skills:**
        - Expertise in Docker and Kubernetes.
        - Strong scripting skills (Python, Bash, etc.).
        - Experience with infrastructure-as-code tools (Terraform, Ansible).
  
        Join our team to redefine cloud operations!
      `,
    },
    {
      id: 4,
      title: "Backend Engineer",
      business: "CodeCraft Solutions",
      location: "Liverpool, UK",
      salary: "£50k - £85k per annum",
      industry: "Software Development",
      jobType: "Permanent",
      contact: "Sophia Turner",
      postedDate: "Last Week",
      skills: ["Node.js", "Express", "PostgreSQL", "API Development"],
      experience: "5+ years",
      description: `
        We're hiring a Backend Engineer to build robust, scalable, and secure applications.
  
        **Your Role:**
        - Design and develop RESTful APIs.
        - Optimize database performance and architecture.
        - Collaborate with frontend developers for seamless integration.
        - Ensure code quality through peer reviews and testing.
  
        **Skills Needed:**
        - Strong knowledge of Node.js and Express.
        - Experience with PostgreSQL or similar databases.
        - Understanding of API security and authentication.
        - Familiarity with cloud services is a plus.
  
        Join us in crafting the backbone of modern applications.
      `,
    },
    {
      id: 5,
      title: "Full Stack Developer",
      business: "InnovateHub Inc.",
      location: "Birmingham, UK",
      salary: "£60k - £100k per annum",
      industry: "Tech & Innovation",
      jobType: "Permanent",
      contact: "Liam Brown",
      postedDate: "3 Days Ago",
      skills: ["React", "Node.js", "GraphQL", "MongoDB"],
      experience: "3+ years",
      description: `
        Join InnovateHub as a Full Stack Developer and work on cutting-edge applications.
  
        **What You’ll Do:**
        - Build and maintain end-to-end web applications.
        - Work on both client-side and server-side logic.
        - Troubleshoot and resolve performance issues.
        - Stay updated with emerging technologies and trends.
  
        **Must-Have Skills:**
        - Proficiency in React and Node.js.
        - Experience with GraphQL APIs and MongoDB.
        - Strong problem-solving and analytical skills.
        - Knowledge of microservices architecture is a bonus.
  
        Be part of a team that values innovation and growth!
      `,
    },
    {
      id: 6,
      title: "Data Scientist",
      business: "Insight Analytics",
      location: "Newcastle, UK",
      salary: "£70k - £120k per annum",
      industry: "Data & Analytics",
      jobType: "Permanent",
      contact: "Olivia Clark",
      postedDate: "5 Days Ago",
      skills: ["Python", "R", "Machine Learning", "Data Visualization"],
      experience: "3+ years",
      description: `
        Insight Analytics is looking for a Data Scientist to extract meaningful insights and create predictive models.
  
        **Role Responsibilities:**
        - Analyze large datasets for actionable insights.
        - Develop and deploy machine learning models.
        - Visualize data using tools like Tableau or Power BI.
        - Collaborate with cross-functional teams to achieve business goals.
  
        **Preferred Qualifications:**
        - Strong programming skills in Python and R.
        - Experience with machine learning frameworks like TensorFlow or PyTorch.
        - Proficiency in SQL and data visualization tools.
  
        Shape the future of data-driven decision-making with us!
      `,
    },
    {
      id: 7,
      title: "Mobile App Developer",
      business: "TechFusion Labs",
      location: "Manchester, UK",
      salary: "£45k - £80k per annum",
      industry: "Mobile Development",
      jobType: "Permanent",
      contact: "Maya Patel",
      postedDate: "Today",
      skills: ["React Native", "Swift", "Java", "API Integration"],
      experience: "2+ years",
      description: `
        TechFusion Labs is seeking a talented Mobile App Developer to build cutting-edge mobile applications.
  
        **Responsibilities:**
        - Design and develop cross-platform mobile apps using React Native.
        - Integrate third-party APIs to enhance app functionality.
        - Collaborate with designers and backend developers.
        - Ensure optimal performance and bug-free experience.
  
        **Requirements:**
        - Experience with React Native and mobile app development.
        - Knowledge of Swift (iOS) or Java (Android).
        - Familiarity with mobile app testing and debugging.
        - Ability to work in an agile environment.
  
        Help us create top-notch mobile experiences for users worldwide!
      `,
    },
    {
      id: 8,
      title: "Cloud Solutions Architect",
      business: "SkyTech Enterprises",
      location: "Westham, Uk",
      salary: "£70k - £120k per annum",
      industry: "Cloud Computing",
      jobType: "Permanent",
      contact: "Chris Nolan",
      postedDate: "2 Days Ago",
      skills: ["AWS", "Azure", "Google Cloud", "Infrastructure Design"],
      experience: "5+ years",
      description: `
        SkyTech Enterprises is looking for a Cloud Solutions Architect to lead the design and implementation of cloud infrastructure.
  
        **Key Responsibilities:**
        - Design scalable, secure, and cost-effective cloud solutions.
        - Collaborate with internal teams to define technical requirements.
        - Develop strategies for cloud migration and optimization.
        - Lead the implementation of cloud platforms (AWS, Azure, Google Cloud).
  
        **Skills & Experience:**
        - Extensive experience with AWS, Azure, or Google Cloud.
        - Strong knowledge of cloud architecture and infrastructure.
        - Expertise in cloud security and cost optimization.
  
        Be at the forefront of cloud innovation and design the future of cloud technology.
      `,
    },
    {
      id: 9,
      title: "Game Developer",
      business: "Epic Gaming Studios",
      location: "Bristol, UK",
      salary: "£40k - £75k per annum",
      industry: "Gaming & Interactive Media",
      jobType: "Full-Time",
      contact: "Jared Blake",
      postedDate: "Yesterday",
      skills: ["Unity", "C#", "Game Mechanics", "Multiplayer Development"],
      experience: "2+ years",
      description: `
        Epic Gaming Studios is hiring a Game Developer to join our team and create amazing game experiences.
  
        **Your Role:**
        - Design and develop game mechanics using Unity and C#.
        - Implement multiplayer functionality and server integration.
        - Collaborate with artists and designers to bring the game world to life.
        - Optimize game performance for various platforms.
  
        **Essential Skills:**
        - Proficiency in Unity and C# for game development.
        - Experience in creating multiplayer games.
        - Passion for video games and storytelling.
        - Understanding of game design principles and mechanics.
  
        Join our team and help create the next big hit in gaming!
      `,
    },
    {
      id: 10,
      title: "AI/ML Engineer",
      business: "Neural Innovations",
      location: "Glasglow, Uk",
      salary: "£60k - £110k per annum",
      industry: "Artificial Intelligence",
      jobType: "Permanent",
      contact: "Sophia Lee",
      postedDate: "Last Week",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "Python"],
      experience: "3+ years",
      description: `
        Neural Innovations is seeking an AI/ML Engineer to develop machine learning models and AI-driven solutions.
  
        **What You Will Do:**
        - Design and implement machine learning models.
        - Work on natural language processing (NLP) and computer vision projects.
        - Optimize model performance and scale solutions.
        - Research and implement the latest AI technologies.
  
        **Skills Required:**
        - Expertise in Python, TensorFlow, and PyTorch.
        - Strong understanding of machine learning algorithms.
        - Experience in NLP, computer vision, or related fields.
        - Ability to collaborate across teams to integrate AI solutions.
  
        Be part of the next wave of AI advancements that shape industries!
      `,
    },

  ];

  const [openJobId, setOpenJobId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h2 className="text-4xl font-extrabold text-center text-[#517db9] mb-8">
        Open Positions
      </h2>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Accordion Header */}
          <div
            className="p-6 bg-[#f5faff] cursor-pointer flex justify-between items-center hover:bg-[#e8f0ff] transition"
            onClick={() => toggleAccordion(job.id)}
          >
            <div>
              <h4 className="text-xl font-bold text-[#517db9]">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.business}</p>
            </div>
            <p className="text-[#517db9] font-medium">{job.location}</p>
          </div>

          {/* Accordion Content */}
          {openJobId === job.id && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden bg-white"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <p className="text-gray-600">{job.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMoneyBillWave className="text-gray-500" />
                  <p className="text-gray-600">{job.salary}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaIndustry className="text-gray-500" />
                  <p className="text-gray-600">{job.industry}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUserTie className="text-gray-500" />
                  <p className="text-gray-600">{job.contact}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <p className="text-gray-600">{job.postedDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTools className="text-gray-500" />
                  <p className="text-gray-600">{job.experience}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Required Skills:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Description:</p>
                  <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
                </div>
                <Link to="/resume-upload">
                
                <button className="bg-[#517db9] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#395d90] transition">
                  Apply Now
                </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobAccordion;
