import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Maximize,
  BedDouble,
  Wifi,
  Tv,
  Wind,
  Coffee,
  MessageCircle,
  Bath,
  Droplets,
  ChevronRight,
  ChevronLeft,
  Star,
  X,
  Quote,
} from 'lucide-react';

const WHATSAPP_NUMBER = '51967975109';

const ROOM_ACCENTS = ['#4a90d9', '#60a5fa', '#22c55e', '#f59e0b', '#a855f7'];

const ROOMS = [
  {
    id: 'matrimonial-mar',
    name: 'Matrimonial Simple',
    type: 'Vista al Mar',
    description:
      'Las habitaciones matrimoniales frente al mar son estilo rústico y cuentan con balcón frente al mar. Gran elección para escapadas románticas o para disfrutar individualmente. Se encuentra disponible servicio a la habitación.',
    capacity: '2 Personas',
    size: 'Balcón Frente al Mar',
    bed: '1 Cama de 2 Plazas',
    amenities: [
      { icon: <Wifi size={18} />, label: 'WIFI' },
      { icon: <Tv size={18} />, label: 'TV con Cable' },
      { icon: <Droplets size={18} />, label: 'Piscina' },
      { icon: <Coffee size={18} />, label: 'Minibar' },
      { icon: <Bath size={18} />, label: 'Baño Privado' },
    ],
    fallbackImg:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    images: [
      '/image/matrimonialsimplevistamar1.png',
      '/image/matrimonialsimplevistamar2.png',
      '/image/matrimonialsimplevistamar3.png',
      '/image/matrimonialsimplevistamar4.png',
    ],
  },
  {
    id: 'matrimonial-vip',
    name: 'Matrimonial VIP',
    type: 'Vista a la Piscina',
    description:
      'Lujo superior en nuestra suite VIP. Cuenta con diseño vanguardista, acabados premium y terraza directa con vista a la piscina iluminada.',
    capacity: '2 Personas',
    size: '45 m²',
    bed: '1 Cama Super King',
    amenities: [
      { icon: <Wifi size={18} />, label: 'WIFI Alta Velocidad' },
      { icon: <Wind size={18} />, label: 'Aire Acondicionado' },
    ],
    fallbackImg:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    images: ['/image/hab-matrimonial-vip.png'],
  },
  {
    id: 'doble',
    name: 'Habitación Doble',
    type: 'Confort Superior',
    description:
      'Espacio versátil y muy iluminado, diseñado para amigos o colegas. Comodidad garantizada con camas independientes de alta gama.',
    capacity: '2 Personas',
    size: '38 m²',
    bed: '2 Camas Queen',
    amenities: [{ icon: <Wifi size={18} />, label: 'WIFI Alta Velocidad' }],
    fallbackImg:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
    images: ['/image/hab-doble.png'],
  },
  {
    id: 'triple',
    name: 'Habitación Triple',
    type: 'Ideal para Grupos',
    description:
      'Amplia habitación pensada para la comodidad de grupos pequeños. Distribución inteligente que asegura descanso e independencia.',
    capacity: '3 Personas',
    size: '42 m²',
    bed: '3 Camas 1.5 Plazas',
    amenities: [{ icon: <Wifi size={18} />, label: 'WIFI Alta Velocidad' }],
    fallbackImg:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
    images: ['/image/hab-triple.png'],
  },
  {
    id: 'cuadruple',
    name: 'Habitación Cuádruple',
    type: 'Espacio Familiar',
    description:
      'La opción perfecta para viajes en familia. Máximo espacio y confort, permitiendo que todos disfruten juntos sin sacrificar la privacidad personal.',
    capacity: '4 Personas',
    size: '50 m²',
    bed: '4 Camas 1.5 Plazas',
    amenities: [{ icon: <Wifi size={18} />, label: 'WIFI Alta Velocidad' }],
    fallbackImg:
      'https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=2072&auto=format&fit=crop',
    images: ['/image/hab-cuadruple.png'],
  },
];

