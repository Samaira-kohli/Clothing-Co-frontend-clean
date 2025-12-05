import { use, useState } from 'react'
import './App.css'
// import Layout from './components/Layout'
import Layout from './Components/Layout';
import Shop from './pages/Shop'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import OneProduct from './pages/OneProduct'

function App() {
  

  const router= createBrowserRouter(
    createRoutesFromElements(
      //wrap it
      <>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Shop/>}/>
        <Route path='men' element={<ShopCategory category='men'/>}/>
        <Route path='women' element={<ShopCategory category='women'/>}/>
        {/* <Route path='kids' element={<ShopCategory category='kids'/>}/> */}
        <Route path="login" element={<LoginSignup />} />
        <Route path='product/:productId' element={<OneProduct/>}/>
      </Route>
      </>
    ))

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
