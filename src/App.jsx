import './App.css'

// Importar páginas
import Home from './pages/Home/Home'
import About from './pages/About/About'

// 1 - Config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// 2 - links com react router
import Navbar from './components/Navbar'
import Product from './pages/Product/Product'
import Info from './pages/Info/Info'
import SearchForm from './components/SearchForm'
import Search from './pages/Search/Search'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
     {/* 2 - links com react router */}
      <Navbar/>
      <SearchForm/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products/:id' element={<Product />}/>
          <Route path='/products/:id/info' element={<Info />}/>
          <Route path='/search' element={<Search/>}/>
          {/* Redirect */}
          <Route path='/company' element={<Navigate to="/about" />}/>
          {/* página 404 */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
