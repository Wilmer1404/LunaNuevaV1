'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Flame,
  Droplets,
  Sun,
  ChevronRight,
  Wine,
  LucideIcon,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────
export type ProductId = string;

export interface FeatureMetric {
  label: string;
  value: number;
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
    bgGradient: string;
    glowHex: string; // hex para la barra de progreso via style inline
  };
  stats: { profile: string };
  features: FeatureMetric[];
}

// ─── Data ────────────────────────────────────────────────
const PRODUCT_DATA: ProductData[] = [
  {
    id: 'cuba-libre',
    label: 'Cuba Libre',
    title: 'Cuba Libre',
    description: 'Un clásico refrescante con ron añejo, cola premium y un toque vibrante de limón fresco. Perfecto para cualquier momento del día frente al mar.',
    image: '/svg/cubalibre.svg',
    colors: {
      gradient: 'from-amber-600 to-yellow-900',
      glow: 'bg-amber-600',
      ring: 'border-l-amber-600/50',
      bgGradient: 'radial-gradient(circle at 50% 30%, rgba(217, 119, 6, 0.12), transparent 65%)',
      glowHex: '#d97706',
    },
    stats: { profile: 'Refrescante & Intenso' },
    features: [
      { label: 'Intensidad', value: 60, icon: Flame },
      { label: 'Dulzor',     value: 70, icon: Droplets },
      { label: 'Cítrico',    value: 40, icon: Sun },
    ],
  },
  {
    id: 'pina-colada',
    label: 'Piña Colada',
    title: 'Piña Colada',
    description: 'El auténtico sabor tropical. Una mezcla cremosa de ron blanco, crema de coco dulce y jugo de piña fresca, coronada con un toque caribeño.',
    image: '/svg/piñacolada.svg',
    colors: {
      gradient: 'from-yellow-400 to-orange-600',
      glow: 'bg-yellow-400',
      ring: 'border-r-yellow-400/50',
      bgGradient: 'radial-gradient(circle at 50% 30%, rgba(250, 204, 21, 0.12), transparent 65%)',
      glowHex: '#eab308',
    },
    stats: { profile: 'Cremoso & Tropical' },
    features: [
      { label: 'Intensidad', value: 40, icon: Flame },
      { label: 'Dulzor',     value: 85, icon: Droplets },
      { label: 'Cítrico',    value: 30, icon: Sun },
    ],
  },
  {
    id: 'copa-vino',
    label: 'Vino Tinto',
    title: 'Vino Tinto Reserva',
    description: 'Una copa elegante de vino tinto reserva, con profundas notas de frutos rojos y un ligero toque a madera. Perfecto para una velada relajante.',
    image: '/svg/copavino.svg',
    colors: {
      gradient: 'from-red-700 to-rose-900',
      glow: 'bg-red-700',
      ring: 'border-l-red-700/50',
      bgGradient: 'radial-gradient(circle at 50% 30%, rgba(185, 28, 28, 0.12), transparent 65%)',
      glowHex: '#b91c1c',
    },
    stats: { profile: 'Seco & Aromático' },
    features: [
      { label: 'Intensidad', value: 50, icon: Flame },
      { label: 'Dulzor',     value: 20, icon: Droplets },
      { label: 'Cítrico',    value: 10, icon: Sun },
    ],
  },
  {
    id: 'margarita',
    label: 'Margarita',
    title: 'Margarita Clásica',
    description: 'El equilibrio perfecto entre tequila premium, triple sec y jugo de limón fresco, con un delicado escarchado de sal en el borde.',
    image: '/svg/margarita.svg',
    colors: {
      gradient: 'from-lime-400 to-emerald-600',
      glow: 'bg-lime-500',
      ring: 'border-r-lime-500/50',
      bgGradient: 'radial-gradient(circle at 50% 30%, rgba(132, 204, 22, 0.12), transparent 65%)',
      glowHex: '#84cc16',
    },
    stats: { profile: 'Ácido & Refrescante' },
    features: [
      { label: 'Intensidad', value: 55, icon: Flame },
      { label: 'Dulzor',     value: 40, icon: Droplets },
      { label: 'Cítrico',    value: 85, icon: Sun },
    ],
  },
];

// ─── Animation variants ───────────────────────────────────
const ANIMATIONS: any = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
    exit:    { opacity: 0, transition: { duration: 0.12 } },
  },
  item: {
    hidden:   { opacity: 0, y: 12 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit:     { opacity: 0, y: -8, transition: { duration: 0.12 } },
  },
  image: (): Variants => ({
    initial: { opacity: 0, scale: 0.88, y: 12 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, scale: 1.06, transition: { duration: 0.22, ease: 'easeIn' } },
  }),
};

