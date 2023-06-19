import Link from 'next/link'
import React from 'react'

const AuthPage = () => {
  return (
        <>
            <h2 className='text-3xl font-bold mb-2 text-neutral-800' >Productive Mind</h2>
            <p className=''>With only the features you need, Organic Mind is customized for 
            individuals seeking a stress-free way to stay focused on their goals, 
            projects, and tasks.</p>
            <div 
            className='w-full mt-5 bg-yellow-500 p-2 flex justify-center items-center rounded-lg font-semibold text-neutral-800'
            >
                <Link href={"/auth/signup"} >Get Started</Link>
            </div>
            <div className='mt-5 flex justify-center items-center font-semibold text-neutral-700 text-sm'>
              <p>Already have an account?</p>
              <Link href={"/auth/login"} className='hover:underline hover:text-blue-500' >Sign in</Link>
            </div>
        </>

  )
}

export default AuthPage