import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111827] text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand info */}
          <div>
            <Link to="/" className="flex flex-col items-start mb-5 group">
              <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase leading-none">Since {companyConfig.established}</span>
              <div className="flex items-end">
                <span className="text-[#D34747] font-black text-3xl tracking-tighter uppercase leading-none group-hover:text-red-400 transition-colors">
                  {companyConfig.shortName}
                </span>
                <span className="text-zinc-500 font-bold text-[10px] ml-0.5 mb-1">&reg;</span>
              </div>
              <span className="text-zinc-400 font-bold text-[9px] tracking-widest mt-1 uppercase">
                INDUSTRIAL CORPORATION
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              {companyConfig.tagline} Manufacturer & exporter of precision pistons, cylinder liners, rings, and custom components since {companyConfig.established}.
            </p>
            <div className="flex items-center space-x-2">
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
                  className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#D32F2F] hover:text-white transition-all duration-200"
                >
                  <item.icon className="w-3.5 h-3.5" />
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
              <li><Link to="/news" className="hover:text-red-400 transition-colors">News & Knowledge Base</Link></li>
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
          <p>Copyright &copy; 2025 Singhal Industrial Corporation. All Rights Reserved. ISO 9001:2015 Certified.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

