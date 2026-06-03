import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Waves, Eye, ConciergeBell, ChevronRight, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

const EXPERIENCES = [
  { id: 'habitaciones', title: 'Habitaciones',      desc: 'Vista al mar desde cada ventana',  image: '/image/matrimonialsimplevistamar1.png', tab: 'habitaciones' },
  { id: 'restaurante',  title: 'Restaurante',        desc: 'Gastronomía local de autor',        image: '/image/restaurante1.png',              tab: 'restaurante'  },
  { id: 'luna-bar',     title: 'Luna Bar',            desc: 'Cócteles frente al océano',         image: '/image/image.png',                     tab: 'luna-bar'     },
  { id: 'catering',     title: 'Eventos & Catering',  desc: 'Celebra momentos únicos',           image: '/image/catering.png',                  tab: 'catering'     },
];

const AMENITIES = [
  { icon: Wifi,          label: 'WiFi Gratuito',    desc: 'Alta velocidad en todo el hotel' },
  { icon: Waves,         label: 'Frente al Mar',    desc: 'Acceso directo a la playa de Colán' },
  { icon: Eye,           label: 'Vista Panorámica', desc: 'Habitaciones con vista al océano' },
  { icon: ConciergeBell, label: 'Servicio 24/7',    desc: 'Atención personalizada siempre' },
];

interface InicioProps {
  setActiveTab: (tab: string) => void;
}

