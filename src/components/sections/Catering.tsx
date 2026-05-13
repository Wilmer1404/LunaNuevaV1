import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, MapPin } from 'lucide-react';

export default function Catering() {
  return (
    <section style={{ width: '100%', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* ── 1. HERO CATERING ── */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Background Image con overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img 
            src="/image/catering3.png" 
            alt="Catering Corporativo Luna Nueva" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop';
            }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(15,31,61,0.9), rgba(15,31,61,0.6))' }} />
        </div>

        {/* Contenido Hero */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 80px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: '#ffffff', flex: 1 }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '12px', textTransform: 'uppercase', marginBottom: '16px', margin: 0 }}
            >
              Excelencia Gastronómica
            </motion.p>
            <h1 style={{ fontSize: '64px', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px', marginTop: '16px' }}>
              Catering <span style={{ fontWeight: 700 }}>Corporativo</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '20px', fontWeight: 300, lineHeight: 1.6, maxWidth: '600px', marginBottom: '32px' }}>
              En LUNA NUEVA CATERING SAC contamos con un equipo de profesionales con amplia experiencia en gastronomía corporativa y servicios de alimentación a gran escala.
            </p>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#4a90d9', borderRadius: '999px' }} />
          </motion.div>
        </div>
      </div>

      {/* ── 2. SECCIÓN: CALIDAD Y OBJETIVO ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <h2 style={{ fontSize: '40px', color: '#163A70', fontWeight: 300, lineHeight: 1.2, margin: 0 }}>
              Experiencia <span style={{ fontWeight: 700 }}>saludable y agradable</span>
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', margin: 0 }}>
              Es nuestro principal objetivo, hacer del servicio una experiencia saludable y agradable para cada uno de los integrantes de su compañía.
            </p>
            
            <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '24px', boxShadow: '0 10px 30px -15px rgba(22,58,112,0.1)', border: '1px solid #f1f5f9', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: 'rgba(74, 144, 217, 0.1)', padding: '12px', borderRadius: '12px', color: '#4a90d9' }}>
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ color: '#163A70', fontWeight: 600, marginBottom: '8px', marginTop: 0 }}>Supervisión Nutricional</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Contamos con la supervisión permanente de nutricionistas certificados, quienes participan en el diseño de los menús, supervisan los procesos de cocción y garantizan el cumplimiento estricto de las normas de higiene y seguridad alimentaria.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', height: '500px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          >
            <img 
              src="/image/catering.png" 
              alt="Servicio de Alimentación" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </motion.div>

        </div>
      </div>

      {/* ── 3. SECCIÓN BENTO GRID: CAPACIDAD Y LOGÍSTICA ── */}
      <div style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '40px', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Capacidad y <span style={{ fontWeight: 700 }}>Logística</span>
            </h2>
            <p style={{ color: '#64748b', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              Infraestructura y transporte preparados para cumplir con los más altos estándares a gran escala.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
            
            {/* Tarjeta Capacidad */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ backgroundColor: '#f8fafc', borderRadius: '32px', display: 'flex', overflow: 'hidden' }}
            >
              <div style={{ flex: 1, padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}>
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '36px', color: '#163A70', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>3,000 comensales diarios</h3>
                <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '15px', margin: 0 }}>
                  Actualmente LUNA NUEVA CATERING SAC maneja una capacidad de organización para tres mil quinientos (3000) comensales diarios, tanto en menú para empleados, obreros y administrativos. Con vasta experiencia en atenciones de autoservicio en línea caliente y fría.
                </p>
              </div>
              <div style={{ flex: '0 0 45%', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src="/image/catering2.png" 
                  alt="Personal Catering" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </motion.div>

            {/* Tarjeta Transporte */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ backgroundColor: '#163A70', borderRadius: '32px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src="/image/cateringauto.png" 
                  alt="Transporte Logístico" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #163A70, transparent)' }} />
              </div>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#ffffff', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4a90d9' }}>
                  <Truck size={24} />
                  <span style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '12px', textTransform: 'uppercase' }}>Flota Propia</span>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  En cuanto a transportes, contamos con 1 camión isotérmico de 1 tonelada para garantizar la cadena de frío y calor.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Tarjeta Ubicación (Ocupa ancho completo) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginTop: '24px', backgroundColor: '#ffffff', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px -15px rgba(22,58,112,0.05)', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#163A70', flexShrink: 0 }}>
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ color: '#163A70', fontWeight: 700, fontSize: '20px', margin: '0 0 8px 0' }}>Llegamos donde se nos requiera</h3>
                <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
                  Desde nuestras instalaciones principales ubicadas en: <br />
                  <span style={{ color: '#334155', fontWeight: 500 }}>Av. Costanera A-38, Balneario Colán, Paita. Piura.</span>
                </p>
              </div>
            </div>
            <button 
              style={{ padding: '16px 32px', backgroundColor: '#163A70', color: '#ffffff', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '12px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f1f3d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#163A70'}
            >
              Solicitar Cotización
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
