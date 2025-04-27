import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      no: 1,
      name: 'Water supply scheme project for Pithampur (P/L/J) water main, construction of overhead tank and water treatment plant.',
      cost: 'Rs.8470 Lakhs',
      date: 'Commissioned under Trial Run'
    },
    {
      no: 2,
      name: 'P/L/J 1600-1400-1200-900-800-700mm dia MS (Lined coated )/D.I. water main from Re-cycling plant. Haiderpur to Kirari UGR.',
      cost: 'Rs.5029 Lakhs',
      date: '27.02.2012'
    },
    {
      no: 3,
      name: 'P/L/J 900mm dia Feeder Main from Wazirabad WTP-II to existing UGR at Ramlila Ground.',
      cost: 'Rs.2573 Lakhs',
      date: '30.04.2014'
    },
    {
      no: 4,
      name: 'P/L/J peripheral water mains of dia 150mm to 1600mm dia emanating from Karala UGR.',
      cost: 'Rs.2568 Lakhs',
      date: '12.09.2018'
    },
    {
      no: 5,
      name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
      cost: 'Rs.2500 Lakhs',
      date: '04.09.2017'
    },
    {
        no: 6,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
    },
   
    {
        no: 7,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 8,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 9,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 10,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 11,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 12,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 13,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 14,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 15,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 16,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 17,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 18,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 19,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 20,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 21,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 22,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 23,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 24,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 25,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 26,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 27,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 28,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 29,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 30,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 31,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 32,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 33,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 34,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 35,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },

      {
        no: 36,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 37,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 38,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 39,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 40,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 41,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 42,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 43,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 44,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 45,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 46,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 47,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 48,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 49,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 50,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 51,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 52,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 53,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 54,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 55,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 56,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under command.',
        cost: 'Rs.2500 Lakhs',
        date: '04.09.2017'
      },

  ];

  const inHandProjects = [
    {
      no: 1,
      name: 'P/L Sewer line in F & D Block Mahaveer Enclave, Kailash Puri extn., Sagarpur and Durga Park in Dwarka Constituency.',
      cost: 'Rs.5892 Lakhs'
    },
    {
      no: 2,
      name: 'Replacement of old 900mm dia PSC Duplicate Main from Majnoo Ka Teela to Rajghat, Old Fort to Moolchand Flyover / GK UGR and 800mm dia Okhla Main to UGR, Okhla WTP.',
      cost: 'Rs.5270 Lakhs'
    },
    {
      no: 3,
      name: 'P/L/J of 1300mm dia feeder main emanating from Palla MBR to Holambi Kalan UGR to replace existing water mains upto Alipur Guest House.',
      cost: 'Rs.4582 Lakhs'
    },
    {
      no: 4,
      name: 'P/L sewer line in Madhu Vihar Group of Colonies in Palam Constituency falling under Dwarka W.W.T.P Sector -16 D, Dwarka.',
      cost: 'Rs.3660 Lakhs'
    },
    {
      no: 5,
      name: 'Providing sewerage facility in Shiv Enclave group of colonies.',
      cost: 'Rs.3426 Lakhs'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="tabs">
        <button
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => setActiveTab('completed')}
        >
          Major Projects Completed
        </button>
        <button
          className={activeTab === 'inhand' ? 'active' : ''}
          onClick={() => setActiveTab('inhand')}
        >
          Major Projects in Hand
        </button>
      </div>

      <div className="projects-table">
        {activeTab === 'completed' ? (
          <>
            <p className="table-title">Some major projects completed in the recent past</p>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name of work/project and location</th>
                  <th>Approx. Cost of work in Lacs</th>
                  <th>Date of Completion</th>
                </tr>
              </thead>
              <tbody>
                {completedProjects.map((proj) => (
                  <tr key={proj.no}>
                    <td>{proj.no}</td>
                    <td>{proj.name}</td>
                    <td>{proj.cost}</td>
                    <td>{proj.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="table-title">Some Major Projects in Hand (Above Rs.100 Lacs)</p>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name of work/project and location</th>
                  <th>Approx. Cost of work in Lacs</th>
                </tr>
              </thead>
              <tbody>
                {inHandProjects.map((proj) => (
                  <tr key={proj.no}>
                    <td>{proj.no}</td>
                    <td>{proj.name}</td>
                    <td>{proj.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
