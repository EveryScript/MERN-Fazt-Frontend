import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTasksByUserRequest } from "../api/task.api"
import { Formik, Form, Field } from 'formik'

export const TasksUser = () => {
    // States and constants
    const [task, setTask] = useState({ title: '', task: '' })
    const [taskFormFlag, setTaskFormFlag] = useState(true)
    const params = useParams()
    // Effects
    useEffect(() => {
        if (params.id) loadTasksByIdUser()
    }, [])
    // Handlers
    const handleSubmitTask = () => {
        setTaskFormFlag(!taskFormFlag)
    }
    // Functions
    const loadTasksByIdUser = async () => {
        // const response = await getTasksByUserRequest(params.id)
    }

    return <section className="text-white px-7">
        <h3 className="text-4xl font-bold mb-3"> User tasks</h3>
        <button className='px-3 py-2 bg-green-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={() => setTaskFormFlag(!taskFormFlag)} hidden={!taskFormFlag}>
            New task</button>
        <div hidden={taskFormFlag}>
            <Formik initialValues={task} onSubmit={handleSubmitTask}>{
                () => (<Form className="">
                    <fieldset className="mb-3">
                        <label id='title' className='text-cyan-600 text-sm block'> Title </label>
                        <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                            type='text' name='title' placeholder='The work' />
                    </fieldset>
                    <fieldset className="mb-3">
                        <label id='task' className='text-cyan-600 text-sm block'> Task description </label>
                        <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                            type='text' name='task' placeholder='Something to say is something to be' />
                    </fieldset>
                    <button className='px-3 py-2 bg-green-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
                        type="submit">Create task</button>
                </Form>)
            }</Formik>
        </div>
    </section>
}