// ─── Sub-components ───────────────────────────────────────

/** Gradiente de fondo suave que cambia con el cóctel activo */
const BackgroundGlow = ({ gradient }: { gradient: string }) => (
  <motion.div
    aria-hidden
    animate={{ background: gradient }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
  />
);

/** Imagen circular del cóctel con anillos animados */
const ProductVisual = ({ data }: { data: ProductData }) => (
  <div className="lb-visual">
    {/* Anillo giratorio decorativo */}
    <motion.div
      className={`lb-ring border border-dashed border-slate-200 ${data.colors.ring}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
    />
    {/* Brillo de color */}
    <motion.div
      className={`lb-glow-blob bg-gradient-to-br ${data.colors.gradient}`}
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Círculo principal con la imagen */}
    <div className="lb-circle">
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={data.title}
            variants={ANIMATIONS.image()}
            initial="initial"
            animate="animate"
            exit="exit"
            draggable={false}
            style={{ width: '88%', height: '88%', objectFit: 'contain', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.4))' }}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Etiqueta de perfil */}
    <div className="lb-profile-badge">
      <span className="lb-dot" style={{ backgroundColor: data.colors.glowHex }} />
      {data.stats.profile}
    </div>
  </div>
);

/** Panel de texto: título, descripción y barras de métricas */
const ProductDetails = ({ data }: { data: ProductData }) => (
  <motion.div
    variants={ANIMATIONS.container}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="lb-details"
  >
    <motion.p variants={ANIMATIONS.item} className="lb-eyebrow">
      Luna Bar Signature
    </motion.p>

    <motion.h2 variants={ANIMATIONS.item} className="lb-title">
      {data.title}
    </motion.h2>

    <motion.p variants={ANIMATIONS.item} className="lb-description">
      {data.description}
    </motion.p>

    {/* Métricas */}
    <motion.div variants={ANIMATIONS.item} className="lb-metrics">
      {data.features.map((f, idx) => (
        <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: f.value > 50 ? '#1e293b' : '#64748b', fontWeight: 500 }}>
              <f.icon size={14} /> {f.label}
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#94a3b8' }}>{f.value}%</span>
          </div>
          <div style={{ height: '6px', backgroundColor: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${f.value}%` }}
              transition={{ duration: 0.9, delay: 0.15 + idx * 0.08 }}
              style={{ height: '100%', backgroundColor: data.colors.glowHex, opacity: 0.85, borderRadius: '999px' }}
            />
          </div>
        </div>
      ))}

      {/* CTA */}
      <button
        className="lb-cta-btn"
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0f1f3d')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#163A70')}
      >
        <Wine size={16} />
        Ver Carta Completa
        <ChevronRight size={16} style={{ transition: 'transform 0.2s' }} />
      </button>
    </motion.div>
  </motion.div>
);

