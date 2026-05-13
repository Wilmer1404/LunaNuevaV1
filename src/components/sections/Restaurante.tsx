import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Utensils, Star, Clock, ChevronRight } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 'ceviche',
    name: 'Ceviche Clásico',
    description: 'Pescado fresco del día curtido en limón sutil, acompañado de cebolla roja, ají limo, choclo tierno y camote glaseado. Un tributo al mar.',
    image: '/image/cevicheclasico.png',
    tag: 'Fresco & Cítrico',
  },
  {
    id: 'meloso',
    name: 'Arroz Meloso con Mariscos',
    description: 'Una exquisita fusión de arroz en su punto, cocido lentamente en un intenso bisque de mariscos, coronado con mixtura del mar flambiada.',
    image: '/image/melosomarisco.png',
    tag: 'Cálido & Profundo',
  },
  {
    id: 'tacutacu',
    name: 'Tacu Tacu en Salsa de Mariscos',
    description: 'Nuestra versión dorada y crujiente de pallares y arroz, bañada en una suculenta salsa de mariscos con toques de ají amarillo y especias locales.',
    image: '/image/tacutacu.png',
    tag: 'Tradición Peruana',
  },
  {
    id: 'tiradito',
    name: 'Tiradito de Pescado',
    description: 'Finas láminas de pesca del día bañadas en una delicada crema de ají amarillo, toques de culantro y aceite de oliva.',
    image: '/image/tiraditopescado.png',
    tag: 'Delicado & Elegante',
  }
];

