import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import SingleProduct from './component/SingleProduct/SingleProduct'

const App=()=> {
  return (
    <>
    <Routes>
     <Route  path='/' element={<Home/>  }/>
     <Route  path='/product-view/:id' element={<SingleProduct/> }/>
     
    </Routes>
    </>
  )
}

export default App
