import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import moment from 'moment'
import kConvert from 'k-convert'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'



const ApplyJob = () => {

    const { id } = useParams()

    const [jobData, setJobData] = useState(null)

    const { jobs } = useContext(AppContext)

    const fetchJob = async () => {
        const data = jobs.filter(job => job._id === id)

        if (data.length !== 0) {
            setJobData(data[0])
            console.log(data[0]);
        }

    }

    useEffect(() => {

        if (jobs.length > 0) {
            fetchJob()
        }


    }, [id, jobs])

    // Get Similar Jobs
    const getSimilarJobs = () => {
        if (!jobData) return [];
        return jobs
            .filter(job => job._id !== jobData._id && job.category === jobData.category)
            .slice(0, 4); // ✅ Corrected slicing
    };
    

    return jobData ? (
        <>
            
                <Navbar />
            
            <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto font-Archivo sm:w-fit'>
                <div className='bg-white text-black rounded-lg w-full'>
                    <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 bg-sky-50 border border-sky-500 rounded-xl'>
                        <div className='flex flex-col md:flex-row items-center '>
                            <img className='h-24 bg-white rounded-14 p-4 mr-4 max-md:mb-4 border border-amber-50 rounded-xl' src={jobData.companyId.image} alt=''/>
                            <div className='text-center md:text-left text-neutral-700'>
                                <h1 className='text-2xl sm:text-4xl font-medium'>
                                    {jobData.title}
                                </h1>
                                <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-700 mt-2'>
                                    <span className='flex items-center gap-1'>
                                        <img src={assets.suitcase_icon} alt=''/>
                                        {jobData.companyId.name}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <img src={assets.location_icon} alt=''/>
                                        {jobData.location}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <img src={assets.person_icon} alt=''/>
                                        {jobData.level}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <img src={assets.money_icon} alt=''/>
                                         CTC :{kConvert.convertTo(jobData.salary)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center '>
                            <button className='bg-blue-800 p-2.5 px-10 text-white rounded cursor-pointer hover:bg-white hover:text-blue-800 hover:transform: scale(1.1)'>Apply Now</button>
                            <p className='mt-2 text-gray-600'>Posted {moment(jobData.date).fromNow()}</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-start'>
                        <div className='w-full lg:w-2/3'>
                            <h2 className='font-bold mb-4 text-2xl mt-4 font-Archivo'>
                                Job Description
                            </h2>
                            <div className='rich-text max-h-[70vh] overflow-y-auto' dangerouslySetInnerHTML={{__html:jobData.description}}>
                            
                            </div>
                            <button className='bg-blue-800 p-2.5 px-10 text-white rounded cursor-pointer hover:bg-white hover:text-blue-800 hover:transform: scale(1.1) mt-10'>Apply Now</button>
                        </div>
                       {/* Similar Jobs Section */}
                       <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
                            <h2 className="font-bold text-2xl mb-4 mt-4">Similar Jobs</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {getSimilarJobs().length > 0 ? (
                                    getSimilarJobs().map((job, index) => <JobCard key={index} job={job} />)
                                ) : (
                                    <p className="text-gray-500">No similar jobs found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
            <div>
                <Footer/>
            </div>

        </>
    ) : (

        <Loading />
    )
}

export default ApplyJob