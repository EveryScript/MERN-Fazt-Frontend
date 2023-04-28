import React from 'react'
import { useEffect } from 'react'
import UserCard from '../components/UserCard';
import { useUsers } from '../context/UserContext';

function UserPage() {
  const { users, loadUsers } = useUsers(); // Get from hook

  useEffect(() => {
    loadUsers() // Exec from hook
  }, [])

  function renderUserList() {
    if (users.length > 0)
      return users.map(user => <UserCard key={user.id} user={user} />)
    else
      return <p>No users registered</p>
  }

  return (
    <div className="text-white">
      <h2 className='text-2xl font-bold text-center'>This is our team </h2>
      <div className='grid grid-cols-4 gap-2 mt-4'>
        {
          renderUserList()
        }
      </div>
    </div>
  )
}

export default UserPage
