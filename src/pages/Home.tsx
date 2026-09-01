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

const showcaseProducts = [
  { name: 'Precision Piston Assembly', spec: 'High-strength alloy | Controlled Thermal Expansion', img: '/images/piston_hero.jpg' },
  { name: 'Dry Type Cylinder Liner', spec: 'Centrifugal casting | Pearlitic Cast Iron', img: '/images/cylinder_liners.jpg' },
  { name: 'Wet Type Coolant Sleeve', spec: 'Liquid coolant contact | Anti-Cavitation hone', img: '/images/cylinder_liners.jpg' },
  { name: 'Air Brake Compressor Kit', spec: 'OEM-grade block, pistons, and rings', img: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=800' },
  { name: 'Engine Valves', spec: 'Precision ground intake and exhaust valves', img: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&q=80&w=800' },
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseProducts.length) % showcaseProducts.length);
  };

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

          {/* Bottom Card: Key Performance Stats */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 md:p-10 border border-zinc-200/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              
              {/* Stat 1: 60+ Years */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-600 tracking-tight mb-0.5">
                    60+
                  </div>
                  <div className="text-zinc-700 text-xs md:text-sm font-semibold leading-snug">
                    Years Manufacturing Experience
                  </div>
                </div>
              </div>

              {/* Stat 2: 25+ Export Markets */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-xl shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight mb-0.5">
                    25+
                  </div>
                  <div className="text-zinc-700 text-xs md:text-sm font-semibold leading-snug">
                    Export Markets
                  </div>
                </div>
              </div>

              {/* Stat 3: 3,000 Cylinder Liners / Month */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-orange-500/10 text-orange-600 rounded-xl shrink-0 mt-0.5">
                  <Package className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 tracking-tight mb-0.5">
                    3,000
                  </div>
                  <div className="text-zinc-700 text-xs md:text-sm font-semibold leading-snug">
                    Cylinder Liners / Month
                  </div>
                </div>
              </div>

              {/* Stat 4: OEM Quality */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-purple-500/10 text-purple-600 rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-600 tracking-tight mb-0.5">
                    OEM Quality
                  </div>
                  <div className="text-zinc-700 text-xs md:text-sm font-semibold leading-snug">
                    Mercedes • Volvo • Cummins • MAN
                  </div>
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
      <section className="py-16 md:py-20 bg-[#0F0F12] text-white border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Card */}
          <div className="bg-[#18181C] rounded-3xl p-8 md:p-12 text-center mb-8 border border-zinc-800 shadow-xl">
            <span className="text-zinc-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
              OUR BRANDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Five brands. One manufacturer.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-normal">
              Manufactured and exported by Singhal Industrial Corporation, Agra, India.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Brand 1: KOMODO */}
            <div className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl md:text-2xl font-black tracking-wide text-white">KOMODO</h3>
                    <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      Primary Brand
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Premium export engine parts for trucks, buses and heavy-duty diesel engines.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800/60 flex items-center">
                <img 
                  src="/images/logo.jpeg" 
                  alt="KOMODO Logo" 
                  className="h-10 w-auto object-contain rounded bg-white/90 p-1" 
                />
              </div>
            </div>

            {/* Brand 2: KAT */}
            <div className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black tracking-wide text-white mb-3">KAT</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Heavy-duty engine components for commercial vehicles and industrial applications.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800/60 flex items-center">
                <img 
                  src="/images/kat.jpeg" 
                  alt="KAT Brand Logo" 
                  className="h-12 w-auto object-contain rounded bg-white p-1" 
                />
              </div>
            </div>

            {/* Brand 3: ENGLISH PETTER */}
            <div className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black tracking-wide text-white mb-3">ENGLISH PETTER</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Components for diesel engines and agricultural machinery.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800/60 flex items-center">
                <img 
                  src="/images/englishpetter.jpeg" 
                  alt="ENGLISH PETTER Brand Logo" 
                  className="h-12 w-auto object-contain rounded bg-white p-1" 
                />
              </div>
            </div>

            {/* Brand 4: INDOLAND */}
            <div className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black tracking-wide text-white mb-3">INDOLAND</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Automotive and industrial replacement engine components.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800/60 flex items-center">
                <img 
                  src="/images/indoland.jpeg" 
                  alt="INDOLAND Brand Logo" 
                  className="h-12 w-auto object-contain rounded bg-white p-1" 
                />
              </div>
            </div>

            {/* Brand 5: PROMAX */}
            <div className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-zinc-800/80 hover:border-zinc-700 transition-all group flex flex-col justify-between md:col-span-2">
              <div>
                <h3 className="text-xl md:text-2xl font-black tracking-wide text-white mb-3">PROMAX</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Value-focused aftermarket engine parts.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Products Showcase Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Interactive Showcase
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900">Our Products Showcase</h2>
              <p className="text-zinc-500 text-xs mt-1">Engineered for Maximum Durability & Performance</p>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-zinc-200 text-zinc-700 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-zinc-200 text-zinc-700 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                  Featured Component 0{currentSlide + 1}
                </span>
                <h3 className="text-3xl font-extrabold text-zinc-900 mb-4">
                  {showcaseProducts[currentSlide].name}
                </h3>
                <p className="text-zinc-600 text-sm mb-6">
                  {showcaseProducts[currentSlide].spec}
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-xs text-zinc-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2" /> 100% Quality Inspection Passed
                  </li>
                  <li className="flex items-center text-xs text-zinc-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2" /> Precision Machined to OEM Specifications
                  </li>
                  <li className="flex items-center text-xs text-zinc-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2" /> Custom Packaging & Branding Available
                  </li>
                </ul>
                <Link to="/quote" className="inline-flex items-center px-6 py-3 bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
                  Inquire For Bulk Supply
                </Link>
              </div>

              <div className="flex justify-center">
                <div className="relative max-w-sm w-full bg-white p-6 rounded-2xl shadow-lg border border-zinc-100">
                  <img 
                    src={showcaseProducts[currentSlide].img} 
                    alt={showcaseProducts[currentSlide].name}
                    className="w-full h-64 object-contain" 
                  />
                </div>
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
