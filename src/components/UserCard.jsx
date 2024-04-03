import React from 'react'
import { useUsers } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/es'
dayjs.locale('es')

function UserCard({ user }) {
    const { deleteUser, toogleStatus } = useUsers(); // Function from hook
    const navigate = useNavigate();

    const handleToggle = () => {
        toogleStatus(user.id)
    }

    return (
        <article className='bg-gray-800 rounded-lg px-5 py-6'>
            <header className='text-center'>
                <span className='block text-5xl mb-3'>{user.status == 1 ? '😀' : '😴'}</span>
                <h4 className='text-2xl font-bold'>{user.name + ' ' + user.lastname}</h4>
            </header>
            <p className='text-gray-400 text-sm text-center'>{user.email}</p>
            <div className="flex justify-center gap-1 my-3">
                <button className='bg-blue-800 px-3 py-1 text-sm rounded-full shadow-sm shadow-black hover:bg-gray-900'
                    onClick={() => deleteUser(user.id)}>Delete</button>
                <button className='bg-red-700 px-3 py-1 text-sm rounded-full shadow-sm shadow-black hover:bg-gray-900'
                    onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                <button className='bg-green-800 px-3 py-1 text-sm rounded-full shadow-sm shadow-black hover:bg-gray-900'
                    onClick={() => handleToggle()}>Toggle</button>
                <button className='bg-purple-800 px-3 py-1 text-sm rounded-full shadow-sm shadow-black hover:bg-gray-900'
                    onClick={() => navigate('/tasks/'+user.id)}>Tasks</button>
            </div>
            <p className='text-cyan-600 text-xs text-center'>{dayjs(user.created_at).format('MMMM D, YYYY')}</p>
        </article>
    )
}

export default UserCard
