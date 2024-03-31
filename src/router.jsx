import { createBrowserRouter, Navigate  } from "react-router-dom";
import { ItemDetail, SearchBox, Home} from "./pages";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "item/",
          element: <SearchBox />,
        },
        {
          path: "item/:id",
          element: <ItemDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate replace to="/item" />,
      errorElement: <ErrorPage />
    }
]);

export default router;