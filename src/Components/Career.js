import React, { useState } from 'react';
import { FaBriefcase, FaBuilding, FaUserGraduate, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CareerOpportunities() {
  const [showUGBranches, setShowUGBranches] = useState(false);
  const [showPGBranches, setShowPGBranches] = useState(false);

  return (
    <div className="career-page">
      <h2 className="heading-middle">Latest Jobs</h2>
      
      <h3 className="heading-side">Top Companies</h3>
      <div className="companies">
        {["Accenture is hiring for freshers",
         "IQVIA is hiring for freshers",
         "Philips is hiring for freshers",
          "Amiti Software is hiring for freshers",
           "AtkinsRéalis is hiring for freshers",
            "Quest Global is hiring for freshers",
             "Innofied is hiring for freshers",
              "Chidhagni Group is hiring for freshers",
               "EY is hiring for freshers",
            ].map((company, index) => (
          <p key={index} className="company-name">{company}</p>
        ))}
      </div>
      
      <h3 className="heading-next-step">All Jobs Posting</h3>
      <div className="job-categories">
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => setShowUGBranches(!showUGBranches)}>
            <span>Under Graduation</span>
            {showUGBranches ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showUGBranches && (
            <div className="branches">
              <span><p>B.E/B.Tech</p></span>
              <span><p>B.Sc/BCA</p></span>
              <span><p>BBA</p></span>
              <span><p>B.Com</p></span>
              <span><p>B.A</p></span>
              <span><p>B.Pharm</p></span>
              <span><p>BAF</p></span>
            </div>
          )}
        </div>
        
        <div className="accordion-section">
          <div className="accordion-header" onClick={() => setShowPGBranches(!showPGBranches)}>
            <span>Post Graduation</span>
            {showPGBranches ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showPGBranches && (
            <div className="branches">
              <span><p>M.E/M.Tech</p></span>
              <span><p>MCA</p></span>
              <span><p>M.Sc</p></span>
              <span><p>MBA</p></span>
              <span><p>M.Com</p></span>
              <span><p>M.Pharm</p></span>
            </div>
          )}
        </div>
      </div>
      
      <h3 className="heading-middle">Numbers Speak</h3>
      <div className="numbers-speak">
        <div>
          <FaBriefcase />
          <span>10k+ Placements</span>
        </div>
        <div>
          <FaBuilding />
          <span>100+ Colleges</span>
        </div>
        <div>
          <FaUserGraduate />
          <span>50k+ Students</span>
        </div>
      </div>
    </div>
  );
}

export default CareerOpportunities;
