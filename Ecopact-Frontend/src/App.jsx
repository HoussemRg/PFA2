import 'normalize.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboards/Dashboard';
import './index.css'
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Dashboard' element={<Dashboard/>} ></Route>
    </Routes>
  )
}

export default App
