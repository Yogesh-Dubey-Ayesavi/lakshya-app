    import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

    export function PrivateRoute() {
      const { user } =   useAuth();
      const navigate = useNavigate();
      useEffect(() => {
        if (user?.user_metadata?.sem ==null &&user?.user_metadata?.phone_number == null) {
          navigate("/update_user")
        }   }, []);

      return (
        user != null ? <Outlet /> : <Navigate to="/login" />
      
      )
    }