import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
function App() {
  return (
<Router>
    <div className="min-h-screen flex flex-col">
<Header />
<main className="flex-grow pt-16 h-[calc(100vh_-_8rem)] overflow-y-auto">
        <Routes><Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> 
          </Routes>
      </main>
     <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div >
  </Router >
  
  )
}

export default App
