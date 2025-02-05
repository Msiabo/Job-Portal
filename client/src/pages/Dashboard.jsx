import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    return (
        <div className='min-h-screen'>

            {/** Recruiter navbar */}
            <div className='shadow py-4'>
                <div className='px-5 flex items-center justify-between'>
                    <img className='max-sm:w-32 cursor-pointer w-[30]' onClick={() => navgate('/dashboard')} src={assets.careerLink} alt="" height={10} />
                    <div className='flex items-center gap-3 '>
                        <p className='max-sm:hidden'>Welcome ,Recruiter</p>
                        <div className='relative group'>
                            <img src={assets.company_icon} alt='' />
                            <div>
                                <ul>
                                    <li>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-start'>
                {/** Left Sidebar */}
                <div className='inline-block min-h-screen border-r-2 border-gray-200'>
                    <ul className='flex flex-col items-start pt-5 text-gray-600'>

                        <NavLink to={'/dashboard/add-job'} className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img className='min-w-4' src={assets.add_icon} alt='' />
                            <p className='max-sm:hidden'>Add Job</p>
                        </NavLink>

                        <NavLink to={'/dashboard/manage-jobs'} className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img className='min-w-4' src={assets.home_icon} alt='' />
                            <p className='max-sm:hidden'>Manage Jobs</p>
                        </NavLink>

                        <NavLink to={'/dashboard/view-applications'} className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
                            <img className='min-w-4' src={assets.person_tick_icon} alt='' />
                            <p className='max-sm:hidden'>View Applications</p>
                        </NavLink>

                    </ul>
                </div>

                {/** Right Content */}
                <div className='flex-grow p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard