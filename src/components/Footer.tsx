import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <div className="flex items-end">
                <span className="text-[#D34747] font-black text-3xl tracking-tighter uppercase leading-none">{companyConfig.shortName}</span>
                <span className="text-zinc-500 font-bold text-[10px] ml-1 mb-1">&reg;</span>
              </div>
              <span className="text-zinc-400 font-bold text-[10px] tracking-widest mt-1 uppercase">Engine Parts</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {companyConfig.tagline}
            </p>
            <div className="flex space-x-4">
              {Object.entries(companyConfig.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-colors">
                  <span className="sr-only">{platform}</span>
                  <div className="w-3 h-3 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/manufacturing" className="hover:text-white transition-colors text-sm">Manufacturing</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors text-sm">Quality Control</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors text-sm">Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Products</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-white transition-colors text-sm">Pistons</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors text-sm">Cylinder Liners</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors text-sm">Piston Rings</Link></li>
              <li><Link to="/custom-manufacturing" className="hover:text-white transition-colors text-sm flex items-center">Custom Components <ArrowRight className="w-3 h-3 ml-1" /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-sm">{companyConfig.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-zinc-500 shrink-0" />
                <a href={`tel:${companyConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-sm hover:text-white transition-colors">{companyConfig.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-zinc-500 shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="text-sm hover:text-white transition-colors">{companyConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {companyConfig.name}. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
