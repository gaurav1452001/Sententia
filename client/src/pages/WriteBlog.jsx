import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../components/Navbar";
import DateObject from "react-date-object";
import Footer from '../components/Footer'
import "./WriteBlog.css";
const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const date = new DateObject();

  const modules = {
    toolbar: [
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
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ["code-block"],
    ],
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

  return (
    <div>
      <Navbar />
      
      <div className="w-[98%] sm:w-2/3  sm:mt-24  mx-auto my-5 px-5">
      <div className="flex justify-end">
          <button type="submit" form="my-form" className=" bg-white text-black p-2 mt-16 sm:my-2 w-40 border rounded-xl font-semibold">Create Post</button>
        </div>
        <div className="p-2 flex justify-end">
          {date.format("dddd DD MMMM")}
        </div>
        <form action="" className="flex flex-col gap-5" id="my-form">
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
            className="w-full border rounded-lg p-4 my-2 bg-black "
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="min-h-[600px] mb-4">
            <ReactQuill
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
      <Footer/>
    </div>
  );
};

export default WriteBlog;
