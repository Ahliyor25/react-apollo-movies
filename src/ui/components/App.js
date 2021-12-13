import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Details from '../../routes/Details';
import Home from '../../routes/Home';




function App() {
  return  ( 
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/details/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
