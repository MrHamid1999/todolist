import React from 'react'

type Props  = {
    children : React.ReactNode
}

const AuthPageContainer = ({children} : Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center md:m-auto'>
        <div className='w-3/4 h-1/2'>
            {children}
        </div>
    </div>
  )
}

export default AuthPageContainer