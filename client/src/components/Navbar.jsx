import React, { useContext } from 'react';
import { UserButton, useClerk, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()
    const navgate = useNavigate()

    const {setShowRecruiterLogin} = useContext(AppContext)

    return (
        <div className='shadow p-4'>
            <div className='container px-4 2xl:px-20 mx-auto flex flex-wrap justify-between items-center'>
                <div className='logoheader gap-3'>
                    <img onClick={() => navgate('/')} className='cursor-pointer' src={assets.careerLink} alt="" height={10} />
                    
                </div>
                {
                    user ?
                        <div className='flex gap-4'>
                            <Link to={"/applications"}>Applied Jobs</Link>
                            <p></p>
                            <p className='max-sm:hidden'>Hi, {user.firstName}</p>
                            <UserButton />
                        </div>
                        :
                        <div className='flex gap-4 max-sm:text-xs '>
                            <button onClick={e=> setShowRecruiterLogin(true)} className='recruiterLoginButton'>Recruiter Login</button>
                            <button onClick={e => openSignIn()} className='loginButton'>Login</button>
                        </div>
                }

                

            </div>
        </div>
    )
}

export default Navbar