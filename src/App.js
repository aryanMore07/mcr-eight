import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';
import IndividualEvent from './pages/individualEvent/IndividualEvent';

function App() {



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<LandingPage />}/>
        <Route path='/event/:eventId'  element={<IndividualEvent />}/>
      </Routes>
    </div>
  );
}

export default App;
