import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Wine,
  UtensilsCrossed,
  ChefHat,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { id: "inicio", label: "INICIO" },
  {
    id: "nosotros",
    label: "NOSOTROS",
    subLinks: [
      { id: "luna-bar",    label: "Luna Bar",    icon: Wine,            desc: "Cócteles de autor" },
      { id: "catering",    label: "Catering",    icon: ChefHat,         desc: "Eventos especiales" },
      { id: "restaurante", label: "Restaurante", icon: UtensilsCrossed, desc: "Gastronomía local" },
    ],
  },
  { id: "habitaciones", label: "HABITACIONES" },
  { id: "servicios",    label: "SERVICIOS" },
  { id: "promociones",  label: "PROMOCIONES" },
  { id: "contactanos",  label: "CONTACTANOS" },
];

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [hoveredTab, setHoveredTab]   = useState<string | null>(null);
  const [menuOpen,   setMenuOpen]     = useState(false);
  const [nosotrosOpen, setNosotrosOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
        setNosotrosOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isTabActive = (link: any) => {
    if (activeTab === link.id) return true;
    if (link.subLinks && link.subLinks.some((sub: any) => sub.id === activeTab)) return true;
    return false;
  };

  const handleNavigate = (id: string) => {
    setActiveTab(id);
    setMenuOpen(false);
    setNosotrosOpen(false);
    setHoveredTab(null);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #f1f5f9",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 var(--section-px, 80px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

            {/* ── Logo ── */}
            <div
              style={{ flexShrink: 0, cursor: "pointer" }}
              onClick={() => handleNavigate("inicio")}
            >
              <img
                src="/svg/image.png"
                alt="Luna Nueva Logo"
                style={{ height: "56px", width: "auto", objectFit: "contain", transition: "transform 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* ── Desktop Navigation ── */}
            <ul
              style={{ display: "flex", alignItems: "stretch", gap: "32px", height: "72px", listStyle: "none", margin: 0, padding: 0 }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", cursor: "pointer" }}
                  onMouseEnter={() => setHoveredTab(link.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <button
                    onClick={() => { if (!link.subLinks) handleNavigate(link.id); }}
                    style={{
                      position: "relative", display: "flex", alignItems: "center", gap: "6px",
                      fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                      background: "none", border: "none", cursor: "pointer",
                      color: isTabActive(link) ? "#163A70" : "#64748b",
                      transition: "color 0.3s",
                      padding: "0 2px",
                    }}
                    onMouseEnter={e => { if (!isTabActive(link)) e.currentTarget.style.color = "#163A70"; }}
                    onMouseLeave={e => { if (!isTabActive(link)) e.currentTarget.style.color = "#64748b"; }}
                  >
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown
                        size={13}
                        strokeWidth={2.5}
                        style={{ transition: "transform 0.3s", transform: hoveredTab === link.id ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    )}
                    {isTabActive(link) && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        style={{ position: "absolute", left: 0, right: 0, bottom: "-26px", height: "3px", backgroundColor: "#163A70", borderRadius: "999px" }}
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {link.subLinks && (
                    <AnimatePresence>
                      {hoveredTab === link.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: "8px", width: "260px", zIndex: 100 }}
                        >
                          <div style={{ backgroundColor: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", borderRadius: "16px", boxShadow: "0 20px 40px -15px rgba(22,58,112,0.15)", border: "1px solid #f1f5f9", overflow: "hidden", padding: "8px" }}>
                            {link.subLinks.map((sub: any) => (
                              <button
                                key={sub.id}
                                onClick={() => handleNavigate(sub.id)}
                                style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", gap: "14px", textAlign: "left", padding: "12px 14px", borderRadius: "12px", background: "none", border: "none", cursor: "pointer", transition: "background 0.2s", overflow: "hidden" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "#f8fafc")}
                                onMouseLeave={e => (e.currentTarget.style.background = "none")}
                              >
                                <div style={{ padding: "10px", borderRadius: "10px", backgroundColor: activeTab === sub.id ? "#163A70" : "#f1f5f9", color: activeTab === sub.id ? "#fff" : "#64748b", transition: "all 0.2s", flexShrink: 0 }}>
                                  <sub.icon size={17} strokeWidth={2} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                  <span style={{ fontSize: "14px", fontWeight: 600, color: activeTab === sub.id ? "#163A70" : "#334155" }}>{sub.label}</span>
                                  <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500 }}>{sub.desc}</span>
                                </div>
                                <ArrowRight size={13} style={{ marginLeft: "auto", color: "#4a90d9", opacity: activeTab === sub.id ? 1 : 0, transition: "opacity 0.2s" }} />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Hamburger Button (mobile/tablet only) ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              style={{
                display: "none", /* shown via CSS media query */
                alignItems: "center", justifyContent: "center",
                width: "44px", height: "44px",
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
                backgroundColor: menuOpen ? "#163A70" : "#ffffff",
                color: menuOpen ? "#ffffff" : "#163A70",
                cursor: "pointer",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0,
              width: "min(320px, 100vw)",
              backgroundColor: "#ffffff",
              zIndex: 49,
              boxShadow: "-20px 0 60px rgba(0,0,0,0.15)",
              display: "flex", flexDirection: "column",
              paddingTop: "80px",
              overflowY: "auto",
            }}
          >
            {/* Mobile links */}
            <nav style={{ padding: "16px" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.subLinks ? (
                    <div>
                      <button
                        onClick={() => setNosotrosOpen(!nosotrosOpen)}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "14px 16px", borderRadius: "12px", border: "none",
                          backgroundColor: "transparent", cursor: "pointer",
                          fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em",
                          color: isTabActive(link) ? "#163A70" : "#475569",
                          textTransform: "uppercase",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#f8fafc")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        {link.label}
                        <ChevronDown
                          size={15}
                          style={{ transition: "transform 0.3s", transform: nosotrosOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#94a3b8" }}
                        />
                      </button>
                      <AnimatePresence>
                        {nosotrosOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ overflow: "hidden", paddingLeft: "16px" }}
                          >
                            {link.subLinks.map((sub: any) => (
                              <button
                                key={sub.id}
                                onClick={() => handleNavigate(sub.id)}
                                style={{
                                  width: "100%", display: "flex", alignItems: "center", gap: "12px",
                                  padding: "12px 16px", borderRadius: "10px", border: "none",
                                  backgroundColor: activeTab === sub.id ? "#eff6ff" : "transparent",
                                  cursor: "pointer", textAlign: "left",
                                  transition: "background 0.2s",
                                }}
                                onMouseEnter={e => { if (activeTab !== sub.id) e.currentTarget.style.background = "#f8fafc"; }}
                                onMouseLeave={e => { if (activeTab !== sub.id) e.currentTarget.style.background = "transparent"; }}
                              >
                                <div style={{ padding: "8px", borderRadius: "8px", backgroundColor: activeTab === sub.id ? "#163A70" : "#f1f5f9", color: activeTab === sub.id ? "#fff" : "#64748b" }}>
                                  <sub.icon size={15} strokeWidth={2} />
                                </div>
                                <div>
                                  <div style={{ fontSize: "14px", fontWeight: 600, color: activeTab === sub.id ? "#163A70" : "#334155" }}>{sub.label}</div>
                                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>{sub.desc}</div>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigate(link.id)}
                      style={{
                        width: "100%", display: "flex", alignItems: "center",
                        padding: "14px 16px", borderRadius: "12px", border: "none",
                        backgroundColor: activeTab === link.id ? "#eff6ff" : "transparent",
                        cursor: "pointer",
                        fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em",
                        color: activeTab === link.id ? "#163A70" : "#475569",
                        textTransform: "uppercase",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={e => { if (activeTab !== link.id) e.currentTarget.style.background = "#f8fafc"; }}
                      onMouseLeave={e => { if (activeTab !== link.id) e.currentTarget.style.background = "transparent"; }}
                    >
                      {link.label}
                      {activeTab === link.id && (
                        <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#163A70" }} />
                      )}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div style={{ marginTop: "auto", padding: "24px 16px", borderTop: "1px solid #f1f5f9" }}>
              <button
                onClick={() => handleNavigate("habitaciones")}
                style={{
                  width: "100%", padding: "16px", backgroundColor: "#163A70", color: "#ffffff",
                  border: "none", borderRadius: "12px", cursor: "pointer",
                  fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                  transition: "background 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0f2b5b")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#163A70")}
              >
                Reservar Habitación
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.3)", zIndex: 48, backdropFilter: "blur(2px)" }}
          />
        )}
      </AnimatePresence>

      {/* ── Responsive CSS for Navbar ── */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          nav > div > div { padding: 0 20px; }
        }
        @media (max-width: 640px) {
          nav > div > div { padding: 0 16px; }
        }
      `}</style>
    </>
  );
}
