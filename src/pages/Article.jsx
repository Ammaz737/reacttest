import React, { useState } from "react";
import Sidebar from "../components/sidebar";
const Article = () => {
  const [form, setForm] = useState({
    storyurl: "",
    stitle: "",
    atitle: "",
    sluginttro: "",
    topictag: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Form Submitted Successfully",form)
  }
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar />
      
      
      <div className="flex-1 p-8 overflow-y-auto">
        
      
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-700">New Article</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-300">
              Save as Draft
            </button>
            <button 
              onClick={handleSubmit} 
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </div>

        
        <div className="mb-8">
          <ul className="items-center w-full text-sm  font-medium text-gray-900 rounded-lg flex">
            <li>
              <div className="flex items-center ps-3">
                <input id="story-radio" type="radio" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                <label htmlFor="story-radio" className="w-full py-3 ms-2 text-sm font-medium">Story</label>
              </div>
            </li>
            <li>
              <div className="flex items-center ps-3">
                <input id="blog-radio" type="radio" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                <label htmlFor="blog-radio" className="w-full py-3 ms-2 text-sm font-medium">Live Blog</label>
              </div>
            </li>
            <li>
              <div className="flex items-center ps-3">
                <input id="paywall-radio" type="radio" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                <label htmlFor="paywall-radio" className="w-full py-3 ms-2 text-sm font-medium">Enable Paywall</label>
              </div>
            </li>
          </ul>
        </div>

        
        <form onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="storyurl" className="text-sm font-semibold text-gray-700">Story URL *</label>
              <input
                type="text"
                name="storyurl"
                value={form.storyurl}
                onChange={handleChange}
                placeholder="Enter Story Url"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="stitle" className="text-sm font-semibold text-gray-700">Short Title *</label>
              <input
                type="text"
                name="stitle"
                value={form.stitle}
                onChange={handleChange}
                placeholder="Enter Short Title"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="atitle" className="text-sm font-semibold text-gray-700">Article Title</label>
              <input
                type="text"
                name="atitle"
                value={form.atitle}
                onChange={handleChange}
                placeholder="Enter Article Title"
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-blue-500"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1   gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="sluginttro" className="text-sm font-semibold text-gray-700">Slug Intro</label>
              <input
                type="text"
                name="sluginttro"
                value={form.sluginttro}
                onChange={handleChange}
                placeholder=" Enter Slug Intro"
                className="border border-gray-300 rounded-md w-full h-20 focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="topictag" className="text-sm font-semibold text-gray-700">Topic Tag</label>
              <input
                type="text"
                name="topictag"
                value={form.topictag}
                onChange={handleChange}
                placeholder="Enter Tags"
                className="border border-gray-300 p-2 rounded-md w-65 focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter Description"
                className="border border-gray-300 p-2 rounded-md w-full h-50 focus:outline-blue-500"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

 

export default Article;
