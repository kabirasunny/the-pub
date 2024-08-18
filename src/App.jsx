import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import Event from './components/Event'
import About from './components/About'
import Table from './components/Table'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/menu",
      element: <><Navbar /><Menu /><Footer /></>
    },
    {
      path: "/order",
      element: <><Navbar /><OrderOnline /><Footer /></>
    },
    {
      path: "/event",
      element: <><Navbar /><Event /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: "/rstable",
      element: <><Navbar /><Table /><Footer /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