/** Selector de cóctel tipo pill */
const Switcher = ({ activeId, onToggle }: { activeId: ProductId; onToggle: (id: ProductId) => void }) => (
  <div className="lb-switcher-wrap">
    <motion.div layout className="lb-switcher">
      {PRODUCT_DATA.map(opt => (
        <motion.button
          key={opt.id}
          onClick={() => onToggle(opt.id)}
          whileTap={{ scale: 0.95 }}
          className="lb-switcher-btn"
        >
          {activeId === opt.id && (
            <motion.div
              layoutId="lb-pill"
              className="lb-switcher-active"
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            />
          )}
          <span className={`lb-switcher-label ${activeId === opt.id ? 'lb-switcher-label--active' : ''}`}>
            {opt.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  </div>
);

// ─── Main component ───────────────────────────────────────
export default function LunaBarShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>(PRODUCT_DATA[0].id);
  const activeIndex = PRODUCT_DATA.findIndex(p => p.id === activeSide);
  const currentData = PRODUCT_DATA[activeIndex];

  useEffect(() => {
    PRODUCT_DATA.forEach(p => { const i = new Image(); i.src = p.image; });
  }, []);

  return (
    <>
      {/* ── Estilos responsivos ── */}
      <style>{`
        /* ── Contenedor raíz ── */
        .lb-root {
          position: relative;
          width: 100%;
          background: #ffffff;
          overflow: hidden;
        }

        /* ── Layout interno: mobile = columna ── */
        .lb-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          /* Mobile: apilado, con padding cómodo */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 48px 20px 60px;
        }

        /* ── Imagen / Visual ── */
        .lb-visual {
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Mobile: tamaño controlado */
          width: min(260px, 72vw);
          height: min(260px, 72vw);
        }

        .lb-ring {
          position: absolute;
          inset: -16%;
          border-radius: 50%;
        }

        .lb-glow-blob {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.28;
        }

        .lb-circle {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          box-shadow: 0 16px 40px rgba(148,163,184,0.35);
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(8px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lb-profile-badge {
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #475569;
          background: rgba(255,255,255,0.88);
          padding: 7px 18px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          backdrop-filter: blur(8px);
        }

        .lb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: lb-pulse 2s ease-in-out infinite;
        }

        @keyframes lb-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.3); }
        }

        /* ── Panel de detalles ── */
        .lb-details {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 480px;
          /* Espacio para el badge del visual */
          margin-top: 20px;
        }

        .lb-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #64748b;
          margin: 0 0 8px;
        }

        .lb-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          color: transparent;
          background: linear-gradient(to bottom, #0f172a, #475569);
          -webkit-background-clip: text;
          background-clip: text;
          margin: 0 0 12px;
          line-height: 1.1;
        }

        .lb-description {
          font-size: clamp(13px, 3.5vw, 15px);
          color: #475569;
          line-height: 1.75;
          font-weight: 300;
          margin: 0 0 20px;
          max-width: 42ch;
        }

        .lb-metrics {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(248,250,252,0.85);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 20px;
          backdrop-filter: blur(8px);
        }

        .lb-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          padding: 12px 24px;
          background-color: #163A70;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 8px 20px -4px rgba(22,58,112,0.38);
          transition: background-color 0.25s;
          width: 100%;
        }

        /* ── Switcher ── */
        .lb-switcher-wrap {
          width: 100%;
          max-width: 480px;
          display: flex;
          justify-content: flex-start;
        }

        .lb-switcher {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.85);
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          backdrop-filter: blur(12px);
          overflow-x: auto;
          max-width: 100%;
          scrollbar-width: none;
        }

        .lb-switcher::-webkit-scrollbar { display: none; }

        .lb-switcher-btn {
          position: relative;
          flex-shrink: 0;
          padding: 8px 16px;
          border-radius: 999px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lb-switcher-active {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: #f1f5f9;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
        }

        .lb-switcher-label {
          position: relative;
          z-index: 1;
          color: #94a3b8;
          letter-spacing: 0.02em;
          transition: color 0.25s;
        }

        .lb-switcher-label--active {
          color: #0f172a;
          font-weight: 600;
        }

        /* ── Tablet (≥ 640px) ── */
        @media (min-width: 640px) {
          .lb-inner {
            padding: 56px 40px 72px;
            gap: 48px;
          }

          .lb-visual {
            width: min(320px, 60vw);
            height: min(320px, 60vw);
          }

          .lb-title {
            font-size: clamp(2.2rem, 6vw, 3.5rem);
          }
        }

        /* ── Desktop (≥ 1024px): layout horizontal lado a lado ── */
        @media (min-width: 1024px) {
          .lb-inner {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 80px;
            padding: 72px 80px 80px;
            min-height: calc(100vh - 72px);
          }

          .lb-visual {
            width: 400px;
            height: 400px;
          }

          .lb-details {
            margin-top: 0;
          }

          .lb-metrics {
            padding: 24px;
            gap: 20px;
          }

          .lb-cta-btn {
            padding: 13px 28px;
          }

          .lb-switcher-wrap {
            margin-top: 20px;
          }
        }

        /* ── Large desktop ── */
        @media (min-width: 1280px) {
          .lb-visual {
            width: 450px;
            height: 450px;
          }

          .lb-inner {
            gap: 120px;
          }
        }
      `}</style>

      <div id="luna-bar-showcase" className="lb-root">
        <BackgroundGlow gradient={currentData.colors.bgGradient} />

        <div className="lb-inner">
          {/* Imagen */}
          <ProductVisual data={currentData} />

          {/* Texto + Switcher */}
          <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <AnimatePresence mode="wait">
              <ProductDetails key={activeSide} data={currentData} />
            </AnimatePresence>

            <Switcher activeId={activeSide} onToggle={setActiveSide} />
          </div>
        </div>
      </div>
    </>
  );
}
