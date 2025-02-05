import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import { JobCategories, JobProvinces } from '../assets/assets';
import 'quill/dist/quill.snow.css';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [province, setProvince] = useState('Gauteng');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner Level');
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>
      <div className='w-full'>
        <p className='mb-2 font-archivo'>Job Title</p>
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
      </div>

      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={(e) => setCategory(e.target.value)} value={category}>
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <input
            type="text"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
          />
        </div>

        <div>
          <p className='mb-2'>Province</p>
          <select onChange={(e) => setProvince(e.target.value)} value={province} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
            {JobProvinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Level</p>
          <select onChange={(e) => setLevel(e.target.value)} value={level} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
            <option value="Beginner Level">Beginner Level</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
            <option value="Management Level">Management Level</option>
            <option value="Executive Level">Executive Level</option>
          </select>
        </div>

        <div>
          <p>Experience (years)</p>
          <input
            onChange={e => setExperience(e.target.value)}
            type='number'
            placeholder='3'
            value={experience}
            min={0}
            className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]'
          />
        </div>

        <div>
          <p>Salary</p>
          <input
            onChange={e => setSalary(e.target.value)}
            type='number'
            placeholder='3000'
            min={0}
            value={salary}
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
          />
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-3">Add Job</button>
    </form>
  );
};

export default AddJob;
