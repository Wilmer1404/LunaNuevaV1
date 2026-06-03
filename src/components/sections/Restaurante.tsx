import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Utensils, Star, ChevronRight } from 'lucide-react';

const MENU_ITEMS = [
  { id: 'ceviche',   name: 'Ceviche Clásico',              image: '/image/cevicheclasico.png',   tag: 'Fresco & Cítrico',    description: 'Pescado fresco del día curtido en limón sutil, acompañado de cebolla roja, ají limo, choclo tierno y camote glaseado. Un tributo al mar.' },
  { id: 'meloso',    name: 'Arroz Meloso con Mariscos',     image: '/image/melosomarisco.png',    tag: 'Cálido & Profundo',   description: 'Una exquisita fusión de arroz en su punto, cocido lentamente en un intenso bisque de mariscos, coronado con mixtura del mar flambiada.' },
  { id: 'tacutacu',  name: 'Tacu Tacu en Salsa de Mariscos',image: '/image/tacutacu.png',        tag: 'Tradición Peruana',   description: 'Nuestra versión dorada y crujiente de pallares y arroz, bañada en una suculenta salsa de mariscos con toques de ají amarillo y especias locales.' },
  { id: 'tiradito',  name: 'Tiradito de Pescado',           image: '/image/tiraditopescado.png', tag: 'Delicado & Elegante', description: 'Finas láminas de pesca del día bañadas en una delicada crema de ají amarillo, toques de culantro y aceite de oliva.' },
];

