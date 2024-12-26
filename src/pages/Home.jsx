import React from 'react'
import Hero  from '../components/Hero' 
import HomeCards  from '../components/HomeCards' 
import JobsListings from '../components/JobsListings'
import ViewAllJobs from '../components/ViewAllJobs';


const Home = () => {
  return (
      <>
        <Hero title="Test TItle" subtitle='This is a sub title' />

        <HomeCards />

        <JobsListings isHome={true} />

        <ViewAllJobs />
      </>
  )
}

export default Home