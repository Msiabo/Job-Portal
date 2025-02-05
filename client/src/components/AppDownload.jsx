import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
    return (
        <div className="flex items-center justify-center px-4 2xl:px-20 my-20 w-full">
        <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg text-center w-full max-w-none">
            <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md mx-auto">
                Download our mobile app for a better experience
            </h1>
            <div className="flex justify-center gap-4">
                <a href="#" className="inline-block">
                    <img className="h-12" src={assets.play_store} alt="" />
                </a>
                <a href="#" className="inline-block">
                    <img className="h-12" src={assets.app_store} alt="" />
                </a>
            </div>
        </div>
    </div>
    

    )
}

export default AppDownload