"use client"
import React, { useState } from 'react';
import classNames from 'classnames';
import { Card } from '@/components/Card';

interface Job {
  title: string;
  company: string;
  period: string;
  logo: string;
  responsibilities: string[];
}

const jobsData = [
    {
      title: "AI-ML-DS Intern",
      company: "IIDT & Blackbucks",
      period: "June24 - July24",
      logo: "/assets/iidt.png",
      responsibilities: [
        "Developed AI/ML models using Python for real-world applications.",
        "Focused on data preprocessing, model training, and evaluation.",
        "Worked with TensorFlow, Scikit-Learn, and Pandas for predictive modeling.",
        "Built and optimized models to analyze and extract insights from complex datasets.",
      ],
    },
     {title: "MERN STACK Intern",
company: "IIDT & Blackbucks",
period: "June 25 - July 25",
logo: "/assets/iidt.png",
responsibilities: [
  "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
  "Designed responsive and dynamic user interfaces using React.js and Tailwind CSS.",
  "Created and integrated RESTful APIs with Express and Node.js for seamless frontend-backend communication.",
  "Utilized MongoDB to design and manage scalable NoSQL databases for data-driven features.",
  "Collaborated in an agile environment to build modular, reusable components and improve development efficiency."
],

    },

];

export const Experience = () => {
    const [jobs] = useState<Job[]>(jobsData);

    return (
        <section className="pb-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
                        Experience
                    </p>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Where I've Been, What I've Done</h2>
                <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-auto max-w-2xl">
                    A glimpse into my professional experiences, the projects I've contributed to, and the skills I've honed along the way.
                </p>
                
                {/* Timeline Container */}
                <div className="relative mt-24">
                    {/* Timeline line - centered on desktop, left-aligned on mobile */}
                    <div className="absolute md:left-1/2 md:-translate-x-1/2 left-8 top-0 h-full w-0.5 bg-gray-700"></div>

                    {jobs.map((job, index) => (
                        <div key={index} className="relative">
                            {/* Desktop: Alternating layout / Mobile: Right-aligned content */}
                            <div className={classNames(
                                "flex items-start",
                                // Desktop view: alternating sides
                                "md:flex-row md:items-start",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                                // Mobile view: all items aligned to right of timeline
                                "flex-row mt-6"
                            )}>
                                {/* Job details */}
                                <div className={classNames(
                                    // Desktop: 50% width with appropriate padding
                                    "md:w-1/2 md:px-8",
                                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16",
                                    // Mobile: full width with padding on the left
                                    "w-full pl-24 pr-4"
                                )}>
                                    <Card className={classNames(
                                        "p-6 md:p-8" ,
                                        // Desktop: align card to appropriate side
                                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto",
                                        // Mobile: full width
                                        "w-full"
                                    )}>
                                        <h2 className="text-xl md:text-2xl font-serif mb-1">{job.title}</h2>
                                        <p className="text-gray-400 mb-1 font-sans">{job.company}</p>
                                        <p className="text-sm text-gray-400 font-medium mb-4 md:mb-6">{job.period}</p>
                                        <ul className="list-disc text-left ml-5 space-y-3 md:space-y-4 font-sans">
                                            {job.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="text-gray-300 text-sm md:text-base">
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>

                                {/* Timeline marker and logo */}
                                <div className={classNames(
                                    // Desktop: centered
                                    "md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:flex-col md:items-center",
                                    // Mobile: left-aligned
                                    "absolute left-8 -translate-x-1/2"
                                )}>
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center overflow-hidden z-10">
                                        <img src={job.logo} alt={`${job.company} logo`} className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};