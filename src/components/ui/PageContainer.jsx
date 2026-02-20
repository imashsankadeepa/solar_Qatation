
import React from 'react';

export function PageContainer({ children, className = '', id }) {
  return (
    <div
      id={id}
      className={`
        w-[210mm] min-h-[297mm] mx-auto bg-white shadow-2xl mb-8 overflow-hidden relative flex flex-col
        print:shadow-none print:mb-0 print:w-full print:h-screen print:break-after-page print:overflow-visible
        ${className}
      `}>

      {children}
    </div>);

}