import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      {/* ── Estilos responsivos ── */}
      <style>{`
        .hero-section {
          background-color: #ffffff;
          overflow: hidden;
        }

        /* ── Contenedor principal: mobile-first VERTICAL ── */
        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 48px 24px 64px;
        }

        /* ── Columna de texto ── */
        .hero-text-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          order: 1;
        }

        .hero-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #4a90d9;
          margin: 0;
        }

        .hero-title {
          font-size: clamp(2rem, 8vw, 3.75rem);
          font-weight: 300;
          color: #163A70;
          line-height: 1.15;
          margin: 0;
        }

        .hero-divider {
          width: 52px;
          height: 3px;
          background-color: #163A70;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .hero-body-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          color: #64748b;
          font-size: clamp(14px, 3.5vw, 16px);
          line-height: 1.8;
          font-weight: 300;
        }

        /* En mobile solo mostramos el primer párrafo para no saturar */
        .hero-body-text p:nth-child(2),
        .hero-body-text p:nth-child(3) {
          display: none;
        }

        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 36px;
          background-color: #163A70;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          box-shadow: 0 8px 24px rgba(22, 58, 112, 0.25);
          transition: background-color 0.3s, transform 0.2s;
          width: fit-content;
          align-self: flex-start;
        }

        /* ── Columna imagen ── */
        .hero-image-col {
          order: 2;
          width: 100%;
        }

        .hero-image-wrap {
          position: relative;
          width: 100%;
          /* Proporciones: en mobile usamos aspect-ratio en lugar de height fija */
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(148, 163, 184, 0.4);
        }

        .hero-image-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 2s ease-out;
        }

        /* ── Tablet (≥ 640px) ── */
        @media (min-width: 640px) {
          .hero-grid {
            padding: 56px 40px 72px;
            gap: 48px;
          }

          .hero-body-text p:nth-child(2) {
            display: block;
          }

          .hero-image-wrap {
            aspect-ratio: 16 / 9;
            border-radius: 24px;
          }
        }

        /* ── Desktop (≥ 1024px): recupera el diseño horizontal original ── */
        @media (min-width: 1024px) {
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .hero-grid {
            padding: 80px 80px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            flex-direction: unset;
            align-items: center;
          }

          .hero-text-col {
            gap: 28px;
            order: 1;
          }

          .hero-body-text p:nth-child(2),
          .hero-body-text p:nth-child(3) {
            display: block;
          }

          .hero-body-text {
            gap: 16px;
          }

          .hero-image-col {
            order: 2;
            padding: 20px 0;
          }

          .hero-image-wrap {
            aspect-ratio: unset;
            height: 520px;
          }
        }

        /* ── Large desktop ── */
        @media (min-width: 1280px) {
          .hero-image-wrap {
            height: 560px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-grid">

          {/* ── Columna de texto ── */}
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="hero-eyebrow">
              Luna Nueva · Hotel Frente al Mar
            </p>

            <h1 className="hero-title">
              Bienvenido a{' '}
              <span style={{ fontWeight: 700 }}>Luna Bar</span>
            </h1>

            <div className="hero-divider" />

            <div className="hero-body-text">
              <p style={{ margin: 0 }}>
                En Luna Nueva, cada visita es una celebración. Relájate en un entorno
                amigable mientras saboreas una amplia variedad de cócteles diseñados
                para sorprenderte.
              </p>
              <p style={{ margin: 0 }}>
                Nuestro menú incluye opciones innovadoras y clásicos elaborados con
                ingredientes frescos y de alta calidad. Aquí encontrarás el ambiente
                perfecto para cualquier ocasión.
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
                className="hero-cta-btn"
                onClick={() =>
                  document.getElementById('luna-bar-showcase')?.scrollIntoView({ behavior: 'smooth' })
                }
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#0f2b5b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#163A70';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Descubrir la Carta
              </button>
            </motion.div>
          </motion.div>

          {/* ── Columna imagen ── */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          >
            <div className="hero-image-wrap">
              <img
                src="/image/image.png"
                alt="Ambiente del Luna Bar"
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(22,58,112,0.2), transparent)',
                pointerEvents: 'none',
              }} />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
