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

// =========================================
// 1. CONFIGURATION & DATA TYPES
// =========================================

export type ProductId = string;

export interface FeatureMetric {
  label: string;
  value: number; // 0-100
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string; // Display name for the switcher
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string; // Tailwind gradient classes
    glow: string;     // Tailwind color class for accents
    ring: string;     // Tailwind border color for rings
    bgGradient: string; // Background gradient for motion.div
  };
  stats: {
    profile: string;
  };
  features: FeatureMetric[];
}

// Default Data para 4 tragos del "Luna Bar"
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
      bgGradient: 'radial-gradient(circle at 0% 50%, rgba(217, 119, 6, 0.15), transparent 50%)',
    },
    stats: { profile: 'Refrescante & Intenso' },
    features: [
      { label: 'Intensidad', value: 60, icon: Flame },
      { label: 'Dulzor', value: 70, icon: Droplets },
      { label: 'Cítrico', value: 40, icon: Sun },
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
      bgGradient: 'radial-gradient(circle at 100% 50%, rgba(250, 204, 21, 0.15), transparent 50%)',
    },
    stats: { profile: 'Cremoso & Tropical' },
    features: [
      { label: 'Intensidad', value: 40, icon: Flame },
      { label: 'Dulzor', value: 85, icon: Droplets },
      { label: 'Cítrico', value: 30, icon: Sun },
    ],
  },
  {
    id: 'copa-vino',
    label: 'Vino Tinto',
    title: 'Vino Tinto Reserva',
    description: 'Una copa elegante de vino tinto reserva, con profundas notas de frutos rojos y un ligero toque a madera. Perfecto para acompañar una velada relajante.',
    image: '/svg/copavino.svg',
    colors: {
      gradient: 'from-red-700 to-rose-900',
      glow: 'bg-red-700',
      ring: 'border-l-red-700/50',
      bgGradient: 'radial-gradient(circle at 0% 50%, rgba(185, 28, 28, 0.15), transparent 50%)',
    },
    stats: { profile: 'Seco & Aromático' },
    features: [
      { label: 'Intensidad', value: 50, icon: Flame },
      { label: 'Dulzor', value: 20, icon: Droplets },
      { label: 'Cítrico', value: 10, icon: Sun },
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
      bgGradient: 'radial-gradient(circle at 100% 50%, rgba(132, 204, 22, 0.15), transparent 50%)',
    },
    stats: { profile: 'Ácido & Refrescante' },
    features: [
      { label: 'Intensidad', value: 55, icon: Flame },
      { label: 'Dulzor', value: 40, icon: Droplets },
      { label: 'Cítrico', value: 85, icon: Sun },
    ],
  },
];

// =========================================
// 2. ANIMATION VARIANTS
// =========================================

const ANIMATIONS: any = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  },
  image: (): Variants => ({
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  }),
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================

const BackgroundGradient = ({ gradient }: { gradient: string }) => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <motion.div
      animate={{ background: gradient }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
  </div>
);

const ProductVisual = ({ data }: { data: ProductData }) => (
  <div className="relative group shrink-0 z-10">
    {/* Animated Rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-20%] rounded-full border border-dashed border-slate-300 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-3xl opacity-30`}
    />

    {/* Image Container */}
    <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden bg-white/40 backdrop-blur-sm">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={`${data.title}`}
            variants={ANIMATIONS.image()}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover md:object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Status Label (Cocktail Profile) */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600 bg-white/80 px-5 py-2.5 rounded-full border border-slate-200 backdrop-blur">
        <span className={`h-2 w-2 rounded-full ${data.colors.glow} animate-pulse shadow-[0_0_10px_currentColor]`} />
        {data.stats.profile}
      </div>
    </div>
  </div>
);

const ProductDetails = ({ data }: { data: ProductData }) => {
  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col z-10 items-start text-left"
    >
      <motion.h2 variants={ANIMATIONS.item} className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
        Luna Bar Signature
      </motion.h2>
      <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500">
        {data.title}
      </motion.h1>
      <motion.p variants={ANIMATIONS.item} className="text-slate-600 mb-8 max-w-sm leading-relaxed font-light mr-auto">
        {data.description}
      </motion.p>

      {/* Feature Grid */}
      <motion.div variants={ANIMATIONS.item} className="w-full space-y-6 bg-slate-50/80 p-6 rounded-2xl border border-slate-200 backdrop-blur-md">
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className="flex items-center justify-between mb-3 text-sm flex-row">
              <div className={`flex items-center gap-2 ${feature.value > 50 ? 'text-slate-800' : 'text-slate-500'}`}>
                <feature.icon size={16} /> <span className="font-medium tracking-wide">{feature.label}</span>
              </div>
              <span className="font-mono text-xs text-slate-500">{feature.value}%</span>
            </div>
            <div className="relative h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                className={`absolute top-0 bottom-0 left-0 ${data.colors.glow} opacity-80`}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-start" style={{ marginTop: '40px' }}>
          <button 
            type="button" 
            className="group flex items-center gap-3 transition-all duration-300"
            style={{ 
              backgroundColor: '#163A70', 
              color: '#ffffff', 
              padding: '12px 28px', 
              borderRadius: '12px', 
              fontSize: '13px', 
              fontWeight: 700, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              boxShadow: '0 10px 25px -5px rgba(22, 58, 112, 0.4)' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f1f3d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#163A70'}
          >
            <Wine size={18} /> 
            Ver Carta Completa
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({ 
  activeId, 
  onToggle 
}: { 
  activeId: ProductId; 
  onToggle: (id: ProductId) => void 
}) => {
  return (
    <div className="relative mt-8 flex justify-start z-50 w-full">
      <motion.div layout className="flex items-center gap-2 p-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg ring-1 ring-slate-200/50 overflow-x-auto max-w-full hide-scrollbar">
        {PRODUCT_DATA.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative px-6 py-3 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none flex-shrink-0"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="cocktail-surface"
                className="absolute inset-0 rounded-full bg-slate-100 shadow-inner"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 tracking-wide ${activeId === opt.id ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-700'}`}>
              {opt.label}
            </span>
            {activeId === opt.id && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// =========================================
// 4. MAIN COMPONENT
// =========================================

export default function LunaBarShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>(PRODUCT_DATA[0].id);
  
  const activeIndex = PRODUCT_DATA.findIndex(p => p.id === activeSide);
  const currentData = PRODUCT_DATA[activeIndex];

  // =========================================
  // PRECARGA DE IMÁGENES (Evita "cargas de golpe" y flashes blancos)
  // =========================================
  useEffect(() => {
    PRODUCT_DATA.forEach((product) => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);

  return (
    <div id="luna-bar-showcase" className="relative min-h-screen w-full bg-white text-slate-900 overflow-hidden flex flex-col items-center justify-center">
      
      <BackgroundGradient gradient={currentData.colors.bgGradient} />

      <main className="relative z-10 w-full px-6 py-20 pt-10 flex flex-col justify-center max-w-7xl mx-auto flex-1">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 w-full">
          {/* Visual Column (Image + Rings) */}
          <ProductVisual data={currentData} />

          {/* Details Column (Text + Stats + Switcher) */}
          <div className="w-full max-w-md flex flex-col justify-center">
            <div style={{ minHeight: '380px' }}>
              <AnimatePresence mode="wait">
                <ProductDetails 
                  key={activeSide} // Key forces re-render for animation
                  data={currentData} 
                />
              </AnimatePresence>
            </div>
            
            {/* Opciones de tragos alineadas debajo de las barras de medición */}
            <div style={{ marginTop: '32px' }}>
              <Switcher activeId={activeSide} onToggle={setActiveSide} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
