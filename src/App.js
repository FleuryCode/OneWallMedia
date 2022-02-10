import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className='App'>
        <Navigation />
        <Routes>
          <Route exact path={'/'} element={<HomePage/>} />
        </Routes>
      </div>
  );
}

export default App;
