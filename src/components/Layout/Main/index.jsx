import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../../pages/NotFound'
import Home from '../../../pages/Home'
import MainLayout from '../MainLayout'

export default function Main() {
  return (
    <main>
      <p>Main</p>
      {/* <Router>
        <Routes>
          <Route path="/" element={<MainLayout/>} >
            <Route index element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Router> */}
      
    </main>
  )
}
