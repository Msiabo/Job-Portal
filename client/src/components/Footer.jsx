import React from 'react';
import { assets } from '../assets/assets';
import "boxicons/css/boxicons.min.css";

const Footer = () => {
    return (
        <div className='container mx-auto px-4 py-6 flex flex-wrap items-center justify-center sm:justify-between gap-4 2xl:px-20 mt-20 w-full'>

            {/* Logo */}
            <img src={assets.careerLink} alt='Career Link Logo' className="w-32 sm:w-40" />

            {/* Copyright */}
            <div className='text-center sm:text-left text-sm text-gray-500 w-full sm:w-auto'>
                &copy; Copyright <strong><span>CyberCore IT Solutions</span></strong>. All Rights Reserved
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 justify-center sm:justify-end w-full sm:w-auto social-links">
                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="bx bxl-twitter text-2xl"></i></a> 
                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="bx bxl-facebook text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="bx bxl-instagram text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="bx bxl-skype text-2xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-blue-600"><i className="bx bxl-linkedin text-2xl"></i></a>
            </div>

        </div>
    );
}

export default Footer;
