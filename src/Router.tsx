import { createBrowserRouter } from "react-router";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: ':id',
        element: <ProjectDetail />
    }
])

export default Router