export default function Restaurante() {
  const [activeDish, setActiveDish] = useState(MENU_ITEMS[0]);

  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* ── 1. HERO RESTAURANTE ── */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img 
            src="/image/restaurante1.png" 
            alt="Restaurante Luna Nueva" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop'; }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,31,61,0.95), rgba(15,31,61,0.4))' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 80px', width: '100%', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '13px', textTransform: 'uppercase', marginBottom: '24px', margin: '0 0 24px 0' }}>
              Gastronomía de Autor
            </p>
            <h1 style={{ color: '#ffffff', fontSize: '72px', fontWeight: 300, lineHeight: 1.1, margin: '0 0 24px 0' }}>
              Restaurante <span style={{ fontWeight: 700 }}>Luna Nueva</span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: '20px', fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              Sabores que evocan la brisa del mar y la tradición de nuestra tierra, diseñados para deleitar los paladares más exigentes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── 2. INTRODUCCIÓN ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '550px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
          >
            <img 
              src="/image/restaurante3.png" 
              alt="Ambiente Restaurante" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop'; }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '40px', color: '#163A70', fontWeight: 300, lineHeight: 1.2, margin: '0 0 32px 0' }}>
              Un ambiente <span style={{ fontWeight: 700 }}>incomparable</span>
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', margin: '0 0 24px 0' }}>
              Nuestro restaurante ofrece una experiencia culinaria única frente al mar. Utilizamos ingredientes locales de la más alta calidad, seleccionados diariamente por nuestros expertos para garantizar la frescura absoluta en cada plato.
            </p>
            <div style={{ display: 'flex', gap: '32px', marginTop: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}><ChefHat size={28} /></div>
                <div><h4 style={{ color: '#163A70', fontWeight: 700, margin: '0 0 4px 0', fontSize: '16px' }}>Alta Cocina</h4><p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Chef de Especialidad</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}><Star size={28} /></div>
                <div><h4 style={{ color: '#163A70', fontWeight: 700, margin: '0 0 4px 0', fontSize: '16px' }}>Frescura 100%</h4><p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>Pesca del día</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 3. SHOWCASE DE PLATILLOS (INTERACTIVO) ── */}
      <div style={{ backgroundColor: '#f8fafc', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '40px', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Nuestras <span style={{ fontWeight: 700 }}>Especialidades</span>
            </h2>
            <p style={{ color: '#64748b', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.6 }}>
              Descubre los platos emblemáticos que han convertido a nuestro restaurante en un destino culinario imperdible.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: '40px', padding: '64px', boxShadow: '0 20px 50px -15px rgba(22,58,112,0.08)' }}>
            
            {/* Lista de Navegación (Izquierda) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {MENU_ITEMS.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveDish(item)}
                  style={{
                    textAlign: 'left',
                    padding: '28px',
                    borderRadius: '24px',
                    backgroundColor: activeDish.id === item.id ? '#163A70' : '#ffffff',
                    border: activeDish.id === item.id ? '1px solid #163A70' : '1px solid #f1f5f9',
                    color: activeDish.id === item.id ? '#ffffff' : '#334155',
                    boxShadow: activeDish.id === item.id ? '0 10px 25px -5px rgba(22, 58, 112, 0.3)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (activeDish.id !== item.id) {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeDish.id !== item.id) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  <span style={{ fontSize: '20px', fontWeight: 700 }}>{item.name}</span>
                  <span style={{ fontSize: '12px', color: activeDish.id === item.id ? '#cbd5e1' : '#94a3b8', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.tag}
                  </span>
                </button>
              ))}

              {/* Botón Ver Carta Completa */}
              <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
                <button 
                  type="button" 
                  className="group flex items-center gap-3 transition-all duration-300"
                  style={{ 
                    backgroundColor: '#163A70', 
                    color: '#ffffff', 
                    padding: '16px 32px', 
                    borderRadius: '16px', 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    boxShadow: '0 10px 25px -5px rgba(22, 58, 112, 0.4)',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f1f3d'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#163A70'}
                >
                  <Utensils size={18} /> 
                  Ver Carta Completa
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visualización del Plato con AnimatePresence (Derecha) */}
            <div style={{ position: 'relative', height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDish.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                  {/* Contenedor de la Imagen Flotante */}
                  <div style={{ width: '380px', height: '380px', position: 'relative', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ position: 'absolute', inset: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,144,217,0.1) 0%, transparent 70%)', zIndex: 0 }} 
                    />
                    <motion.img 
                      src={activeDish.image} 
                      alt={activeDish.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.4))', zIndex: 10, position: 'relative' }}
                      animate={{ y: [-12, 12, -12] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Descripción del Plato */}
                  <h3 style={{ fontSize: '32px', color: '#163A70', fontWeight: 700, margin: '0 0 16px 0' }}>{activeDish.name}</h3>
                  <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '16px', maxWidth: '450px', margin: 0 }}>
                    {activeDish.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. TESTIMONIOS (CLIENTES FELICES) ── */}
      <div style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{ color: '#4a90d9', fontWeight: 700, letterSpacing: '0.25em', fontSize: '12px', textTransform: 'uppercase', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Experiencias Inolvidables
            </p>
            <h2 style={{ fontSize: '40px', color: '#163A70', fontWeight: 300, margin: 0 }}>
              Lo que dicen <span style={{ fontWeight: 700 }}>nuestros clientes</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            
            {/* Testimonio 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ backgroundColor: '#f8fafc', padding: '48px 40px', borderRadius: '32px', border: '1px solid #f1f5f9' }}
            >
              <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '24px' }}>
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
                "El ceviche clásico es simplemente espectacular. La frescura del pescado y la atención al detalle te hacen sentir en un restaurante de cinco estrellas."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#163A70', color: '#ffffff', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                  CM
                </div>
                <div>
                  <h4 style={{ color: '#163A70', fontWeight: 700, margin: '0 0 4px 0', fontSize: '15px' }}>Carlos Mendoza</h4>
                  <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Huésped Frecuente</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonio 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ backgroundColor: '#163A70', padding: '48px 40px', borderRadius: '32px', boxShadow: '0 20px 40px -15px rgba(22,58,112,0.3)' }}
            >
              <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '24px' }}>
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
                "Celebré mi aniversario cenando aquí. El Arroz Meloso con Mariscos estaba en su punto perfecto. El ambiente frente al mar no tiene precio."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#163A70', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                  LR
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 700, margin: '0 0 4px 0', fontSize: '15px' }}>Lucía Ramírez</h4>
                  <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Reseña en TripAdvisor</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonio 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ backgroundColor: '#f8fafc', padding: '48px 40px', borderRadius: '32px', border: '1px solid #f1f5f9' }}
            >
              <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '24px' }}>
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
                "La calidad de los ingredientes se nota. El Tacu Tacu en Salsa de Mariscos es el mejor que he probado en todo Piura. Totalmente recomendado."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#163A70', color: '#ffffff', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                  JP
                </div>
                <div>
                  <h4 style={{ color: '#163A70', fontWeight: 700, margin: '0 0 4px 0', fontSize: '15px' }}>Javier Paredes</h4>
                  <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Google Local Guide</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
