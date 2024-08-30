import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Header from './components/Header'
import Protect from './components/Protect'

import MainGallery from "./pages/MainGallery"
import AuthForm from './pages/AuthForm'

import { GET_USER } from './graphql/queries'


function App() {
  const [user, setUser] = useState(null)
  const { data } = useQuery(GET_USER)
  useEffect(() => {
    if (data) {
      setUser(data.getUser.user)
    }
  }, [data])

  return (
    <>

      <Header setUser={setUser} user={user} />

      <Routes>
        <Route path='/' element={<MainGallery />} />
        <Route path='/auth' element={(
          <Protect requireAuth={false} user={user} >
            <AuthForm setUser={setUser} />
          </Protect>
        )} />
      </Routes>

    </>
  )
}

export default App
