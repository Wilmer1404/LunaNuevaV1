import { useState } from 'react';
import LunaBarShowcase from './components/sections/LunaBarShowcase';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import Catering from './components/sections/Catering';
import Inicio from './components/sections/Inicio';
import Restaurante from './components/sections/Restaurante';
import Habitaciones from './components/sections/Habitaciones';

const PT = { paddingTop: '72px' };

function App() {
  const [currentTab, setCurrentTab] = useState('inicio');

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar activeTab={currentTab} setActiveTab={setCurrentTab} />

      {/* INICIO */}
      {currentTab === 'inicio' && (
        <div style={PT}><Inicio setActiveTab={setCurrentTab} /></div>
      )}

      {/* LUNA BAR */}
      {currentTab === 'luna-bar' && (
        <>
          <Hero />
          <div style={{ width: '100%', padding: '60px 0', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--section-px, 80px)', display: 'flex', alignItems: 'center', gap: '24px' }}>
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

      {/* CATERING */}
      {currentTab === 'catering' && (
        <div style={PT}><Catering /></div>
      )}

      {/* RESTAURANTE */}
      {currentTab === 'restaurante' && (
        <div style={PT}><Restaurante /></div>
      )}

      {/* HABITACIONES */}
      {currentTab === 'habitaciones' && (
        <div style={PT}><Habitaciones /></div>
      )}

      {/* PÁGINAS EN CONSTRUCCIÓN */}
      {['servicios', 'promociones', 'contactanos'].includes(currentTab) && (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#163A70', fontWeight: 300, textAlign: 'center' }}>
            Página de <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{currentTab.replace('-', ' ')}</span> en construcción
          </h2>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default App;