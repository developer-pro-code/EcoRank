import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import Signup from "./components/Signup";
// import Signin from "./components/Signin";
// import Dashboard from "./components/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


export const router = createBrowserRouter([
    
    // {path: "/signup", element: <SignUp/>},
    // {path: "/", element: <Login/>},
    {path: "/", element: <App/>},
    // {path: "/dashboard", element: <Dashboard/>},
    
    
]);