import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EnamelForm from './EnamelForm';
import EnamelDeliveries from './EnamelDeliveries';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<EnamelForm />}/>
        <Route path='/deliveries' element={<EnamelDeliveries />}/>
      </Routes>
   </BrowserRouter> 
  );
}

export default App;
