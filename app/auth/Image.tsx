import Image from 'next/image'
import React from 'react'

const UserPageImage = () => {
  return (
    <div className='bg-neutral-900 rounded-2xl w-full h-full flex justify-center items-center'>
         <Image className='w-3/4 rotate-275' src={"/img/login-page-image.png"} width={200} height={200} alt='login-page' />
  </div>
  )
}

export default UserPageImage