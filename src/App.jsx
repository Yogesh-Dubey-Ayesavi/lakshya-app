import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import NotFound from "./components/404/not_found_component";
import { AuthProvider } from "./contexts/auth";
import Login from "./pages/Login";
import CardList from "./pages/events";
import MyForm from "./pages/user_details_form/user_form";
import { PrivateRoute } from "./routes/private_route";

import logout from "./utils/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <CardList />,
      },
      {
        path: "/update_user",
        element: <MyForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/logout',
    loader: () => {
      logout();
      return redirect('/')
    }
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
