import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
      <div>
        <table className='w-full max-w-4xl bg-blue-50 border border-blue-300 max-sm:text-sm '>
          <thead>
            <tr className='border-b border-blue-100'>
              <th className='py-2 px-4 text-left font-archivo'>#</th>
              <th className='py-2 px-4 text-left font-archivo'>Applicant</th>
              <th className='py-2 px-4 text-left max-sm:hidden font-archivo'>Job Title</th>
              <th className='py-2 px-4 text-left max-sm:hidden font-archivo'>Location</th>
              <th className='py-2 px-4 text-left font-archivo'>CV</th>
              <th className='py-2 px-4 text-left font-archivo'>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className='text-gray-600'>
                <td className='py-2 px-4 border-b text-center border-blue-100'>
                  {index + 1}
                </td>
                <td className='py-2 px-4 border-b text-center flex border-blue-100'>
                  <img className='w-10 h-10 rounded-full mr-3 max-sm:hidden' src={applicant.imgSrc} alt='' />
                  <span>{applicant.name}</span>
                </td>
                <td className='py-2 px-4 border-b max-sm:hidden border-blue-100'>
                  {applicant.jobTitle}
                </td>
                <td className='py-2 px-4 border-b max-sm:hidden border-blue-100'>
                  {applicant.location}
                </td>
                <td className='py-2 px-4 border-b border-blue-100'>
                  <a href='' target='_blank' className='bg-blue-100 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center'>
                    CV<img src={assets.resume_download_icon} alt='' />
                  </a>
                </td>
                <td className='py-2 px-4 border-b relative border-blue-100'>
                  <div className='relative inline-block text-left group'>
                    <button className='text-gray-500 action-button'>...</button>
                    <div className='z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-blue-50 border  border-blue-200 rounded shadow group-hover:block'>
                      <button className='block w-full text-left px-4 py-2 text-blue-500 hover:bg-blue-300'>Accept</button>
                      <button className='block w-full text-left px-4 py-2 text-red-500 hover:bg-red-300'>Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications