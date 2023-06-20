import React  from 'react'
import { Metadata } from 'next';
import SignUpForm from './SignUpForm';
import usersList from '@/lib/users';


export const metaData : Metadata ={
    title : "Sign Up" , 
    description : "fill out the sign up form"
}

const SignUpPage = async () => {
  const users = await usersList()
  return (
    <>
      <h2 className='text-4xl font-bold text-neutral-800 pb-3'>Sign Up</h2>
      <SignUpForm usersList={users} />
    </>
  )
}

export default SignUpPage