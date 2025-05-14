import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      no: 1,
      name: 'Water supply scheme project for Pithampur (P/L/J water main, construction of overhead tank and water treatment plant).',
      cost: 'Rs.8470 Lakhs',
      date: 'Commissioned under Trial Run'
    },
    {
      no: 2,
      name: 'P/L/J 1600-1400-1200-900-800-700mm dia MS (Lined coated )/D.I water main from Re-cycling plant. Haiderpur to Kirari UGR.',
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
      name: 'Construction of 7.70 ML capacity UGR & BPS at Y-Block, Mangolpuri alongwith P/L/J peripheral water mains under the command.',
      cost: 'Rs.2500 Lakhs',
      date: '04.09.2017'
    },
    {
        no: 6,
        name: 'Replacement of 1000mm & 1500mm dia PSC water pipe lines emanating from Haiderpur in Stretches near Prashant Vihar, Delhi Cantt BPS, Mangolpuri, Meera Bagh & Carriappa Marg.',
        cost: 'Rs.2246 Lakhs',
        date: '17.04.2014'
    },
   
    {
        no: 7,
        name: 'Replacement of balance two stretches of old PSC 1500mm dia main carrying Treated effluent from STP Okhla to Tilak Bridge.',
        cost: 'Rs.2032 Lakhs',
        date: '18.04.2019'
      },
      {
        no: 8,
        name: 'Providing & Laying of Raw water & Clear water transmission mains (DI & MS Pipes) to METL Industrial Township at District Jhajjar, Haryana.',
        cost: 'Rs.1911 Lakhs',
        date: '	Under Commissioning'
      },
      {
        no: 9,
        name: 'P/L/J 900-800-700-500-300-250-200mm dia Peripheral water mains for the villages on the command of UGR of Qutab Garh.',
        cost: 'Rs.1597 Lakhs',
        date: '19.12.2012'
      },
      {
        no: 10,
        name: 'Providing / Laying / Jointing / Testing and Commissioning of Feeder Water Main for Shankar Vihar and Mahipal Pur Reservoir.',
        cost: 'Rs.1432 Lakhs',
        date: '27.12.2017'
      },
      {
        no: 11,
        name: 'Diversion of Utilities of water supply between Netaji Subhash Place, Shakur pur to Rohtak Road stretch) (L&T DMRC).',
        cost: 'Rs.1442 Lakhs',
        date: '28.06.2014'
      },
      {
        no: 12,
        name: 'Replacement / shifting of 900mm dia PSC Triplicate water main into 900mm dia MS pipe from Majnu Ka Teela Pontoon Bridge to Salim Garh Fort Delhi.',
        cost: 'Rs.1200 Lakhs',
        date: '	03.12.2015'
      },
      {
        no: 13,
        name: '	Shifting of water mains 1500mm dia and 1000mm dia due to construction of Grade Separator at Dabri Intersection of Pankha Road and Road leading to Dwarka near Janakpuri.',
        cost: 'Rs.1090 Lakhs',
        date: '25.05.2010'
      },
      {
        no: 14,
        name: 'P/L/Jt. Peripheral water lines under the command area of Shahadra UGR.',
        cost: 'Rs.1071 Lakhs',
        date: '03.03.2008'
      },
      {
        no: 15,
        name: 'P/L/J peripheral main with D.I. Pipes 600mm dia for villages on the command of Daulatpur UGR.',
        cost: 'Rs.1001 Lakhs',
        date: '25.07.2008'
      },
      {
        no: 16,
        name: 'Providing, Laying and Commissioning of peripheral water lines under the command of 4.90 MG capacity UGR at Vishwakarma Park (Geeta Colony) in TYA.',
        cost: 'Rs.941 Lakhs',
        date: '12.01.2009'
      },
      {
        no: 17,
        name: 'P/L/J peripheral water mains in the command area of Kirti Nagar UGR /BPS.',
        cost: 'Rs.876.00 Lakhs',
        date: '28.03.2013'
      },
      {
        no: 18,
        name: '	Providing, Laying and Jointing 1500mm dia MS pipeline in the left out portion of Bhagya Vihar and Amar Colony in the raw water main of Dwarka W.T.P.',
        cost: 'Rs.868 Lakhs',
        date: '15.02.2020'
      },
      {
        no: 19,
        name: 'P/L/J 1100-1000-900-700-500-350-300mm dia M.S./D.I/ C.I water main for peripheral water supply scheme of area under the command of Kirari UGR.',
        cost: 'Rs.867.00 Lakhs',
        date: '15.03.2012'
      },
      {
        no: 20,
        name: '	Improvement of peripheral water main under the command of UGR and BPS (11.0 ML Capacity) at Sector-7 Rohini.',
        cost: 'Rs.715 Lakhs',
        date: '30.12.2015'
      },
      {
        no: 21,
        name: 'Replacement of old PSC 900mm dia Mehrauli main & 600mm dia Munirka main from Deer Park BPS to outer Ring Road.',
        cost: 'Rs.623 Lakhs',
        date: '17.05.2010'
      },
      {
        no: 22,
        name: 'P/L/J peripheral water lines under command of existing & proposed Tahirpur UGR in NE-I DJB.',
        cost: 'Rs.543 Lakhs',
        date: '29.05.2006'
      },
      {
        no: 23,
        name: 'P/L/J Peripheral water mains in the command area of Pitampura UGR. / BPS.',
        cost: 'Rs.461 Lakhs',
        date: '10.01.2012'
      },
      {
        no: 24,
        name: 'P/L/J peripheral water mains in E-17 (B) Sub Zone of Karawal Nagar on the command of 10 ML capacity UGR at Sonia Vihar in NE II, DJB.',
        cost: 'Rs.447 Lakhs',
        date: '	14.08.2006'
      },
      {
        no: 25,
        name: '	Diversion of Fresh Water Pipeline from KM 15.0 to KM 16.50 (approx.) on Line No. 3, East-West MRTS Corridor, Delhi Metro Rail Corporation Limited.',
        cost: 'Rs.439 Lakhs',
        date: '14.06.2004'
      },
      {
        no: 26,
        name: 'P/L/J peripheral water mains in Sonia Vihar unauthorized colony on command of 10 ML capacity UGR at Sonia Vihar in NE II, DJB.',
        cost: 'Rs.406 Lakhs',
        date: '20.05.2006'
      },
      {
        no: 27,
        name: 'P/L/J peripheral water mains in Yamuna Vihar (E-14 Sub Zone) and E-17 (A) Sub Zone of Karawal Nagar in the command of 15 ML capacity UGR at Yamuna Vihar in NE-II, DJB.',
        cost: 'Rs.367 Lakhs',
        date: '12.08.2006'
      },
      {
        no: 28,
        name: 'P/L/J 600-400-300-200-150-100mm dia peripheral water mains under the command of UGR & BPS at Mohan Garden.',
        cost: 'Rs.341 Lakhs',
        date: '20.04.2007'
      },
      {
        no: 29,
        name: 'Providing/laying and jointing peripheral water mains in Shastri Park (Brahm Puri) existing UGR of 2.31 MG capacity (Seelampur) Shahadra.',
        cost: 'Rs.330 Lakhs',
        date: '21.05.2008'
      },
      {
        no: 30,
        name: 'Replacement of 600mm dia damaged PSC water main from Baba Colony More to Burari UGR (Opposite A-5 R/Well).',
        cost: 'Rs.329 Lakhs',
        date: '20.07.2014'
      },
      {
        no: 31,
        name: 'P/L/J 600mm dia DI incoming water line for UGR at P-Block, Mohan Garden.',
        cost: 'Rs.313 Lakhs',
        date: '20.10.2006'
      },
      {
        no: 32,
        name: 'Replacement of 900mm dia old PSC Triplicate water main emanating from Wazirabad WW in between Shantivan to Samta Sthal stretch with 900mm dia MS lined and coated pipe.',
        cost: 'Rs.304 Lakhs',
        date: '08.07.2019'
      },
      {
        no: 33,
        name: 'P/L/J 600mm dia D.I class K-9 feeder main from Kharkhari Round to UGR at Daulatpur.',
        cost: 'Rs.300 Lakhs',
        date: '22.12.2006'
      },
      {
        no: 34,
        name: 'P/L 300/250/200/150/100mm dia D.I. water line in JJC Bawana in AC-07 Bawana under EE(NW)-II.',
        cost: 'Rs.235 Lakhs',
        date: '17.06.2015'
      },
      {
        no: 35,
        name: 'Replacement / shifting of 900mm dia Kilokari water main in front of Delhi Secretariat on service road near Ring Road, I.P. Estate fly over, New Delhi.',
        cost: 'Rs.174 Lakhs',
        date: '13.05.2014'
      },

      {
        no: 36,
        name: 'Providing & laying Peripheral water main under the command of underground reservoir at APMC, Azadpur.',
        cost: 'Rs.170 Lakhs',
        date: '11.04.2014'
      },
      {
        no: 37,
        name: 'P/L/J internal Sewer Line in Sadh Nagar Part-II in Palam area.',
        cost: 'Rs.167 Lakhs',
        date: '19.01.2009'
      },
      {
        no: 38,
        name: 'Replacement of old AC/Cast Iron water lines in Najafgarh Zone, Executive Engineer (South West)-I, Delhi Jal Board.',
        cost: 'Rs.157 Lakhs',
        date: '13.08.2001'
      },
      {
        no: 39,
        name: 'Providing, Laying & Jointing of 100 mm dia to 500 mm dia Cast Iron water main from tube wells in Iradat Nagar to existing 1000 mm dia water main at Bawana Narela Road, Executive Engineer (Water)Construction-VIII, Delhi Jal Board.',
        cost: 'Rs.150 Lakhs',
        date: '09.07.2003'
      },
      {
        no: 40,
        name: 'P/L/J 900-800-750-600 mm dia MS peripheral water mains for Kalyan Puri, Khichripur & adjoining areas under command area at Gazipur UGR East-I.',
        cost: 'Rs.150 Lakhs',
        date: '19.02.2006'
      },
      {
        no: 41,
        name: 'P/L/J 800mm dia feeder main to Janakpuri reservoir and booster pumping station with D.I. Pipes.',
        cost: 'Rs.178 Lakhs',
        date: '08.04.2008'
      },
      {
        no: 42,
        name: 'P/L 800 to 250mm dia peripheral water main for Budh Vihar Phase-I and II in AC-06 Rithala under EE(NW)-II.',
        cost: 'Rs.147 Lakhs',
        date: '05.08.2013'
      },
      {
        no: 43,
        name: 'P/L/J 600mm dia Feeder Main from Chandpur to UGR & BPS at Sultanpur Dabas (Rural North Delhi).',
        cost: 'Rs.140 Lakhs',
        date: '30.06.2007'
      },
      {
        no: 44,
        name: 'Development of Classic Golf Resort on Manesar-Tauroo Road, Gurgaon, Haryana for Land base India Ltd. An ITC group company.',
        cost: 'Rs.135 Lakhs',
        date: '27.04.2000'
      },
      {
        no: 45,
        name: 'Replacement of 150mm A.C. Water line with 300-250-200mm dia water line for Jharoda Kalan Village and Jharoda Road Colonies under Executive Engineer (South West)-II, Delhi Jal Board.',
        cost: 'Rs.127 Lakhs',
        date: '08.03.2014'
      },
      {
        no: 46,
        name: 'P/L/J 900mm dia water line from WTP-III to Raw water pumping station for recycling plant at Wazirabad.',
        cost: 'Rs.120 Lakhs',
        date: '10.06.2013'
      },
      {
        no: 47,
        name: 'Providing water supply system in Zone A and Zone B of Phase V, DLF Qutab Enclave, Gurgaon, Haryana for DLF Industries Limited.',
        cost: 'Rs.105 Lakhs',
        date: '31.07.1994'
      },
      {
        no: 48,
        name: 'Replacement of old 900mm dia PSC Duplicate Main from Majnoo Ka Teela (Pontoon Pul) to Rajghat, Old Fort to Moolchand Flyover / GK UGR and 800mm dia Okhla Main from Barapullah Nallah to UGR, Okhla WTP.',
        cost: 'Rs.5762.85 Lakhs',
        date: '12.09.2022'
      },
      {
        no: 49,
        name: 'Water Supply Distribution Network Scheme of Nagar Palika Nigam Dewas.',
        cost: 'Rs.2025.05 Lakhs',
        date: '30.06.2021'
      },
      {
        no: 50,
        name: 'Water distribution Scheme of Municipal Council, Biaora, Distt. Rajgarh, M.P.',
        cost: 'Rs.1002.40 Lakhs',
        date: '15.05.2019'
      },
      {
        no: 51,
        name: 'Replacement of 1500 mm dia PSC Raw Watermain by 1500 mm dia MS raw water main with internal cement mortar lining from Samshan-ghat sultanpur to Shri Dada Mandu Pond Karala village under EE (Project) W-IX.',
        cost: 'Rs.917.28 Lakhs',
        date: '31.05.2023'
      },
      {
        no: 52,
        name: 'Providing laying internal D.I water distribution system in Abul Fazal Enclave Block E To N in Okhla Constituency AC-54 under EE(South)IV.',
        cost: 'Rs.339.18 Lakhs',
        date: 'Under Commissioning'
      },
      {
        no: 53,
        name: 'Providing/Laying/ Jointing internal and peripheral Sewer line in Goyla Vihar GOC.',
        cost: 'Rs.4441.00 Lakhs',
        date: 'Under Commissioning'
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
      name: 'Replacement of old 900mm dia PSC Duplicate Main from Majnoo Ka Teela (Pontoon Pul) to Rajghat, Old Fort to Moolchand Flyover / GK UGR and 800mm dia Okhla Main from Barapullah Nallah to UGR, Okhla WTP.',
      cost: 'Rs.5270 Lakhs'
    },
    {
      no: 3,
      name: 'P/L/J of 1300mm dia feeder main emanating from Palla MBR for Holambi Kalan UGR to replace existing water mains upto Alipur Guest House.',
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
    },
    {
      no: 6,
      name: 'P/L/J 900/600mm dia MS/DI feeder main and various sizes of distribution mains for Bijwasan and Rajokari UGR/BPS.',
      cost: 'Rs.3155 Lakhs'
    },
    {
      no: 7,
      name: 'Replacement of 1000mm dia PSC Rising Main with 1000mm dia M.S. Lined & Coated Pipes from Bawana WTP to Karala OHT.',
      cost: 'Rs.2811 Lakhs'
    },
    {
      no: 8,
      name: 'Water Supply Distribution Network Scheme of Nagar Palika Nigam Dewas.',
      cost: 'Rs.2150 Lakhs'
    },
    {
      no: 9,
      name: 'Supply, Installation, Testing & Commissioning (SITC) of Ductile Iron Water Supply Pipe Lines and Associated Works at IGI Airport, New Delhi.',
      cost: 'Rs.1079 Lakhs'
    },
    {
      no: 10,
      name: 'Water distribution Scheme of Municipal Council, Biaora, Distt. Rajgarh, M.P.',
      cost: 'Rs.979 Lakhs'
    },
    {
      no: 11,
      name: 'Providing & Laying 250mm to 700mm Nominal dia internal and peripheral sewer line in Shahabad Group of Colonies falling under Rohini WWTP in Delhi.',
      cost: 'Rs.5715.00 Lakhs'
    },
    {
      no: 12,
      name: 'Providing laying internal D.I water distribution system in Shaheen Bagh (Abul Fazal Enclave Part-II) in Okhla Constituency AC-54 under EE(South)IV.',
      cost: 'Rs.767.00 Lakhs'
    },
    {
      no: 13,
      name: 'Renovation of water supply scheme priority-1 for CIS-Varuna Area, Varanasi and appurtenant works of Varanasi city including all necessary works required for commissioning the system including one year defect liability period after successful trial run and comissioning under AMRUT program.',
      cost: 'Rs.8424.00 Lakhs'
    },
    {
      no: 14,
      name: 'P/L/J Internal & Peripheral sewer lines in Kazipur GOC under the command of proposed STP at Kazipur.',
      cost: 'Rs.2453.00 Lakhs'
    },
    {
      no: 15,
      name: 'P/L/J Internal & Peripheral sewer lines in Sarangpur GOC under the command of proposed STP at Sarangpur.',
      cost: 'Rs.6322.00 Lakhs'
    },
    {
      no: 16,
      name: 'Construction of 272.36 MLD (60 MGD) Sewage Pumping Station and other related/associated appurtenant works on Design, Build & Operate basis at Kilokri, New Delhi.',
      cost: '“Capex Cost-5619 O&M Cost -863″'
    },
    {
      no: 17,
      name: 'Replacement / Providing and laying 1000mm dia Rising Main from Ghonda SPS-II to STP Yamuna Vihar, Delhi.',
      cost: 'Rs.1648.00 Lakhs'
    },
    {
      no: 18,
      name: 'Replacement of 1000mm dia PSC water main by 1000mm dia MS pipeline from Deer park UGR/BPS to IIT gate trenchless technology under EE(Proj)W-VII.',
      cost: 'Rs.2101.00 Lakhs'
    },
    {
      no: 19,
      name: 'Providing/Laying 900mm dia Rising Main from Uttam Nagar SPS to Keshopur STP.',
      cost: 'Rs.2101.00 Lakhs'
    },
    {
      no: 20,
      name: 'Replacement of 1100mm dia PSC Rohini water main and 1000mm dia. RWS water main emanating from Haiderpur WW-II with 1100/800/700mm dia. M.S.lined & Coated Pipes.',
      cost: 'Rs.3369.00 Lakhs'
    },
    {
      no: 21,
      name: 'Replacement of 900mm dia PSC water main from District park Hauz Khas to Aurbindo marg under EE(Proj)W-VII.',
      cost: 'Rs.572.00 Lakhs'
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
            <p className="table-title">Some Major Projects Completed in the Recent Past</p>
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
