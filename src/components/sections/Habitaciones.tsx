import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Maximize, BedDouble, Wifi, Tv, Wind, Coffee, ChevronRight, MessageCircle, Bath, Droplets } from 'lucide-react';

const WHATSAPP_NUMBER = "51967975109";

const ROOMS = [
  {
    id: 'matrimonial-mar',
    name: 'Matrimonial Simple',
    type: 'Vista al Mar',
    description: 'Las habitaciones matrimoniales frente al mar son estilo rústico y cuentan con balcón frente al mar. Gran elección para escapadas románticas o para disfrutar individualmente. Se encuentra disponible servicio a la habitación.',
    capacity: '2 Personas',
    size: 'Balcón Frente al Mar',
    bed: '1 Cama de 2 Plazas',
    amenities: [
      { icon: <Wifi size={20} />, label: 'WIFI' },
      { icon: <Tv size={20} />, label: 'TV con Cable' },
      { icon: <Droplets size={20} />, label: 'Piscina' },
      { icon: <Coffee size={20} />, label: 'Minibar' },
      { icon: <Bath size={20} />, label: 'Baño Privado' }
    ],
    fallbackImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    images: [
      '/image/matrimonialsimplevistamar1.png',
      '/image/matrimonialsimplevistamar2.png',
      '/image/matrimonialsimplevistamar3.png',
      '/image/matrimonialsimplevistamar4.png'
    ],
  },
  {
    id: 'matrimonial-vip',
    name: 'Matrimonial VIP',
    type: 'Vista a la Piscina',
    description: 'Lujo superior en nuestra suite VIP. Cuenta con diseño vanguardista, acabados premium y terraza directa con vista a la piscina iluminada.',
    capacity: '2 Personas',
    size: '45 m²',
    bed: '1 Cama Super King',
    amenities: [
      { icon: <Wifi size={20} />, label: 'WIFI Alta Velocidad' },
      { icon: <Wind size={20} />, label: 'Aire Acondicionado' }
    ],
    fallbackImg: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    images: ['/image/hab-matrimonial-vip.png'],
  },
  {
    id: 'doble',
    name: 'Habitación Doble',
    type: 'Confort Superior',
    description: 'Espacio versátil y muy iluminado, diseñado para amigos o colegas. Comodidad garantizada con camas independientes de alta gama.',
    capacity: '2 Personas',
    size: '38 m²',
    bed: '2 Camas Queen',
    amenities: [
      { icon: <Wifi size={20} />, label: 'WIFI Alta Velocidad' }
    ],
    fallbackImg: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
    images: ['/image/hab-doble.png'],
  },
  {
    id: 'triple',
    name: 'Habitación Triple',
    type: 'Ideal para Grupos',
    description: 'Amplia habitación pensada para la comodidad de grupos pequeños. Distribución inteligente que asegura descanso e independencia.',
    capacity: '3 Personas',
    size: '42 m²',
    bed: '3 Camas 1.5 Plazas',
    amenities: [
      { icon: <Wifi size={20} />, label: 'WIFI Alta Velocidad' }
    ],
    fallbackImg: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
    images: ['/image/hab-triple.png'],
  },
  {
    id: 'cuadruple',
    name: 'Habitación Cuádruple',
    type: 'Espacio Familiar',
    description: 'La opción perfecta para viajes en familia. Máximo espacio y confort, permitiendo que todos disfruten juntos sin sacrificar la privacidad personal.',
    capacity: '4 Personas',
    size: '50 m²',
    bed: '4 Camas 1.5 Plazas',
    amenities: [
      { icon: <Wifi size={20} />, label: 'WIFI Alta Velocidad' }
    ],
    fallbackImg: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=2072&auto=format&fit=crop',
    images: ['/image/hab-cuadruple.png'],
  }
];

