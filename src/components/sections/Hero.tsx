import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '92px',         // Exact navbar height
        paddingBottom: '80px',
        paddingLeft: '0',
        paddingRight: '0',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Centered container with generous horizontal padding */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          width: '100%',
        }}
      >

        {/* ── Left Column: Text ── */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4a90d9', margin: 0 }}>
            Luna Nueva · Hotel Frente al Mar
          </p>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.75rem)', fontWeight: 300, color: '#163A70', lineHeight: 1.15, margin: 0 }}>
            Bienvenido a{' '}
            <span style={{ fontWeight: 700 }}>Luna Bar</span>
          </h1>

          <div style={{ width: '64px', height: '3px', backgroundColor: '#163A70', borderRadius: '999px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748b', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, maxWidth: '480px' }}>
            <p style={{ margin: 0 }}>
              En Luna Nueva, cada visita es una celebración. Relájate en un entorno
              amigable mientras saboreas una amplia variedad de cócteles diseñados
              para sorprenderte.
            </p>
            <p style={{ margin: 0 }}>
              Nuestro menú incluye opciones innovadoras y clásicos que nunca
              decepcionan, todos elaborados con ingredientes frescos y de alta
              calidad. Ya sea que busques un espacio para disfrutar de una charla
              amena o simplemente desees escapar del día a día, aquí encontrarás el
              ambiente perfecto.
            </p>
            <p style={{ margin: 0 }}>
              Acércate a Luna Bar y déjate envolver por el buen ambiente y los
              sabores auténticos que te harán querer volver una y otra vez.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={() =>
                document.getElementById('luna-bar-showcase')?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                padding: '16px 40px',
                backgroundColor: '#163A70',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
                boxShadow: '0 8px 24px rgba(22, 58, 112, 0.25)',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f2b5b')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#163A70')}
            >
              Descubrir la Carta
            </button>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Image ── */}
        <motion.div
          style={{ width: '100%', padding: '20px 0' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '560px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(148, 163, 184, 0.5)',
            }}
          >
            <img
              src="/image/image.png"
              alt="Ambiente del Luna Bar"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 2s ease-out',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,58,112,0.2), transparent)', pointerEvents: 'none' }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
