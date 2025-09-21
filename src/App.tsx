import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Sobre } from './pages/Sobre/Sobre'; 
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;