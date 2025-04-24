import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";

import { Home, About, Dashboard,Navbar,Courses,Tests,NotFound } from "./components";
// import Navbar from "./components/Navbar";
import ParamComp from './components/ParamComp';
const router = createBrowserRouter(
  [
    {
     path: "/",
     element: 
     <div>
        <Navbar />
        <Home />
     </div> 
    },
    {
      path: "/about",
      element: 
      <div>
        <Navbar />
        <About />
     </div> 
    },
    {
      path: "/dashboard",
      element:
      <div>
        <Navbar />
        <Dashboard />
     </div>,
     children: [
      {
        path : 'courses',
        element : <Courses />
      },
      {
        path : 'tests',
        element : <Tests />
      },
     ]
    },
    {
      path: "/student/:id",
      element:
      <div>
        <Navbar />
        <ParamComp />
     </div>
    },
    {
      path: "*",
      element : <NotFound/>
    },
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
