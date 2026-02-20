
import React, { useState } from 'react';
import { PageContainer } from './ui/PageContainer';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { Modal } from './ui/Modal';
import { MapPin, Plus, Edit2, Trash2, Upload } from 'lucide-react';

export function ProjectsGallery() {
  const [projects, setProjects] = useState([
  { id: '1', name: 'MALWANA', height: 'h-48', photos: ['', '', '', ''] },
  { id: '2', name: 'RAJAGIRIYA', height: 'h-56', photos: ['', '', '', ''] },
  { id: '3', name: 'WADDUWA', height: 'h-44', photos: ['', '', '', ''] },
  { id: '4', name: 'MT LAVINIA', height: 'h-52', photos: ['', '', '', ''] },
  { id: '5', name: 'NAWALA', height: 'h-48', photos: ['', '', '', ''] },
  { id: '6', name: 'GALLE', height: 'h-56', photos: ['', '', '', ''] },
  { id: '7', name: 'MONARAGALA', height: 'h-44', photos: ['', '', '', ''] },
  { id: '8', name: 'DHARGA TOWN', height: 'h-52', photos: ['', '', '', ''] },
  { id: '9', name: 'RAJAGIRIYA 2', height: 'h-48', photos: ['', '', '', ''] }]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', photos: ['', '', '', ''] });

  const openAddModal = () => {
    setEditingProject(null);
    setFormData({ name: '', photos: ['', '', '', ''] });
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    setFormData({ name: project.name, photos: [...project.photos] });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this location?')) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const handleSave = () => {
    if (!formData.name.trim()) return;
    if (editingProject) {
      setProjects(
        projects.map((p) =>
        p.id === editingProject.id ?
        { ...p, name: formData.name.toUpperCase(), photos: formData.photos } :
        p
        )
      );
    } else {
      const heights = ['h-44', 'h-48', 'h-52', 'h-56'];
      const newProject = {
        id: Date.now().toString(),
        name: formData.name.toUpperCase(),
        height: heights[Math.floor(Math.random() * heights.length)],
        photos: formData.photos
      };
      setProjects([...projects, newProject]);
    }
    setIsModalOpen(false);
  };

  const handlePhotoUpload = (index) => {
    const mockUrls = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=200',
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=200',
    'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=200'];

    const newPhotos = [...formData.photos];
    newPhotos[index] = mockUrls[index % mockUrls.length];
    setFormData({ ...formData, photos: newPhotos });
  };

  return (
    <PageContainer>
      <Header />

      <div className="flex-1 px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#4a6fa5] flex-1 text-center">
            Domestic & Commercial Projects
          </h2>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#2d4a9a] transition-colors print:hidden">

            <Plus size={18} />
            Add Location
          </button>
        </div>

        <div className="columns-3 gap-4 space-y-4">
          {projects.map((project) =>
          <div
            key={project.id}
            className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group relative">

              <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity print:hidden">
                <button
                onClick={() => openEditModal(project)}
                className="p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 transition-colors"
                title="Edit">

                  <Edit2 size={14} className="text-[#4a6fa5]" />
                </button>
                <button
                onClick={() => handleDelete(project.id)}
                className="p-1.5 bg-white/90 rounded-full shadow hover:bg-red-50 transition-colors"
                title="Delete">

                  <Trash2 size={14} className="text-red-500" />
                </button>
              </div>

              <div className={`grid grid-cols-2 gap-0.5 bg-gray-200 p-0.5 ${project.height}`}>
                {project.photos.map((photo, imgIdx) =>
              <div
                key={imgIdx}
                className="bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100 flex items-center justify-center relative overflow-hidden">

                    {photo ?
                <img
                  src={photo}
                  alt={`${project.name} photo ${imgIdx + 1}`}
                  className="w-full h-full object-cover" /> :


                <>
                        <div className="absolute inset-0 opacity-30">
                          <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
                            {[...Array(16)].map((_, i) =>
                      <div
                        key={i}
                        className="border border-blue-200/50 bg-gradient-to-br from-blue-300/20 to-transparent">
                      </div>
                      )}
                          </div>
                        </div>
                        <div className="text-center z-10">
                          <svg
                      className="w-8 h-8 mx-auto text-blue-400/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">

                            <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />

                          </svg>
                        </div>
                      </>
                }
                  </div>
              )}
              </div>

              <div className="flex items-center justify-center gap-2 py-3 bg-white">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" fill="#dc2626" />
                <span className="font-bold text-gray-800 text-sm uppercase tracking-wide">{project.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer pageNumber={8} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? 'Edit Location' : 'Add New Location'}
        size="md">

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter location name"
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#4a6fa5] focus:outline-none transition-colors" />

          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Photos (4 photos)</label>
            <div className="grid grid-cols-2 gap-3">
              {formData.photos.map((photo, idx) =>
              <div
                key={idx}
                onClick={() => handlePhotoUpload(idx)}
                className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#4a6fa5] hover:bg-blue-50/50 transition-colors overflow-hidden">

                  {photo ?
                <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" /> :

                <>
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Photo {idx + 1}</span>
                    </>
                }
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">Click each box to upload a photo</p>
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">

              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!formData.name.trim()}
              className="flex-1 px-4 py-2.5 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#2d4a9a] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed">

              {editingProject ? 'Save Changes' : 'Add Location'}
            </button>
          </div>
        </div>
      </Modal>
    </PageContainer>);

}