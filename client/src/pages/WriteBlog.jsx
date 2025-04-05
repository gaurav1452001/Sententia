import React, { useState, useEffect, useCallback, useRef } from "react";
import { Quill } from "react-quill";
import ReactQuill from "react-quill";
import ReactDOM from "react-dom";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import DateObject from "react-date-object";
import Footer from '../components/Footer';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import "./WriteBlog.css";
import { useAuth } from "@clerk/clerk-react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UploadImg from "../components/UploadImg";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize);

const WriteBlog = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
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
      toast.success("Blog Post Created");

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
    const data = {
      title: title,
      img:cover.url||"",
      desc: desc,
      content: content,
    };
    
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div>
      <Navbar />

      <div className="w-[98%] sm:w-2/3 sm:mt-24 mx-auto my-5 px-5">
        <div className="flex justify-end">
          <button disabled={mutation.isPending || (progress > 0 && progress < 100)} type="submit" form="my-form" className="bg-white text-black p-2 mt-16 sm:my-2 w-40 border rounded-xl font-semibold disabled:cursor-not-allowed disabled:bg-gray-500">
            {mutation.isPending ? "Loading..." : "Create Post"}
          </button>
        </div>

        <div className="p-2 flex justify-end">
          {date.format("dddd DD MMMM")}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="my-form">
          <UploadImg type="image" setProgress={setProgress} setData={setCover}>
            <div className="text-center bg-white text-black p-2 mt-16 sm:my-2 w-40 border rounded-xl font-semibold disabled:cursor-not-allowed disabled:bg-gray-500">
              Add Cover Image
            </div>
          </UploadImg>
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded-lg p-4 my-2 bg-black text-5xl font-semibold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add a Description"
            className="w-full border rounded-lg p-4 my-2 bg-black"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="min-h-[600px] mb-4">
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder={"Start Composing..."}
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