export default function Restaurante() {
  const [activeDish, setActiveDish] = useState(MENU_ITEMS[0]);

  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', fontFamily: 'sans-serif', overflow: 'hidden' }}>

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img src="/image/restaurante1.png" alt="Restaurante Luna Nueva"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000'; }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,31,61,0.95), rgba(15,31,61,0.4))' }} />
        </div>

        <div className="restaurante-hero-content section-container" style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '13px', textTransform: 'uppercase', margin: '0 0 24px 0' }}>
              Gastronomía de Autor
            </p>
            <h1 className="restaurante-h1" style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, margin: '0 0 24px 0' }}>
              Restaurante <span style={{ fontWeight: 700 }}>Luna Nueva</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              Sabores que evocan la brisa del mar y la tradición de nuestra tierra, diseñados para deleitar los paladares más exigentes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── 2. INTRODUCCIÓN ───────────────────────────────── */}
      <div className="restaurante-intro" style={{ padding: 'var(--section-py) var(--section-px)' }}>
        <div className="section-container">
          <div className="grid-2col">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '480px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}>
              <img src="/image/restaurante3.png" alt="Ambiente Restaurante"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000'; }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#163A70', fontWeight: 300, lineHeight: 1.2, margin: '0 0 24px 0' }}>
                Un ambiente <span style={{ fontWeight: 700 }}>incomparable</span>
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', margin: '0 0 24px 0' }}>
                Nuestro restaurante ofrece una experiencia culinaria única frente al mar. Utilizamos ingredientes locales de la más alta calidad, seleccionados diariamente por nuestros expertos para garantizar la frescura absoluta en cada plato.
              </p>
              <div style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
                {[
                  { Icon: ChefHat, title: 'Alta Cocina',  sub: 'Chef de Especialidad' },
                  { Icon: Star,    title: 'Frescura 100%', sub: 'Pesca del día' },
                ].map(({ Icon, title, sub }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9', flexShrink: 0 }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: '#163A70', fontWeight: 700, margin: '0 0 4px 0', fontSize: '15px' }}>{title}</h4>
                      <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 3. SHOWCASE INTERACTIVO ───────────────────────── */}
      <div className="restaurante-showcase-wrap" style={{ backgroundColor: '#f8fafc', padding: 'var(--section-py) var(--section-px)' }}>
        <div className="section-container">

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Nuestras <span style={{ fontWeight: 700 }}>Especialidades</span>
            </h2>
            <p style={{ color: '#64748b', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.6 }}>
              Descubre los platos emblemáticos que han convertido a nuestro restaurante en un destino culinario imperdible.
            </p>
          </div>

          <div className="restaurante-showcase" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: '40px', padding: '56px', boxShadow: '0 20px 50px -15px rgba(22,58,112,0.08)' }}>

            {/* Lista Navegación */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {MENU_ITEMS.map(item => (
                <button key={item.id} onClick={() => setActiveDish(item)}
                  style={{ textAlign: 'left', padding: '24px', borderRadius: '20px', backgroundColor: activeDish.id === item.id ? '#163A70' : '#ffffff', border: activeDish.id === item.id ? '1px solid #163A70' : '1px solid #f1f5f9', color: activeDish.id === item.id ? '#ffffff' : '#334155', boxShadow: activeDish.id === item.id ? '0 10px 25px -5px rgba(22,58,112,0.3)' : 'none', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '6px' }}
                  onMouseEnter={e => { if (activeDish.id !== item.id) e.currentTarget.style.backgroundColor = '#f8fafc'; }}
                  onMouseLeave={e => { if (activeDish.id !== item.id) e.currentTarget.style.backgroundColor = '#ffffff'; }}>
                  <span style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 700 }}>{item.name}</span>
                  <span style={{ fontSize: '12px', color: activeDish.id === item.id ? '#cbd5e1' : '#94a3b8', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.tag}</span>
                </button>
              ))}

              <div style={{ marginTop: '20px' }}>
                <button type="button"
                  style={{ backgroundColor: '#163A70', color: '#ffffff', padding: '14px 28px', borderRadius: '14px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 10px 25px -5px rgba(22,58,112,0.4)', width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '10px', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1f3d')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#163A70')}>
                  <Utensils size={16} />
                  Ver Carta Completa
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Visualización del Plato */}
            <div style={{ position: 'relative', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeDish.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div className="restaurante-dish-img" style={{ width: '320px', height: '320px', position: 'relative', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ position: 'absolute', inset: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,144,217,0.1) 0%, transparent 70%)' }} />
                    <motion.img src={activeDish.image} alt={activeDish.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.4))', position: 'relative', zIndex: 1 }}
                      animate={{ y: [-12, 12, -12] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#163A70', fontWeight: 700, margin: '0 0 12px 0' }}>{activeDish.name}</h3>
                  <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '15px', maxWidth: '400px', margin: 0 }}>{activeDish.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. TESTIMONIOS ───────────────────────────────── */}
      <div className="testimonios-wrap" style={{ backgroundColor: '#ffffff', padding: 'var(--section-py) var(--section-px)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Experiencias Inolvidables</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Lo que dicen <span style={{ fontWeight: 700 }}>nuestros clientes</span>
            </h2>
          </div>

          <div className="testimonios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {[
              { initials: 'CM', name: 'Carlos Mendoza',  role: 'Huésped Frecuente',     bg: '#163A70', textBg: '#f8fafc', border: '#f1f5f9', textColor: '#475569', nameColor: '#163A70', dark: false, quote: '"El ceviche clásico es simplemente espectacular. La frescura del pescado y la atención al detalle te hacen sentir en un restaurante de cinco estrellas."' },
              { initials: 'LR', name: 'Lucía Ramírez',   role: 'Reseña en TripAdvisor', bg: '#ffffff',  textBg: '#163A70', border: '#163A70', textColor: '#cbd5e1', nameColor: '#ffffff', dark: true,  quote: '"Celebré mi aniversario cenando aquí. El Arroz Meloso con Mariscos estaba en su punto perfecto. El ambiente frente al mar no tiene precio."' },
              { initials: 'JP', name: 'Javier Paredes',  role: 'Google Local Guide',    bg: '#163A70', textBg: '#f8fafc', border: '#f1f5f9', textColor: '#475569', nameColor: '#163A70', dark: false, quote: '"La calidad de los ingredientes se nota. El Tacu Tacu en Salsa de Mariscos es el mejor que he probado en todo Piura. Totalmente recomendado."' },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ backgroundColor: t.textBg, padding: '40px 32px', borderRadius: '32px', border: `1px solid ${t.border}`, boxShadow: t.dark ? '0 20px 40px -15px rgba(22,58,112,0.3)' : 'none' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '20px' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p style={{ color: t.textColor, fontSize: '15px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '28px' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: t.bg, color: t.dark ? '#163A70' : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <h4 style={{ color: t.nameColor, fontWeight: 700, margin: '0 0 2px 0', fontSize: '14px' }}>{t.name}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
