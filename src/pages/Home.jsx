import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabaseClient } from "../utils/supabase_helper";


function handleLogout(){
    supabaseClient.auth.signOut();
}

const Home = () => {
  const [data, setData] = useState({
    fullName: "",
    eMail: "",
    picURL: "",
  }); //preparing the skeleton to present on the home page
  useEffect(() => {
    async function getData() {
      const userData = await supabaseClient.auth.getUser();
      try {
        const {
          email,
          full_name,
          picture: pictureURL,
        } = userData.data.user.user_metadata;
        setData({
          fullName: full_name,
          eMail: email,
          picURL: pictureURL,
        }); //replaces the skeleton data with actual info
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1>Home</h1>

      {data.eMail ? ( //just to make sure that the email field isnt empty
        <>
          <h3>User Info:</h3>
          <div>Name: {data.fullName}</div>
          <div>Email: {data.eMail}</div>
          <div>Profile Picture: </div>
          <img src={data.picURL} />
        </>
      ) : (
        <Link to="/login">Login</Link>
        
      )}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
