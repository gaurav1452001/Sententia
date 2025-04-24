import React, { useState, useEffect, useCallback, useRef } from "react";
import { Quill } from "react-quill";
import ReactQuill from "react-quill";
import ReactDOM from "react-dom";
import "react-quill/dist/quill.snow.css";
import DateObject from "react-date-object";
import Footer from '../components/Footer';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import "./WriteBlog.css";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast, Flip } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import UploadImg from "../components/UploadImg";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize);

const WriteBlog = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();
  const quillRef = useRef(null);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Blog Post Created", {
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark",
        transition: Flip,
    });

      navigate(`/blogs/${res.data.slug}`);
    }
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [progress, setProgress] = useState(0);
  const date = new DateObject();


  useEffect(() => {
    img && setContent(prev => prev + `<p><img src="${img.url}"/></p>`);
  }, [img]);

  const imageHandler = useCallback(() => {
    // Create a hidden trigger element for the UploadImg component
    const uploadTrigger = document.createElement('div');
    uploadTrigger.style.display = 'none';
    document.body.appendChild(uploadTrigger);

    // Render the UploadImg component dynamically
    const tempUpload = (
      <UploadImg
        type="image"
        setProgress={setProgress}
        setData={(imageData) => {
          // Get the Quill editor instance
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection(true);

          // Insert a placeholder while the image is uploading
          quill.insertText(range.index, 'Uploading image...');

          // When the image is uploaded, replace the placeholder with the image
          if (imageData && imageData.url) {
            quill.deleteText(range.index, 'Uploading image...'.length);
            quill.insertEmbed(range.index, 'image', imageData.url);
            quill.setSelection(range.index + 1);
          }

          // Clean up the temporary trigger element
          document.body.removeChild(uploadTrigger);
        }}
      >
        <div id="image-upload-trigger"></div>
      </UploadImg>
    );

    // Render the UploadImg component into the hidden trigger element
    ReactDOM.render(tempUpload, uploadTrigger);

    // Trigger the upload dialog
    document.getElementById('image-upload-trigger').click();
  }, [setProgress]);


  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["code-block"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "align",
    "code-block",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      toast.error("You must be logged in to publish a post", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
        transition: Flip,
      });
      return;
    }

    // Check for empty title
    if (!title.trim()) {
      toast.error("Title cannot be empty", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
        transition: Flip,
      });
      return;
    }

    // Check for empty content
    if (!content.trim() || content === '<p><br></p>') {
      toast.error("Blog Content cannot be empty", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
        transition: Flip,
      });
      return;
    }

    const data = {
      title: title,
      img: cover.url || "",
      desc: desc,
      content: content,
    };
    
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400 text-sm font-medium font-overpass">
            {date.format("dddd DD MMMM")}
          </div>
          <button 
            disabled={mutation.isPending || (progress > 0 && progress < 100)} 
            type="submit" 
            form="my-form" 
            className="font-overpass inline-flex items-center px-6 py-2 pt-3 rounded-xl text-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 bg-violet-800 hover:bg-violet-600 text-white font-semibold"
          >
            {mutation.isPending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publishing...
              </>
            ) : "Publish Post"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" id="my-form">
          <UploadImg type="image" setProgress={setProgress} setData={setCover}>
            <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer">
              {cover.url ? (
                <div className="aspect-[16/6] w-full relative">
                  <img src={cover.url} alt="Cover" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-medium px-4 py-2 bg-black/40 rounded-lg backdrop-blur-sm">
                      Change Cover Image
                    </span>
                  </div>
                </div>
              ) : (
                <div className="aspect-[16/6] w-full flex flex-col items-center justify-center gap-3 py-12 bg-gray-900/60">
                  <div className="p-3 rounded-full bg-violet-500/10 text-violet-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium font-overpass">Add Cover Image</p>
                  <p className="text-gray-500 text-sm font-overpass">Recommended: 1600x600px</p>
                </div>
              )}
              {progress > 0 && progress < 100 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                  <div 
                    className="h-full bg-violet-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </UploadImg>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Title"
                className="pt-4 font-overpass w-full px-4 pr-12 py-3 text-4xl font-bold bg-transparent  text-white placeholder-gray-500"
                value={title}
                maxLength={70}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className="absolute right-2 bottom-3 text-gray-500 text-xs">
                {title.length}/70
              </span>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Add a Short Description for Your Post"
                className="font-overpass w-full px-4 pr-12 py-3 text-lg bg-transparent  text-gray-300 placeholder-gray-500"
                value={desc}
                maxLength={160}
                onChange={(e) => setDesc(e.target.value)}
              />
              <span className="absolute right-1 bottom-2 text-gray-500 text-xs">
                {desc.length}/160
              </span>
            </div>
          </div>

          <div className="min-h-[600px] bg-black/30 rounded-lg backdrop-blur-sm border border-gray-800">
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder="Start Writing..."
              className="quill-editor"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default WriteBlog;
