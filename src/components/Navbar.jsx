import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Home, Info, ListChecks, GalleryHorizontal, MessageSquare, Phone, ChevronDown, Disc3, Users, Briefcase } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: '/', text: 'Inicio', icon: <Home className="w-4 h-4 mr-2" /> },
  { to: '/acerca-de', text: 'Acerca de', icon: <Info className="w-4 h-4 mr-2" /> },
  { 
    text: 'Servicios', 
    icon: <ListChecks className="w-4 h-4 mr-2" />,
    isDropdown: true,
    mainPath: '/servicios',
    dropdownItems: [
      { to: '/servicios/bodas', text: 'Bodas', icon: <Disc3 className="w-4 h-4 mr-2" /> },
      { to: '/servicios/recepciones', text: 'Recepciones', icon: <Users className="w-4 h-4 mr-2" /> },
      { to: '/servicios/eventos-corporativos', text: 'Eventos Corporativos', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    ] 
  },
  { to: '/galeria', text: 'Galería', icon: <GalleryHorizontal className="w-4 h-4 mr-2" /> },
  { to: '/testimonios', text: 'Testimonios', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  { to: '/contacto', text: 'Contacto', icon: <Phone className="w-4 h-4 mr-2" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const location = useLocation();

  const NavItem = ({ link, isMobile = false }) => {
    if (link.isDropdown) {
      return (
        <DropdownMenu open={openDropdown === link.text} onOpenChange={(isOpenState) => setOpenDropdown(isOpenState ? link.text : null)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 
              ${location.pathname.startsWith(link.mainPath || '') ? 'bg-brand-red text-brand-white shadow-md' : 'text-gray-700 hover:bg-red-100 hover:text-brand-red'}
              ${isMobile ? 'w-full justify-start' : ''}`}
              onClick={(e) => {
                if (isMobile) e.stopPropagation();
                 if (!isMobile) setOpenDropdown(openDropdown === link.text ? null : link.text);
              }}
            >
              {link.icon}
              {link.text}
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === link.text ? 'rotate-180' : ''}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-brand-white shadow-lg" align="start">
            <DropdownMenuLabel className="text-brand-red">{link.text}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <NavLink
                to={link.mainPath || '/servicios'}
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                className={({ isActive }) =>
                  `flex items-center w-full px-2 py-2 text-sm rounded-md
                  ${isActive && location.pathname === link.mainPath ? 'bg-red-100 text-brand-red font-semibold' : 'text-gray-700 hover:bg-red-50 hover:text-brand-red'}`
                }
              >
                <ListChecks className="w-4 h-4 mr-2 opacity-70" /> Ver Todos los Servicios
              </NavLink>
            {link.dropdownItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                className={({ isActive }) =>
                  `flex items-center w-full px-2 py-2 text-sm rounded-md
                  ${isActive ? 'bg-red-100 text-brand-red font-semibold' : 'text-gray-700 hover:bg-red-50 hover:text-brand-red'}`
                }
              >
                {item.icon}
                {item.text}
              </NavLink>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <NavLink
        to={link.to}
        onClick={() => { if (isMobile) setIsOpen(false); setOpenDropdown(null); }}
        className={({ isActive }) =>
          `${isMobile ? 'block px-6 py-3 text-sm font-medium' : 'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105'}
          ${isActive 
            ? (isMobile ? 'bg-brand-red text-brand-white' : 'bg-brand-red text-brand-white shadow-md scale-105')
            : (isMobile ? 'text-gray-700 hover:bg-red-100 hover:text-brand-red' : 'text-gray-700 hover:bg-red-100 hover:text-brand-red')
          }`
        }
      >
        <span className="flex items-center">
          {link.icon}
          <span className="text-brand-gold">{link.text}</span>
        </span>
      </NavLink>
    );
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-brand-gold hover:text-yellow-400 transition-colors">
          <ChefHat className="w-10 h-10 mr-2 text-brand-gold" />
          <span className="text-2xl font-bold text-brand-gold">Black Lion</span>
        </Link>

        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => <NavItem key={link.text || link.to} link={link} />)}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-brand-red focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-brand-white shadow-lg pb-3"
        >
          {navLinks.map((link) => (
            <div key={link.text || link.to} className="px-3 py-1">
              <NavItem link={link} isMobile={true} />
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