export default function Inicio({ setActiveTab }: InicioProps) {
  return (
    <div style={{ backgroundColor: '#ffffff', overflowX: 'hidden' }}>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src="/image/hotel-hero.png" alt="Hotel Luna Nueva frente al mar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,25,55,0.55) 0%, rgba(10,25,55,0.75) 60%, rgba(10,25,55,0.92) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px', maxWidth: '900px', width: '100%' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '24px' }}>
            Luna Nueva · Colán, Piura · Perú
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, margin: '0 0 12px 0' }}>
            Tu refugio{' '}
            <span style={{ fontWeight: 700, display: 'block' }}>frente al mar</span>
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
            style={{ width: '64px', height: '2px', backgroundColor: '#4a90d9', margin: '28px auto', borderRadius: '999px' }} />

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', fontWeight: 300, color: '#cbd5e1', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 48px' }}>
            Donde el sonido de las olas se convierte en tu melodía de descanso.
            Una experiencia única en la costa norte del Perú.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
            className="hero-buttons"
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('habitaciones')}
              style={{ padding: '16px 40px', backgroundColor: '#163A70', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderRadius: '2px', boxShadow: '0 8px 32px rgba(22,58,112,0.5)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0f2b5b'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#163A70'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Reserva tu estancia
            </button>
            <button onClick={() => setActiveTab('restaurante')}
              style={{ padding: '16px 40px', backgroundColor: 'transparent', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}>
              Ver Restaurante
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="scroll-indicator"
            style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.25)' }} />
          </motion.div>
        </div>

        {/* Rating badge */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
          className="hero-badge"
          style={{ position: 'absolute', right: '48px', bottom: '48px', zIndex: 10, backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={14} style={{ color: '#fbbf24', fill: '#fbbf24' }} />)}
          </div>
          <span style={{ fontSize: '12px', color: '#e2e8f0', fontWeight: 500 }}>Excelente en Booking</span>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Colán · Piura · Perú</span>
        </motion.div>
      </section>

      {/* ── 2. BIENVENIDA ──────────────────────────────────── */}
      <section className="bienvenida-section" style={{ padding: 'var(--section-py) var(--section-px)', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealSection>
            <div className="grid-2col">

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#4a90d9', margin: 0 }}>
                  Bienvenido a Luna Nueva
                </motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 300, color: '#163A70', lineHeight: 1.2, margin: 0 }}>
                  Un oasis donde el mar{' '}
                  <span style={{ fontWeight: 700 }}>es tu horizonte</span>
                </motion.h2>
                <motion.div variants={fadeUp} style={{ width: '48px', height: '3px', backgroundColor: '#163A70', borderRadius: '999px' }} />
                <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748b', fontSize: '16px', lineHeight: 1.85, fontWeight: 300 }}>
                  <p style={{ margin: 0 }}>En Hotel Luna Nueva, cada amanecer es una promesa de tranquilidad. Ubicados en la hermosa playa de Colán, en Piura, ofrecemos una experiencia de hospedaje que combina la calidez del norte peruano con el confort que mereces.</p>
                  <p style={{ margin: 0 }}>Desde nuestras habitaciones con vista al mar hasta nuestra gastronomía de autor en el restaurante, cada rincón ha sido diseñado pensando en tu bienestar.</p>
                </motion.div>
                <motion.button variants={fadeUp} onClick={() => setActiveTab('habitaciones')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', backgroundColor: 'transparent', color: '#163A70', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', border: '1.5px solid #163A70', cursor: 'pointer', borderRadius: '2px', width: 'fit-content', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#163A70'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#163A70'; }}>
                  Ver Habitaciones <ChevronRight size={14} />
                </motion.button>
              </div>

              <motion.div variants={fadeUp} style={{ position: 'relative' }}>
                <div className="bienvenida-img-wrap" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px -10px rgba(22,58,112,0.2)', height: '520px' }}>
                  <img src="/image/horisonte.png" alt="Habitación con vista al mar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 2s ease', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div className="bienvenida-badge-float" style={{ position: 'absolute', bottom: '-24px', left: '-24px', backgroundColor: '#163A70', color: '#ffffff', borderRadius: '16px', padding: '20px 28px', boxShadow: '0 20px 40px rgba(22,58,112,0.35)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#93c5fd', marginTop: '6px' }}>Vista al mar</div>
                </div>
              </motion.div>

            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 3. EXPERIENCIAS ────────────────────────────────── */}
      <section className="experiencias-section" style={{ padding: 'var(--section-py) var(--section-px)', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealSection>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#4a90d9', marginBottom: '16px' }}>Todo en un solo lugar</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, color: '#163A70', margin: 0 }}>
                Nuestras <span style={{ fontWeight: 700 }}>Experiencias</span>
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="experiencias-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {EXPERIENCES.map((exp) => (
                <motion.div key={exp.id} variants={fadeUp} onClick={() => setActiveTab(exp.tab)}
                  style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
                  <img src={exp.image} alt={exp.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,55,0.85) 0%, rgba(10,25,55,0.15) 55%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 20px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', margin: '0 0 6px 0' }}>Luna Nueva</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 4px 0' }}>{exp.title}</h3>
                    <p style={{ fontSize: '13px', color: '#cbd5e1', margin: '0 0 12px 0', fontWeight: 300 }}>{exp.desc}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '2px' }}>
                      Explorar <ChevronRight size={12} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── 4. AMENITIES ───────────────────────────────────── */}
      <section className="amenities-section" style={{ padding: 'var(--section-py) var(--section-px)', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealSection>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#4a90d9', marginBottom: '16px' }}>Comodidades</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 300, color: '#163A70', margin: 0 }}>
                Todo lo que <span style={{ fontWeight: 700 }}>necesitas</span>
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="amenities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {AMENITIES.map(({ icon: Icon, label, desc }) => (
                <motion.div key={label} variants={fadeUp}
                  style={{ textAlign: 'center', padding: '36px 20px', borderRadius: '20px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(22,58,112,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#163A70'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', backgroundColor: '#eff6ff', marginBottom: '16px' }}>
                    <Icon size={26} style={{ color: '#163A70' }} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#163A70', margin: '0 0 8px 0' }}>{label}</h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── 5. CTA FINAL ───────────────────────────────────── */}
      <section className="cta-section" style={{ padding: '0 var(--section-px) var(--section-py)', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <RevealSection>
            <motion.div variants={fadeUp} className="cta-box"
              style={{ background: 'linear-gradient(135deg, #163A70 0%, #1a4a8e 50%, #0f2b5b 100%)', borderRadius: '28px', padding: '72px 64px', textAlign: 'center', boxShadow: '0 40px 80px -20px rgba(22,58,112,0.4)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '20px', position: 'relative' }}>
                Reserva directa · Mejor precio garantizado
              </p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.2, position: 'relative' }}>
                ¿Listo para tu <span style={{ fontWeight: 700 }}>escape perfecto?</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#93c5fd', fontWeight: 300, margin: '0 0 40px 0', lineHeight: 1.7, position: 'relative' }}>
                Reserva directamente con nosotros y disfruta del mejor precio,<br className="hidden-mobile" /> frente a las olas de Colán.
              </p>
              <div className="cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <button onClick={() => setActiveTab('habitaciones')}
                  style={{ padding: '16px 44px', backgroundColor: '#ffffff', color: '#163A70', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  Ver Habitaciones
                </button>
                <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', padding: '16px 44px', backgroundColor: 'transparent', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', border: '1.5px solid rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: '2px', textDecoration: 'none', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}
