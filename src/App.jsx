import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Home from './pages/Home';
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/private_route";

const App = () => {
  return (
   <Router>
    <AuthProvider>
      <Routes>
        <Route exact path ="/" element = {<PrivateRoute/>} >
        <Route exact path = "/" element = {< Home />} />
          </Route>
        <Route exact path ="/login" element={<Login/>} />
      </Routes>
    </AuthProvider>
   </Router>
  )
}

export default App