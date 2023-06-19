"use client"
import React from 'react'
import { useLogin } from '@/hooks/useLogin'
import Notification from '@/components/Notification'
import { Field, Form, Formik } from 'formik'

const LoginForm = () => {
  const {
    initialValues ,
    login 
  } = useLogin()
  
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={login}
      >
        {({isSubmitting ,}) => {
              return ( <Form 
              >
                  <Field 
                    className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 px-2 text-sm'
                    type="text" 
                    name="username"
                    placeholder="username"
                  />
                  <Field 
                    className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 text-sm' 
                    type="password" 
                    name="password"
                    placeholder='password'
                    
                  />
                  <button  
                    className='w-full bg-yellow-500 py-2 rounded-lg font-semibold text-neutral-800 mt-5'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'please wait' : 'Sign in'}
                  </button>
              </Form>)
        }}
      </Formik>
      <Notification />
    </div>
  )
}

export default LoginForm