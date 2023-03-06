import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path='/' element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
