import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";

import ReactPage from "../components/ReactPage";
import HtmlPage from "../components/HtmlPage";
import CssPage from "../components/CssPage";
import JsPage from "../components/JsPage";
import NodeJsPage from "../components/NodeJsPage";
import ErrorPage from "../components/ErrorsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReactPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/react",
        element: <ReactPage />,
        
    },
    {
        path: "/html",
        element: <HtmlPage />,
        
    },
    {
        path: "/css",
        element: <CssPage />,
        
    },
    {
        path: "/js",
        element: <JsPage />,
        
    },
    {
        path: "/node",
        element: <NodeJsPage />,
        
    },
]);

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
};

export default Router;