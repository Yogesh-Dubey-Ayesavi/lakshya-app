import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { authenticate, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    const { error } = await authenticate();
    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      console.log("signed In");
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "2em", color: "#4285f4" }}>
          Welcome{" "}
        </h1>
        <button
          style={{
            padding: "15px 30px",
            backgroundColor: "#4285f4",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.2em",
            fontWeight: "bold",
            boxShadow:
              "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
