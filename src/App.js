import { useContext } from 'react';
import './App.css';
import { DataContext } from './contexts/DataContext';
import Navbar from './components/navbar/Navbar';

function App() {

  const { state } = useContext(DataContext);


  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
