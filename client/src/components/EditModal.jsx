import React, { useRef, useState } from 'react'
import { X } from 'lucide-react'

const EditModal = ({ modalContext, userData, updateConfirm }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    blogName: userData?.blogName || ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    updateConfirm(formData);
    modalContext(false);
  };

  return (
    <div>
      <div ref={modalRef} onClick={() => modalContext(false)} className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50">
        <div className="bg-[#141616] rounded-lg shadow-lg px-6 py-4 w-96 flex flex-col" onClick={e => e.stopPropagation()}>
          <button className='place-self-end'>
            <X size={20} onClick={() => modalContext(false)} />
          </button>
          <h2 className="text-lg font-semibold text-white mb-4">Edit Profile</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500"
                placeholder="Enter Username"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Blog Name</label>
              <input
                type="text"
                name="blogName"
                value={formData.blogName}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500"
                placeholder="Enter Blog Name"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              onClick={() => modalContext(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2  bg-violet-900 text-white rounded hover:bg-violet-950"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal