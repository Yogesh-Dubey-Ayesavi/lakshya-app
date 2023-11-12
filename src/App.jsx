import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/404/not_found_component";
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
        <Route path = "*" element = {<NotFound/>} ></Route>
      </Routes>
    </AuthProvider>
   </Router>
  )
}

export default App