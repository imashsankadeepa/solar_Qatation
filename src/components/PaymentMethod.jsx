
import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function PaymentMethod() {
  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-12 py-8">
        <h2 className="text-2xl font-bold text-[#4a6fa5] text-center mb-8">Payment Method</h2>

        <div className="mb-8">
          <ol className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">1.</span>
              <span className="text-gray-800">
                If you want to confirm please pay <span className="font-bold">70% / LKR 100,000.00</span> of the
                total cost for reserve the materials.(Cash)
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">2.</span>
              <span className="text-gray-800">
                <span className="font-bold text-red-600">70%</span> <span className="font-bold">Before</span> the
                Installation.(Cash)
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">3.</span>
              <span className="text-gray-800">
                <span className="font-bold text-red-600">30%</span> <span className="font-bold">After</span> the
                Installation.(Cash)
              </span>
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <table className="w-full border-2 border-black">
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold text-black border-r-2 border-black bg-white">Bank detail Name</td>
                <td className="p-3 font-bold text-black bg-white">REM SOLAR (PVT) LTD</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold text-black border-r-2 border-black bg-white">Bank</td>
                <td className="p-3 text-black bg-white">BOC</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-3 font-bold text-black border-r-2 border-black bg-white">Branch</td>
                <td className="p-3 text-black bg-white">RAJAGIRIYA</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-black border-r-2 border-black bg-white">A/c no-Ac</td>
                <td className="p-3 text-black bg-white">93330809</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start">
            <span className="mr-2">•</span>
            <p className="text-gray-800">
              Cheques should be drawn in favor of <span className="font-bold">"REM SOLAR PVT LTD"</span>
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-2">•</span>
            <p className="text-gray-800">
              Any Details and information requiring from account and finance please contact
            </p>
          </div>
          <div className="ml-4">
            <p className="text-gray-800">077832 3804 / 076 763 2529</p>
          </div>
          <div className="flex items-start">
            <span className="mr-2">•</span>
            <p className="text-gray-800">
              If payment is made using any credit or debit card, a surcharge of{' '}
              <span className="font-bold text-red-600">3.25%</span> will be added to the total value.
            </p>
          </div>
        </div>
      </div>

      <Footer pageNumber={5} />
    </PageContainer>);

}