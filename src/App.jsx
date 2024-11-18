
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Home1 from './pages/Home1'

function App() {


  return (
    <>
      <BrowserRouter>
       <div className='mb-[70px]'>
       <Navbar />
       </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
