import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'; // https://formik.org/docs/overview
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

function Userform() {
  // States
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  })
  const { createUser, getUser, updateUser } = useUsers(); // Hook context
  const params = useParams(); // URL Parameters
  const navigate = useNavigate();
  // Effects
  useEffect(() => {
    if (params.id) loadUserById()
  }, []);
  // Handlers
  const handlerSubmitUser = async (formikValues, actions) => {
    if (params.id)
      await updateUser(params.id, formikValues)
    else
      await createUser(formikValues);
    actions.resetForm()
    navigate('/users')
  }
  const handleValidateUser = formikValues => {
    let userErrors = {}
    if (!formikValues.name) userErrors.name = 'Name is required'
    if (!formikValues.lastname) userErrors.lastname = 'Lastname is required'
    if (!formikValues.email) userErrors.email = 'Email is required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formikValues.email))
      userErrors.email = 'Input a valid email'
    if (!formikValues.password) userErrors.password = 'Password is required'
    return userErrors
  }
  // Functions
  const loadUserById = async () => {
    const response = await getUser(params.id)
    setUser({
      name: response?.name,
      lastname: response?.lastname,
      email: response?.email,
      password: '',
    })
  }
  return (
    <section>
      <h3 className='text-center font-bold text-3xl text-white my-4'>{params.id ? "Edit user" : "Create user"}</h3>
      <div className="max-w-md mx-auto">
        <Formik initialValues={user}
          enableReinitialize
          validate={handleValidateUser}
          onSubmit={handlerSubmitUser}>
          {({ errors, isSubmitting }) => (
            <Form className='text-white'>
              <fieldset>
                <label id='name' className='text-cyan-600 text-sm block mb-1'> Name </label>
                <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                  type='text' id='name' name='name' placeholder='Jhon' />
                <ErrorMessage name="name" component={() => <span className="text-sm text-red-500">{errors.name}</span>} />
              </fieldset>
              <fieldset>
                <label id='lastname' className='text-cyan-600 text-sm block mb-1 mt-3'> Last Name </label>
                <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                  type='text' id='lastname' name='lastname' placeholder='Doe' />
                <ErrorMessage name="lastname" component={() => <span className="text-sm text-red-500">{errors.lastname}</span>} />
              </fieldset>
              <fieldset>
                <label id='email' className='text-cyan-600 text-sm block mb-1 mt-3'> Email </label>
                <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                  type='email' id='email' name='email' placeholder='jhon@doe.com' />
                <ErrorMessage name="email" component={() => <span className="text-sm text-red-500">{errors.email}</span>} />
              </fieldset>
              <fieldset>
                <label id='password' className='text-cyan-600 text-sm block mb-1 mt-3'> Password </label>
                <Field className='block w-full px-3 py-2 rounded-md bg-gray-900 border-cyan-800 border-[1px] focus:border-cyan-900'
                  type='password' id='password' name='password' />
                <ErrorMessage name="password" component={() => <span className="text-sm text-red-500">{errors.password}</span>} />
              </fieldset>
              <button className='block w-full py-2 bg-green-600 rounded-md mt-3 disabled:opacity-50 disabled:cursor-not-allowed'
                type="submit" disabled={errors.name || errors.lastname || errors.email || errors.password}>
                {isSubmitting ? "Saving..." : "Save"} </button>
              <div className='mt-3 text-center'>
                <Link className='text-cyan-800 text-center underline text-sm' to={'/users'}>Back</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Userform
