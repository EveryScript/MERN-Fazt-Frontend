import axios from "axios"

export const getUsersRequest = async () =>
    await axios.get('http://localhost:3000/users')

export const getUserRequest = async (id) =>
    await axios.get('http://localhost:3000/user/'+ id)

export const createUserRequest = async (user) =>
    await axios.post('http://localhost:3000/user', user)

export const deleteUserRequest = async (id) =>
    await axios.delete('http://localhost:3000/user/' + id)

export const updateUserRequest = async (id, userFields) =>
    await axios.put(`http://localhost:3000/user/${id}`, userFields)

export const toogleUserStatusRequest = async (id, status) => 
    await axios.put(`http://localhost:3000/status/${id}`, { status })
