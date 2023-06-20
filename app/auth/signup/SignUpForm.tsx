"use client"

import Notification from '@/components/Notification'
import useSignup from '@/hooks/useSignup'
import { User } from '@/types/user'
import { Field, Form, Formik } from 'formik'
import React from 'react'

type SignUpFormProps = {
  usersList : User[]
}

const SignUpForm = (props : SignUpFormProps) => {

  const {
    initialValues ,
     signup
  } = useSignup(props.usersList)

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={signup}
      >
        {({isSubmitting ,}) => {
              return ( <Form
              >
                  <Field
                    className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 px-2 text-sm'
                    type="text" 
                    name="userName"
                    placeholder="userName"
                  /> 
                  <div className='grid grid-cols-2 gap-5'>
                    <Field
                      className=' my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 px-2 text-sm'
                      type="text" 
                      name="firstName"
                      placeholder="first name"
                    />
                    <Field
                      className=' my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 px-2 text-sm'
                      type="text" 
                      name="lastName"
                      placeholder="last name"
                    />
                  </div>
                  <Field 
                    className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 text-sm' 
                    type="email" 
                    name="email"
                    placeholder='email address'
                    
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

export default SignUpForm