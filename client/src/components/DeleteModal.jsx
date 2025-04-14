import React, { useRef } from 'react'
import {X} from 'lucide-react'
const DeleteModal = ({modalContext,deleteConfirm}) => {

  const modalRef = useRef(null);
  return (
    <div>
        <div ref={modalRef} onClick={() => modalContext(false)} className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50">
          
          <div className="bg-[#141616] rounded-lg shadow-lg px-6 py-4 w-96 flex flex-col">
            <button className='place-self-end'>
              <X size={20}  onClick={() => modalContext(false)} />
            </button>
            <h2 className="text-lg font-semibold text-white mb-4">Confirm Deletion</h2>
            <p className="text-gray-400 mb-6">Are you sure you want to delete this Blog Post? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={() => modalContext(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-violet-900 text-white rounded hover:bg-violet-950"
                onClick={()=>deleteConfirm(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DeleteModal  