import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoeState } from './Context/ShoeStore/ShoeState';
import { NavBar } from './Components/Header/NavBar';
import { Home } from './Components/Pages/Home';
import { Shoes } from './Components/Shoes/Shoes';
import { ShoeItem } from './Components/Shoes/ShoeItem';
import { LaunchShoe } from './Components/Shoes/LaunchShoe';
import { NotFound } from './Components/Pages/NotFound';
import { CheckOut } from './Components/Pages/CheckOut';

function App() {
  return (
    <ShoeState>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='ShoeItem' element={<ShoeItem />}>
            <Route exact path='/' element={<Shoes />} />
            <Route exact path=':id' element={<LaunchShoe />} />
            <Route exact path=':id/CheckOut' element={<CheckOut />} />
          </Route>
          <Route exact path='CheckOut' element={<CheckOut />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </ShoeState>
  );
}

export default App;
