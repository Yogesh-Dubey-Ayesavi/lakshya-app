import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import NavBar from "../components/NavBar/NavBar";

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
    if (user == undefined) {
      navigate("/login");
    }
  }, [navigate, user, user?.user_metadata]);

  return user != null ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : null;
}
