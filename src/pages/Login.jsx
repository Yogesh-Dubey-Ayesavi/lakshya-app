import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/auth";
import { supabaseClient } from "../utils/supabase_helper";
const Login = () => {

  const { authenticate ,user} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate('/');
    }
  },[]);
  
  const handleLogin = async () => {
    const { error } = await authenticate()
    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
        console.log("signed In")
        navigate('/')
    }

  };


async function  checkLogin(){
console.log( await  supabaseClient.auth.getUser())
}

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login With Google</button>
      <button onClick={checkLogin}>check</button>

    </>
  );
};

export default Login;
