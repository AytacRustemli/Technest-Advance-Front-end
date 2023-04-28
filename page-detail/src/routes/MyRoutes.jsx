import React from 'react'
import Products from '../components/Products/Products'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { Route, Routes } from 'react-router-dom'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
  )
}

export default MyRoutes