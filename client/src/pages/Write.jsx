import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mt-5 flex  gap-5">
      <div className="content flex-[5] flex flex-col gap-5">
        <input className="border p-3 border-gray-300 outline-none" type="text" name="" id="" placeholder="Title" />
        <div className="h-72 overflow-scroll border border-gray-300">
          <ReactQuill className="h-full border-none" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu flex-[2] flex flex-col gap-5">
        <div className="p-3 border flex-1 flex flex-col justify-between text-sm text-[#555] border-gray-300">
          <h1 className="text-2xl">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            className="hidden cursor-pointer"
            type="file"
            name=""
            id="file"
          />
          <label className=" underline cursor-pointer" htmlFor="file">
            Upload Image
          </label>
          <div className="flex justify-between">
            <button className="px-2 py-[5px] border border-teal-500 text-teal-500 bg-white">Save as draft</button>
            <button className="px-2 py-[5px] border border-teal-500 text-white bg-teal-500">Update</button>
          </div>
        </div>
        <div className="p-3 border flex-1 flex flex-col justify-between text-sm text-[#555] border-gray-300">
          <h1 className="text-2xl">Category</h1>
          <div className=" flex gap-1 items-center text-teal-500">
          <input type="radio" name="cat" id="art" />
          <label htmlFor="art">Art</label>
          </div>
          <div className=" flex gap-1 items-center text-teal-500">

          <input type="radio" name="cat" id="science" />
          <label htmlFor="science">Science</label>
          </div>
          <div className=" flex gap-1 items-center text-teal-500">

          <input type="radio" name="cat" id="technology" />
          <label htmlFor="technology">Technology</label>
          </div>
          <div className=" flex gap-1 items-center text-teal-500">

          <input type="radio" name="cat" id="cinema" />
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className=" flex gap-1 items-center text-teal-500">
            
          <input type="radio" name="cat" id="food" />
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
