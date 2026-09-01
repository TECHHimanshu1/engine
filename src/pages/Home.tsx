import { motion } from 'framer-motion';
import { ArrowRight, Package, Eye, Target, ChevronLeft, ChevronRight, Plus, Minus, CheckCircle2, ShieldCheck, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { useState } from 'react';

const productsGrid = [
  { 
    name: 'CYLINDER LINERS', 
    desc: 'High performance dry, wet and air-cooled cylinder liners manufactured to OE and custom specifications.', 
    img: '/images/cylinder_liners.jpg', 
    path: '/products/cylinder-liners' 
  },
  { 
    name: 'PISTONS', 
    desc: 'Durable and efficient alloy pistons for automotive and agricultural engines.', 
    img: '/images/piston_hero.jpg', 
    path: '/products/pistons' 
  },
  { 
    name: 'AIR BRAKE COMPRESSOR KITS', 
    desc: 'Complete repair kits including cylinder block, pistons, and piston rings for heavy-duty braking systems.', 
    img: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=800', 
    path: '/products/air-compressor-kits' 
  },
  { 
    name: 'VALVES', 
    desc: 'Engineered engine intake and exhaust valves built for high temperature wear resistance and performance.', 
    img: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&q=80&w=800', 
    path: '/products/valves' 
  },
  { 
    name: 'POWER GENSETS', 
    desc: 'Reliable stationary power generation solutions and diesel generator components.', 
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', 
    path: '/products/power-gensets' 
  }
];

const faqs = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ is 300 pieces per order per line item." },
  { q: "Are you a certified engine parts manufacturer?", a: "Yes, Singhal Industrial Corporation (KOMODO Engine Parts) is ISO 9001:2015 certified for manufacturing and quality control." },
  { q: "Do you offer customized branding and private label packaging?", a: "Yes, we offer tailored OEM packaging, custom laser marking, and customized box branding according to client specifications." },
  { q: "Which global markets do you export to?", a: "We export high-performance engine parts across international markets in Europe, Middle East, Africa, Latin America, and Asia." },
  { q: "Can you develop custom engine parts from technical CAD drawings?", a: "Yes, our engineering team manufactures custom pistons, cylinder liners, and castings based on technical drawings or physical samples." }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Width Edge-to-Edge */}
      <section className="w-full relative overflow-hidden min-h-[550px] md:min-h-[620px] flex items-center bg-[#EEF1F5] border-b border-zinc-100">
        {/* Full width background banner image */}
        <img 
          src="/images/banner.png" 
          alt="KOMODO Engine Parts Hero Banner" 
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-xl lg:max-w-2xl bg-white/40 md:bg-transparent p-6 md:p-0 rounded-3xl backdrop-blur-sm md:backdrop-blur-none">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-block bg-[#E53935] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-sm">
                Best Auto Parts Manufacturers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.12] mb-5 tracking-tight">
                {companyConfig.tagline}
              </h1>
              <div className="text-lg md:text-xl font-bold text-[#E53935] mb-4">
                Manufacturer of Cylinder Liners, Pistons & Engine Valves
              </div>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                We are one of the leading engine parts manufacturers & exporters, serving automotive OEMs and aftermarket customers around the world with decades of excellence in customer service.
              </p>
              <div>
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-8 py-4 bg-[#E53935] text-white font-bold text-sm rounded-full hover:bg-red-700 transition-all shadow-md"
                >
                  More Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Value Props & Performance Stats Section */}
      <section className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Top Row: Quality, Vision, Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'QUALITY', desc: 'Renowned for its quality and commitment to excellence' },
              { icon: Eye, title: 'VISION', desc: 'Our aim is to be a market leader in machined parts across industries' },
              { icon: Target, title: 'MISSION', desc: 'Delivering precision-engineered engine components with reliability, innovation, and partnership for long-term global success.' }
            ].map((prop, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200/70 hover:border-red-200 transition-colors">
                <div className="p-2.5 bg-red-50 text-[#D34747] rounded-xl shrink-0">
                  <prop.icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-zinc-900 text-base mb-1 tracking-wide">{prop.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Performance Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Stat 1: 60+ Years */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl shrink-0">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600 tracking-tight leading-none mb-1">
                  60+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Years Experience
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Manufacturing Excellence
                </div>
              </div>
            </div>

            {/* Stat 2: 25+ Export Markets */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl shrink-0">
                <Globe className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 tracking-tight leading-none mb-1">
                  25+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Export Markets
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Global Supply Network
                </div>
              </div>
            </div>

            {/* Stat 3: 3,000+ Monthly Capacity */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-orange-500/10 text-orange-600 rounded-2xl shrink-0">
                <Package className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-orange-600 tracking-tight leading-none mb-1">
                  3,000+
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Liners / Month
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  High Volume Production
                </div>
              </div>
            </div>

            {/* Stat 4: OEM Quality */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-red-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 rounded-2xl shrink-0">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-purple-600 tracking-tight leading-none mb-1 uppercase">
                  OEM Quality
                </div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">
                  Engine Grade Standard
                </div>
                <div className="text-zinc-500 text-[11px] font-medium">
                  Mercedes • Volvo • Cummins
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OUR PRODUCTS Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Our Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 uppercase">
              OUR PRODUCTS
            </h2>
            <p className="text-zinc-600 text-sm">
              Explore our precision-engineered engine components. Each links to its dedicated specification page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsGrid.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 flex flex-col justify-between group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-black text-white">{product.name}</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">{product.desc}</p>
                  <Link 
                    to={product.path} 
                    className="inline-flex items-center text-[#D32F2F] font-bold text-xs uppercase tracking-wider group-hover:text-red-700 transition-colors"
                  >
                    View Product Page <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR BRANDS Section */}
      <section className="py-16 md:py-20 bg-zinc-50 border-t border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D34747] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Our Multi-Brand Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-3 uppercase">
              Five Brands. One Manufacturer.
            </h2>
            <p className="text-zinc-600 text-sm md:text-base">
              Manufactured and exported worldwide by <strong>Singhal Industrial Corporation</strong>, Agra, India.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Brand 1: KOMODO */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                    Primary Brand
                  </span>
                  <img 
                    src="/images/komodo_logo.jpeg" 
                    alt="KOMODO Logo" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">KOMODO</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Premium export engine parts for trucks, buses, commercial vehicles, and heavy-duty diesel engines.
                </p>
              </div>
            </div>

            {/* Brand 2: KAT */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/kat.jpeg" 
                    alt="KAT Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-125 md:scale-140 group-hover:scale-150 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">KAT</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Heavy-duty engine components engineered for commercial vehicles, tractors, and industrial applications.
                </p>
              </div>
            </div>

            {/* Brand 3: ENGLISH PETTER */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/englishpetter.jpeg" 
                    alt="ENGLISH PETTER Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-150 md:scale-[1.75] group-hover:scale-[1.85] transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">ENGLISH PETTER</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Heavy Duty Diesel engines and pumpsets for agriculture for the export market.
                </p>
              </div>
            </div>

            {/* Brand 4: INDOLAND */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/indoland.jpeg" 
                    alt="INDOLAND Brand Logo" 
                    className="w-full h-full object-contain p-1 scale-125 md:scale-135 group-hover:scale-145 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">INDOLAND</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Premium quality Heavy Duty Diesel engines and pumpsets for agriculture and power generation for the export market.
                </p>
              </div>
            </div>

            {/* Brand 5: PROMAX */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div>
                <div className="h-40 md:h-44 bg-white rounded-2xl border border-zinc-200 p-4 flex items-center justify-center relative mb-6 shadow-sm overflow-hidden">
                  <img 
                    src="/images/promax.jpeg" 
                    alt="PROMAX Brand Logo" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">PROMAX</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Value-focused aftermarket engine parts offering dependable performance and competitive pricing for volume buyers.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* ISO Certification Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-extrabold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Certified Standard
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Certified for Excellence: ISO 9001:2015
              </h2>
              <p className="text-zinc-300 leading-relaxed text-sm mb-6">
                At Singhal Industrial Corporation, quality is built into every stage of our operations. Products manufactured in-house as well as those sourced from approved suppliers undergo rigorous quality checks.
              </p>
              <ul className="space-y-3">
                {[
                  "Spectrometric Chemical Analysis of Cast Alloys",
                  "CMM & Surface Roughness Profile Measurement",
                  "100% Dimensional & Crack Inspection",
                  "Traceable Batch Code Marking on Every Component"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white text-zinc-900 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-zinc-700 text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="font-extrabold text-2xl mb-1 text-zinc-900">ISO 9001:2015</div>
                <div className="text-xs font-semibold text-zinc-500 mb-6 uppercase tracking-wider">Singhal Industrial Corporation Quality System</div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">
                  Certified scope covers manufacturing, machining, sourcing, and export of auto engine components.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-3">Client Testimonials</h2>
          <p className="text-zinc-500 text-xs mb-14">See what global auto parts distributors say about KOMODO Engine Parts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200/80 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic">
                "{companyConfig.name} is one of the few engine parts suppliers that actually listens. Communication is smooth, and they deliver high quality KOMODO pistons and cylinder liners on time."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-sm">Aftermarket Parts Manager</div>
                <div className="text-zinc-400 text-xs">Middle East Regional Distributor</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200/80 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic">
                "We have worked with Singhal Industrial Corporation for years. Their consistency in dimensional tolerances and custom packaging is outstanding."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-sm">Purchase Director</div>
                <div className="text-zinc-400 text-xs">European Agricultural Spare Parts Importer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 last:border-0">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-zinc-800 hover:bg-zinc-50 transition-colors text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#D32F2F] shrink-0">
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-zinc-600 text-xs leading-relaxed bg-zinc-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
