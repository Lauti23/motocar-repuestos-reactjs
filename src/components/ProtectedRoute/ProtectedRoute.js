import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuth()

    if (loading) return <p>Cargando...</p>

    if (!user ) return <Navigate to='/login' />

    return <>{children}</>
    
    
    
    
    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute