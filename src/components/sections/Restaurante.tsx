import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Utensils, Star, ChevronRight } from 'lucide-react';

const MENU_ITEMS = [
  { id: 'ceviche',  name: 'Ceviche Clásico',               image: '/image/cevicheclasico.png',  tag: 'Fresco & Cítrico',    description: 'Pescado fresco del día curtido en limón sutil, acompañado de cebolla roja, ají limo, choclo tierno y camote glaseado.' },
  { id: 'meloso',   name: 'Arroz Meloso con Mariscos',      image: '/image/melosomarisco.png',   tag: 'Cálido & Profundo',   description: 'Arroz cocido lentamente en un intenso bisque de mariscos, coronado con mixtura del mar flambiada.' },
  { id: 'tacutacu', name: 'Tacu Tacu en Salsa de Mariscos', image: '/image/tacutacu.png',        tag: 'Tradición Peruana',   description: 'Nuestra versión dorada de pallares y arroz, bañada en suculenta salsa de mariscos con toques de ají amarillo.' },
  { id: 'tiradito', name: 'Tiradito de Pescado',            image: '/image/tiraditopescado.png', tag: 'Delicado & Elegante', description: 'Finas láminas de pesca del día bañadas en delicada crema de ají amarillo, culantro y aceite de oliva.' },
];

const TESTIMONIALS = [
  { initials: 'CM', name: 'Carlos Mendoza',  role: 'Huésped Frecuente',     dark: false, quote: '"El ceviche clásico es simplemente espectacular. La frescura del pescado te hace sentir en un restaurante de cinco estrellas."' },
  { initials: 'LR', name: 'Lucía Ramírez',   role: 'Reseña en TripAdvisor', dark: true,  quote: '"Celebré mi aniversario cenando aquí. El Arroz Meloso con Mariscos estaba en su punto perfecto. El ambiente frente al mar no tiene precio."' },
  { initials: 'JP', name: 'Javier Paredes',  role: 'Google Local Guide',    dark: false, quote: '"La calidad de los ingredientes se nota. El Tacu Tacu es el mejor que he probado en todo Piura. Totalmente recomendado."' },
];

