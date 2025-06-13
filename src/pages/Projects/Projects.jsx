import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      no: 1,
      name: 'Water supply scheme project for Pithampur (P/L/J water main, construction of overhead tank and water treatment plant).',
      cost: 'Rs.9003.36 Lakhs',
      date: '30.06.2021'
    },
    {
      no: 2,
      name: 'P/L sewer line in F&D Block Mahaveer Enclave Kailash Puri extension, Sagarpur and Durga Park in Dwarka Constituency.',
      cost: 'Rs.5892.00 Lakhs',
      date: '29.05.2020'
    },
    {
      no: 3,
      name: 'P/L/J 1600-1400-1200-900-800-700mm dia MS (Lined coated) / D.I. water main from Recycling Plant from Haiderpur to Kirari UGR.',
      cost: 'Rs.5029.00 Lakhs',
      date: '27.02.2012'
    },
    {
      no: 4,
      name: 'Replacement of old 900mm dia PSC Duplicate Main from Majnoo ka Teela (Pontoon Pul) to Rajghat, Old Fort to Moolchand Flyover / GK UGR and 800mm dia Okhla Main from Barapullah Nallah to UGR, Okhla WTP.',
      cost: 'Rs.5762.85 Lakhs',
      date: '12.09.2022'
    },
    {
      no: 5,
      name: 'Providing / Laying / Jointing  internal and peripheral Sewer Line in Goyla Vihar GOC.',
      cost: 'Rs.4441.00 Lakhs',
      date: '12.03.2024'
    },
    {
        no: 6,
        name: 'P/L/J of 1300mm dia feeder main emanating from Palla MBR for Holambi Kalan UGR to replace existing water mains upto Alipur Guest House.',
        cost: 'Rs.4582.00 Lakhs',
        date: '26.10.2024'
    },
   
    {
        no: 7,
        name: 'Providing Sewerage facility in Shiv Enclave group of colonies.',
        cost: 'Rs.3426.00 Lakhs',
        date: '30.05.2022'
      },
      {
        no: 8,
        name: 'Replacement of 1000mm dia PSC Raising Main with 1000mm dia MS Lined and Coated Pipe from Bawana WTP to Karala OHT.',
        cost: 'Rs.2811.00 Lakhs',
        date: '25.02.2022'
      },
      {
        no: 9,
        name: 'P/L Sewer Line in Madhu Vihar Group of Colonies in Palam Constituency falling under Dwarka W.W.T.P. Sector-16D, Dwarka.',
        cost: 'Rs.3660.00 Lakhs',
        date: '30.06.2021'
      },
      {
        no: 10,
        name: 'Providing laying internal D.I. water distribution system in Shaheen Bagh (Abul Fazal Enclave Part-II) in Okhla Constituency AC-54 under EE(South)IV.',
        cost: 'Rs.767.00 Lakhs',
        date: '20.05.2025'
      },
      {
        no: 11,
        name: 'replacement of 1000mm dia PSC water main by 1000mm dia MS pipeline from Deer Park UGR/BPS to IIT gate trenchless technology under EE(proj)W-VII.',
        cost: 'Rs.2101.00 Lakhs',
        date: '01.06.2025'
      },
      {
        no: 12,
        name: 'Replacement of 900mm dia PSC water main from District Park Hauz Khas to Aurbindo Marg under EE(Proj)W-VII.',
        cost: 'Rs.572.00 Lakhs',
        date: '	12.06.2025'
      },
      {
        no: 13,
        name: '	Supply, Installation, Testing & Commissioning (SITC) of Ductile Iron Water Supply Pipe Lines and Associated Works at IGI Airport, New Delhi.',
        cost: 'Rs.1079.00 Lakhs',
        date: '31.12.2023'
      },
      {
        no: 14,
        name: 'P/L/J 900mm dia Feeder Main from Wazirabad WTP-II to existing UGR at Ramlila Ground.',
        cost: 'Rs.2573.00 Lakhs',
        date: '30.04.2014'
      },
      {
        no: 15,
        name: 'P/L/J peripheral water mains of dia 150mm to 1600mm emanating from Karala UGR.',
        cost: 'Rs.2568.00 Lakhs',
        date: '12.09.2018'
      },
      {
        no: 16,
        name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri along with P/L/J peripheral water mains under the command.',
        cost: 'Rs.2500.00 Lakhs',
        date: '04.09.2017'
      },
      {
        no: 17,
        name: 'Replacement of 1000mm & 1500mm dia PSC water pipe lines emanating from Haiderpur in Stretches near Prashant Vihar, Delhi Cantt BPS, Mangolpuri, Meera Bagh & Carriappa Marg.',
        cost: 'Rs.2246.00 Lakhs',
        date: '17.04.2014'
      },
      {
        no: 18,
        name: 'Replacement of balance two stretches of old PSC 1500mm dia main carrying Treated effluent from STP Okhla to Tilak Bridge.',
        cost: 'Rs.2032.00 Lakhs',
        date: '18.04.2019'
      },
      {
        no: 19,
        name: 'Providing & Laying of Raw water & Clear water transmission mains (DI & MS Pipes) to METL Industrial Township at District Jhajjar, Haryana.',
        cost: 'Rs.2109.166 Lakhs',
        date: '30.06.2021'
      },
      {
        no: 20,
        name: 'P/L/J 900-800-700-500-300-250-200mm dia Peripheral water mains for the villages on the command of UGR of Qutab Garh.',
        cost: 'Rs.1597.00 Lakhs',
        date: '19.12.2012'
      },
      {
        no: 21,
        name: 'Providing / Laying / Jointing / Testing and Commissioning of Feeder Water Main for Shankar Vihar and Mahipal Pur Reservoir.',
        cost: 'Rs.1432.00 Lakhs',
        date: '27.12.2017'
      },
      {
        no: 22,
        name: 'Diversion of Utilities of water supply between Netaji Subhash Place, Shakur pur to Rohtak Road stretch) (L&T DMRC).',
        cost: 'Rs.1442.00 Lakhs',
        date: '28.06.2014'
      },
      {
        no: 23,
        name: 'Replacement / shifting of 900mm dia PSC Triplicate water main into 900mm dia MS pipe from Majnu Ka Teela Pontoon Bridge to Salim Garh Fort Delhi.',
        cost: 'Rs.1200.00 Lakhs',
        date: '03.12.2015'
      },
      {
        no: 24,
        name: 'Shifting of water mains 1500mm dia and 1000mm dia due to construction of Grade Separator at Dabri Intersection of Pankha Road and Road leading to Dwarka near Janakpuri.',
        cost: 'Rs.1090.00 lakhs',
        date: '25.05.2010'
      },
      {
        no: 25,
        name: 'P/L/Jt.. Peripheral water lines under the command area of Shahadra UGR.',
        cost: 'Rs.1071.00 lakhs',
        date: '03.03.2008'
      },
      {
        no: 26,
        name: 'P/L/J peripheral main with D.I. Pipes 600mm dia for villages on the command of Daulatpur UGR.',
        cost: 'Rs.1001.00 lakhs',
        date: '25.07.2008'
      },
      {
        no: 27,
        name: 'Water Supply Distribution Project for Dewas City under AMRUT Mission.',
        cost: 'Rs.2251.00 Lakhs',
        date: '30.06.2021'
      },
      {
        no: 28,
        name: 'Water distribution Scheme of Municipal Council, Biaora, Distt. Rajgarh, M.P.',
        cost: 'Rs.1002.40 Lakhs',
        date: '15.05.2019'
      },
      {
        no: 29,
        name: 'Replacement of 1500 mm dia PSC Raw water main by 1500 mm dia MS raw water main with internal cement mortar lining from Samshan-ghat Sultanpur to Shri Dada Mandu Pond karala village under EE (Proj.) W-IX.',
        cost: 'Rs.917.28 Lakhs',
        date: '31.05.2023'
      },
      

  ];

  const inHandProjects = [
    {
      no: 1,
      name: 'P/L/J 900/600mm dia MS/DI feeder main and various sizes of distribution mains for Bijwasan and Rajokari UGR/BPS.',
      cost: 'Rs.3155.00 Lakhs'
    },
    {
      no: 2,
      name: 'Providing & Laying 250mm to 700mm nominal dia internal and peripheral sewer line in Shahbad Group of Colonies falling under Rohini WWTP in Delhi.',
      cost: 'Rs.5715.00 Lakhs'
    },
    {
      no: 3,
      name: 'Renovation of water supply scheme priority-1 for CIS-Varuna Area, Varanasi and appurtenant works of Varanasi city including all necessary works required for commissioning the system including one year defect liability period after successful trial run and commissioning under AMRUT program.',
      cost: 'Rs.8424.00 Lakhs'
    },
    {
      no: 4,
      name: 'Providing, Laying and Jointing Internal & Peripheral sewer lines in Kazipur GOC under the command of proposed STP as Kazipur.',
      cost: 'Rs.2453.00 Lakhs'
    },
    {
      no: 5,
      name: 'Providing, Laying and Jointing Internal & Peripheral sewer lines in Sarangpur GOC under the command of proposed STP as Sarangpur.',
      cost: 'Rs.6322.00 Lakhs'
    },
    {
      no: 6,
      name: 'Construction of 272.36 MLD (60 MGD) Sewage Pumping Station and other related/associated appurtenant works on DBO Basis at Kilokri, New Delhi.',
      cost: 'Capex Cost = Rs.5619 Lakhs & O&M Cost = Rs.863 Lakhs'
    },
    {
      no: 7,
      name: 'Replacement / Providing and Laying 1000mm dia Rising Main from Ghonda SPS-II to STP Yamuna Vihar, Delhi',
      cost: 'Rs.1648.00 Lakhs'
    },
    {
      no: 8,
      name: 'Providing / Laying 900mm dia Rising Main from Uttam, Nagar SPS to Keshopur STP.',
      cost: 'Rs.2514.00 Lakhs'
    },
    {
      no: 9,
      name: 'Replacement of 1100mm dia PSC Rohini water main and 1000mm dia RWS water main emanating from Haiderpur WW-II with 1100/800/700 mm dia M.S. Lined & Coated pipes.',
      cost: 'Rs.3369.00 Lakhs'
    },
    {
      no: 10,
      name: 'Jais Nagar Palika Parishad Water Supply Scheme in Jais Nagar Palika Parishad, District-Amethi of Uttar Pradesh Under Amrut 2.0.',
      cost: 'Rs.3173.24 Lakhs'
    },
    {
      no: 11,
      name: 'Augmentation and extension of Chandauli Nagar Panchayat Water Supply Scheme.',
      cost: 'Rs.2297.55 Lakhs'
    },
    {
      no: 12,
      name: 'Atrauli Nagar Palika Parishad reorganization of water supply scheme District Aligarh.',
      cost: 'Rs.4384.33 Lakhs'
    },
    {
      no: 13,
      name: 'Supply & Laying SAW feeder main parallel to existing GRP feeder main pipeline (dia 1500/1400/1200 mm) for Kanpur water supply scheme through Ganga Barrage” on turnkey basis. Location: Company bagh Chouraha to Phool Bagh IPS (Total length 4.21 Km).',
      cost: 'Rs.3540.36 Lakhs'
    },
    {
      no: 14,
      name: 'Mahagama Urban Water Supply Scheme with 5 years of Operation and Maintenance.',
      cost: 'Rs.7950.38 Lakhs'
    },
    {
      no: 15,
      name: 'Agra Water Supply Project (JICA Loan Agreement no.ID-P239) Contract Package 12 A-2 : (for 3 pilot zone) Performance -Based Construction and Maintenance Contract for Bodla-1,Bodla-III and Lohamandi Pilot Zones in Agra City.',
      cost: 'Rs.8794.98 Lakhs & O&M Cost = Rs.2365.11 Lakhs'
    },
    {
      no: 16,
      name: 'Design, Drawing, Construction, Testing, Commissioning of water supply scheme including testing & trial run under Bitkuli-Rampur of Balodabazar development block of Bhatapara district.',
      cost: 'Rs.5679.27 Lakhs'
    },
    {
      no: 17,
      name: 'Design, Drawing, Construction, Testing, Commissioning of water supply scheme including testing & trial run under Chainpur Multi Village water supply scheme of Block Manendragarh, District Korea (C.G.).',
      cost: 'Rs.3061.23 Lakhs'
    },
    {
      no: 18,
      name: 'Potable Trunk line - Mundakhera to Daryapur for Model Economic Township, Jhajjar, Haryana.',
      cost: 'Rs.360.50 Lakhs'
    },
    {
      no: 19,
      name: 'Potable Trunk line - Daryapur to Lohat for Model Economic Township, Jhajjar, Haryana.',
      cost: 'Rs.1582.52 Lakhs'
    },
    
  ];

  return (
    
    <div className="projects-container">
      <h1 className="projects-title">[ PROJECTS ]</h1>

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
            <p className="table-title">Some Major Projects Completed in the Recent Past (Above Rs.100 Lakhs)</p>
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
            <p className="table-title">Some Major Projects in Hand (Above Rs.100 Lakhs)</p>
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
