"use client"
import React from 'react'
import { ToastContainer, ToastContainerProps } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"; 

const Notification = (props : ToastContainerProps) => {
  return (
    <ToastContainer {...props} />
  )
}

export default Notification