export default function Restaurante() {
  const [activeDish, setActiveDish] = useState(MENU_ITEMS[0]);

  return (
    <>
      <style>{`
        /* ══ ROOT ═══════════════════════════════════════════ */
        .rst-root { width: 100%; background: #ffffff; overflow-x: hidden; font-family: sans-serif; }

        /* ══ 1. HERO ════════════════════════════════════════ */
        .rst-hero {
          position: relative;
          width: 100%;
          min-height: 58vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .rst-hero-bg { position: absolute; inset: 0; }
        .rst-hero-bg img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .rst-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top,
            rgba(10,24,50,0.96) 0%,
            rgba(10,24,50,0.65) 50%,
            rgba(10,24,50,0.25) 100%);
        }
        .rst-hero-content {
          position: relative; z-index: 10;
          width: 100%;
          padding: 32px 20px 40px;
          text-align: center;
        }
        .rst-hero-eyebrow {
          color: #60a5fa; font-weight: 700;
          letter-spacing: 0.22em; font-size: 10px;
          text-transform: uppercase; margin: 0 0 12px;
        }
        .rst-hero-title {
          font-size: clamp(1.9rem, 8vw, 4.5rem);
          font-weight: 300; color: #fff;
          line-height: 1.15; margin: 0 0 16px;
        }
        .rst-hero-desc {
          color: #cbd5e1;
          font-size: clamp(13px, 3.5vw, 18px);
          font-weight: 300; line-height: 1.65;
          max-width: 52ch; margin: 0 auto;
        }

        /* ══ Shared section wrapper ══════════════════════════ */
        .rst-section { padding: 52px 20px; }
        .rst-section--gray { background: #f8fafc; }
        .rst-inner { max-width: 1200px; margin: 0 auto; }

        .rst-section-title {
          font-size: clamp(1.5rem, 5.5vw, 2.5rem);
          color: #163A70; font-weight: 300;
          line-height: 1.25; margin: 0;
        }
        .rst-eyebrow {
          color: #4a90d9; font-weight: 700;
          letter-spacing: 0.22em; font-size: 10px;
          text-transform: uppercase; margin: 0 0 10px;
        }
        .rst-body { color: #475569; font-size: clamp(14px,3.5vw,16px); line-height: 1.8; margin: 0; }

        /* ══ 2. INTRO ════════════════════════════════════════ */
        .rst-intro-grid {
          display: flex; flex-direction: column; gap: 28px;
        }
        .rst-intro-img {
          width: 100%; aspect-ratio: 4/3;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.14);
          order: -1;           /* imagen arriba en mobile */
        }
        .rst-intro-img img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s ease;
        }
        .rst-intro-text { display: flex; flex-direction: column; gap: 16px; }
        .rst-badges {
          display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px;
        }
        .rst-badge {
          display: flex; align-items: center; gap: 12px;
        }
        .rst-badge-icon {
          width: 44px; height: 44px; border-radius: 50%;
          background: #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          color: #4a90d9; flex-shrink: 0;
        }
        .rst-badge h4 { color: #163A70; font-weight: 700; margin: 0 0 2px; font-size: 14px; }
        .rst-badge p  { color: #64748b; font-size: 12px; margin: 0; }

        /* ══ 3. SHOWCASE ═════════════════════════════════════ */
        .rst-showcase-grid {
          display: flex; flex-direction: column; gap: 24px;
          background: #fff; border-radius: 24px;
          padding: 24px 20px;
          box-shadow: 0 8px 32px rgba(22,58,112,0.07);
        }

        /* Lista de platos */
        .rst-dish-list { display: flex; flex-direction: column; gap: 10px; }
        .rst-dish-btn {
          text-align: left; padding: 16px 20px;
          border-radius: 16px; border: 1px solid #f1f5f9;
          cursor: pointer; transition: all 0.3s;
          display: flex; flex-direction: column; gap: 4px;
          background: #fff;
        }
        .rst-dish-btn--active {
          background: #163A70; border-color: #163A70;
          box-shadow: 0 8px 20px rgba(22,58,112,0.28);
        }
        .rst-dish-name { font-size: clamp(14px,4vw,18px); font-weight: 700; }
        .rst-dish-tag  { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

        .rst-cta-btn {
          width: 100%; display: flex; align-items: center;
          justify-content: center; gap: 8px;
          padding: 13px 24px;
          background: #163A70; color: #fff;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: none; border-radius: 12px; cursor: pointer;
          box-shadow: 0 8px 20px rgba(22,58,112,0.35);
          transition: background 0.25s; margin-top: 8px;
        }

        /* Visual plato */
        .rst-dish-visual {
          display: flex; flex-direction: column;
          align-items: center; text-align: center; gap: 16px;
        }
        .rst-dish-img-wrap {
          width: min(260px, 70vw);
          height: min(260px, 70vw);
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .rst-dish-glow {
          position: absolute; inset: -10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(74,144,217,0.12) 0%, transparent 70%);
        }
        .rst-dish-img-wrap img {
          width: 100%; height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 32px rgba(0,0,0,0.35));
          position: relative; z-index: 1;
        }
        .rst-dish-title { font-size: clamp(1.3rem,5vw,2rem); color: #163A70; font-weight: 700; margin: 0; }
        .rst-dish-desc  { color: #475569; font-size: 14px; line-height: 1.75; max-width: 42ch; margin: 0; }

        /* ══ 4. TESTIMONIOS ══════════════════════════════════ */
        .rst-testi-grid {
          display: flex; flex-direction: column; gap: 20px;
        }
        .rst-testi-card {
          padding: 32px 24px; border-radius: 24px;
          border: 1px solid #f1f5f9;
        }
        .rst-testi-stars { display: flex; gap: 4px; color: #fbbf24; margin-bottom: 16px; }
        .rst-testi-quote { color: #475569; font-size: 14px; line-height: 1.8; font-style: italic; margin: 0 0 20px; }
        .rst-testi-author { display: flex; align-items: center; gap: 12px; }
        .rst-testi-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 15px; flex-shrink: 0;
        }
        .rst-testi-name { font-weight: 700; font-size: 14px; margin: 0 0 2px; }
        .rst-testi-role { color: #94a3b8; font-size: 12px; margin: 0; }

        /* ══ TABLET (≥640px) ═════════════════════════════════ */
        @media (min-width: 640px) {
          .rst-section { padding: 72px 40px; }
          .rst-hero { min-height: 68vh; align-items: center; }
          .rst-hero-content { padding: 48px 40px; }
          .rst-intro-img { aspect-ratio: 16/9; border-radius: 24px; }
          .rst-showcase-grid { padding: 32px 28px; }
          .rst-testi-grid { display: grid; grid-template-columns: 1fr 1fr; }
          /* el 2do card (dark) ocupa ambas columnas */
          .rst-testi-card--dark { grid-column: 1 / -1; }
        }

        /* ══ DESKTOP (≥1024px) ═══════════════════════════════ */
        @media (min-width: 1024px) {
          .rst-section { padding: 120px 80px; }
          .rst-hero { min-height: 82vh; }
          .rst-hero-overlay {
            background: linear-gradient(to top,
              rgba(10,24,50,0.95) 0%,
              rgba(10,24,50,0.50) 45%,
              rgba(10,24,50,0.20) 100%);
          }
          .rst-hero-content { max-width: 1200px; margin: 0 auto; padding: 0 80px 56px; text-align: center; }

          .rst-intro-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 72px; align-items: center;
          }
          .rst-intro-img {
            aspect-ratio: unset; height: 500px;
            border-radius: 32px; order: 0;
          }

          .rst-showcase-grid {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 56px; align-items: center;
            border-radius: 40px; padding: 56px;
          }

          .rst-dish-img-wrap {
            width: min(340px, 40vw);
            height: min(340px, 40vw);
          }

          .rst-testi-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .rst-testi-card--dark { grid-column: auto; }

          .rst-testi-card { padding: 40px 32px; }
        }

        /* ══ Large desktop ═══════════════════════════════════ */
        @media (min-width: 1280px) {
          .rst-dish-img-wrap { width: 380px; height: 380px; }
        }
      `}</style>

      <div className="rst-root">

        {/* ── 1. HERO ──────────────────────────────────────── */}
        <div className="rst-hero">
          <div className="rst-hero-bg">
            <img src="/image/restaurante1.png" alt="Restaurante Luna Nueva"
              onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000'; }} />
            <div className="rst-hero-overlay" />
          </div>
          <div className="rst-hero-content">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="rst-hero-eyebrow">Gastronomía de Autor</p>
              <h1 className="rst-hero-title">Restaurante <strong style={{ fontWeight: 700 }}>Luna Nueva</strong></h1>
              <p className="rst-hero-desc">Sabores que evocan la brisa del mar y la tradición de nuestra tierra, diseñados para deleitar los paladares más exigentes.</p>
            </motion.div>
          </div>
        </div>

        {/* ── 2. INTRO ─────────────────────────────────────── */}
        <div className="rst-section">
          <div className="rst-inner">
            <div className="rst-intro-grid">
              <motion.div className="rst-intro-img"
                initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
                <img src="/image/restaurante3.png" alt="Ambiente del restaurante"
                  onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000'; }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </motion.div>

              <motion.div className="rst-intro-text"
                initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
                <h2 className="rst-section-title">Un ambiente <span style={{ fontWeight: 700 }}>incomparable</span></h2>
                <p className="rst-body">Nuestro restaurante ofrece una experiencia culinaria única frente al mar. Utilizamos ingredientes locales de la más alta calidad, seleccionados diariamente para garantizar la frescura absoluta en cada plato.</p>
                <div className="rst-badges">
                  {[{ Icon: ChefHat, title: 'Alta Cocina', sub: 'Chef de Especialidad' }, { Icon: Star, title: 'Frescura 100%', sub: 'Pesca del día' }].map(({ Icon, title, sub }) => (
                    <div key={title} className="rst-badge">
                      <div className="rst-badge-icon"><Icon size={22} /></div>
                      <div><h4>{title}</h4><p>{sub}</p></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── 3. ESPECIALIDADES ────────────────────────────── */}
        <div className="rst-section rst-section--gray">
          <div className="rst-inner">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 className="rst-section-title">Nuestras <span style={{ fontWeight: 700 }}>Especialidades</span></h2>
              <p className="rst-body" style={{ marginTop: '12px', maxWidth: '52ch', margin: '12px auto 0' }}>
                Descubre los platos emblemáticos que han convertido a nuestro restaurante en un destino culinario imperdible.
              </p>
            </div>

            <div className="rst-showcase-grid">
              {/* Lista */}
              <div>
                <div className="rst-dish-list">
                  {MENU_ITEMS.map(item => (
                    <button key={item.id}
                      onClick={() => setActiveDish(item)}
                      className={`rst-dish-btn${activeDish.id === item.id ? ' rst-dish-btn--active' : ''}`}
                      style={{ color: activeDish.id === item.id ? '#fff' : '#334155' }}
                      onMouseEnter={e => { if (activeDish.id !== item.id) e.currentTarget.style.background = '#f8fafc'; }}
                      onMouseLeave={e => { if (activeDish.id !== item.id) e.currentTarget.style.background = '#fff'; }}>
                      <span className="rst-dish-name">{item.name}</span>
                      <span className="rst-dish-tag" style={{ color: activeDish.id === item.id ? '#cbd5e1' : '#94a3b8' }}>{item.tag}</span>
                    </button>
                  ))}
                </div>
                <button className="rst-cta-btn"
                  onMouseEnter={e => (e.currentTarget.style.background = '#0f1f3d')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#163A70')}>
                  <Utensils size={16} /> Ver Carta Completa <ChevronRight size={16} />
                </button>
              </div>

              {/* Visual */}
              <AnimatePresence mode="wait">
                <motion.div key={activeDish.id} className="rst-dish-visual"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
                  <div className="rst-dish-img-wrap">
                    <motion.div className="rst-dish-glow" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
                    <motion.img src={activeDish.image} alt={activeDish.name}
                      animate={{ y: [-8, 8, -8] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
                  </div>
                  <h3 className="rst-dish-title">{activeDish.name}</h3>
                  <p className="rst-dish-desc">{activeDish.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── 4. TESTIMONIOS ───────────────────────────────── */}
        <div className="rst-section">
          <div className="rst-inner">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p className="rst-eyebrow">Experiencias Inolvidables</p>
              <h2 className="rst-section-title">Lo que dicen <span style={{ fontWeight: 700 }}>nuestros clientes</span></h2>
            </div>
            <div className="rst-testi-grid">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={t.name}
                  className={`rst-testi-card${t.dark ? ' rst-testi-card--dark' : ''}`}
                  style={{ backgroundColor: t.dark ? '#163A70' : '#f8fafc' }}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                  <div className="rst-testi-stars">{[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}</div>
                  <p className="rst-testi-quote" style={{ color: t.dark ? '#cbd5e1' : '#475569' }}>{t.quote}</p>
                  <div className="rst-testi-author">
                    <div className="rst-testi-avatar" style={{ backgroundColor: t.dark ? '#fff' : '#163A70', color: t.dark ? '#163A70' : '#fff' }}>{t.initials}</div>
                    <div>
                      <p className="rst-testi-name" style={{ color: t.dark ? '#fff' : '#163A70' }}>{t.name}</p>
                      <p className="rst-testi-role">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
