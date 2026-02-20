import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Home, Leaf, Shield, Zap, MapPin, Globe } from 'lucide-react';
import logo from '../assets/untitled_design.png';

export function CoverPage() {
  return (
    <PageContainer className="relative font-sans text-slate-900 overflow-hidden" id="proposal-cover">
      
      {/* --- BACKGROUND DECORATIONS (pointer-events-none added for print stability) --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50/50 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
      
      {/* Side Decorative Bar */}
      <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#1e3a8a] via-yellow-500 to-[#1e3a8a] z-50" />

      {/* Main Content Wrapper - Fixed Padding for A4 */}
      <div className="relative z-10 flex flex-col items-center px-16 pt-10 pb-12 h-[297mm]">
        
        {/* --- LOGO SECTION --- */}
        <div className="w-full flex flex-col items-center mb-6">
          <img 
            src={logo} 
            alt="Vista Solar Logo" 
            style={{ 
              height: '220px', // PDF එකට ඔරොත්තු දෙන ලෙස ප්‍රමාණය මදක් අඩු කළා
              width: 'auto', 
              objectFit: 'contain'
            }} 
          />
          <div className="h-1 w-48 bg-yellow-500 mt-4 rounded-full opacity-40" />
        </div>

        {/* --- TITLE SECTION --- */}
        <div className="text-center mb-8 w-full">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.5em] mb-3">Official Business</p>
          <div className="relative inline-block w-full max-w-2xl">
             <div className="absolute -inset-2 bg-yellow-500 rounded-2xl blur-md opacity-10"></div>
             <div className="relative bg-[#141b2d] px-8 py-8 rounded-2xl shadow-xl border-b-[10px] border-yellow-500">
                <h2 className="text-xl font-serif italic text-slate-400 mb-2">Proposal For</h2>
                <h1 className="text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                  Design & <br />
                  <span className="text-yellow-500">Installation</span>
                </h1>
                <p className="text-lg font-bold text-slate-400 mt-4 tracking-[0.2em]">SOLAR ENERGY SYSTEMS</p>
             </div>
          </div>

          <div className="mt-8 flex justify-center">
             <div className="bg-white border-2 border-slate-100 shadow-lg px-8 py-2.5 rounded-xl">
                <p className="text-base font-black text-slate-800 tracking-wider flex items-center gap-4">
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
                  SEA REGISTRATION NO: 0000001
                </p>
             </div>
          </div>
        </div>

        {/* --- CENTER AREA (Modified for PDF positioning) --- */}
        <div className="relative flex items-center justify-center w-full my-8 min-h-[350px]">
          {/* Left Cards */}
          <div className="absolute left-0 flex flex-col gap-6 z-20">
             <div className="flex items-center gap-4 bg-[#1e3a8a] p-4 rounded-2xl shadow-xl border-l-8 border-yellow-500 w-56">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1e3a8a] shrink-0">
                   <Home size={28} strokeWidth={2.5} />
                </div>
                <div className="text-white">
                   <p className="text-lg font-black leading-none uppercase">Residential</p>
                   <p className="text-[10px] font-bold opacity-80 uppercase">Premium Household</p>
                </div>
             </div>
             <div className="flex items-center gap-4 bg-emerald-800 p-4 rounded-2xl shadow-xl border-l-8 border-yellow-500 w-56">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                   <Leaf size={28} strokeWidth={2.5} />
                </div>
                <div className="text-white">
                   <p className="text-lg font-black leading-none uppercase">Eco-Friendly</p>
                   <p className="text-[10px] font-bold opacity-80 uppercase">100% Carbon Neutral</p>
                </div>
             </div>
          </div>

          {/* Center Hexagon Image */}
          <div className="relative w-[380px] h-[340px] drop-shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 clip-hexagon"></div>
            <div className="absolute inset-[6px] bg-white clip-hexagon"></div>
            <div className="absolute inset-[14px] clip-hexagon bg-slate-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Solar Panels"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="absolute right-0 flex flex-col gap-6 z-20">
             <div className="bg-[#141b2d] p-6 rounded-[2rem] shadow-2xl text-center w-36 border-t-8 border-orange-500">
                <Zap className="mx-auto mb-2 text-orange-500" size={30} />
                <p className="text-4xl font-black text-white leading-none">40%</p>
                <p className="text-[9px] font-bold text-orange-400 mt-1 uppercase">Savings</p>
             </div>
             <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl text-center w-36 border-t-8 border-[#1e3a8a] border border-slate-100">
                <Shield className="mx-auto mb-2 text-[#1e3a8a]" size={30} />
                <p className="text-3xl font-black text-slate-900 leading-none">25 Yrs</p>
                <p className="text-[9px] font-bold text-blue-600 mt-1 uppercase font-black">Warranty</p>
             </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="w-full mt-auto border-t-4 border-slate-50 pt-8 flex justify-between items-center">
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-slate-100 rounded-xl"><MapPin className="text-yellow-600" size={18} /></div>
               <span className="text-sm font-black text-slate-700">Negombo, Sri Lanka 11410</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-50 rounded-xl"><Globe className="text-[#1e3a8a]" size={18} /></div>
               <span className="text-sm font-black text-[#1e3a8a] italic italic">www.vistasolar.lk</span>
            </div>
          </div>
          <div className="text-right">
             <p className="text-base font-black text-[#1e3a8a] uppercase tracking-widest leading-none">Sustainability First</p>
             <p className="text-[10px] text-slate-400 font-bold tracking-widest mt-1">© 2026 Vista Solar Energy (Pvt) Ltd</p>
          </div>
        </div>
      </div>

      <style>{`
        .clip-hexagon { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
        @media print {
          body { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
          /* PDF එකේදී elements එක උඩ එක වැටීම වැලැක්වීමට */
          .relative { position: relative !important; }
        }
      `}</style>
    </PageContainer>
  );
}