export default function Habitaciones() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const activeRoom = ROOMS[activeRoomIndex];

  // Pre-carga de imágenes de fallback
  useEffect(() => {
    ROOMS.forEach(room => {
      const img = new Image();
      img.src = room.fallbackImg;
    });
  }, []);

  const handleWhatsApp = () => {
    const message = `Hola, deseo consultar disponibilidad y precios para la habitación: *${activeRoom.name} - ${activeRoom.type}*.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{ position: 'relative', width: '100%', minHeight: 'calc(100vh - 72px)', backgroundColor: '#0f1f3d', fontFamily: 'sans-serif' }}>
      
      {/* ── BACKGROUND DINÁMICO (Ken Burns Effect) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoom.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <img 
            src={activeRoom.images[0]} 
            alt={activeRoom.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.src = activeRoom.fallbackImg; }}
          />
          {/* Gradiente Oscuro para legibilidad */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,31,61,0.95) 0%, rgba(15,31,61,0.6) 50%, rgba(15,31,61,0.2) 100%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="habitaciones-main" style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', maxWidth: '1400px', margin: '0 auto', padding: '32px var(--section-px, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        {/* Cabecera Pequeña */}
        <div className="habitaciones-header" style={{ alignSelf: 'flex-start' }}>
          <p style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '13px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            Alojamiento de Lujo
          </p>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 300, margin: 0 }}>
            Nuestras <span style={{ fontWeight: 700 }}>Habitaciones</span>
          </h2>
        </div>

        {/* Cuerpo Principal: Panel Izquierdo y Collage Derecho */}
        <div className="habitaciones-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', gap: '32px', flexWrap: 'wrap' }}>
          
          {/* Panel de Cristal Flotante (Glassmorphism) */}
          <div className="habitaciones-glass" style={{ width: '100%', maxWidth: '520px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '32px', padding: '40px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: 'rgba(74, 144, 217, 0.2)', color: '#60a5fa', borderRadius: '99px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
                {activeRoom.type}
              </div>
              
              <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', margin: 0 }}>
                {activeRoom.name}
              </h1>
              
              <p style={{ color: '#e2e8f0', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                {activeRoom.description}
              </p>

              {/* Grid de Atributos */}
              <div className="habitaciones-attrs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ color: '#4a90d9' }}><Users size={20} /></div>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{activeRoom.capacity}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ color: '#4a90d9' }}><Maximize size={20} /></div>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{activeRoom.size}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ color: '#4a90d9' }}><BedDouble size={20} /></div>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{activeRoom.bed}</span>
                </div>
                
                {/* Amenidades Extras */}
                {activeRoom.amenities.map((amenity, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                    <div style={{ color: '#4a90d9' }}>{amenity.icon}</div>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{amenity.label}</span>
                  </div>
                ))}
              </div>

              {/* Botón WhatsApp */}
              <button 
                onClick={handleWhatsApp}
                style={{ 
                  width: '100%', 
                  backgroundColor: '#25D366', 
                  color: '#ffffff', 
                  padding: '18px 32px', 
                  borderRadius: '16px', 
                  fontSize: '15px', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase', 
                  border: 'none', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
                  transition: 'transform 0.2s, backgroundColor 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1fad53'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <MessageCircle size={22} />
                Reservar por WhatsApp
              </button>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Collage de Fotos Extra (Derecha) */}
        {activeRoom.images.length > 1 && (
          <div className="habitaciones-collage" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '420px', width: '100%' }}>
            {activeRoom.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setModalImage(img)}
                style={{ 
                  width: '100%', 
                  aspectRatio: '1', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                <img src={img} alt={`Vista ${idx + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        )}

      </div>

        {/* ── TRACK INFERIOR DE MINIATURAS ── */}
        <div className="habitaciones-track hide-scrollbar" style={{ width: '100%', display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px' }}>
          {ROOMS.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(index)}
              style={{
                flex: '0 0 220px',
                height: '100px',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: activeRoomIndex === index ? '2px solid #ffffff' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: activeRoomIndex === index ? 1 : 0.6,
                padding: 0
              }}
              onMouseEnter={(e) => { if (activeRoomIndex !== index) e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { if (activeRoomIndex !== index) e.currentTarget.style.opacity = '0.6'; }}
            >
              <img 
                src={room.images[0]} 
                alt={room.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => { e.currentTarget.src = room.fallbackImg; }}
              />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,31,61,0.5)', display: 'flex', alignItems: 'flex-end', padding: '12px' }}>
                <span style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700, textAlign: 'left', lineHeight: 1.2 }}>
                  {room.name}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── LIGHTBOX (MODAL DE IMAGEN) ── */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999, backgroundColor: 'rgba(15,31,61,0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}
            onClick={() => setModalImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={modalImage} 
              alt="Vista Completa" 
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
