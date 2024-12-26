import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >  
      <Route index element ={<Home />}    />
      <Route path='/jobs' element ={<Jobs />}    />
      <Route path='*' element ={<NotFound />}    />
    </Route>

    
)
)

const App = () => {
  return <RouterProvider router={router}/>
  // return (
  //   // <>
  //   // <Navbar/>

  //   // <Hero title="Test TItle" subtitle='This is a sub title' />

  //   // <HomeCards />

  //   // <JobsListings />

  //   // <ViewAllJobs />

  //   // </>
  // )
}

export default App