const TESTIMONIALS = [
  {
    initials: 'MG',
    name: 'María García',
    role: 'TripAdvisor',
    quote:
      'Las habitaciones con vista al mar son simplemente espectaculares. Despertar con el sonido de las olas fue una experiencia inolvidable. El servicio a la habitación, impecable.',
  },
  {
    initials: 'RS',
    name: 'Roberto Silva',
    role: 'Google Reviews',
    quote:
      'La suite VIP superó todas mis expectativas. La terraza con vista a la piscina es perfecta para relajarse. Definitivamente volveré en mi próximo viaje a Piura.',
  },
  {
    initials: 'AF',
    name: 'Ana & Carlos Fuentes',
    role: 'Booking.com',
    quote:
      'Viajamos en familia y la habitación cuádruple fue ideal. Espacio suficiente para todos, camas muy cómodas y todo impecablemente limpio. ¡Los niños la pasaron genial!',
  },
  {
    initials: 'DL',
    name: 'Diego León',
    role: 'TripAdvisor',
    quote:
      'Excelente relación calidad-precio. La habitación doble es muy acogedora, bien iluminada y con todas las comodidades necesarias. El WiFi funciona perfecto.',
  },
  {
    initials: 'PM',
    name: 'Patricia Mendoza',
    role: 'Facebook',
    quote:
      'Celebramos nuestro aniversario en la Matrimonial Simple frente al mar. El balcón es el lugar perfecto para ver el atardecer. Un ambiente muy romántico y acogedor.',
  },
  {
    initials: 'FR',
    name: 'Fernando Rivas',
    role: 'Google Reviews',
    quote:
      'La habitación triple fue perfecta para nuestro viaje de amigos. Muy espaciosa, cada uno con su propia cama cómoda. El personal de limpieza fue muy atento durante toda la estadía.',
  },
];

