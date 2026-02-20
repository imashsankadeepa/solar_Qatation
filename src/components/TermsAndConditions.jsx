
import React from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function TermsAndConditions() {
  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-12 py-8">
        <h2 className="text-2xl font-bold text-[#4a6fa5] text-center mb-8">
          Proposal Terms and Conditions Overview
        </h2>

        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-bold text-black mb-2">1. Scope and Fee:</h3>
            <p className="text-gray-800 leading-relaxed ml-4">
              REM Solar will install the proposed solar energy system for an
              all-inclusive fee. This fee is calculated for standard mounting on
              Amano, asbestos, or tile roofs only.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">2. Metering Scheme:</h3>
            <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-800">
              <li>Customers must pay additional fees for metered facilities.</li>
              <li>
                Prices include CEB/LECO <span className="font-bold">Application Fee</span> for Net
                Metering/Net Accounting schemes.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">3. Pricing Adjustments:</h3>
            <p className="text-gray-800 leading-relaxed ml-4">
              The quoted price is tentative and may vary based on additional
              wiring needs or other unforeseen site complications identified
              during inspection.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">4. Routine Maintenance:</h3>
            <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-800">
              <li>
                Two free routine maintenance services for the PV system will be
                provided within the first year after installation.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">5. Exposure and Protection:</h3>
            <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-800">
              <li>
                If the inverter is exposed to direct sunlight, a canopy is
                recommended. Installation of the canopy will be charged
                separately.
              </li>
            </ol>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-[#4a6fa5]">
            <p className="text-gray-800 text-sm leading-relaxed">
              This ensures transparency regarding costs and technical aspects
              while clearly outlining conditions that could lead to additional
              charges. Let me know if you'd like to refine or adjust the
              phrasing further!
            </p>
          </div>
        </div>
      </div>

      <Footer pageNumber={4} />
    </PageContainer>);

}