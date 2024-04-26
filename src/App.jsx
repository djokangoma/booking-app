
import './index.css'
import { BrowserRouter,  Route,  Routes  } from 'react-router-dom'
import Contact from './pages/contact.jsx'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'
import Login from './pages/login.jsx'
import About from './pages/about.jsx'
import Hotels from './pages/hotels.jsx'
import Register from './pages/register.jsx'


function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/hotels" element={<Hotels />}></Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;
