import { motion } from 'framer-motion';
import { ArrowRight, Package, Percent, Ship, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { useState } from 'react';

const products = [
  { name: 'Cylinder Liners', desc: 'High performance dry, wet and air-cooled liners', img: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800', path: '/products/cylinder-liners' },
  { name: 'Pistons', desc: 'Durable and efficient pistons, alfin and oil-cooled types', img: 'https://images.unsplash.com/photo-1590218731006-259e86c07222?auto=format&fit=crop&q=80&w=800', path: '/products/pistons' },
  { name: 'Air Brake Compressor Kits', desc: 'Complete repair kits including cylinder block, pistons, piston rings', img: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=800', path: '/products/air-compressor-kits' },
  { name: 'Valves', desc: 'Engineered for optimal performance and durability', img: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&q=80&w=800', path: '/products/valves' },
  { name: 'Power Gensets', desc: 'Reliable power generation solutions', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', path: '/products/power-gensets' }
];

const faqs = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ is 300 pieces per order." },
  { q: "Are you a certified manufacturer?", a: "Yes, we are fully certified." },
  { q: "Do you offer customized branding and packaging?", a: "Yes, we offer tailored packaging solutions." },
  { q: "Which markets do you serve?", a: "We export to over 45 countries worldwide." },
  { q: "Do you develop new engine parts?", a: "Yes, we develop custom parts based on technical drawings." }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#f4f6f8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col md:flex-row items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 md:pr-10"
          >
            <div className="inline-block bg-[#D34747] text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
              Best Auto Parts Manufacturers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              {companyConfig.tagline}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-lg">
              Manufacturer of Cylinder Liners, Pistons & Engine Valves. We are one of the leading engine parts manufacturers & exporters, serving automotive OEMs and aftermarket customers around the world with decades of excellence in customer service.
            </p>
            <Link to="/products" className="inline-flex items-center px-8 py-3.5 bg-[#D34747] text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
              More Details <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 mt-12 md:mt-0 relative"
          >
             <img 
              src="https://images.unsplash.com/photo-1590218731006-259e86c07222?auto=format&fit=crop&q=80&w=800" 
              alt="Piston Assembly" 
              className="w-full max-w-lg mx-auto object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Package, title: 'QUALITY', desc: 'Renowned for its quality and commitment to excellence' },
              { icon: Percent, title: 'VISION', desc: 'Our aim is to be a market leader in machined parts across industries' },
              { icon: Ship, title: 'MISSION', desc: 'Delivering precision-engineered engine components with reliability, innovation, and partnership for long-term global success.' }
            ].map((prop, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="text-[#3FB6C6]">
                  <prop.icon className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-2 tracking-wide">{prop.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-8">
                Redefining Auto Parts Manufacturing Since 1966
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-6">
                Founded over <strong>60 years</strong> ago, {companyConfig.name} has established itself as a manufacturer of <strong>high-quality</strong> engine components, including <strong>pistons, cylinder liners, rings, and pins</strong> under the {companyConfig.brandName} brand.
              </p>
              <p className="text-zinc-700 leading-relaxed mb-10">
                As a proud business, we have built our reputation on precision engineering, relentless quality control, and a commitment to customer satisfaction.
              </p>
              <Link to="/about" className="inline-flex items-center px-8 py-3 bg-[#D34747] text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-zinc-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Factory Interior" 
                className="w-full h-auto object-cover mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">Our Products</h2>
            <p className="text-zinc-500">Wide Range of High Quality Parts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between min-h-[300px]">
                <div className="absolute right-0 top-0 bottom-0 w-1/2">
                   <img src={product.img} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90" />
                   <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-[60%]">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{product.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6 line-clamp-3">{product.desc}</p>
                  <Link to={product.path} className="text-zinc-900 hover:text-[#D34747] transition-colors">
                    <ArrowRight className="w-6 h-6 stroke-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
             <h2 className="text-2xl font-bold text-zinc-900 mb-2">Our Products Showcase</h2>
             <p className="text-zinc-500 text-sm">Engineered for Excellence</p>
          </div>
        </div>
      </section>
      
      {/* Certifications Preview */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 leading-tight mb-6">
                Certified for Excellence: ISO 9001:2015
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                At {companyConfig.name}, quality isn't just a promise—it's a certified commitment. We are proudly ISO 9001:2015 certified, ensuring that every piston, cylinder liner, and machined part we produce meets global quality standards.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-4 shadow-lg rounded-xl transform rotate-2 hover:rotate-0 transition-transform border border-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" 
                  alt="ISO Certificate Document" 
                  className="w-full max-w-sm rounded border border-zinc-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 rounded-2xl overflow-hidden relative p-12 md:p-16 flex items-center">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 mix-blend-luminosity">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" alt="Engine block background" className="w-full h-full object-cover object-right" />
            </div>
            <div className="relative z-10 max-w-lg">
              <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Connect with Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Success Together</h2>
              <p className="text-zinc-400 mb-8">Have a question? Need a quote? Our team is ready to assist you with all your auto parts needs.</p>
              <Link to="/quote" className="inline-flex items-center text-white font-bold hover:text-[#D34747] transition-colors text-sm uppercase tracking-wider">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-zinc-900 mb-3">Client Testimonial</h2>
           <p className="text-zinc-500 mb-16">See what our clients are saying about us</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
             <div className="bg-zinc-50 rounded-lg p-10 relative">
                <div className="text-amber-400 text-xl mb-4">★★★★½</div>
                <p className="text-zinc-600 mb-8 italic">
                  "{companyConfig.name} is one of the few suppliers that actually listens. Communication is smooth, and they understand what we need without endless back-and-forth."
                </p>
                <div>
                  <h4 className="font-bold text-zinc-900">Aftermarket Parts Manager</h4>
                  <p className="text-zinc-400 text-xs">Middle East</p>
                </div>
                {/* Arrow left (decorative) */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500/50 hover:text-indigo-500"><ChevronLeft className="w-8 h-8" /></button>
             </div>
             
             <div className="bg-zinc-50 rounded-lg p-10 relative">
                <div className="text-amber-400 text-xl mb-4">★★★★☆</div>
                <p className="text-zinc-600 mb-8 italic">
                  "We've been working with {companyConfig.name} for years, and they've consistently delivered on quality. It's rare to find a supplier like that."
                </p>
                <div>
                  <h4 className="font-bold text-zinc-900">Purchase Head</h4>
                  <p className="text-zinc-400 text-xs">Europe</p>
                </div>
                {/* Arrow right (decorative) */}
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500/50 hover:text-indigo-500"><ChevronRight className="w-8 h-8" /></button>
             </div>
           </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">FAQs</h2>
          <div className="border border-zinc-200 rounded bg-white overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 last:border-0">
                <button 
                  className="w-full flex items-center p-5 text-left font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="mr-4">
                    {openFaq === i ? <Minus className="w-5 h-5 text-zinc-900" /> : <Plus className="w-5 h-5 text-zinc-900" />}
                  </span>
                  {faq.q}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pl-14 text-zinc-600 text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 border-b border-zinc-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 inline-block mr-4">Our Latest News</h2>
              <span className="text-zinc-400 text-sm">Don't miss out on this week's deals</span>
            </div>
            <Link to="#" className="text-sm font-bold text-zinc-900 hover:text-[#D34747] flex items-center transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64 bg-zinc-100">
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-zinc-800 z-10 shadow-sm">Knowledge</div>
                <img src="https://images.unsplash.com/photo-1632731149791-238d21c3b177?auto=format&fit=crop&q=80&w=800" alt="News article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-xs text-zinc-500 mb-2">1 Aug 2025</div>
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#D34747] transition-colors leading-snug">
                Oversized Pistons Explained: When Your Engine Needs Them and Why They Boost Performance
              </h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64 bg-zinc-100">
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-zinc-800 z-10 shadow-sm">Knowledge</div>
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="News article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80" />
              </div>
              <div className="text-xs text-zinc-500 mb-2">30 Mar 2025</div>
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#D34747] transition-colors leading-snug">
                The Role of High-Quality Auto Parts in Engine Performance
              </h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
