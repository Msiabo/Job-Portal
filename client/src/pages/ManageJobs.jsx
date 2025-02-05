import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {

const navigate = useNavigate()

  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='min-w-full max-w-4xl bg-blue-50 border border-blue-300 max-sm:text-sm rounded'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b border-blue-100 text-left font-archivo max-sm:hmax-sm:hidden font-archivoidden'>#</th>
              <th className='py-2 px-4 border-b border-blue-100 text-left font-archivo'>Job Title</th>
              <th className='py-2 px-4 border-b border-blue-100 text-left '>Date</th>
              <th className='py-2 px-4 border-b border-blue-100 text-left max-sm:hidden font-archivo'>Location</th>
              <th className='py-2 px-4 border-b border-blue-100 text-center font-archivo'>Applicants</th>
              <th className='py-2 px-4 border-b border-blue-100 text-left font-archivo'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className='text-gray-600 font-archivo'>
                <td className='py-2 px-4 border-b border-blue-100 max-sm:hidden'>{index + 1}</td>
                <td className='py-2 px-4 border-b border-blue-100'>{job.title}</td>
                <td className='py-2 px-4 border-b border-blue-100 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 border-b border-blue-100 max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b border-blue-100 text-center'>{job.applicants}</td>
                <td className='py-2 px-4 border-b border-blue-100'>
                  <input className='scale-150 ml-4' type='checkbox' />
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 justify-end flex gap-2'>
      <button onClick={() => navigate('/dashboard/add-job')} className='bg-blue-600 text-white py-2 px-4 hover:bg-blue-300 hover:text-blue-600 rounded'>Add Job</button>
      <button className='bg-orange-600 text-white py-2 px-4 hover:bg-orange-300 hover:text-orange-600 rounded'>Edit</button>
      <button className='bg-red-600 text-white py-2 px-4 hover:bg-red-300 hover:text-red-600 rounded'>Delete</button>
      </div>
    </div>
  )
}

export default ManageJobs