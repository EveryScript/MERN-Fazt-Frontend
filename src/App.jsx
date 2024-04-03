import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import UserForm from './pages/UserForm'
import UserPage from './pages/UserPage'
import { UserContextProvider } from './context/UserContext'
import Welcome from './pages/Welcome'
import { UserLogin } from './pages/UserLogin'
import { TasksUser } from './pages/TasksUser'

function App() {
  return <>
    <NavBar />
    <div className="max-w-6xl mx-auto my-3">
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/new' element={<UserForm />} />
          <Route path='/edit/:id' element={<UserForm />} />
          <Route path='/tasks/:id' element={<TasksUser />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserContextProvider>
    </div>
  </>
}

export default App
