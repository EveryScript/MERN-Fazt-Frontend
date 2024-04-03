import axios from "axios"
import { SERVER_URL } from "./global"

export const getUsersRequest = async () =>
    await axios.get(SERVER_URL + 'users')

export const getUserRequest = async (id) =>
    await axios.get(SERVER_URL + 'user/' + id)

export const createUserRequest = async (user) =>
    await axios.post(SERVER_URL + 'user', user)

export const deleteUserRequest = async (id) =>
    await axios.delete(SERVER_URL + 'user/' + id)

export const updateUserRequest = async (id, userFields) =>
    await axios.put(SERVER_URL + `user/${id}`, userFields)

export const toogleUserStatusRequest = async (id, status) =>
    await axios.put(SERVER_URL + `status/${id}`, { status })
