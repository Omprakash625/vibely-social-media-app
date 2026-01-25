import { Container} from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Auth from './components/Auth/Auth.jsx'
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/auth' exact Component={Auth}/>
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
