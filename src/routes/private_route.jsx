import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export function PrivateRoute() {
  const { user } = useAuth()

  return (
    user != null ? <Outlet /> : <Navigate to="/login" />
   
  )
}