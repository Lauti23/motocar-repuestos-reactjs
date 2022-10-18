import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/FirebaseConfig/FirebaseConfig";


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('No hay authProvider')
    return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const registrarse = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{registrarse, login, user, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}