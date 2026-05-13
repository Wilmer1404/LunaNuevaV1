import { motion } from 'framer-motion';
import { MessageCircle, Mail, Clock, MapPin, Phone } from 'lucide-react';

// SVG icons para plataformas
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

const BookingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
    <path d="M17.35 11.65c.97-.88 1.58-2.14 1.58-3.55A5.1 5.1 0 0013.83 3H4v18h10.47a5.27 5.27 0 005.26-5.26 5.25 5.25 0 00-2.38-4.09zM7.5 6.5h5.83a1.6 1.6 0 110 3.2H7.5V6.5zm6.47 11H7.5v-4.5h6.47a2.25 2.25 0 010 4.5z"/>
  </svg>
);

const TrivagoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
    <path d="M15.5 2C10.81 2 7 5.81 7 10.5c0 1.74.51 3.35 1.38 4.7L2 21.5l1.5 1.5 6.3-6.38A8.46 8.46 0 0015.5 19C20.19 19 24 15.19 24 10.5S20.19 2 15.5 2zm0 15a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'Instagram',  href: 'https://www.instagram.com/lunanuevadecolan',                  Icon: InstagramIcon,   color: '#E1306C' },
  { name: 'Facebook',   href: 'https://www.facebook.com/lunanuevadecolan',                   Icon: FacebookIcon,    color: '#1877F2' },
  { name: 'TikTok',     href: 'https://www.tiktok.com/@lunanuevadecolanpiura',                     Icon: TikTokIcon,  color: '#010101' },
  { name: 'Booking',    href: 'https://www.booking.com/hotel/pe/luna-nueva.es.html?aid=318615&label=Spanish_Peru_ES_PE_28510488865-4PDLMkENnoMrJCDFRvfdiAS217246329975%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55649980777%3Atidsa-322982441908%3Alp1011139%3Ali%3Adec%3Adm&sid=ba4e82c87919617c6f51409d987c4745&dest_id=-343597&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1755446937&srpvid=ce3f71892d490a00&type=total&ucfs=1&chal_t=1778291374067&force_referer=https%3A%2F%2Flunanuevadecolan.com%2F',                    Icon: BookingIcon, color: '#003580' },
  { name: 'tripadvisor',    href: 'https://www.tripadvisor.com.pe/Restaurant_Review-g1235468-d7122001-Reviews-Luna_Nueva_de_Colan-Colan_Piura_Region.html',                    Icon: TrivagoIcon, color: '#e7372a' },
  { name: 'WhatsApp',   href: 'https://wa.me/51999999999',              Icon: MessageCircle, color: '#25D366' },
];

const NAV_COL = [
  'Inicio', 'Nosotros', 'Habitaciones', 'Servicios', 'Promociones', 'Contáctanos',
];

const HORARIO = [
  { dia: 'Lunes – Viernes',  hora: '10:00 AM – 11:00 PM' },
  { dia: 'Sábados',          hora: '10:00 AM – 12:00 AM' },
  { dia: 'Domingos',         hora: '11:00 AM – 10:00 PM' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ marginTop: '120px', backgroundColor: '#0f1f3d', color: '#cbd5e1', fontFamily: 'inherit' }}>

      {/* ── Franja Decorativa Superior ── */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #163A70, #4a90d9, #163A70)' }} />

      {/* ── Cuerpo Principal ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '64px', alignItems: 'start' }}>

          {/* ── Columna 1: Marca + Contacto + Redes ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Logo / Nombre */}
            <div>
              <img
                src="/svg/image.png"
                alt="Luna Nueva Logo"
                style={{ height: '56px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#94a3b8', maxWidth: '340px', margin: 0 }}>
              Hotel Luna Nueva — un oasis frente al mar donde cada detalle está pensado
              para hacer de tu estadía una experiencia inolvidable.
            </p>

            {/* Contacto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:reservas@lunanuevadecolan.com"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                <Mail size={16} style={{ color: '#4a90d9', flexShrink: 0 }} />
                reservas@lunanuevadecolan.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '14px' }}>
                <MapPin size={16} style={{ color: '#4a90d9', flexShrink: 0 }} />
                Colán, Piura, Perú
              </div>
            </div>

            {/* Redes Sociales */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {SOCIAL_LINKS.map(({ name, href, Icon, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = color;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Columna 2: Navegación ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4a90d9', margin: 0 }}>
              Navegación
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV_COL.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna 3: Horario ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4a90d9', margin: 0 }}>
              Horario de Atención
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4a90d9' }}>
              <Clock size={15} />
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Abiertos todo el año</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {HORARIO.map(({ dia, hora }) => (
                <li key={dia} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.03em' }}>{dia}</span>
                  <span style={{ fontSize: '13px', color: '#94a3b8' }}>{hora}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Barra Inferior: Copyright ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '24px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#475569' }}>
            © {year} Hotel Luna Nueva — Todos los derechos reservados.
          </span>
          <span style={{ fontSize: '12px', color: '#334155' }}>
            Colán, Piura · Perú
          </span>
        </div>
      </div>

    </footer>
  );
}
