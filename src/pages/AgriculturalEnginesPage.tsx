import React, { useState } from 'react';
import { ArrowRight, Award, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const enginePhotos = [
  { url: '/images/products/agricultural_engines/engine_1.jpeg', title: 'INDOLAND Single Cylinder Heavy Duty Diesel Engine' },
  { url: '/images/products/agricultural_engines/engine_2.jpeg', title: 'ENGLISH PETTER Export Agriculture Diesel Engine' },
  { url: '/images/products/agricultural_engines/engine_3.jpeg', title: 'Water-Cooled Agricultural Irrigation Diesel Engine' }
];

export function AgriculturalEnginesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> INDOLAND & ENGLISH PETTER
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Agricultural Diesel Engines & Pump Sets
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Heavy-duty single-cylinder and multi-cylinder diesel engines for agricultural irrigation, farm machinery, and export markets.
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
                Agricultural Powerhouses
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Petter Type & Industrial Diesel Engines
              </h2>

              <p>
                Singhal Industrial Corporation manufactures robust <strong>Agricultural Diesel Engines and Pump Sets</strong> under our renowned <strong>ENGLISH PETTER</strong> and <strong>INDOLAND</strong> brands.
              </p>

              <p>
                Built with heavy-duty cast iron blocks, high-torque crankshafts, and precision-bored cylinder liners, these engines provide dependable power for farm irrigation pumps, threshers, and agricultural processing equipment worldwide.
              </p>
            </div>

            <div 
              onClick={() => setSelectedPhoto('/images/products/agricultural_engines/engine_1.jpeg')}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer group"
            >
              <img 
                src="/images/products/agricultural_engines/engine_1.jpeg" 
                alt="Agricultural Engine" 
                className="w-full h-80 md:h-[400px] object-contain bg-zinc-50 p-6 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                  <ZoomIn className="w-4 h-4 mr-2 text-[#D32F2F]" /> Click to Zoom
                </span>
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
                Agricultural Diesel Engine Lineup
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Actual manufactured products from Singhal Industrial Corporation Agra factory
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {enginePhotos.map((photo, idx) => (
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

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Inquire About Agricultural Diesel Engines</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact Singhal Industrial Corporation for export catalogs and volume distributor pricing.
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
