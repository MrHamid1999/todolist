"use client"
import React from 'react'
import { useLogin } from '@/hooks/useLogin'

const LoginForm = () => {
  const {userName , setUserName , password , setPassword , login , loading} = useLogin()
  
  
  return (
    <div>
      <form 
        onSubmit={login}
      >
          <input 
            className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 px-2 text-sm'
            type="text" 
            placeholder="usernamee"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input 
            className='w-full my-2 p-2 border-solid-1 outline-none active:bg-white border-slate-300 border rounded-lg h-9 text-sm' 
            type="password" 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  
            className='w-full bg-yellow-500 py-2 rounded-lg font-semibold text-neutral-800 mt-5'
          >
            {loading ? 'please wait' : 'Sign in'}
          </button>
      </form>
    </div>
  )
}

export default LoginForm