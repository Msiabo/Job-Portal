import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="items-center h-[50] sm:block">
                <Hero />
            </div>

            <JobListing />
            <AppDownload/>
            <Footer/>

        </div>
    )
}

export default Home