import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { companyConfig } from '../config';
import { LanguageSelector, setSiteLanguageByCode } from './LanguageSelector';

const productCategories = [
  { name: 'CYLINDER LINERS', path: '/products/cylinder-liners' },
  { name: 'PISTONS', path: '/products/pistons' },
  { name: 'AIR COMPRESSOR KITS', path: '/products/air-compressor-kits' },
  { name: 'PISTON RINGS', path: '/products/piston-rings' },
  { name: 'VALVES', path: '/products/valves' },
  { name: 'VALVE GUIDES', path: '/products/valve-guides' },
  { name: 'ENGINE BEARINGS', path: '/products/engine-bearings' },
  { name: 'GASKETS', path: '/products/gaskets' },
  { name: 'CRANKSHAFTS', path: '/products/crankshafts' },
  { name: 'CONNECTING RODS', path: '/products/connecting-rods' },
  { name: 'CYLINDER HEADS', path: '/products/cylinder-heads' },
  { name: 'CASTINGS', path: '/products/castings' },
  { name: 'AGRICULTURAL DIESEL ENGINES', path: '/products/agricultural-diesel-engines' },
  { name: 'POWER GENSETS', path: '/products/power-gensets' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const handleGlobalLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ code: string }>;
      if (customEvent.detail && customEvent.detail.code) {
        setActiveLang(customEvent.detail.code.toUpperCase());
      }
    };
    window.addEventListener('appLanguageChanged', handleGlobalLangChange);

    // Check saved cookie preference for initial active code
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match) {
      const langCode = match[1].split('/').pop();
      if (langCode) {
        setActiveLang(langCode.toUpperCase());
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('appLanguageChanged', handleGlobalLangChange);
    };
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/quote' },
  ];

  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-[#D34747] text-white py-1.5 sm:py-2 z-[60] relative border-b border-red-600 max-w-full overflow-visible">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between text-xs gap-1.5 sm:gap-4 overflow-visible">
          
          {/* Left Side: Language Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[10px] sm:text-[11px] font-bold tracking-wider shrink max-w-full overflow-visible">
            {/* Scrollable text shortcuts */}
            <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap max-w-[48vw] sm:max-w-none">
              {['EN', 'AR', 'FR', 'DE', 'IT', 'RU', 'ES'].map(lang => (
                <button 
                  key={lang} 
                  onClick={() => {
                    setActiveLang(lang);
                    setSiteLanguageByCode(lang.toLowerCase());
                  }}
                  className={`hover:text-zinc-200 transition-colors shrink-0 ${
                    activeLang === lang ? 'underline font-extrabold text-white' : 'text-white/90'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Language Selector Dropdown (Unclipped container) */}
            <div className="ml-1 sm:ml-2 border-l border-white/40 pl-1.5 sm:pl-2.5 shrink-0 relative z-[70]">
              <LanguageSelector align="left" />
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
            {[
              { icon: Facebook, href: companyConfig.social.facebook },
              { icon: Twitter, href: companyConfig.social.twitter },
              { icon: Instagram, href: companyConfig.social.instagram },
              { icon: Linkedin, href: companyConfig.social.linkedin },
              { icon: Youtube, href: companyConfig.social.youtube }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#D34747] p-1 rounded-sm hover:bg-zinc-100 transition-colors"
              >
                <item.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current stroke-none" />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`w-full z-40 transition-all duration-300 bg-white ${
          scrolled ? 'fixed top-0 shadow-sm py-3' : 'relative py-4 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group py-0.5">
              <img 
                src="/images/singhal_logo.jpeg" 
                alt="Singhal Industrial Corporation" 
                className="h-12 sm:h-16 md:h-20 max-h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  <Link 
                    to={link.path}
                    className="text-sm font-semibold text-zinc-700 hover:text-[#D34747] transition-colors flex items-center py-2"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 ml-1 text-zinc-500 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && dropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-2xl border border-zinc-100 rounded-b-xl overflow-hidden z-50 max-h-[75vh] overflow-y-auto">
                      <div className="py-2">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="block px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-[#D34747] hover:text-white transition-colors uppercase tracking-wide border-b border-zinc-50 last:border-0"
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
              className="lg:hidden text-zinc-900 hover:text-[#D34747] p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-zinc-100 max-h-[80vh] overflow-y-auto z-50">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex justify-between items-center px-3 py-3 text-sm font-bold text-zinc-800 hover:text-[#D34747] hover:bg-zinc-50 rounded-md transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-[#D34747]' : ''}`} />
                      </button>
                      {mobileProductsOpen && (
                        <div className="pl-4 pr-2 space-y-1 py-2 my-1 border-l-2 border-[#D34747] ml-3 bg-zinc-50/70 rounded-r-md">
                          <Link
                            to="/products"
                            className="block px-3 py-2 text-xs font-extrabold text-[#D34747] uppercase tracking-wider"
                            onClick={() => setIsOpen(false)}
                          >
                            All Products Catalog &rarr;
                          </Link>
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              className="block px-3 py-2 text-xs font-semibold text-zinc-700 hover:text-[#D34747] uppercase tracking-wide border-b border-zinc-100 last:border-0"
                              onClick={() => setIsOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="flex justify-between items-center px-3 py-3 text-sm font-bold text-zinc-800 hover:text-[#D34747] hover:bg-zinc-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
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



