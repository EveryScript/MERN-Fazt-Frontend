import React from 'react'
import { useEffect } from 'react'
import UserCard from '../components/UserCard';
import { useUsers } from '../context/UserContext';

function UserPage() {
  const { users, loadUsers } = useUsers(); // Get from hook

  useEffect(() => {
    loadUsers() // Exec from hook
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-3 text-white">
      <h2 className='text-2xl font-bold'>Our team </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
        {
          users.length > 0 ?
            users.map(user => <UserCard key={user.id} user={user} />) :
            <p>No users registered</p>
        }
      </div>
    </div>
  )
}

export default UserPage
