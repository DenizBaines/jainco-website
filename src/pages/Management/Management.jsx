import React, { useState } from 'react';
import './Management.css';
import { FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Management = () => {
  const [activeTab, setActiveTab] = useState('companyStructure'); // or 'keyPeople'
  const [expandedItems, setExpandedItems] = useState({
    'naresh-jain': true,
    'kg-malik': true
  });

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="management-page">
      <div className="page-content">
        <div className="management-content">
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'keyPeople' ? 'active' : ''}`}
              onClick={() => setActiveTab('keyPeople')}
            >
              Key People <FaChevronRight />
            </div>
            <div 
              className={`tab ${activeTab === 'companyStructure' ? 'active' : ''}`}
              onClick={() => setActiveTab('companyStructure')}
            >
              Company Structure <FaChevronRight />
            </div>
          </div>

          {activeTab === 'keyPeople' && (
            <div className="management-list">
              <div className="management-item">
                <div className="expand-icon" onClick={() => toggleExpand('naresh-jain')}>
                  {expandedItems['naresh-jain'] ? <FaMinus /> : <FaPlus />}
                </div>
                <h3>MR. NARESH JAIN, CHAIRMAN</h3>
              </div>
              
              {expandedItems['naresh-jain'] && (
                <div className="management-item-content">
                  <p>
                    Sh. Naresh Jain, Chairman of this company, is the key person responsible for bringing up JBPL from a one-man show to the present status of a Private limited concern, a BIS certified ISO company. It has been his hard work, honesty, dedication that this first division Commerce Graduate from Hans Raj College, one of the prestigious colleges of Delhi University, has made this contracting firm as one of the prestigious firms in this field in Delhi with an annual turnover of more than Rs.5000 Lacs. Maybe it is a small contracting civil engineering firm, with specialization in laying of water and sewer lines of all types and sizes, but it is one of the leading firms. Delhi Jal Board, Delhi Metro Rail Corporation, and other important departments in Delhi and other states cannot ignore this company when any of the works relating to water supply and sewers come up.
                  </p>
                </div>
              )}
              
              <div className="management-item">
                <div className="expand-icon" onClick={() => toggleExpand('kg-malik')}>
                  {expandedItems['kg-malik'] ? <FaMinus /> : <FaPlus />}
                </div>
                <h3>MR. K.G. MALIK, CHIEF EXECUTIVE OFFICER</h3>
              </div>
              
              {expandedItems['kg-malik'] && (
                <div className="management-item-content">
                  <p>
                  Mr. K. G. Malik is the President of the Construction Division of Jainco Buildcon Private Limited. He is graduate (AMIE) 
                  in Civil Engineering in 1982 from the Institution of Engineers, Kolkatta. He worked in various capacities for 39 years 
                  in Delhi Jal Board and finally retired as Superintendent Engineer (Civil) in May 2005. During his active career, he has been 
                  responsible for the construction of Sewage Pumping Station, Sewage Treatment Plants, underground reservoirs, laying of water 
                  mains as well as laying of sewer lines up to 1800mm dia and maintenance of water distribution system. He has been responsible 
                  for planning and central tendering system of the Delhi Jal Board. <br /> 
                  He is an active engineer. He joined this company as Vice President (Construction Division) in June 2007.
                  </p>
                </div>
              )}
              
              <div className="management-item">
                <div className="expand-icon" onClick={() => toggleExpand('naresh-jain')}>
                  {expandedItems['naresh-jain'] ? <FaMinus /> : <FaPlus />}
                </div>
                <h3>MR. YATIN JAIN, MANAGING DIRECTOR</h3>
              </div>
              
              {expandedItems['naresh-jain'] && (
                <div className="management-item-content">
                  <p>
                  Mr. Yatin Jain is Managing Director of Jainco Buildcon Private Limited. He is B.Tech (Civil), completed his masters in business administration (FMB) from SP JAIN INSTITUTE OF MANAGEMENT, Mumbai. He is currently heading the Administration, Marketing, Construction, HR and procurement of the company.
                  </p>
                </div>
              )}
              
              <div className="management-item">
                <div className="expand-icon" onClick={() => toggleExpand('naresh-jain')}>
                  {expandedItems['naresh-jain'] ? <FaMinus /> : <FaPlus />}
                </div>
                <h3>MR. PRAVEEN BHARGAVA - M.S. (CIVIL ENGG.), DIRECTOR (TECNICAL)</h3>
              </div>
              
              {expandedItems['naresh-jain'] && (
                <div className="management-item-content">
                  <p>
                  Mr. Praveen Bhargava retired as Technical Head of water sector after 35 years of his service in Delhi 
                  Jal Board. Under his command, a lot of prestigious projects related to Water and Sewer were introduced 
                  and commissioned in Delhi Jal Board such as Maintenance of water and sewerage network Delhi, Rainwater harvesting 
                  system in Delhi, conceived and implementation of the proposals for treated water and conservation of water, rehabilitation 
                  and commissioning of sewerage treatment plants, rehabilitation of sewerage lines. <br />
                  He has joined the company in the capacity of Executive Director (Technical) w.e.f. 01st November 2019.
                  </p>
                </div>
              )}
            
            </div>
          )}

          {activeTab === 'companyStructure' && (
            <div className="company-structure">
              <h2>Board of Directors</h2>
              
              <div className="board-table">
                <div className="board-row">
                  <div className="board-name">Mr. Naresh Jain</div>
                  <div className="board-title">Chairman</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr. Yatin Jain</div>
                  <div className="board-title">Managing Director</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Praveen Bhargava</div>
                  <div className="board-title">Director (Technical)</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Rabinder Singh</div>
                  <div className="board-title">Director</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Pulkit Jain</div>
                  <div className="board-title">Director (Finance)</div>
                </div>
              </div>
              
              <h2>Senior Management</h2>
              
              <div className="board-table">
                <div className="board-row">
                  <div className="board-name">Mr.K.G.Malik</div>
                  <div className="board-title">Chief Executive Officer</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Rajni Kant Gupta</div>
                  <div className="board-title">Project Manager</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Ranjit Kumar Singh</div>
                  <div className="board-title">Project Manager</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Khalid Hassan</div>
                  <div className="board-title">Project Manager</div>
                </div>
                <div className="board-row">
                  <div className="board-name">Mr.Vishwanath Bhatele</div>
                  <div className="board-title">Senior Project Manager (MP)</div>
                </div>
              </div>
              
              <h2>COMPANY STRUCTURE</h2>
              <h3>BOARD OF DIRECTORS PRESIDENT & DIRECTOR (TECHNICAL)</h3>
              
              <div className="structure-table">
                <div className="structure-row">
                  <div className="position">(i)</div>
                  <div className="role">Director - 3</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(ii)</div>
                  <div className="role">General Manager (Admn.) - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(iii)</div>
                  <div className="role">Administrative Officer - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(iv)</div>
                  <div className="role">Office Superintendent - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(iv)</div>
                  <div className="role">Draftsman - 4</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(vi)</div>
                  <div className="role">Computer Operator - 2</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(vii)</div>
                  <div className="role">Typist - 4</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(viii)</div>
                  <div className="role">Clerks - 6</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(ix)</div>
                  <div className="role">Helpers - 185</div>
                  <div className="count"></div>
                </div>
              </div>
              
              <h2>Consultants</h2>
              
              <div className="structure-table">
                <div className="structure-row">
                  <div className="position">(i)</div>
                  <div className="role">Head Consultant - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(ii)</div>
                  <div className="role">Consultants - 2</div>
                  <div className="count"></div>
                </div>
              </div>
              
              <h2>Finance & Accounts</h2>
              
              <div className="structure-table">
                <div className="structure-row">
                  <div className="position">(i)</div>
                  <div className="role">Director - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(ii)</div>
                  <div className="role">Chartered Accountant - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(iii)</div>
                  <div className="role">Manager (F & A) - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(iv)</div>
                  <div className="role">Accounts Officers - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(v)</div>
                  <div className="role">Accountant - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(vi)</div>
                  <div className="role">Cashier - 1</div>
                  <div className="count"></div>
                </div>
                <div className="structure-row">
                  <div className="position">(vii)</div>
                  <div className="role">Asstt. Cashier - 1</div>
                  <div className="count"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sidebar">
          <h2>ABOUT US</h2>
          <div className="sidebar-menu">
            <Link to="/company-summary" className="sidebar-item">
              Company Summary
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/management" className="sidebar-item active">
              Management
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/projects" className="sidebar-item">
              Projects
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/infrastructure" className="sidebar-item">
              Our Infrastructure
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/consultation" className="sidebar-item">
              Consultation Wing
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/testimonial" className="sidebar-item">
              Testimonials and Certificates
              <span className="chevron"><FaChevronRight /></span>
            </Link>
            <Link to="/careers" className="sidebar-item">
              Careers
              <span className="chevron"><FaChevronRight /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;