import HomePage from './pages/homePage'
import Header from './components/Header'
import ContactPage from './pages/contactPage'
import Projects from './pages/projects'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
