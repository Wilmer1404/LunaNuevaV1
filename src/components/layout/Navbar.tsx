import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Wine,
  UtensilsCrossed,
  ChefHat,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = [
  { id: "inicio", label: "INICIO" },
  {
    id: "nosotros",
    label: "NOSOTROS",
    subLinks: [
      {
        id: "luna-bar",
        label: "Luna Bar",
        icon: Wine,
        desc: "Cócteles de autor",
      },
      {
        id: "catering",
        label: "Catering",
        icon: ChefHat,
        desc: "Eventos especiales",
      },
      {
        id: "restaurante",
        label: "Restaurante",
        icon: UtensilsCrossed,
        desc: "Gastronomía local",
      },
    ],
  },
  { id: "habitaciones", label: "HABITACIONES" },
  { id: "servicios", label: "SERVICIOS" },
  { id: "promociones", label: "PROMOCIONES" },
  { id: "contactanos", label: "CONTACTANOS" },
];

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Helper para saber si un tab padre está activo (si uno de sus hijos está activo)
  const isTabActive = (link: any) => {
    if (activeTab === link.id) return true;
    if (link.subLinks && link.subLinks.some((sub: any) => sub.id === activeTab))
      return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Container centrado */}
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Content */}
        <div className="flex items-center justify-between h-[92px]">
          {/* Logo */}
          <div className="flex-shrink-0" onClick={() => setActiveTab("inicio")}>
            <img
              src="/svg/image.png"
              alt="Luna Nueva Logo"
              className="h-[64px] w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Navigation */}
          <ul className="flex items-stretch gap-10 h-full">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="relative h-full flex items-center cursor-pointer"
                onMouseEnter={() => setHoveredTab(link.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  onClick={() => {
                    if (!link.subLinks) setActiveTab(link.id);
                  }}
                  className={`relative flex items-center gap-1.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isTabActive(link)
                      ? "text-[#163A70]"
                      : "text-slate-500 hover:text-[#163A70]"
                  }`}
                >
                  {link.label}
                  {link.subLinks && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${hoveredTab === link.id ? "rotate-180 text-[#4a90d9]" : ""}`}
                    />
                  )}

                  {isTabActive(link) && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute left-0 right-0 -bottom-[34px] h-[3px] bg-[#163A70]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </button>

                {/* Dropdown Menu Premium */}
                {link.subLinks && (
                  <AnimatePresence>
                    {hoveredTab === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[280px]"
                      >
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(22,58,112,0.15)] border border-slate-100 overflow-hidden p-2">
                          {link.subLinks.map((sub: any) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveTab(sub.id);
                                setHoveredTab(null);
                              }}
                              className="group relative w-full flex items-center gap-4 text-left px-4 py-3 rounded-xl transition-all duration-300 hover:bg-slate-50 overflow-hidden"
                            >
                              <div
                                className={`p-2.5 rounded-lg transition-colors duration-300 ${
                                  activeTab === sub.id
                                    ? "bg-[#163A70] text-white"
                                    : "bg-slate-100 text-slate-500 group-hover:bg-[#4a90d9]/10 group-hover:text-[#4a90d9]"
                                }`}
                              >
                                <sub.icon size={18} strokeWidth={2} />
                              </div>

                              <div className="flex-1 flex flex-col justify-center">
                                <span
                                  className={`text-[14px] font-semibold transition-colors duration-300 ${
                                    activeTab === sub.id
                                      ? "text-[#163A70]"
                                      : "text-slate-700 group-hover:text-[#163A70]"
                                  }`}
                                >
                                  {sub.label}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium">
                                  {sub.desc}
                                </span>
                              </div>

                              <ArrowRight
                                size={14}
                                className={`absolute right-4 text-[#4a90d9] transition-all duration-300 ${
                                  activeTab === sub.id
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                }`}
                              />
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
        </div>
      </div>
    </nav>
  );
}
