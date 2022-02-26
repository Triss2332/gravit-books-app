import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import BestsellerBooks from './components/BestsellerBooks';
import FullOverview from './components/FullOverview';
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
            <Route path='/full-overview' element={<FullOverview />}>
            </Route>
          </Routes>
        </Router>

      </div>
        
  );
}

export default App;
