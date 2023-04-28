import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'; // https://formik.org/docs/overview
import { useUsers } from '../context/UserContext';
import { useParams, useNavigate } from 'react-router-dom';

function Userform() {

  const [user, setUser] = useState({ // State default
    name: "",
    lastname: "",
    email: "",
    password: ""
  })
  const { createUser, getUser, updateUser } = useUsers(); // Hook context
  const params = useParams(); // URL Parameters
  const navigate = useNavigate();

  useEffect(() => {
    // Verifing params URL
    const loadOneUser = async () => {
      const response = await getUser(params.id)
      setUser(response); // Set data user
    }
    if (params.id) {
      loadOneUser();
    }
  }, []);

  return (
    <div>
      <h3 className='text-center font-bold text-3xl text-white my-4'>{params.id ? "Edit user" : "Create user"}</h3>
      <div className="max-w-md mx-auto">
        <Formik
          initialValues={user}
          enableReinitialize={true} // Refresh data
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateUser(params.id, values)
            } else {
              await createUser(values);
            }
            navigate('/')
            setUser({
              name: "",
              lastname: "",
              email: "",
              password: ""
            })
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label className='text-white block w-100'> Name </label>
              <input className='block w-full px-2 py-1 rounded-sm mb-3' type="text" name="name" placeholder="Sarah" onChange={handleChange} value={values.name} />
              <label className='text-white block w-100'> Last Name </label>
              <input className='block w-full px-2 py-1 rounded-sm mb-3' type="text" name="lastname" placeholder="Anderson" onChange={handleChange} value={values.lastname} />
              <label className='text-white block w-100'> Email </label>
              <input className='block w-full px-2 py-1 rounded-sm mb-3' type="email" name="email" placeholder="email@email.com" onChange={handleChange} value={values.email} />
              <label className='text-white block w-100'> Password </label>
              <input className='block w-full px-2 py-1 rounded-sm mb-3' type="password" name="password" onChange={handleChange} value={values.password} />
              <button className='block w-full py-2 bg-green-600 rounded-md' type="submit" disabled={isSubmitting}> {isSubmitting ? "Saving..." : "Save"} </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Userform
