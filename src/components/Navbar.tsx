import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { companyConfig } from '../config';

const productCategories = [
  { name: 'Cylinder Liners', path: '/products/cylinder-liners' },
  { name: 'Pistons', path: '/products/pistons' },
  { name: 'Air Compressor Kits', path: '/products/air-compressor-kits' },
  { name: 'Piston Rings', path: '/products/piston-rings' },
  { name: 'Valves', path: '/products/valves' },
  { name: 'Valve Guides', path: '/products/valve-guides' },
  { name: 'Engine Bearings', path: '/products/engine-bearings' },
  { name: 'Gaskets', path: '/products/gaskets' },
  { name: 'Crankshafts', path: '/products/crankshafts' },
  { name: 'Connecting Rods', path: '/products/connecting-rods' },
  { name: 'Cylinder Heads', path: '/products/cylinder-heads' },
  { name: 'Castings', path: '/products/castings' },
  { name: 'Agricultural Diesel Engines', path: '/products/agricultural-diesel-engines' },
  { name: 'Power Gensets', path: '/products/power-gensets' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products', hasDropdown: true },
    { name: 'INFRASTRUCTURE', path: '/infrastructure' },
    { name: 'NEWS AND EVENTS', path: '/news' },
    { name: 'CONTACT US', path: '/quote' },
  ];

  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-[#D34747] text-white py-1.5 hidden md:block z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-start items-center space-x-6">
          <div className="flex items-center space-x-1.5">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="bg-white text-[#D34747] p-1 rounded-sm hover:bg-zinc-100 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-xs font-bold tracking-wider">
            {['AR', 'FR', 'DE', 'IT', 'RU', 'ES'].map(lang => (
              <button key={lang} className="hover:text-zinc-200 transition-colors">{lang}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`w-full z-40 transition-all duration-300 bg-white ${
          scrolled ? 'fixed top-0 shadow-md py-4' : 'relative py-6 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col items-start">
              <div className="flex items-end">
                <span className="text-[#D34747] font-black text-4xl tracking-tighter uppercase leading-none">{companyConfig.shortName}</span>
                <span className="text-zinc-600 font-bold text-[10px] ml-1 mb-1">&reg;</span>
              </div>
              <span className="text-zinc-800 font-bold text-xs tracking-widest mt-1 uppercase">Engine Parts</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  <Link 
                    to={link.path}
                    className="text-sm font-bold text-zinc-700 hover:text-[#D34747] transition-colors flex items-center py-2"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && dropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-zinc-100 rounded-b-md overflow-hidden z-50">
                      <div className="py-2">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-[#D34747] hover:text-white transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-zinc-900 hover:text-[#D34747]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-zinc-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="flex justify-between items-center px-3 py-3 text-base font-bold text-zinc-700 hover:text-[#D34747] hover:bg-zinc-50 rounded-md"
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1 pb-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="block px-3 py-2 text-sm text-zinc-600 hover:text-[#D34747]"
                          onClick={() => setIsOpen(false)}
                        >
                          - {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
