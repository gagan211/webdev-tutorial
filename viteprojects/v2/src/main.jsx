import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact_page/Contact.jsx'


//THIS IS ONE WAY TO DEFINE A ROUTER :-
// const router=createBrowserRouter([{
//   path: '/',
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },{
//     path:"About",
//     element:<About/>
//   },
// {
//   path:"Contact",
//   element:<Contact/>
// }]
// }])


//THE EASIER WAY AND BETTER WAAY TO DEFINE A ROUTER IS :-
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
