import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false)

  const [resume, setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10 font-Archivo'>
        <h2 className='text-xl font-semibold'>Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit ?
              <>
                <label htmlFor='resumeUpload' className='flex items-center '>
                  <p className='bg-blue-100 text-blue-600 px-4 py-2 mr-2 rounded-lg '>Select Resume</p>
                  <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type='file' hidden />
                  <img src={assets.profile_upload_icon} alt='' className='cursor-pointer' />

                </label>
                <button onClick={e => setIsEdit(false)} className='bg-green-100 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-green-100 cursor-pointer'>Save</button>
              </> :
              <div className='flex gap-2'>
                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-blue-100 cursor-pointer' href=''>Resume</a>
                <button onClick={() => setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-500  cursor-pointer'>Edit</button>
              </div>
          }
        </div>
        <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
        <table className='min-w-full bg-white border rounded-lg border-gray-100'>
          <thead>
            <tr className='border-gray-300'>
              <th className='py-3 px-4 border-b text-left'>Company</th>
              <th className='py-3 px-4 border-b text-left'>Job Title</th>
              <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-3 px-4 border-b text-left max-sm:hidden'>Date</th>
              <th className='py-3 px-4 border-b text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => true ? (
              <tr key={index} className='border-gray-300'>
                <td className='flex items-center border-gray-300 border-b gap-2 py-3 px-4'>
                  <img className='w-8 h-8' src={job.logo} alt='' />
                  {job.company}
                </td>
                <td className='border-b border-gray-300 py-2 px-4 '>{job.title}</td>
                <td className='border-b border-gray-300 py-2 px-4 max-sm:hidden'>{job.location}</td>
                <td className='border-b border-gray-300 py-2 px-4 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='border-b border-gray-300 py-2 px-4 '>
                  <span className={`px-2 py-1 rounded text-white 
  ${job.status === 'Accepted' ? 'bg-green-400' :
                      job.status === 'Rejected' ? 'bg-red-400' :
                        job.status === 'Pending' ? 'bg-orange-400' : 'bg-gray-400'}`}>
                    {job.status}
                  </span>
                </td>
              </tr>
            ) : (null)
            )}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default Applications