export default function Habitaciones() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const activeRoom = ROOMS[activeRoomIndex];
  const activeAccent = ROOM_ACCENTS[activeRoomIndex % ROOM_ACCENTS.length];

  useEffect(() => {
    ROOMS.forEach((room) => {
      const fallback = new Image();
      fallback.src = room.fallbackImg;
      const primary = new Image();
      primary.src = room.images[0];
    });
  }, []);

  const galleryImages = useMemo(() => {
    const list = [...activeRoom.images];
    if (list.length === 1) {
      list.push(activeRoom.fallbackImg);
    }
    return list.slice(0, 4);
  }, [activeRoom]);

  // ── Testimonials carousel ──────────────────────────────
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [testiVisible, setTestiVisible] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w >= 1024) setTestiVisible(3);
      else if (w >= 640) setTestiVisible(2);
      else setTestiVisible(1);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const totalTestiPages = Math.max(1, Math.ceil(TESTIMONIALS.length / testiVisible));

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialPage((prev) => (prev + 1) % totalTestiPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalTestiPages]);

  const goToTestimonialPage = (page: number) => {
    setTestimonialPage(page);
  };

  const testiPrev = () => {
    setTestimonialPage((prev) => (prev - 1 + totalTestiPages) % totalTestiPages);
  };

  const testiNext = () => {
    setTestimonialPage((prev) => (prev + 1) % totalTestiPages);
  };

  // Reset page when visible count changes so we don't land out of bounds
  useEffect(() => {
    setTestimonialPage(0);
  }, [testiVisible]);

  const handleWhatsApp = () => {
    const message = `Hola, deseo consultar disponibilidad y precios para la habitación: *${activeRoom.name} - ${activeRoom.type}*.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const goToPrevious = () => {
    setActiveRoomIndex((prev) => (prev - 1 + ROOMS.length) % ROOMS.length);
  };

  const goToNext = () => {
    setActiveRoomIndex((prev) => (prev + 1) % ROOMS.length);
  };

  return (
    <>
      <style>{`
        .rooms-root {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 72px);
          overflow: hidden;
          font-family: sans-serif;
          isolation: isolate;
        }

        .rooms-backdrop {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .rooms-backdrop img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
        }

        .rooms-backdrop-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 12%, rgba(74, 144, 217, 0.22), transparent 45%),
            linear-gradient(110deg, rgba(10, 20, 40, 0.96) 0%, rgba(10, 20, 40, 0.72) 54%, rgba(10, 20, 40, 0.32) 100%);
          backdrop-filter: blur(2px);
        }

        .rooms-shell {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          padding: 36px var(--section-px, 80px) 56px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .rooms-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .rooms-eyebrow {
          margin: 0 0 10px;
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .rooms-heading {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(1.9rem, 4.3vw, 3.15rem);
          line-height: 1.1;
          font-weight: 300;
        }

        .rooms-heading strong {
          font-weight: 700;
        }

        .rooms-subtext {
          margin: 10px 0 0;
          color: #cbd5e1;
          max-width: 62ch;
          font-size: 14px;
          line-height: 1.75;
        }

        .rooms-switch-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .rooms-switch-controls button {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(15, 23, 42, 0.45);
          color: #e2e8f0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .rooms-switch-controls button:hover {
          transform: translateY(-2px);
          background: rgba(30, 41, 59, 0.75);
          border-color: rgba(255, 255, 255, 0.45);
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 24px;
          align-items: start;
        }

        .rooms-selector {
          background: rgba(15, 23, 42, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 48px -28px rgba(0, 0, 0, 0.75);
          overflow: hidden;
        }

        .rooms-selector-head {
          padding: 20px 20px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .rooms-selector-head h3 {
          margin: 0 0 6px;
          color: #f8fafc;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .rooms-selector-head p {
          margin: 0;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.6;
        }

        .rooms-selector-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 560px;
          overflow-y: auto;
          padding: 12px;
        }

        .rooms-selector-list::-webkit-scrollbar {
          width: 7px;
        }

        .rooms-selector-list::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4);
          border-radius: 999px;
        }

        .rooms-selector-item {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          background: rgba(15, 23, 42, 0.34);
          cursor: pointer;
          padding: 10px;
          text-align: left;
          transition: all 0.25s ease;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .rooms-selector-item:hover {
          background: rgba(30, 41, 59, 0.62);
          border-color: rgba(255, 255, 255, 0.28);
        }

        .rooms-selector-item.is-active {
          background: rgba(30, 58, 138, 0.35);
          border-color: rgba(147, 197, 253, 0.95);
        }

        .rooms-selector-thumb {
          width: 72px;
          height: 60px;
          border-radius: 10px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .rooms-selector-meta {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .rooms-selector-meta h4 {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .rooms-selector-meta p {
          margin: 0;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #93c5fd;
        }

        .rooms-selector-capacity {
          margin-top: 3px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 500;
        }

        .rooms-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .rooms-hero-card {
          border-radius: 28px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          box-shadow: 0 30px 56px -34px rgba(0, 0, 0, 0.9);
        }

        .rooms-hero-media {
          position: relative;
          width: 100%;
          min-height: 280px;
          max-height: 420px;
          overflow: hidden;
        }

        .rooms-hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rooms-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 20, 40, 0.9) 0%, rgba(10, 20, 40, 0.32) 50%, rgba(10, 20, 40, 0.05) 100%);
        }

        .rooms-hero-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #e2e8f0;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .rooms-hero-body {
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .rooms-room-type {
          margin: 0;
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .rooms-room-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.5rem, 3.2vw, 2.2rem);
          font-weight: 700;
          line-height: 1.15;
        }

        .rooms-room-desc {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.8;
          font-size: 15px;
          max-width: 80ch;
        }

        .rooms-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(140px, 1fr));
          gap: 10px;
        }

        .rooms-fact {
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
          padding: 10px 12px;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .rooms-fact svg {
          color: #7dd3fc;
          flex-shrink: 0;
        }

        .rooms-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .rooms-amenity {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: #e2e8f0;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 12px;
        }

        .rooms-amenity svg {
          color: #7dd3fc;
        }

        .rooms-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }

        .rooms-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 12px;
          padding: 13px 18px;
          cursor: pointer;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          background: #22c55e;
          transition: all 0.25s ease;
        }

        .rooms-whatsapp-btn:hover {
          transform: translateY(-2px);
          background: #16a34a;
        }

        .rooms-view-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(15, 23, 42, 0.28);
          color: #e2e8f0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 13px 16px;
          transition: all 0.25s ease;
        }

        .rooms-view-btn:hover {
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(30, 41, 59, 0.7);
        }

        .rooms-gallery {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .rooms-gallery-item {
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.4);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .rooms-gallery-item:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.44);
        }

        .rooms-gallery-item img {
          width: 100%;
          height: 110px;
          object-fit: cover;
          display: block;
        }

        .rooms-modal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(2, 6, 23, 0.92);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .rooms-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(15, 23, 42, 0.65);
          color: #f8fafc;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .rooms-modal-close:hover {
          background: rgba(30, 41, 59, 0.9);
        }

        .rooms-modal img {
          max-width: min(94vw, 1200px);
          max-height: 88vh;
          border-radius: 16px;
          object-fit: contain;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        /* ── TESTIMONIOS CAROUSEL ────────────────────────── */
        .rooms-testi-section {
          width: 100%;
          background: #0a1428;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 52px var(--section-px, 80px) 56px;
          font-family: sans-serif;
        }

        .rooms-testi-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .rooms-testi-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .rooms-testi-eyebrow {
          color: #7dd3fc;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .rooms-testi-title {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(1.5rem, 3.6vw, 2.3rem);
          font-weight: 300;
          line-height: 1.2;
        }

        .rooms-testi-title strong {
          font-weight: 700;
        }

        .rooms-testi-carousel {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
        }

        .rooms-testi-track {
          display: flex;
          gap: 18px;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .rooms-testi-card {
          flex: 0 0 calc(100% - 0px);
          min-width: 0;
          background: rgba(15, 23, 42, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .rooms-testi-stars {
          display: flex;
          gap: 3px;
          color: #fbbf24;
        }

        .rooms-testi-quote {
          margin: 0;
          color: #cbd5e1;
          font-size: 13.5px;
          line-height: 1.8;
          font-style: italic;
          flex: 1;
        }

        .rooms-testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 4px;
        }

        .rooms-testi-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(125, 211, 252, 0.18);
          border: 1px solid rgba(125, 211, 252, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7dd3fc;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .rooms-testi-name {
          margin: 0;
          color: #f8fafc;
          font-size: 14px;
          font-weight: 700;
        }

        .rooms-testi-role {
          margin: 2px 0 0;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 500;
        }

        .rooms-testi-quote-icon {
          color: rgba(125, 211, 252, 0.3);
          flex-shrink: 0;
        }

        .rooms-testi-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 28px;
        }

        .rooms-testi-arrow {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(15, 23, 42, 0.45);
          color: #e2e8f0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .rooms-testi-arrow:hover {
          background: rgba(30, 41, 59, 0.75);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
        }

        .rooms-testi-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rooms-testi-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(148, 163, 184, 0.45);
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .rooms-testi-dot.active {
          background: #7dd3fc;
          box-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
          width: 24px;
          border-radius: 999px;
        }

        /* ── Testimonials responsive ──────────────────── */
        @media (min-width: 640px) {
          .rooms-testi-card {
            flex: 0 0 calc(50% - 9px);
          }

          .rooms-testi-section {
            padding: 64px var(--section-px, 40px) 64px;
          }
        }

        @media (min-width: 1024px) {
          .rooms-testi-card {
            flex: 0 0 calc(33.333% - 12px);
          }

          .rooms-testi-section {
            padding: 80px var(--section-px, 80px) 80px;
          }
        }

        @media (max-width: 639px) {
          .rooms-testi-section {
            padding: 40px var(--section-px, 20px) 40px;
          }

          .rooms-testi-card {
            padding: 24px 20px;
          }

          .rooms-testi-quote {
            font-size: 13px;
          }
        }

        @media (max-width: 1250px) {
          .rooms-grid {
            grid-template-columns: 300px 1fr;
          }
        }

        @media (max-width: 1024px) {
          .rooms-shell {
            padding: 28px var(--section-px, 40px) 44px;
          }

          .rooms-grid {
            grid-template-columns: 1fr;
          }

          .rooms-selector-list {
            max-height: 300px;
          }
        }

        @media (max-width: 768px) {
          .rooms-shell {
            padding: 24px var(--section-px, 24px) 34px;
          }

          .rooms-subtext {
            font-size: 13px;
          }

          .rooms-hero-body {
            padding: 20px;
          }

          .rooms-facts {
            grid-template-columns: 1fr;
          }

          .rooms-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .rooms-shell {
            padding: 20px var(--section-px, 20px) 30px;
            gap: 18px;
          }

          .rooms-header {
            gap: 14px;
          }

          .rooms-switch-controls button {
            width: 38px;
            height: 38px;
          }

          .rooms-selector-item {
            padding: 8px;
          }

          .rooms-selector-thumb {
            width: 64px;
            height: 54px;
          }

          .rooms-hero-media {
            min-height: 220px;
          }

          .rooms-actions {
            flex-direction: column;
          }

          .rooms-whatsapp-btn,
          .rooms-view-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="rooms-root">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoom.id}
            className="rooms-backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={activeRoom.images[0]}
              alt={activeRoom.name}
              onError={(e) => {
                e.currentTarget.src = activeRoom.fallbackImg;
              }}
            />
            <div className="rooms-backdrop-overlay" />
          </motion.div>
        </AnimatePresence>

        <div className="rooms-shell">
          <motion.header
            className="rooms-header"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="rooms-eyebrow">Alojamiento Premium · Frente al Mar</p>
              <h2 className="rooms-heading">
                Habitaciones con <strong>estilo y confort</strong>
              </h2>
              <p className="rooms-subtext">
                Explora cada categoría, compara comodidades y reserva la opción ideal para tu
                estancia en Luna Nueva con una experiencia visual más clara y profesional.
              </p>
            </div>

            <div className="rooms-switch-controls">
              <button onClick={goToPrevious} aria-label="Habitación anterior">
                <ChevronLeft size={18} />
              </button>
              <button onClick={goToNext} aria-label="Siguiente habitación">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.header>

          <div className="rooms-grid">
            <aside className="rooms-selector">
              <div className="rooms-selector-head">
                <h3>Categorías</h3>
                <p>Selecciona una habitación para ver todos los detalles.</p>
              </div>

              <div className="rooms-selector-list">
                {ROOMS.map((room, index) => {
                  const isActive = activeRoomIndex === index;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveRoomIndex(index)}
                      className={`rooms-selector-item${isActive ? ' is-active' : ''}`}
                      style={
                        isActive
                          ? {
                              borderColor: activeAccent,
                              boxShadow: `0 16px 28px -22px ${activeAccent}`,
                            }
                          : undefined
                      }
                    >
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="rooms-selector-thumb"
                        onError={(e) => {
                          e.currentTarget.src = room.fallbackImg;
                        }}
                      />
                      <span className="rooms-selector-meta">
                        <h4>{room.name}</h4>
                        <p>{room.type}</p>
                        <span className="rooms-selector-capacity">{room.capacity}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="rooms-content">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeRoom.id}
                  className="rooms-hero-card"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="rooms-hero-media">
                    <img
                      src={activeRoom.images[0]}
                      alt={activeRoom.name}
                      onError={(e) => {
                        e.currentTarget.src = activeRoom.fallbackImg;
                      }}
                    />
                    <div className="rooms-hero-gradient" />
                    <div className="rooms-hero-badge">
                      <Star size={12} style={{ color: activeAccent }} />
                      Recomendado
                    </div>
                  </div>

                  <div className="rooms-hero-body">
                    <p className="rooms-room-type">{activeRoom.type}</p>
                    <h3 className="rooms-room-title">{activeRoom.name}</h3>
                    <p className="rooms-room-desc">{activeRoom.description}</p>

                    <div className="rooms-facts">
                      <div className="rooms-fact">
                        <Users size={16} />
                        {activeRoom.capacity}
                      </div>
                      <div className="rooms-fact">
                        <Maximize size={16} />
                        {activeRoom.size}
                      </div>
                      <div className="rooms-fact">
                        <BedDouble size={16} />
                        {activeRoom.bed}
                      </div>
                    </div>

                    <div className="rooms-amenities">
                      {activeRoom.amenities.map((amenity, idx) => (
                        <span key={idx} className="rooms-amenity">
                          {amenity.icon}
                          {amenity.label}
                        </span>
                      ))}
                    </div>

                    <div className="rooms-actions">
                      <button className="rooms-whatsapp-btn" onClick={handleWhatsApp}>
                        <MessageCircle size={18} />
                        Reservar por WhatsApp
                      </button>
                      <button className="rooms-view-btn" onClick={() => setModalImage(activeRoom.images[0])}>
                        Ver foto principal
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>

              <div className="rooms-gallery">
                {galleryImages.map((img, idx) => (
                  <button key={`${activeRoom.id}-gallery-${idx}`} className="rooms-gallery-item" onClick={() => setModalImage(img)}>
                    <img
                      src={img}
                      alt={`${activeRoom.name} vista ${idx + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = activeRoom.fallbackImg;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {modalImage && (
            <motion.div
              className="rooms-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalImage(null)}
            >
              <button
                className="rooms-modal-close"
                aria-label="Cerrar imagen"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImage(null);
                }}
              >
                <X size={20} />
              </button>
              <motion.img
                src={modalImage}
                alt="Vista ampliada de habitación"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── TESTIMONIOS CAROUSEL ────────────────────────── */}
      <section className="rooms-testi-section">
        <div className="rooms-testi-inner">
          <motion.div
            className="rooms-testi-header"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="rooms-testi-eyebrow">Experiencias de nuestros huéspedes</p>
            <h2 className="rooms-testi-title">
              Lo que dicen de <strong>nuestras habitaciones</strong>
            </h2>
          </motion.div>

          <div className="rooms-testi-carousel">
            <motion.div
              className="rooms-testi-track"
              animate={{
                transform: `translateX(calc(-${testimonialPage * 100}% - ${testimonialPage * 18}px))`,
              }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                transform: `translateX(calc(-${testimonialPage * 100}% - ${testimonialPage * 18}px))`,
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  className="rooms-testi-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Quote size={22} className="rooms-testi-quote-icon" />
                    <div className="rooms-testi-stars">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="rooms-testi-quote">{t.quote}</p>
                  <div className="rooms-testi-author">
                    <div className="rooms-testi-avatar">{t.initials}</div>
                    <div>
                      <p className="rooms-testi-name">{t.name}</p>
                      <p className="rooms-testi-role">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="rooms-testi-controls">
            <button className="rooms-testi-arrow" onClick={testiPrev} aria-label="Testimonio anterior">
              <ChevronLeft size={16} />
            </button>

            <div className="rooms-testi-dots">
              {Array.from({ length: totalTestiPages }, (_, i) => (
                <button
                  key={i}
                  className={`rooms-testi-dot${i === testimonialPage ? ' active' : ''}`}
                  onClick={() => goToTestimonialPage(i)}
                  aria-label={`Ir a página de testimonios ${i + 1}`}
                />
              ))}
            </div>

            <button className="rooms-testi-arrow" onClick={testiNext} aria-label="Siguiente testimonio">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
