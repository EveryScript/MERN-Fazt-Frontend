import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import UserForm from './pages/UserForm'
import UserPage from './pages/UserPage'
import { UserContextProvider } from './context/UserContext'

function App() {
  return (
    <div className='bg-gray-700 h-screen'>
      <NavBar />
      <div className="container mx-auto my-3">
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<UserPage />} />
            <Route path='/new' element={<UserForm />} />
            <Route path='/edit/:id' element={<UserForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContextProvider>
      </div>
    </div>
  )
}

export default App
