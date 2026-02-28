
import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Globe, Phone } from 'lucide-react';

export function BranchNetwork() {
  return (
    <PageContainer>
      <Header />

      <div className="flex-1 relative bg-[#0a1628] overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
            'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="relative z-10 p-8 flex-1 flex flex-col items-center">
          <div className="flex justify-between w-full items-start mb-8">
            <div className="relative">
              <div className="text-6xl font-black text-[#fbbf24] leading-none drop-shadow-lg">17</div>
              <div className="bg-[#fbbf24] text-black text-xs font-bold px-2 py-0.5 transform -rotate-6 inline-block">
                YEARS EXCELLENCE
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-black text-[#fbbf24] uppercase tracking-wider">Branch</h2>
              <h2 className="text-4xl font-black text-white uppercase tracking-wider">Network</h2>
            </div>

            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-center text-white leading-none">
                <span className="block text-xs font-bold">VISTA</span>
                <span className="block text-[8px]">SOLAR</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/Screenshot_2026-01-27_095839.png"
                alt="Branch Network Map"
                className="h-full w-auto object-contain opacity-90" />

            </div>
          </div>

          <div className="w-full mt-auto">
            <div className="mb-4 ml-4">
              <h3 className="text-[#fbbf24] font-bold uppercase text-sm mb-1">Global Network Office</h3>
              <div className="bg-[#1e3a8a]/80 p-2 rounded border border-gray-600 inline-flex items-center gap-3 max-w-sm">
                <div className="w-8 h-6 bg-green-600 relative overflow-hidden border border-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border border-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white text-[10px] leading-tight">
                  <div className="font-bold">RENEWABLE ENERGY MALDIVES</div>
                  <div>8th floor, Faaroshige, Orchid Magu, Malé 20189, Maldives</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a] border-t-4 border-[#fbbf24] py-3 px-8 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold">
                <div className="bg-[#fbbf24] text-black p-1 rounded">
                  <Phone size={16} />
                </div>
                <span className="text-lg">HOTLINE 076 763 2647</span>
              </div>

              <div className="flex items-center gap-2 text-white font-bold">
                <Globe size={20} className="text-[#fbbf24]" />
                <span className="text-lg">WEBSITE REMSOLAR.LK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 text-center">
        <h3 className="text-[#4a6fa5] font-bold text-lg uppercase tracking-wide">
          Renewable Energy Maldives Lanka (Pvt) Ltd <span className="text-gray-400 text-sm ml-2">9</span>
        </h3>
      </div>
    </PageContainer>);

}

