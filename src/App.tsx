import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layout/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
