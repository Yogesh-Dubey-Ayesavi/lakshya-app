import React, { useContext, useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabase_helper';

const AuthContext = React.createContext()


export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
  
    useEffect( () => {
      // Check active sessions and sets the user
     supabaseClient.auth.getSession().then((session)=>{
          
      setUser(session?.data?.session?.user)
      setLoading(false)
  
     })
  
      // Listen for changes on auth state (logged in, signed out, etc.)
      const { data: listener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })
  
      return () => {
        listener?.subscription.unsubscribe();
      }
    }, [])
  
    // Will be passed down to Signup, Login and Dashboard components
    const value = {
      authenticate: async ()  =>  await supabaseClient.auth.signInWithOAuth({
        provider: "google",
      }),
      signOut: async () => await supabaseClient.auth.signOut(),
      user,
    }
  
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
  }


  
export function useAuth() {
    return useContext(AuthContext)
}