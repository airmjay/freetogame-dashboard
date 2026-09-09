import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { GamePageDetail } from "./components/GamePageDetail";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/game/:id", element: <GamePageDetail /> },
    ],
  },
]);
export default routers;
