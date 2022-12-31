import logo from './logo.svg';
import './App.css';
import Crudapp from './Components/Create';  
import Arr from './Components/Array';
import Itemarray from './Components/Array';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Components/Create';
import Home from './Components/Home';

function App() {
  return (    
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>        
      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
