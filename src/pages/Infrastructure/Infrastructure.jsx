import React from 'react';
import './Infrastructure.css';

const Infrastructure = () => {
  const infrastructureItems = [
    { id: 1, name: "Heavy Earth Movers-Poclain of make L &T (CK-90-3)", count: "2 Nos." },
    { id: 2, name: "J.C.B. Excavator Cum Loader of Escort make.", count: "4 Nos." },
    { id: 3, name: "Dumpers", count: "6 Nos." },
    { id: 4, name: "Diesel Generating sets 62.5 KVA to 15 KVA", count: "6 Nos." },
    { id: 5, name: "Dewatering Pump set with Generator", count: "6 Nos." },
    { id: 6, name: "Dewatering Sump Pumps (Submersible Pumps) 20 H.P.", count: "86 Nos." },
    { id: 7, name: "Hydraulic Pressure Testing Machine", count: "3 Nos." },
    { id: 8, name: "Smoke Testing Machine", count: "2 Nos." },
    { id: 9, name: "Imported Die Sets for all sizes.", count: "30 Nos." },
    { id: 10, name: "R.C.C. Cutting Machine.", count: "1 Nos." },
    { id: 11, name: "Theodolite", count: "2 Nos." },
    { id: 12, name: "Dumpy Level (Levelling Equipment)", count: "2 Nos." }, 
    { id: 13, name: "Measuring Chain", count: "4 Nos." }, 
    { id: 14, name: "Metallic Tape", count: "10 Nos." }, 
    { id: 15, name: "Lathe Machine", count: "2 Nos." }, 
    { id: 16, name: "Gas Cutter", count: "4 Nos." }, 
    { id: 17, name: "Welding Set", count: "4 Nos." }, 
    { id: 18, name: "Chain Pulley Block 5/10 Tonne Capacity", count: "2 Nos." }, 
    { id: 19, name: "Air Compressor", count: "2 Nos." }, 
    { id: 20, name: "Concrete Mixer of full bag capacity with Hopper", count: "5 Nos." }, 
    { id: 21, name: "Vibrator-Surface/Needle Type", count: "6 Nos." }, 
    { id: 22, name: "Steel Plate barricading as per DMRC design", count: "750 Sq. Mtr." }, 
    { id: 23, name: "Pipe Cutting Machine", count: "5 Nos." }, 
    { id: 24, name: "Pipe Bending Machine", count: "5 Nos." }, 
    { id: 25, name: "Tools for plumbing work", count: "100 sets" }, 
    { id: 26, name: "Steel Centering and Shuttering", count: "3200 Sq. Mtr." }, 
    { id: 27, name: "Timbering for trenches", count: "500 Sq. Mtr." }, 
    { id: 28, name: "Scaffolding Material", count: "1 Lot." }, 
    { id: 29, name: "Water Tankers", count: "4 Nos." }, 
    { id: 30, name: "Tractor", count: "1 Nos." }, 
    { id: 31, name: "3 HP/5 HP Electric motors with Well point equipment for dewatering", count: "5 Nos." }, 
    { id: 32, name: "Builders Hoist", count: "2 Nos." }, 
    { id: 33, name: "Tempo", count: "2 Nos." }, 
    { id: 34, name: "Tata Sumo Vehicle", count: "1 Nos." }, 
    { id: 35, name: "Trailer - Heavy Duty", count: "1 Nos." }, 
    { id: 36, name: "Trailer - Ordinary", count: "2 Nos." }, 

    
  ];

  return (
    <div className="infrastructure-container">
      <header className="page-header">
        <h1>OUR INFRASTRUCTURE</h1>
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/company-summary">Company Summary</a> &gt; Our Infrastructure
        </div>
      </header>

      <div className="content-container-centered">
        <div className="infrastructure-list">
          <table className="equipment-table">
            <tbody>
              {infrastructureItems.map((item) => (
                <tr key={item.id}>
                  <td className="item-number">{item.id}.</td>
                  <td className="item-name">{item.name}</td>
                  <td className="item-count">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;