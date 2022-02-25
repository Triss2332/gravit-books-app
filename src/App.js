import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import BestsellerBooks from './components/BestsellerBooks';



function App() {
  return (

      <div>

      <Router>
        <Routes>
          <Route path='/' element={<BestsellerBooks />}>
          </Route>
        </Routes>
      </Router>

      </div>
        
  );
}

export default App;
