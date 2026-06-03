import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, MapPin } from 'lucide-react';

export default function Catering() {
  return (
    <>
      {/* ─── Estilos responsive ─────────────────────────── */}
      <style>{`
        /* ══ Reset base ══════════════════════════════════ */
        .ct-root {
          width: 100%;
          background-color: #f8fafc;
          font-family: sans-serif;
          overflow-x: hidden;
        }

        /* ══ 1. HERO ═════════════════════════════════════ */
        .ct-hero {
          position: relative;
          width: 100%;
          /* Mobile: altura controlada, no 85vh */
          min-height: 60vh;
          display: flex;
          align-items: flex-end;   /* texto pegado al fondo, no al centro */
          padding-bottom: 0;
          overflow: hidden;
        }

        .ct-hero-bg {
          position: absolute;
          inset: 0;
        }

        .ct-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
        }

        /* Overlay: degradado fuerte abajo para legibilidad del texto */
        .ct-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 24, 50, 0.96) 0%,
            rgba(10, 24, 50, 0.75) 45%,
            rgba(10, 24, 50, 0.30) 100%
          );
        }

        .ct-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 32px 20px 40px;
        }

        .ct-hero-eyebrow {
          color: #60a5fa;
          font-weight: 700;
          letter-spacing: 0.22em;
          font-size: 10px;
          text-transform: uppercase;
          margin: 0 0 12px;
        }

        .ct-hero-title {
          font-size: clamp(1.9rem, 8vw, 4rem);
          font-weight: 300;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 16px;
        }

        .ct-hero-desc {
          color: #cbd5e1;
          font-size: clamp(13px, 3.5vw, 17px);
          font-weight: 300;
          line-height: 1.65;
          max-width: 52ch;
          margin: 0 0 20px;
        }

        .ct-hero-bar {
          width: 56px;
          height: 3px;
          background-color: #4a90d9;
          border-radius: 999px;
        }

        /* ══ 2. CALIDAD ══════════════════════════════════ */
        .ct-quality {
          background-color: #ffffff;
          padding: 52px 20px;
        }

        .ct-quality-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .ct-quality-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ct-section-title {
          font-size: clamp(1.5rem, 5.5vw, 2.5rem);
          color: #163A70;
          font-weight: 300;
          line-height: 1.25;
          margin: 0;
        }

        .ct-body-text {
          color: #475569;
          line-height: 1.8;
          font-size: clamp(14px, 3.5vw, 16px);
          margin: 0;
        }

        /* Card de supervisión */
        .ct-info-card {
          background: #f8fafc;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(22,58,112,0.06);
          padding: 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .ct-info-card-icon {
          background: rgba(74, 144, 217, 0.1);
          padding: 10px;
          border-radius: 10px;
          color: #4a90d9;
          flex-shrink: 0;
        }

        .ct-info-card h3 {
          color: #163A70;
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 6px;
        }

        .ct-info-card p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }

        /* Imagen decorativa */
        .ct-quality-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
        }

        .ct-quality-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
          display: block;
        }

        /* ══ 3. LOGÍSTICA ════════════════════════════════ */
        .ct-logistics {
          background-color: #f8fafc;
          padding: 52px 20px;
        }

        .ct-logistics-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ct-logistics-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .ct-logistics-header p {
          color: #64748b;
          font-size: clamp(13px, 3.5vw, 15px);
          margin: 12px auto 0;
          max-width: 50ch;
          line-height: 1.7;
        }

        /* Grid de tarjetas: mobile = columna */
        .ct-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Tarjeta Capacidad ── */
        .ct-capacity-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(22,58,112,0.07);
          border: 1px solid #f1f5f9;
        }

        .ct-capacity-img {
          width: 100%;
          /* Mobile: imagen con proporción propia y suficiente altura */
          aspect-ratio: 16 / 9;
          overflow: hidden;
          flex-shrink: 0;
        }

        .ct-capacity-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.7s ease;
        }

        .ct-capacity-body {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ct-capacity-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a90d9;
        }

        .ct-capacity-stat {
          font-size: clamp(1.4rem, 5.5vw, 2.2rem);
          color: #163A70;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
        }

        .ct-capacity-desc {
          color: #475569;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Tarjeta Transporte ── */
        .ct-fleet-card {
          background: #163A70;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(22,58,112,0.25);
        }

        .ct-fleet-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: hidden;
        }

        .ct-fleet-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .ct-fleet-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #163A70 0%, transparent 60%);
        }

        .ct-fleet-body {
          padding: 20px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ct-fleet-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #60a5fa;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ct-fleet-body p {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Tarjeta Ubicación ── */
        .ct-location-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 24px;
          padding: 24px 20px;
          box-shadow: 0 4px 16px rgba(22,58,112,0.05);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ct-location-info {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .ct-location-pin {
          width: 52px;
          height: 52px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #163A70;
          flex-shrink: 0;
        }

        .ct-location-info h3 {
          color: #163A70;
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 6px;
        }

        .ct-location-info p {
          color: #64748b;
          font-size: 13px;
          margin: 0;
          line-height: 1.6;
        }

        .ct-location-info strong {
          color: #334155;
          font-weight: 500;
        }

        .ct-quote-btn {
          width: 100%;
          padding: 14px 20px;
          background-color: #163A70;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        /* ══ Tablet (≥ 640px) ════════════════════════════ */
        @media (min-width: 640px) {
          .ct-hero {
            min-height: 65vh;
            align-items: center;
          }

          .ct-hero-content {
            padding: 48px 40px;
          }

          .ct-quality {
            padding: 72px 40px;
          }

          .ct-logistics {
            padding: 72px 40px;
          }

          .ct-capacity-card {
            display: flex;           /* lado a lado */
            flex-direction: row;
          }

          .ct-capacity-img {
            aspect-ratio: unset;
            width: 40%;
            min-height: 220px;
          }

          .ct-capacity-body {
            flex: 1;
            padding: 28px 24px;
          }

          .ct-location-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .ct-quote-btn {
            width: auto;
            flex-shrink: 0;
            white-space: nowrap;
          }
        }

        /* ══ Tablet mayor (≥ 768px) ══════════════════════ */
        @media (min-width: 768px) {
          .ct-cards-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
          }

          /* La tarjeta capacidad vuelve a columna dentro del grid 2fr */
          .ct-capacity-card {
            flex-direction: column;
          }

          .ct-capacity-img {
            width: 100%;
            aspect-ratio: 16 / 9;
            min-height: unset;
          }

          .ct-fleet-card {
            /* ocupa 1fr */
          }
        }

        /* ══ Desktop (≥ 1024px) ══════════════════════════ */
        @media (min-width: 1024px) {
          .ct-hero {
            min-height: 82vh;
            align-items: center;
          }

          .ct-hero-overlay {
            background: linear-gradient(
              to right,
              rgba(10, 24, 50, 0.92) 0%,
              rgba(10, 24, 50, 0.60) 55%,
              rgba(10, 24, 50, 0.25) 100%
            );
          }

          .ct-hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 80px;
          }

          .ct-quality {
            padding: 120px 80px;
          }

          .ct-quality-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }

          .ct-quality-img-wrap {
            aspect-ratio: unset;
            height: 480px;
            border-radius: 32px;
          }

          .ct-logistics {
            padding: 120px 80px;
          }

          .ct-logistics-inner {
            /* nada especial, el grid ya se encarga */
          }

          .ct-logistics-header {
            margin-bottom: 64px;
          }

          .ct-capacity-card {
            flex-direction: row;
            border-radius: 32px;
          }

          .ct-capacity-img {
            aspect-ratio: unset;
            width: 45%;
            min-height: 280px;
          }

          .ct-capacity-body {
            gap: 20px;
            padding: 40px;
          }

          .ct-fleet-card {
            border-radius: 32px;
          }

          .ct-fleet-img {
            aspect-ratio: unset;
            height: 220px;
          }

          .ct-fleet-body {
            padding: 28px;
            margin-top: -36px;
            position: relative;
            z-index: 10;
          }

          .ct-location-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-radius: 32px;
            padding: 36px 40px;
          }

          .ct-quote-btn {
            width: auto;
          }

          .ct-section-title {
            font-size: 2.5rem;
          }
        }

        /* ══ Large desktop (≥ 1280px) ════════════════════ */
        @media (min-width: 1280px) {
          .ct-capacity-img {
            min-height: 320px;
          }

          .ct-fleet-img {
            height: 260px;
          }
        }
      `}</style>

      <section className="ct-root">

        {/* ── 1. HERO ──────────────────────────────────────── */}
        <div className="ct-hero">
          <div className="ct-hero-bg">
            <img
              src="/image/catering3.png"
              alt="Catering Corporativo Luna Nueva"
              onError={e => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop';
              }}
            />
            <div className="ct-hero-overlay" />
          </div>

          <div className="ct-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="ct-hero-eyebrow">Excelencia Gastronómica</p>
              <h1 className="ct-hero-title">
                Catering <strong style={{ fontWeight: 700 }}>Corporativo</strong>
              </h1>
              <p className="ct-hero-desc">
                En LUNA NUEVA CATERING SAC contamos con un equipo de profesionales con
                amplia experiencia en gastronomía corporativa y servicios de alimentación
                a gran escala.
              </p>
              <div className="ct-hero-bar" />
            </motion.div>
          </div>
        </div>

        {/* ── 2. EXPERIENCIA SALUDABLE ──────────────────────── */}
        <div className="ct-quality">
          <div className="ct-quality-inner">

            {/* Columna de texto */}
            <motion.div
              className="ct-quality-text"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <h2 className="ct-section-title">
                Experiencia{' '}
                <span style={{ fontWeight: 700 }}>saludable y agradable</span>
              </h2>
              <p className="ct-body-text">
                Es nuestro principal objetivo, hacer del servicio una experiencia
                saludable y agradable para cada uno de los integrantes de su compañía.
              </p>

              {/* Card informativa */}
              <div className="ct-info-card">
                <div className="ct-info-card-icon">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>Supervisión Nutricional</h3>
                  <p>
                    Contamos con la supervisión permanente de nutricionistas certificados,
                    quienes participan en el diseño de los menús y garantizan el
                    cumplimiento estricto de las normas de higiene y seguridad alimentaria.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Imagen decorativa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="ct-quality-img-wrap"
            >
              <img
                src="/image/catering.png"
                alt="Servicio de Alimentación"
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </motion.div>

          </div>
        </div>

        {/* ── 3. CAPACIDAD Y LOGÍSTICA ──────────────────────── */}
        <div className="ct-logistics">
          <div className="ct-logistics-inner">

            <div className="ct-logistics-header">
              <h2 className="ct-section-title">
                Capacidad y <span style={{ fontWeight: 700 }}>Logística</span>
              </h2>
              <p>
                Infraestructura y transporte preparados para cumplir con los más altos
                estándares a gran escala.
              </p>
            </div>

            {/* Grid de tarjetas */}
            <div className="ct-cards-grid">

              {/* ── Tarjeta Capacidad ── */}
              <motion.div
                className="ct-capacity-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="ct-capacity-img">
                  <img
                    src="/image/catering2.png"
                    alt="Personal Catering"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div className="ct-capacity-body">
                  <div className="ct-capacity-icon">
                    <Users size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="ct-capacity-stat">3,000 comensales diarios</h3>
                  <p className="ct-capacity-desc">
                    Actualmente LUNA NUEVA CATERING SAC maneja una capacidad de
                    organización para tres mil (3,000) comensales diarios, tanto en menú
                    para empleados, obreros y administrativos. Con vasta experiencia en
                    atenciones de autoservicio en línea caliente y fría.
                  </p>
                </div>
              </motion.div>

              {/* ── Tarjeta Transporte ── */}
              <motion.div
                className="ct-fleet-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="ct-fleet-img">
                  <img
                    src="/image/cateringauto.png"
                    alt="Transporte Logístico"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="ct-fleet-img-overlay" />
                </div>
                <div className="ct-fleet-body">
                  <div className="ct-fleet-label">
                    <Truck size={18} />
                    Flota Propia
                  </div>
                  <p>
                    Contamos con 1 camión isotérmico de 1 tonelada para garantizar la
                    cadena de frío y calor durante el transporte.
                  </p>
                </div>
              </motion.div>

            </div>{/* /ct-cards-grid */}

            {/* ── Tarjeta Ubicación (ancho completo) ── */}
            <motion.div
              className="ct-location-card"
              style={{ marginTop: '20px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="ct-location-info">
                <div className="ct-location-pin">
                  <MapPin size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>Llegamos donde se nos requiera</h3>
                  <p>
                    Desde nuestras instalaciones en:{' '}
                    <br />
                    <strong>Av. Costanera A-38, Balneario Colán, Paita. Piura.</strong>
                  </p>
                </div>
              </div>

              <button
                className="ct-quote-btn"
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1f3d')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#163A70')}
              >
                Solicitar Cotización
              </button>
            </motion.div>

          </div>
        </div>

      </section>
    </>
  );
}
