import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="bg-[#111827] text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand info */}
          <div>
            <Link to="/" className="inline-block mb-5 group">
              <img 
                src="/images/footer_logo.jpeg" 
                alt="Singhal Industrial Corporation" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              {companyConfig.tagline} Manufacturer & exporter of precision pistons, cylinder liners, rings, and custom components since {companyConfig.established}.
            </p>
            <div className="flex items-center space-x-2">
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
                  className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-[#D32F2F] hover:text-white transition-all duration-200"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-red-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-red-400 transition-colors">Products Catalog</Link></li>
              <li><Link to="/infrastructure" className="hover:text-red-400 transition-colors">Infrastructure & QC</Link></li>
              <li><Link to="/custom-manufacturing" className="hover:text-red-400 transition-colors">Custom Manufacturing</Link></li>
              <li><Link to="/news" className="hover:text-red-400 transition-colors">News & Events</Link></li>
              <li><Link to="/quote" className="hover:text-red-400 transition-colors">Contact Us / Get Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Key Products */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-red-800 inline-block">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/products/pistons" className="hover:text-red-400 transition-colors flex items-center">Engine Pistons <ArrowRight className="w-3 h-3 ml-1 text-red-500" /></Link></li>
              <li><Link to="/products/cylinder-liners" className="hover:text-red-400 transition-colors flex items-center">Cylinder Liners (Dry & Wet) <ArrowRight className="w-3 h-3 ml-1 text-red-500" /></Link></li>
              <li><Link to="/products/piston-rings" className="hover:text-red-400 transition-colors">Piston Rings & Pins</Link></li>
              <li><Link to="/products/bush-pins" className="hover:text-red-400 transition-colors">Precision Bush Pins</Link></li>
              <li><Link to="/custom-manufacturing" className="hover:text-red-400 transition-colors">Custom Engineered Castings</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-red-800 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start">
                <div className="p-1.5 rounded bg-red-950/60 text-[#D32F2F] mr-3 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-zinc-300 leading-relaxed">{companyConfig.address}</span>
              </li>
              <li className="flex items-center">
                <div className="p-1.5 rounded bg-red-950/60 text-[#D32F2F] mr-3 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${companyConfig.phone}`} className="hover:text-white transition-colors font-medium">{companyConfig.phone}</a>
              </li>
              <li className="flex items-center">
                <div className="p-1.5 rounded bg-red-950/60 text-[#D32F2F] mr-3 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${companyConfig.email}`} className="hover:text-white transition-colors font-medium">{companyConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>Copyright &copy; 2026 Singhal Industrial Corporation. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

