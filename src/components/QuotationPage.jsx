
import React, { useState } from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { Modal } from './ui/Modal';
import { Edit2, Plus, Trash2 } from 'lucide-react';

export function QuotationPage() {
  const [data, setData] = useState({
    systemCapacity: '6.2KW',
    inverterCapacity: '6KW',
    inverterPhase: 'HUAWEI – 1 Phase',
    solarUnits: '680 +/-',
    numberOfPanels: '10 (NOP)',
    panelType: 'JINKO 620wp N-Type',
    totalCost: 'Rs.822,000/=',
    validityDays: '7'
  });
  const [customRows, setCustomRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(data);
  const [formCustomRows, setFormCustomRows] = useState([]);

  const openEditModal = () => {
    setFormData({ ...data });
    setFormCustomRows([...customRows]);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setData({ ...formData });
    setCustomRows([...formCustomRows]);
    setIsModalOpen(false);
  };

  const addCustomRow = () => {
    const newRow = {
      id: `custom-${Date.now()}`,
      description: '',
      solution: ''
    };
    setFormCustomRows([...formCustomRows, newRow]);
  };

  const updateCustomRow = (id, field, value) => {
    setFormCustomRows(
      formCustomRows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const deleteCustomRow = (id) => {
    setFormCustomRows(formCustomRows.filter((row) => row.id !== id));
  };

  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-12 py-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-[#4a6fa5] text-center flex-1">
            Quotation for solar PV System
          </h2>
          <button
            onClick={openEditModal}
            className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#2d4a9a] transition-colors print:hidden">

            <Edit2 size={16} />
            Edit Quotation
          </button>
        </div>

        <div className="border border-[#4a6fa5]">
          <div className="grid grid-cols-2 border-b border-[#4a6fa5]">
            <div className="p-4 font-bold text-black">Description</div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5]">Solution</div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#4a6fa5] bg-blue-50/50">
            <div className="p-4 font-medium text-black">Solar System Capacity</div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center">
              {data.systemCapacity}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#4a6fa5]">
            <div className="p-4 font-medium text-black">
              <p>Inverter capacity</p>
              <p className="mt-4 font-bold">{data.inverterPhase}</p>
            </div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center">
              {data.inverterCapacity}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#4a6fa5] bg-blue-50/50">
            <div className="p-4 font-medium text-black">Solar Units per Month (kWh)</div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center">
              {data.solarUnits}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#4a6fa5]">
            <div className="p-4 font-medium text-black">No of Solar panels</div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center text-sm">
              {data.numberOfPanels} {data.panelType}
            </div>
          </div>

          {customRows.map((row, idx) =>
          <div
            key={row.id}
            className={`grid grid-cols-2 border-b border-[#4a6fa5] ${idx % 2 === 0 ? 'bg-blue-50/50' : ''}`}>

              <div className="p-4 font-medium text-black">{row.description}</div>
              <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center">
                {row.solution}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 bg-blue-100/50">
            <div className="p-4">
              <p className="font-bold text-black">Standard Investment for the system (Rs) –Cash</p>
              <p className="text-red-600 font-bold mt-2">( VAT – 18% Inclusive )</p>
              <p className="text-sm text-black mt-2">Proposal valid only {data.validityDays} Days</p>
            </div>
            <div className="p-4 font-bold text-black text-center border-l border-[#4a6fa5] flex items-center justify-center text-2xl">
              {data.totalCost}
            </div>
          </div>
        </div>
      </div>

      <Footer pageNumber={3} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Quotation Details"
        size="lg">

        <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Solar System Capacity</label>
              <input
                type="text"
                value={formData.systemCapacity}
                onChange={(e) => setFormData({ ...formData, systemCapacity: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Inverter Capacity</label>
              <input
                type="text"
                value={formData.inverterCapacity}
                onChange={(e) => setFormData({ ...formData, inverterCapacity: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Inverter Brand & Phase</label>
            <input
              type="text"
              value={formData.inverterPhase}
              onChange={(e) => setFormData({ ...formData, inverterPhase: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Solar Units per Month (kWh)</label>
            <input
              type="text"
              value={formData.solarUnits}
              onChange={(e) => setFormData({ ...formData, solarUnits: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Number of Panels</label>
              <input
                type="text"
                value={formData.numberOfPanels}
                onChange={(e) => setFormData({ ...formData, numberOfPanels: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Panel Type</label>
              <input
                type="text"
                value={formData.panelType}
                onChange={(e) => setFormData({ ...formData, panelType: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800">Additional Items</h4>
              <button
                onClick={addCustomRow}
                className="flex items-center gap-1 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">

                <Plus size={16} />
                Add Row
              </button>
            </div>

            {formCustomRows.length === 0 ?
            <p className="text-sm text-gray-500 text-center py-4">
                No additional items. Click "Add Row" to add custom entries.
              </p> :

            <div className="space-y-3">
                {formCustomRows.map((row) =>
              <div key={row.id} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                      <input
                    type="text"
                    value={row.description}
                    onChange={(e) => updateCustomRow(row.id, 'description', e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-200 rounded focus:border-[#4a6fa5] focus:outline-none text-sm"
                    placeholder="Enter description" />

                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Solution</label>
                      <input
                    type="text"
                    value={row.solution}
                    onChange={(e) => updateCustomRow(row.id, 'solution', e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-200 rounded focus:border-[#4a6fa5] focus:outline-none text-sm"
                    placeholder="Enter solution" />

                    </div>
                    <button
                  onClick={() => deleteCustomRow(row.id)}
                  className="mt-5 p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                  title="Delete row">

                      <Trash2 size={18} />
                    </button>
                  </div>
              )}
              </div>
            }
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-[#4a6fa5]/30">
            <h4 className="font-bold text-[#1e3a8a] mb-3">Pricing Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Cost (Rs)</label>
                <input
                  type="text"
                  value={formData.totalCost}
                  onChange={(e) => setFormData({ ...formData, totalCost: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors text-lg font-bold" />

              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Validity (Days)</label>
                <input
                  type="text"
                  value={formData.validityDays}
                  onChange={(e) => setFormData({ ...formData, validityDays: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">* VAT 18% is included in the total cost</p>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">

              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2.5 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#2d4a9a] transition-colors font-medium">

              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </PageContainer>);

}