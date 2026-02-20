
import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function ProjectTimeline() {
  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-12 py-8">
        <h2 className="text-2xl font-bold text-[#4a6fa5] text-center mb-8">Tentative project timeline</h2>

        <div className="mb-6">
          <table className="w-full border-2 border-[#4a6fa5]">
            <thead>
              <tr className="bg-[#2c5282] text-white">
                <th className="p-3 border-r-2 border-white font-bold text-left">Description</th>
                <th className="p-3 border-r-2 border-white font-bold text-left">Payment Stage</th>
                <th className="p-3 border-r-2 border-white font-bold text-center w-12">1</th>
                <th className="p-3 border-r-2 border-white font-bold text-center w-12">2</th>
                <th className="p-3 border-r-2 border-white font-bold text-center w-12">3</th>
                <th className="p-3 border-r-2 border-white font-bold text-center w-12">4</th>
                <th className="p-3 border-r-2 border-white font-bold text-center w-12">5</th>
                <th className="p-3 font-bold text-center w-12">6</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-[#4a6fa5]">
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">
                  Project Confirmation & Pre-approval
                </td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white">
                  <div className="font-bold">Advance</div>
                  <div className="text-sm">LKR.100,000.00</div>
                </td>
                <td className="p-3 bg-blue-200 border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white"></td>
              </tr>

              <tr className="border-b-2 border-[#4a6fa5]">
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">
                  Solar Panel & Inverter Installation
                </td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white">
                  <div className="font-bold">70%</div>
                  <div className="text-sm">Before Installation</div>
                </td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-blue-200 border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white"></td>
              </tr>

              <tr className="border-b-2 border-[#4a6fa5]">
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">
                  CEB / LECO File Submission
                </td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white">
                  <div className="font-bold">30%</div>
                  <div className="text-sm">After Installation</div>
                </td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-blue-200 border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white"></td>
              </tr>

              <tr className="border-b-2 border-[#4a6fa5]">
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">
                  CEB / LECO Estimate
                </td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-blue-200 border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white"></td>
              </tr>

              <tr className="border-b-2 border-[#4a6fa5]">
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">
                  PPA Agreement Signing (CEB/LECO)
                </td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-blue-200 border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white"></td>
              </tr>

              <tr>
                <td className="p-3 bg-[#2c5282] text-white font-medium border-r-2 border-white">Commissioning</td>
                <td className="p-3 bg-[#2c5282] text-white border-r-2 border-white">
                  <div className="font-bold">Connection</div>
                </td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-white border-r-2 border-[#4a6fa5]"></td>
                <td className="p-3 bg-blue-200 relative">
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-600">Week</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-bold text-black mb-2">Note:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
              <li>
                <span className="font-bold">Project Duration:</span> The project duration is subject to changes based on the product
                delivery schedule and weather conditions. It's important to acknowledge that unforeseen circumstances might impact the timeline.
              </li>
            </ul>
          </div>

          <p className="text-gray-800 ml-4">
            •Step-up Transformer installation & grid termination will be done within this time frame & related costs will be borne by the customer.
          </p>

          <div className="bg-yellow-200 p-3 border-l-4 border-yellow-600">
            <p className="font-bold text-black">
              (All the above will be effective once the agreement / initial payment is made.)
            </p>
          </div>
        </div>
      </div>

      <Footer pageNumber={7} />
    </PageContainer>);

}