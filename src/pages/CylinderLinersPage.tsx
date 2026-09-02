import React, { useState } from 'react';
import { ArrowRight, Award, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const linerPhotos = [
  { url: '/images/products/cylinder_liners/img_1.jpeg', title: 'Dry Type Engine Cylinder Liner' },
  { url: '/images/products/cylinder_liners/img_2.jpeg', title: 'Flanged Heavy Duty Cylinder Sleeve' },
  { url: '/images/products/cylinder_liners/img_3.jpeg', title: 'Precision CNC Machined Liner' },
  { url: '/images/products/cylinder_liners/img_4.jpeg', title: 'Wet Type Engine Cylinder Sleeve' },
  { url: '/images/products/cylinder_liners/img_5.jpeg', title: 'Air-Cooled Finned Cylinder Block' },
  { url: '/images/products/cylinder_liners/img_6.jpeg', title: 'Industrial & Agricultural Liner Set' }
];

const linerFeatures = [
  {
    title: "Centrifugal Casting Process",
    desc: "Widely regarded as one of the most effective methods for producing durable liners. Ensures uniform material distribution, a fine-grained structure, excellent wear resistance, and reliable dimensional stability."
  },
  {
    title: "Air-Cooled Shell Moulding",
    desc: "Manufactured using a specialized shell moulding process with close-grained, wear-resistant iron, providing long service life, efficient cooling, and dependable performance even under demanding conditions."
  },
  {
    title: "Custom Metallurgy & Specifications",
    desc: "Manufactured to OE specifications, upgraded specifications, or specific customer requirements. Special chemical compositions can also be used to enhance corrosion resistance and lubrication performance."
  }
];

export function CylinderLinersPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> KOMODO Engine Parts
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Cylinder Liners, Sleeves & Air-Cooled Blocks
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              High-performance cylinder liners engineered to withstand demanding operating conditions across global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg">
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Manufacturing Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Engineered for Performance & Long Service Life
              </h2>

              <p>
                We offer <strong>Cylinder Liners, Sleeves, and Air-Cooled Blocks</strong> manufactured to OE specifications, upgraded specifications, or specific customer requirements to suit different market needs. Our expertise in design, materials, and manufacturing enables us to deliver high-performance, cost-effective products built to withstand demanding operating conditions.
              </p>

              <p>
                Our Cylinder Liners are manufactured from high-quality grey cast iron using the <strong>centrifugal casting process</strong>, widely regarded as one of the most effective methods for producing durable liners. The process ensures uniform material distribution, a fine-grained structure, excellent wear resistance, and reliable dimensional stability. Special chemical compositions can also be used to enhance corrosion resistance and lubrication performance.
              </p>

              <p>
                Our <strong>Air-Cooled Cylinder Liners</strong> are manufactured using a specialized shell moulding process with close-grained, wear-resistant iron, providing long service life, efficient cooling, and dependable performance even under demanding conditions.
              </p>
            </div>

            <div 
              onClick={() => setSelectedPhoto('/images/products/cylinder_liners/img_1.jpeg')}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer group"
            >
              <img 
                src="/images/products/cylinder_liners/img_1.jpeg" 
                alt="Singhal Industrial Cylinder Liners" 
                className="w-full h-80 md:h-[420px] object-contain bg-zinc-50 p-6 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                  <ZoomIn className="w-4 h-4 mr-2 text-[#D32F2F]" /> Click to Zoom
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="font-bold text-lg">KOMODO Centrifugal Cylinder Liners</div>
                <div className="text-xs text-zinc-300">Dry & Wet Type Liners | Shell Moulded Air-Cooled Blocks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Photo Gallery Grid */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Factory Product Gallery
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Precision Cylinder Liner Lineup
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Actual manufactured products from Singhal Industrial Corporation Agra factory
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {linerPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-64 overflow-hidden bg-white p-4 flex items-center justify-center">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4 bg-zinc-900 text-white flex items-center justify-between">
                  <span className="font-bold text-xs truncate">{photo.title}</span>
                  <ZoomIn className="w-4 h-4 text-red-400 shrink-0 ml-2 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Cylinder Liner Technical Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {linerFeatures.map((lf, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-bold text-base mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{lf.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{lf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Inquire About Cylinder Liners</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact Singhal Industrial Corporation for technical catalogs and volume pricing. MOQ: 300 pieces.
          </p>
          <Link to="/quote" className="inline-flex items-center px-8 py-3.5 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
            Request Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 p-4">
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-[75vh] flex items-center justify-center bg-white rounded-xl p-4">
              <img 
                src={selectedPhoto} 
                alt="Product Enlarged" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
