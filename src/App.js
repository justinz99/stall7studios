import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import VideoDetails from './pages/VideoDetails'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='about' element={<About/>} />
          <Route 
            path='work/:id'
            element={<VideoDetails />} 
          />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
