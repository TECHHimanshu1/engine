import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { companyConfig } from '../config';
import { LanguageSelector, setSiteLanguageByCode } from './LanguageSelector';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

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
          
          {/* Left Side: Language Dropdown Selector */}
          <div className="flex items-center text-[10px] sm:text-[11px] font-bold tracking-wider shrink-0 relative z-[70]">
            <LanguageSelector align="left" />
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {[
              { name: 'Facebook', icon: FacebookIcon, href: companyConfig.social.facebook },
              { name: 'Instagram', icon: InstagramIcon, href: companyConfig.social.instagram },
              { name: 'YouTube', icon: YoutubeIcon, href: companyConfig.social.youtube }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank"
                rel="noreferrer"
                title={item.name}
                className="bg-white text-[#D34747] p-1.5 rounded hover:bg-zinc-100 transition-colors flex items-center justify-center shadow-xs"
              >
                <item.icon className="w-3.5 h-3.5" />
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



