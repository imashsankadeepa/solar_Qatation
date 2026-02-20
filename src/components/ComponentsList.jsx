
import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function ComponentsList() {
  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-8 py-4">
        <h2 className="text-2xl font-bold text-[#4a6fa5] text-center mb-6">Components List</h2>

        <div className="w-full text-sm">
          <div className="grid grid-cols-[150px_200px_1fr_180px] bg-[#4a6fa5] text-white text-center font-bold">
            <div className="p-3 flex items-center justify-center border-r border-white/20">Components</div>
            <div className="p-3 flex items-center justify-center border-r border-white/20">
              REM SOLAR Specified<br />Brands
            </div>
            <div className="p-3 flex items-center justify-center border-r border-white/20">Specifications</div>
            <div className="p-3 flex items-center justify-center">
              Warranty cover and<br />Remarks
            </div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300 bg-[#4a6fa5]/10">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">Solar PV Module</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <div className="text-green-600 font-bold text-xl italic">
                JinKO <span className="text-xs not-italic text-gray-500 block text-center">Solar</span>
              </div>
            </div>
            <div className="p-3 flex items-center bg-gray-100">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>JINKO 620W N - Type</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-200 text-xs font-medium">
              <p className="font-bold">Product Warranty</p>
              <ul className="list-disc list-inside pl-1">
                <li>12 years</li>
              </ul>
              <p className="font-bold mt-1">Performance Warranty</p>
              <ul className="list-disc list-inside pl-1">
                <li>30 years</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">Solar PV Inverter</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <div className="text-red-600 font-bold text-lg flex items-center gap-1">
                <div className="w-6 h-6 bg-red-500 rounded-full opacity-20"></div> HUAWEI
              </div>
            </div>
            <div className="p-3 flex items-center bg-white">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>HUAWEI</li>
              </ul>
            </div>
            <div className="p-3 bg-white text-xs font-medium">
              <ul className="list-disc list-inside pl-1">
                <li>10 years</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300 bg-[#4a6fa5]/10">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">
              Mounting Structure<br />- Rooftop
            </div>
            <div className="p-3 flex items-center justify-center bg-white">
              <div className="bg-red-600 text-white px-2 py-1 font-bold text-sm italic">SWISSTEK</div>
            </div>
            <div className="p-3 flex items-center bg-gray-100">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Aluminum</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-200 text-xs font-medium">10 years guaranteed durability</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">DC Cable</div>
            <div className="p-3 flex items-center justify-center bg-white gap-2">
              <span className="text-blue-800 font-bold text-xs">KELANI</span>
              <span className="text-orange-500 font-bold text-lg">LAPP</span>
            </div>
            <div className="p-3 flex items-center bg-white">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Kelani cable</li>
                <li>LAPP</li>
              </ul>
            </div>
            <div className="p-3 bg-white text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300 bg-[#4a6fa5]/10">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">AC Cable & Earth</div>
            <div className="p-3 flex items-center justify-center bg-white gap-2">
              <span className="text-blue-800 font-bold text-xs">KELANI</span>
              <span className="text-yellow-600 font-bold text-xs border border-yellow-600 rounded-full px-1">sierra</span>
            </div>
            <div className="p-3 flex items-center bg-gray-100">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Kelani cable & sierra cable</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-200 text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">
              SPD<br />(Surge Protection<br />System)
            </div>
            <div className="p-3 flex flex-col items-center justify-center bg-white gap-1">
              <span className="text-red-600 font-bold text-lg">ZBENY</span>
              <span className="text-green-600 font-bold text-lg">suntree</span>
            </div>
            <div className="p-3 flex items-center bg-white">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Zj beny</li>
                <li>suntree</li>
              </ul>
            </div>
            <div className="p-3 bg-white text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300 bg-[#4a6fa5]/10">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">MCB</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <span className="text-green-600 font-bold">Schneider</span>
            </div>
            <div className="p-3 flex items-center bg-gray-100">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Schneider</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-200 text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">Isolator ( DC & AC )</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <span className="text-red-600 font-bold text-lg">ZBENY</span>
            </div>
            <div className="p-3 flex items-center bg-white">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Zj beny</li>
                <li>Suntree</li>
              </ul>
            </div>
            <div className="p-3 bg-white text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300 bg-[#4a6fa5]/10">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">Earth</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <span className="text-green-600 font-bold">suntree</span>
            </div>
            <div className="p-3 flex items-center bg-gray-100">
              <ul className="list-disc list-inside text-xs font-bold">
                <li>Divolca</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-200 text-xs font-medium">Manufacturer Warranty</div>
          </div>

          <div className="grid grid-cols-[150px_200px_1fr_180px] border-b border-gray-300">
            <div className="p-3 bg-[#4a6fa5] text-white font-medium flex items-center">Data Logging Stick</div>
            <div className="p-3 flex items-center justify-center bg-white">
              <span className="text-red-600 font-bold">DIVOLCA</span>
            </div>
            <div className="p-3 flex items-center bg-white">
              <div className="text-xs font-bold">
                Dedicated by<br />Inverter Manufactures
              </div>
            </div>
            <div className="p-3 bg-white text-xs font-medium">
              6 Months by<br />Manufacturer
            </div>
          </div>
        </div>
      </div>

      <Footer pageNumber={6} />
    </PageContainer>);

}