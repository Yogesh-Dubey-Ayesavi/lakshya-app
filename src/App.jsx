/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Login,
  Events,
  Cart,
  PaymentPage,
  TicketsPage,
  UpdateUser,
} from "./pages/index";

import { CartProvider, AuthProvider } from "./contexts/index";

import NotFound from "./components/404/NotFound";
import PrivateRoute from "./routes/private_route";
import { Toaster } from "react-hot-toast";

import logout from "./utils/logout";

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
    ],
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/tickets",
    element: <TicketsPage />,
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
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "white",
            },
          }}
        />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
