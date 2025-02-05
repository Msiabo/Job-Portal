import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    
    const onSearch = () => {
        setSearchFilter({
            title : titleRef.current.value ,
            location : locationRef.current.value

        })
        setIsSearched(true)
       
    }

    return (
        <div>
            <div className="myhero flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
                <h2 className="text-lg">Find your dream job near you</h2>
                <h1 className="font-bold">Start your job hunt with us today!!</h1>
                <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:xm-auto mr-2 '>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt='' />
                        <input type='text' placeholder='Search for jobs'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={titleRef} />
                    </div>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt='' />
                        <input type='text' placeholder='Location'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={locationRef} />
                    </div>
                    <button onClick={onSearch} className='bg-blue-600 px-6 py-2 text-white m-1 btn'>Search</button>
                </div>

            </div>
        </div>

    )
}

export default Hero