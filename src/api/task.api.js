import { SERVER_URL } from "./global"
import axios from "axios"

export const getTasksRequest = async () =>
    await axios.get(SERVER_URL + 'tasks')
export const getTasksByUserRequest = async idUser =>
    await axios.get(SERVER_URL + 'tasks/user/'+idUser)