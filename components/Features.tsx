// Features.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const featureData = [
    {
      icon: "icons/note.png", // Represents project management and organization
      title: "Centralized Project Management",
      description:
        "Digitote offers a unified platform to manage all aspects of influencer campaigns. From creative briefs to contract details, track every element of your project in one accessible location. Projects easily organized and filtered by talent or keyword search.",
    },
    {
      icon: "icons/edit_note.png", // Represents detailed pages for drafting and organizing content
      title: "Detailed Deliverable Pages",
      description:
        "From concepts to scripts, draft content to live content, our highly detailed deliverables page keeps all your content in one place. Our attachments feature makes it easy to drag and drop content and keep everything on the platform for easy reference. The ability to add in due dates also keeps everyone on track and on time.",
    },
    {
      icon: "icons/phone.png", // Suggests communication and CRM integration
      title: "Integrated CRM with Brand Representatives",
      description:
        "Digitote features a CRM system, designed to bridge connections between companies and brand representatives. This integration keeps all brand and company contacts in one place with ease to add to campaigns.",
    },
    {
      icon: "icons/calendar.png", // Indicates an overview, like a dashboard
      title: "Project Dashboard",
      description:
        "See all your current campaigns in one place with our project dashboard, you can filter and sort projects by status.",
    },
    {
      icon: "icons/image.png", // Symbolizes user-friendly interface
      title: "Easy to Use Interface",
      description:
        "We believe in simplicity and efficiency. Our platform is designed with an intuitive interface, ensuring that campaign management is straightforward and user-friendly. Experience seamless navigation and effortless campaign coordination with Digitote's streamlined interface.",
    },
    {
      icon: "icons/camera.png", // Appropriate for storing media
      title: "Document and Media Storage",
      description:
        "Digitote provides secure and organized storage for all campaign-related documents and media. Easily upload, categorize, and access contracts, creative content, and other essential files in one centralized location.",
    },
    {
      icon: "icons/money.png", // Relevant for financial breakdowns
      title: "Comprehensive Fee Breakdown",
      description:
        "Fundamental to Digitote's ethos is a commitment to transparency. We provide a detailed fee analysis for every project, ensuring talent, talent managers and agencies have a clear understanding of their earnings. This feature displays a comprehensive breakdown of agency fees alongside talent remuneration, fostering trust and clarity in financial dealings.",
    },
  ];

  // Animation variants for each feature
  const itemVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-primary-blue">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="text-start border-primary-pink bg-white border-4 p-4 rounded-lg"
              variants={itemVariants}
              initial="offscreen"
              whileInView="onscreen"
              exit="offscreen"
              viewport={{ once: false, amount: 0.65 }}
            >
              <h3 className="text-xl font-bold mb-2 text-primary-blue h-14">
                {feature.title}
              </h3>
              <hr className="border-t-2 mb-2"></hr>
              <p className="text-black">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
