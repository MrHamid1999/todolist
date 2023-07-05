"use client"


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("todoList") || "{}")?.user
    const pathName = isLoggedIn ? "/tasks" : "/auth"

    router.push(pathName)
  } , [ router])
  return (
      <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center"> 
        <Image 
          className="md:w-56"
          src={"/img/login-page-image.png"} 
          width={200} 
          height={200} 
          alt=""  />
      </div>
  )
}


