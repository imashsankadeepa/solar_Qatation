
import React, { useState } from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { Edit2, Save, X, Plus, Trash2 } from 'lucide-react';

export function ProjectOverview() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    consultantName: 'S. C. Rathnasiri',
    consultantMobile: '077 483 21 51',
    consultantEmail: 'mgr_rajarata@remsolar.lk',
    quotationNumber: 'CY/2026/01/25',
    date: '21-01-2026',
    name: 'Mrs. G. Ariyawathi',
    electricitySupplier: 'LECO',
    tariffCategory: '1P - D LECO Connection',
    connectionType: 'Single phase',
    roofType: 'Asbestos',
    numberOfFloors: '2',
    gridSolution: 'Net Accounting'
  });
  const [customRows, setCustomRows] = useState([]);

  const handleSave = () => setIsEditing(false);
  const handleCancel = () => setIsEditing(false);

  const addCustomRow = () => {
    const newRow = {
      id: `custom-${Date.now()}`,
      label: 'New Field',
      value: ''
    };
    setCustomRows([...customRows, newRow]);
  };

  const updateCustomRow = (id, field, newValue) => {
    setCustomRows(
      customRows.map((row) =>
      row.id === id ? { ...row, [field]: newValue } : row
      )
    );
  };

  const deleteCustomRow = (id) => {
    setCustomRows(customRows.filter((row) => row.id !== id));
  };

  const duplicateGridSolution = () => {
    const newRow = {
      id: `grid-${Date.now()}`,
      label: 'Grid Solution',
      value: ''
    };
    setCustomRows([...customRows, newRow]);
  };

  const fixedRows = [
  { label: 'Quotation Number', key: 'quotationNumber', bg: true },
  { label: 'Date', key: 'date', bg: false },
  { label: 'Name', key: 'name', bg: true },
  { label: 'Electricity Supplier', key: 'electricitySupplier', bg: false },
  { label: 'Tariff Category', key: 'tariffCategory', bg: true },
  { label: 'Connection Type', key: 'connectionType', bg: false },
  { label: 'Roof Type', key: 'roofType', bg: true },
  { label: "Number of Floor's", key: 'numberOfFloors', bg: false },
  { label: 'Grid Solution', key: 'gridSolution', bg: true, canDuplicate: true }];


  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-12 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#4a6fa5] text-center flex-1">
            Project Overview
          </h2>
          {!isEditing ?
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors print:hidden">

              <Edit2 size={16} />
              Edit
            </button> :

          <div className="flex gap-2 print:hidden">
              <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">

                <Save size={16} />
                Save
              </button>
              <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">

                <X size={16} />
                Cancel
              </button>
            </div>
          }
        </div>

        <div className="bg-[#5c9ebf] text-white p-6 mb-0">
          <div className="grid grid-cols-[200px_1fr] gap-4">
            <div className="font-bold text-lg">Energy Consultant</div>
            <div className="font-medium">
              <div className="flex gap-4 items-center">
                <span className="w-20 font-bold">Name</span>
                <span>:</span>
                {isEditing ?
                <input
                  type="text"
                  value={data.consultantName}
                  onChange={(e) => setData({ ...data, consultantName: e.target.value })}
                  className="flex-1 px-2 py-1 text-black rounded" /> :


                <span>- {data.consultantName}</span>
                }
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 font-bold">Mobile</span>
                <span>:</span>
                {isEditing ?
                <input
                  type="text"
                  value={data.consultantMobile}
                  onChange={(e) => setData({ ...data, consultantMobile: e.target.value })}
                  className="flex-1 px-2 py-1 text-black rounded" /> :


                <span>- {data.consultantMobile}</span>
                }
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-20 font-bold">Email</span>
                <span>:</span>
                {isEditing ?
                <input
                  type="email"
                  value={data.consultantEmail}
                  onChange={(e) => setData({ ...data, consultantEmail: e.target.value })}
                  className="flex-1 px-2 py-1 text-black rounded" /> :


                <span>- {data.consultantEmail}</span>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-300">
          {fixedRows.map((row, idx) =>
          <div
            key={idx}
            className={`grid grid-cols-[250px_1fr] border-b border-gray-300 ${row.bg ? 'bg-gray-100' : ''}`}>

              <div className={`p-3 font-bold text-black ${row.bg ? 'bg-gray-100' : ''} flex items-center justify-between`}>
                <span>{row.label}</span>
                {isEditing && row.canDuplicate &&
              <button
                onClick={duplicateGridSolution}
                className="text-blue-600 hover:text-blue-800 p-1"
                title="Add another Grid Solution">

                    <Plus size={16} />
                  </button>
              }
              </div>
              <div className={`p-3 text-black ${row.bg ? 'bg-gray-100' : ''}`}>
                {isEditing ?
              <input
                type="text"
                value={data[row.key]}
                onChange={(e) => setData({ ...data, [row.key]: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded" /> :


              <span className={row.label === 'Name' ? 'font-bold' : ''}>{data[row.key]}</span>
              }
              </div>
            </div>
          )}

          {customRows.map((row, idx) => {
            const totalRows = fixedRows.length + idx;
            const hasBg = totalRows % 2 === 0;
            return (
              <div
                key={row.id}
                className={`grid grid-cols-[250px_1fr] border-b border-gray-300 ${hasBg ? 'bg-gray-100' : ''}`}>

                <div className={`p-3 font-bold text-black ${hasBg ? 'bg-gray-100' : ''} flex items-center gap-2`}>
                  {isEditing ?
                  <>
                      <input
                      type="text"
                      value={row.label}
                      onChange={(e) => updateCustomRow(row.id, 'label', e.target.value)}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded font-bold"
                      placeholder="Field name" />

                      <button
                      onClick={() => deleteCustomRow(row.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Delete row">

                        <Trash2 size={16} />
                      </button>
                    </> :

                  <span>{row.label}</span>
                  }
                </div>
                <div className={`p-3 text-black ${hasBg ? 'bg-gray-100' : ''}`}>
                  {isEditing ?
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => updateCustomRow(row.id, 'value', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                    placeholder="Field value" /> :


                  <span>{row.value}</span>
                  }
                </div>
              </div>);

          })}

          {isEditing &&
          <div className="p-3 border-b border-gray-300 print:hidden">
              <button
              onClick={addCustomRow}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">

                <Plus size={18} />
                Add Custom Field
              </button>
            </div>
          }
        </div>
      </div>

      <Footer pageNumber={2} />
    </PageContainer>);

}