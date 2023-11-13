import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./components/404/not_found_component";
import { AuthProvider } from "./contexts/auth";
import Login from "./pages/Login";
import CardList from "./pages/events";
import MyForm from "./pages/user_details_form/user_form";
import { PrivateRoute } from "./routes/private_route";
const App = () => {
  return (
   <Router>
    <AuthProvider>
      <Routes>
        <Route exact path ="/" element = {<PrivateRoute/>} >
        <Route exact path = "/" element = {< CardList />} />
          </Route>
          <Route exact path ="/update_user" element = {<PrivateRoute/>} >
        <Route exact path = "/update_user" element = {< MyForm />} />
          </Route>
        <Route exact path ="/login" element={<Login/>} />
        <Route path = "*" element = {<NotFound/>} ></Route>
      </Routes>
    </AuthProvider>
   </Router>
  )
}

export default App