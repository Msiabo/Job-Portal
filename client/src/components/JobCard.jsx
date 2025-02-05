import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {

    const navigate = useNavigate()

    return (
        <div className='border p-6 shadow rounded border-gray-400 sm:mr-5 sm:ml-5'>
            <div className='flex justify-between items-center '>
                <img className='h-8' src={assets.company_icon} alt='' />
            </div>
            <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                    {job.location}
                </span>
                <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                    {job.level}
                </span>
            </div>
            <p className='text-gray-500 text-sm mt-4 mb-2' dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}>

            </p>
            <div className='flex gap-4 max-sm:text-xs '>
                <button onClick={() => {navigate(`./apply-job/${job._id}`);scrollTo(0,0)}} className='applyButton'>Apply Now</button>
                <button onClick={() => {navigate(`./apply-job/${job._id}`);scrollTo(0,0)}}  className='learnButton'>Learn More</button>
            </div>
        </div>
    )
}

export default JobCard