import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function PrivateRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      user?.user_metadata?.sem == null &&
      user?.user_metadata?.phone_number == null
    ) {
      navigate("/update_user");
    }
  }, [navigate, user?.user_metadata?.phone_number, user?.user_metadata?.sem]);

  return user != null ? <Outlet /> : navigate('/login');
}
