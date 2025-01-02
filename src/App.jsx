import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CertificadosDownloader from './components/CertificadosDownloader';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'certificados' && <CertificadosDownloader />}
      </main>
      <footer>
        <p>© 2024 SIG-HSEQ SAS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;