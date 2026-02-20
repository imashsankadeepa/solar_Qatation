
import React, { useState, useRef } from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CoverPage } from './components/CoverPage';
import { ProjectOverview } from './components/ProjectOverview';
import { QuotationPage } from './components/QuotationPage';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PaymentMethod } from './components/PaymentMethod';
import { ComponentsList } from './components/ComponentsList';
import { ProjectTimeline } from './components/ProjectTimeline';
import { ProjectsGallery } from './components/ProjectsGallery';
import { BranchNetwork } from './components/BranchNetwork';

const PAGE_NAMES = [
'Cover Page',
'Project Overview',
'Quotation',
'Terms & Conditions',
'Payment Method',
'Components List',
'Project Timeline',
'Projects Gallery',
'Branch Network'];


export function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const pageRefs = useRef([]);

  const generatePDF = async () => {
    setIsGenerating(true);
    setCurrentPage(0);
    setProgress(0);

    const pdfWidth = 210;
    const pdfHeight = 297;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const totalPages = pageRefs.current.filter((ref) => ref !== null).length;

    for (let i = 0; i < pageRefs.current.length; i++) {
      const pageElement = pageRefs.current[i];
      if (!pageElement) continue;

      setCurrentPage(i + 1);
      setProgress(Math.round((i + 1) / totalPages * 100));

      try {
        const canvas = await html2canvas(pageElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: pageElement.scrollWidth,
          windowHeight: pageElement.scrollHeight
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const imgWidth = pdfWidth;
        const imgHeight = canvas.height * pdfWidth / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        const yOffset = imgHeight < pdfHeight ? 0 : 0;
        pdf.addImage(imgData, 'JPEG', 0, yOffset, imgWidth, imgHeight);
      } catch (error) {
        console.error(`Error capturing page ${i + 1}:`, error);
      }

      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const filename = `Solar_Proposal_${dateStr}.pdf`;

    pdf.save(filename);
    setIsGenerating(false);
    setCurrentPage(0);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 print:p-0 print:bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50 flex justify-between items-center print:hidden">
        <h1 className="text-xl font-bold text-gray-800">
          Solar Proposal Generator
        </h1>
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-sm">

          {isGenerating ?
          <>
              <Loader2 size={20} className="animate-spin" />
              Generating PDF...
            </> :

          <>
              <FileDown size={20} />
              Download PDF
            </>
          }
        </button>
      </div>

      {isGenerating &&
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center print:hidden">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <Loader2 size={48} className="animate-spin text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Generating PDF</h2>
              <p className="text-gray-600 mb-4">
                Processing:{' '}
                <span className="font-semibold text-blue-600">
                  {PAGE_NAMES[currentPage - 1] || 'Initializing...'}
                </span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }} />

              </div>
              <p className="text-sm text-gray-500">
                Page {currentPage} of {PAGE_NAMES.length} ({progress}%)
              </p>
            </div>
          </div>
        </div>
      }

      <div className="mt-16 print:mt-0 flex flex-col items-center print:block">
        <div ref={(el) => pageRefs.current[0] = el}>
          <CoverPage />
        </div>
        <div ref={(el) => pageRefs.current[1] = el}>
          <ProjectOverview />
        </div>
        <div ref={(el) => pageRefs.current[2] = el}>
          <QuotationPage />
        </div>
        <div ref={(el) => pageRefs.current[3] = el}>
          <TermsAndConditions />
        </div>
        <div ref={(el) => pageRefs.current[4] = el}>
          <PaymentMethod />
        </div>
        <div ref={(el) => pageRefs.current[5] = el}>
          <ComponentsList />
        </div>
        <div ref={(el) => pageRefs.current[6] = el}>
          <ProjectTimeline />
        </div>
        <div ref={(el) => pageRefs.current[7] = el}>
          <ProjectsGallery />
        </div>
        <div ref={(el) => pageRefs.current[8] = el}>
          <BranchNetwork />
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .break-after-page {
            page-break-after: always;
            break-after: page;
          }
        }
      `}</style>
    </div>);

}