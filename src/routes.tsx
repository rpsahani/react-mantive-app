import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  
export const Routes =() =>{
return <RouterProvider router={router} />
}