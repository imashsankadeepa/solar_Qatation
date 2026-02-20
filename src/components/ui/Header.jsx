import React from 'react';
import UntitledDesign from "../../assets/untitled_design.png";

export function Header() {
  const styles = {
    // This container is now smaller (decreased)
    logoContainer: {
      width: '450px', 
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible', // Allows the logo to feel "big"
    },
    // The logo is now set to fill that container fully
    logoImg: {
      maxWidth: '400%', // Increased scale to make logo look big
      maxHeight: '400%',
      objectFit: 'contain',
      transform: 'scale(1.2)', // Subtle zoom to maximize visibility
    }
  };

  return (
    <header className="flex items-center justify-between p-8 pb-6 border-b-4 border-black bg-white w-full">
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img 
          src={UntitledDesign} 
          alt="Vista Solar Logo" 
          style={styles.logoImg}
          onError={(e) => { 
            e.currentTarget.style.display = 'none';
          }} 
        />
      </div>

      {/* Contact Information */}
      <div className="text-right text-[#4a6fa5] flex flex-col items-end">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-1">
          vistasolar <span className="text-sm font-bold">(Pvt) Ltd.</span>
        </h2>
        <address className="not-italic text-sm font-bold leading-tight text-slate-700">
          <p>No.121/1 St Joseph's St</p>
          <p>Negombo 11410, Sri Lanka</p>
          <div className="mt-2 space-y-0.5">
            <p className="text-[#4a6fa5]">Mobile: <span className="text-black">+94 71 650 0200</span></p>
            <p className="text-[#4a6fa5]">Email: <span className="text-black">info@vistasolar.lk</span></p>
            <p className="text-[#4a6fa5]">Web: <span className="text-black">www.vistasolar.lk</span></p>
          </div>
        </address>
      </div>
    </header>
  );
}