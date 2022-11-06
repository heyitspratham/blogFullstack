import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import "./index.css"

const Layout = ()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <Single/>
      },
      {
        path: '/write',
        element: <Write/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;