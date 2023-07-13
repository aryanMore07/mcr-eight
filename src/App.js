import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';

function App() {



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<LandingPage />}/>
      </Routes>
    </div>
  );
}

export default App;
