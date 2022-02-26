import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

//componenti
import BestsellerBooks from './components/BestsellerBooks';
import FullOverview from './components/FullOverview';
import RandomBooks from './components/RandomBooks';

//Material



function App() {

  return (

    <Router>
      <div>
     
        <Routes>
          <Route path='/' element={<BestsellerBooks />}>
          </Route>
          <Route path='/random-books' element={<RandomBooks />}>
          </Route>
          <Route path='/full-overview' element={<FullOverview />}>
          </Route>
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
