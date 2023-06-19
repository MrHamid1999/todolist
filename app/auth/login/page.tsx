import { Metadata } from 'next'
import React from 'react'
import LoginForm from './LoginForm';



export const metadata : Metadata = {
  title: 'Login',
  description: 'Login page',
}

const LoginPage = async() => {



  
  // const content = users.map(user => user.lastName)

  return (
          <>
              <h2 className='text-4xl font-bold text-neutral-800 pb-3'>Sign in</h2>
              <LoginForm />
          </>
  )
}

export default LoginPage