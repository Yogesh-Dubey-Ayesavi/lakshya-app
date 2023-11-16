import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/404/not_found_component";
import { AuthProvider } from "./contexts/auth";
import Login from "./pages/Login";
import Events from "./pages/Events/Events";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import PrivateRoute from "./routes/private_route";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";


import logout from "./utils/logout";
import { CartProvider } from "./contexts/cart";
import PaymentPage from "./pages/Payment/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update_user",
        element: <UpdateUser />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/payment',
        element: <PaymentPage />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    loader: () => {
      logout();
      return redirect("/");
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: "#333",
            color: "white"
          }
        }}/>

      </CartProvider>
    </AuthProvider>
  );
};

export default App;
