import { useState } from 'react';
import LunaBarShowcase from './components/sections/LunaBarShowcase';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import Catering from './components/sections/Catering';

import Restaurante from './components/sections/Restaurante';
import Habitaciones from './components/sections/Habitaciones';

function App() {
  // Estado global para controlar en qué "página" estamos
  // Ahora iniciamos en 'inicio' que es la página principal del hotel (en construcción)
  const [currentTab, setCurrentTab] = useState('inicio');

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar activeTab={currentTab} setActiveTab={setCurrentTab} />

      {/* --- PÁGINA: INICIO (Principal del Hotel) --- */}
      {currentTab === 'inicio' && (
        <div style={{ paddingTop: '92px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1 style={{ fontSize: '3rem', color: '#163A70', fontWeight: 300, textAlign: 'center' }}>
            Bienvenido a <span style={{ fontWeight: 600 }}>Luna Nueva</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Página principal del hotel en construcción...</p>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '20px' }}>
            (Ve al menú <strong>NOSOTROS</strong> y selecciona <strong>Luna Bar</strong>, <strong>Catering</strong> o <strong>Restaurante</strong>)
          </p>
        </div>
      )}

      {/* --- SUB-PÁGINA: LUNA BAR (Dentro de Nosotros) --- */}
      {currentTab === 'luna-bar' && (
        <>
          <Hero />
          {/* Separador */}
          <div style={{ width: '100%', padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                Luna Bar · Carta de Cócteles
              </span>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
            </div>
          </div>
          <LunaBarShowcase />
        </>
      )}

      {/* --- SUB-PÁGINA: CATERING (Dentro de Nosotros) --- */}
      {currentTab === 'catering' && (
        <div style={{ paddingTop: '92px' }}>
          <Catering />
        </div>
      )}

      {/* --- SUB-PÁGINA: RESTAURANTE (Dentro de Nosotros) --- */}
      {currentTab === 'restaurante' && (
        <div style={{ paddingTop: '92px' }}>
          <Restaurante />
        </div>
      )}

      {/* --- PÁGINA: HABITACIONES --- */}
      {currentTab === 'habitaciones' && (
        <div style={{ paddingTop: '92px' }}>
          <Habitaciones />
        </div>
      )}

      {/* --- OTRAS PÁGINAS EN CONSTRUCCIÓN --- */}
      {['servicios', 'promociones', 'contactanos'].includes(currentTab) && (
        <div style={{ paddingTop: '92px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#163A70', fontWeight: 300 }}>
            Página de <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{currentTab.replace('-', ' ')}</span> en construcción
          </h2>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default App;