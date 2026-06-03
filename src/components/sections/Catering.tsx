import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, MapPin } from 'lucide-react';

export default function Catering() {
  return (
    <section style={{ width: '100%', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', overflow: 'hidden' }}>

      {/* ── 1. HERO ──────────────────────────────────────── */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img src="/image/catering3.png" alt="Catering Corporativo Luna Nueva"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop'; }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(15,31,61,0.9), rgba(15,31,61,0.6))' }} />
        </div>

        <div className="catering-hero-content section-container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ color: '#ffffff', flex: 1, maxWidth: '700px' }}>
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
              Excelencia Gastronómica
            </motion.p>
            <h1 className="catering-h1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, margin: '0 0 24px 0' }}>
              Catering <span style={{ fontWeight: 700 }}>Corporativo</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 300, lineHeight: 1.6, maxWidth: '600px', margin: '0 0 32px 0' }}>
              En LUNA NUEVA CATERING SAC contamos con un equipo de profesionales con amplia experiencia en gastronomía corporativa y servicios de alimentación a gran escala.
            </p>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#4a90d9', borderRadius: '999px' }} />
          </motion.div>
        </div>
      </div>

      {/* ── 2. CALIDAD Y OBJETIVO ─────────────────────────── */}
      <div className="catering-quality-section" style={{ padding: 'var(--section-py) var(--section-px)' }}>
        <div className="section-container">
          <div className="grid-2col">

            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#163A70', fontWeight: 300, lineHeight: 1.2, margin: 0 }}>
                Experiencia <span style={{ fontWeight: 700 }}>saludable y agradable</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', margin: 0 }}>
                Es nuestro principal objetivo, hacer del servicio una experiencia saludable y agradable para cada uno de los integrantes de su compañía.
              </p>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '24px', boxShadow: '0 10px 30px -15px rgba(22,58,112,0.1)', border: '1px solid #f1f5f9', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(74,144,217,0.1)', padding: '12px', borderRadius: '12px', color: '#4a90d9', flexShrink: 0 }}>
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ color: '#163A70', fontWeight: 600, marginBottom: '8px', marginTop: 0 }}>Supervisión Nutricional</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    Contamos con la supervisión permanente de nutricionistas certificados, quienes participan en el diseño de los menús y garantizan el cumplimiento estricto de las normas de higiene y seguridad alimentaria.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '460px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <img src="/image/catering.png" alt="Servicio de Alimentación"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── 3. BENTO GRID ────────────────────────────────── */}
      <div className="catering-bento-wrap" style={{ backgroundColor: '#ffffff', padding: 'var(--section-py) 0' }}>
        <div className="catering-bento-inner section-container">

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Capacidad y <span style={{ fontWeight: 700 }}>Logística</span>
            </h2>
            <p style={{ color: '#64748b', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
              Infraestructura y transporte preparados para cumplir con los más altos estándares a gran escala.
            </p>
          </div>

          <div className="catering-bento" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>

            {/* Tarjeta Capacidad */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ backgroundColor: '#f8fafc', borderRadius: '32px', display: 'flex', overflow: 'hidden', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}>
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)', color: '#163A70', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>3,000 comensales diarios</h3>
                <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '15px', margin: 0 }}>
                  Actualmente LUNA NUEVA CATERING SAC maneja una capacidad de organización para tres mil (3000) comensales diarios, tanto en menú para empleados, obreros y administrativos.
                </p>
              </div>
              <div style={{ flex: '0 0 min(45%, 300px)', minHeight: '240px', position: 'relative', overflow: 'hidden' }}>
                <img src="/image/catering2.png" alt="Personal Catering"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </motion.div>

            {/* Tarjeta Transporte */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ backgroundColor: '#163A70', borderRadius: '32px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/image/cateringauto.png" alt="Transporte Logístico"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #163A70, transparent)' }} />
              </div>
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#ffffff', marginTop: '-32px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4a90d9' }}>
                  <Truck size={22} />
                  <span style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '12px', textTransform: 'uppercase' }}>Flota Propia</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Contamos con 1 camión isotérmico de 1 tonelada para garantizar la cadena de frío y calor.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Tarjeta Ubicación */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="catering-location-card"
            style={{ marginTop: '24px', backgroundColor: '#ffffff', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px -15px rgba(22,58,112,0.05)', borderRadius: '32px', padding: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#163A70', flexShrink: 0 }}>
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ color: '#163A70', fontWeight: 700, fontSize: '18px', margin: '0 0 8px 0' }}>Llegamos donde se nos requiera</h3>
                <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
                  Desde nuestras instalaciones en:{' '}
                  <span style={{ color: '#334155', fontWeight: 500 }}>Av. Costanera A-38, Balneario Colán, Paita. Piura.</span>
                </p>
              </div>
            </div>
            <button
              style={{ padding: '14px 28px', backgroundColor: '#163A70', color: '#ffffff', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '12px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background-color 0.3s', flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1f3d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#163A70')}>
              Solicitar Cotización
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
