import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function LoggedOutRoutes() {
    const { user } = useSelector((state) => ({ ...state }))
    return user ? <Navigate to="/" /> : <Outlet />
}
