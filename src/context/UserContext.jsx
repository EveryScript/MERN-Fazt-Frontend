import { createContext, useContext, useState } from "react";
import { getUsersRequest, deleteUserRequest, createUserRequest, getUserRequest, updateUserRequest, toogleUserStatusRequest } from "../api/user.api";

export const UserContext = createContext(); // My context

// My Hook (Always starts "use")
export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("Error, el contexto no existe")
    }

    return context
}

// My context
export const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]); // Simple state context

    // Get all users
    async function loadUsers() {
        const response = await getUsersRequest()
        setUsers(response.data);
    }

    // Get one user
    const getUser = async (id) => {
        try {
            const response = await getUserRequest(id)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }

    // Delete a user
    const deleteUser = async (id) => {
        try {
            const response = await deleteUserRequest(id)
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error(error)
        }
    }

    // Create task
    const createUser = async (values) => {
        try {
            const response = await createUserRequest(values)
            console.log(response)

        } catch (error) {
            console.error(error)
        }
    }

    // Update user
    const updateUser = async (id, values) => {
        try {
            const response = await updateUserRequest(id, values)
        } catch (error) {
            console.error(error)
        }
    }

    // Toogle status user
    const toogleStatus = async (id) => {
        try {
            const userFound = users.find(user => user.id == id)
            await toogleUserStatusRequest(id, userFound.status === 0 ? true : false)
            setUsers(
                users.map(user => user.id === id ? { ...user, status: !user.status } : user)
            )
        } catch (error) {
            console.error(error)
        } 
    }

    return (
        // value = Export object {variables, functions, ...}
        <UserContext.Provider value={{ users, loadUsers, deleteUser, createUser, getUser, updateUser, toogleStatus }}>
            {children}
        </UserContext.Provider>
    )
}