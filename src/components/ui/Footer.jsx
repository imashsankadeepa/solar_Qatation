
import React from 'react';

export function Footer({ pageNumber }) {
  return (
    <div className="mt-auto p-8 pt-4">
      <div className="border-t-2 border-blue-200 pt-4 flex justify-between items-end">
        <h3 className="text-[#4a6fa5] font-bold text-lg uppercase tracking-wide">
           Vistasolar(Pvt) Ltd
        </h3>
        <span className="text-gray-400 text-sm">{pageNumber}</span>
      </div>
    </div>);

}