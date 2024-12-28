// import React, { useState } from 'react';
import './App.css';

function App() {
  /* const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por suscribirte con el correo: ${email}`);
  }; */

  return (
    <div className="App">
      <body>
        <header>
          <h1>Landing Page - Consulta de Certificados</h1>
        </header>

        <main>
          <h2>Ingresa tu correo para consultar tus certificados</h2>
          <form action="#" method="POST">
            <label >Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="ejemplo@correo.com" 
              required 
            />

            <button type="submit">Consultar</button>
          </form>

          
          <section id="resultados">
            
          </section>
        </main>

        <footer>
          <p>© 2024 Consulta de Certificados. Todos los derechos reservados.</p>
        </footer>
      </body>
    </div>
  );
}

export default App;