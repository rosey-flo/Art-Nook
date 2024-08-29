import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Header from './components/Header'

import MainGallery from "./pages/MainGallery"



function App() {


  return (
    <>

      <Header />


      <Routes>
        <Route path='/' element={<MainGallery />} />
      </Routes>

    </>
  )
}

export default App
