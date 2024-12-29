import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CertificateDownloader from './components/CertificateDownloader';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'certificate' && <CertificateDownloader />}
      </main>
      <footer>
        <p>© 2024 HSEQ - SIG SAS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;