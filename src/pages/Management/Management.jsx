import React, { useState } from 'react';
import './Management.css';

const Management = () => {
  const [activeTab, setActiveTab] = useState('keyPeople');
  const [expandedItems, setExpandedItems] = useState({
    'naresh-jain': false,
    'kg-malik': false,
    'yatin-jain': false,
    'praveen-bhargava': false
  });

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const keyPeopleData = [
    {
      id: 'naresh-jain',
      name: 'MR. NARESH JAIN',
      position: 'CHAIRMAN',
      description: `Sh. Naresh Jain, Chairman of this company, is the key person responsible for bringing up JBPL from a one-man show to the present status of a Private limited concern, a BIS certified ISO company. It has been his hard work, honesty, dedication that this first division Commerce Graduate from Hans Raj College, one of the prestigious colleges of Delhi University, has made this contracting firm as one of the prestigious firms in this field in Delhi with an annual turnover of more than Rs.5000 Lacs. Maybe it is a small contracting civil engineering firm, with specialization in laying of water and sewer lines of all types and sizes, but it is one of the leading firms. Delhi Jal Board, Delhi Metro Rail Corporation, and other important departments in Delhi and other states cannot ignore this company when any of the works relating to water supply and sewers come up.`
    },
    {
      id: 'kg-malik',
      name: 'MR. K.G. MALIK',
      position: 'CHIEF EXECUTIVE OFFICER',
      description: `Mr. K. G. Malik is the President of the Construction Division of Jainco Buildcon Private Limited. He is graduate (AMIE) in Civil Engineering in 1982 from the Institution of Engineers, Kolkatta. He worked in various capacities for 39 years in Delhi Jal Board and finally retired as Superintendent Engineer (Civil) in May 2005. During his active career, he has been responsible for the construction of Sewage Pumping Station, Sewage Treatment Plants, underground reservoirs, laying of water mains as well as laying of sewer lines up to 1800mm dia and maintenance of water distribution system. He has been responsible for planning and central tendering system of the Delhi Jal Board. He is an active engineer. He joined this company as Vice President (Construction Division) in June 2007.`
    },
    {
      id: 'yatin-jain',
      name: 'MR. YATIN JAIN',
      position: 'MANAGING DIRECTOR',
      description: `Mr. Yatin Jain is Managing Director of Jainco Buildcon Private Limited. He is B.Tech (Civil), completed his masters in business administration (FMB) from SP JAIN INSTITUTE OF MANAGEMENT, Mumbai. He is currently heading the Administration, Marketing, Construction, HR and procurement of the company.`
    },
    {
      id: 'praveen-bhargava',
      name: 'MR. PRAVEEN BHARGAVA',
      position: 'DIRECTOR (TECHNICAL)',
      description: `Mr. Praveen Bhargava retired as Technical Head of water sector after 35 years of his service in Delhi Jal Board. Under his command, a lot of prestigious projects related to Water and Sewer were introduced and commissioned in Delhi Jal Board such as Maintenance of water and sewerage network Delhi, Rainwater harvesting system in Delhi, conceived and implementation of the proposals for treated water and conservation of water, rehabilitation and commissioning of sewerage treatment plants, rehabilitation of sewerage lines. He has joined the company in the capacity of Executive Director (Technical) w.e.f. 01st November 2019.`
    }
  ];

  const boardOfDirectors = [
    { name: 'Mr. Naresh Jain', designation: 'Chairman (E)' },
    { name: 'Mr. Yatin Jain', designation: 'Managing Director' },
    { name: 'Mr. Praveen Bhargava', designation: 'Director (Technical)' },
    { name: 'Mr. Mr. K.S. Sharma', designation: 'Director (Finance)' },
    { name: 'Mr. K.G. Malik', designation: 'Chief Executive Officer' }
  ];

  const seniorManagement = [
    { name: 'Director', designation: '3' },
    { name: 'General Manager', designation: '1' },
    { name: 'Project Manager', designation: '7' },
    { name: 'Deputy Project Manager', designation: '4' },
    { name: 'Administrative Officer', designation: '3' },
    { name: 'Office Superintendent', designation: '1' },
    { name: 'Draftsman', designation: '4' },
    { name: 'Computer Operator', designation: '4' },
    { name: 'Typist', designation: '4' },
    { name: 'Clerks', designation: '6' },
    { name: 'HR', designation: '1' },
  ];

  const consultantsJainco = [
    { name: 'Head Consultant', designation: '1' },
    { name: 'Consultant', designation: '2' },
    
  ];

  const companyStructure = [
    { department: 'Director', totalNumbers: 1 },
    { department: 'Chartered Accountant', totalNumbers: 1 },
    { department: 'Manager (F & A)', totalNumbers: 1 },
    { department: 'Accounts Officer', totalNumbers: 1 },
    { department: 'Accountant', totalNumbers: 1 },
    { department: 'Cashier', totalNumbers: 1 },
    { department: 'Assistant Cashier', totalNumbers: 1 },
  ];

  return (
    <div className="management-container">
      <div className="management-page">
        <h1 className="page-title">Management</h1>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'keyPeople' ? 'active' : ''}`}
            onClick={() => setActiveTab('keyPeople')}
          >
            Key People
          </button>
          <button 
            className={`tab ${activeTab === 'companyStructure' ? 'active' : ''}`}
            onClick={() => setActiveTab('companyStructure')}
          >
            Company Structure
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'keyPeople' && (
            <div className="key-people-section">
              {keyPeopleData.map((person) => (
                <div key={person.id} className="person-card">
                  <div 
                    className="person-header"
                    onClick={() => toggleExpand(person.id)}
                  >
                    <div className="person-info">
                      <h3>{person.name}</h3>
                      <span className="position">{person.position}</span>
                    </div>
                    <div className="expand-icon">
                      {expandedItems[person.id] ? '−' : '+'}
                    </div>
                  </div>
                  
                  {expandedItems[person.id] && (
                    <div className="person-content">
                      <p>{person.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'companyStructure' && (
            <div className="company-structure-section">
              <div className="structure-grid">
                <div className="structure-card">
                  <h2>Board of Directors & Senior Management</h2>
                  <div className="table-container">
                    <table className="modern-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Designation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {boardOfDirectors.map((member, index) => (
                          <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="structure-card">
                  <h2>Board of Directors - President & Director (Technical)</h2>
                  <div className="table-container">
                    <table className="modern-table">
                      <thead>
                        <tr>
                          <th>Designation</th>
                          <th>Total Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {seniorManagement.map((member, index) => (
                          <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

               
               
                <div className="structure-card">
                  <h2>Consultants</h2>
                  <div className="table-container">
                    <table className="modern-table">
                      <thead>
                        <tr>
                          <th>Designation</th>
                          <th>Total Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {consultantsJainco.map((member, index) => (
                          <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
               



                <div className="structure-card full-width">
                  <h2>Finance & Accountants</h2>
                  <div className="table-container">
                    <table className="modern-table">
                      <thead>
                        <tr>
                          <th>Designation</th>
                          <th>Total Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companyStructure.map((item, index) => (
                          <tr key={index}>
                            <td>{item.department}</td>
                            <td className="number-cell">{item.totalNumbers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Management;