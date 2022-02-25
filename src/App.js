import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import BestsellerBooks from './components/BestsellerBooks';
import RandomBooks from './components/RandomBooks';



function App() {
  return (

      <div>

      <Router>
        <Routes>
          <Route path='/' element={<BestsellerBooks />}>
          </Route>
          <Route path='/random-books' element={<RandomBooks />}>
          </Route>
        </Routes>
      </Router>

      </div>
        
  );
}

export default App;
