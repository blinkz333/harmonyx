import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const ProtectedRoute = ({children}) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
       
        if(!user){
            router.push('/login')
        }
    },[router.push , user])

  return (
        <>
        {user ? children : null}
        </>
    )
}

export default ProtectedRoute