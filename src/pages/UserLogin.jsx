import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react"

// --- Uso de formik ---
/* 
    - Para formik es importante el campo "name" de cada input text
    - Formik utiliza "rendered props" es decir una función que renderiza codigo JSX
    - Hay varios elementos de Formik que se usan para controlar el formulario y se encuentran en el objeto "props"
    - La funcion "handleBlur" funciona con "validate" para validar los campos cuando salimos de ellos
    - Una buena tecnica es crear un objeto de errores para cada valor del formulario para controlar mejor la validación
    - "touched" es un objeto de Formik que muestra cual campo del formulario ha sido tocado
    - Formik ofrece varios elementos para que el formulario sea más entendible (Form, Field, ErrorMessage)
    - El componente "Field" puede ser utilizado como cualquier otro elemento de formulario: https://youtu.be/2Xs1DAzYHXY?t=2861
*/

export const UserLogin = () => {
    // Handlers
    const handleSubmitLogin = (formikValues, actions) => {
        console.log(formikValues)
        actions.resetForm()
    }
    const handleValidateLogin = formikValues => {
        let userErrors = {}
        if (!formikValues.email)
            userErrors.email = 'Email id required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formikValues.email))
            userErrors.email = 'Input a valid email'
        if (!formikValues.password) userErrors.password = 'Input a valid password'
        return userErrors
    }
    return <section>
        <h3 className='text-center font-bold text-3xl text-white my-4'>Sign in</h3>
        <Formik initialValues={{ email: '', password: '' }}
            enableReinitialize
            validate={handleValidateLogin}
            onSubmit={handleSubmitLogin}>
            {/* Rendered props - inyeccion de elementos de Formik */}
            {(props) => (
                // <form className='max-w-[30rem] mx-auto px-4 text-white' onSubmit={props.handleSubmit}>
                <Form className='max-w-[30rem] mx-auto px-4 text-white'>
                    <label className='text-cyan-600 text-sm block mb-1'> Email </label>
                    {/* <input className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    /> */}
                    <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                    />
                    {/* {props.touched.email && props.errors.email && <span className="text-sm text-red-500">{props.errors.email}</span>} */}
                    <ErrorMessage name="email" component={() => <span className="text-sm text-red-500">{props.errors.email}</span>} />
                    <label className='text-cyan-600 text-sm block mb-1 mt-3'> Password </label>
                    {/* <input className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                        type="password"
                        name="password"
                        value={props.values.password}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    /> */}
                    <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                        type="password"
                        name="password"
                        value={props.values.password}
                    />
                    {/* {props.touched.password && props.errors.password && <span className="text-sm text-red-500">{props.errors.password}</span>} */}
                    <ErrorMessage name="password" component={() => <span className="text-sm text-red-500">{props.errors.password}</span>} />
                    <button className='block w-full py-2 mt-3 bg-green-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed' type="submit"
                        disabled={props.errors.email || props.errors.password}> Sign in </button>
                </Form>
            )}
        </Formik>
    </section>
}