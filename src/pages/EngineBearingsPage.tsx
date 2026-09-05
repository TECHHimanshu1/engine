import React, { useState } from 'react';
import { ArrowRight, Award, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const bearingPhotos = [
  { url: '/images/products/engine_bearings/img_1.jpeg', title: 'Main Engine Bearing Shell Set' },
  { url: '/images/products/engine_bearings/img_2.jpeg', title: 'Connecting Rod Bearing Shells' },
  { url: '/images/products/engine_bearings/img_3.jpeg', title: 'Heavy Duty Bi-Metal & Tri-Metal Bearings' },
  { url: '/images/products/engine_bearings/img_4.jpeg', title: 'Precision Crankshaft Bushings' },
  { url: '/images/products/engine_bearings/img_5.jpeg', title: 'Agricultural & Diesel Engine Bearings' },
  { url: '/images/products/engine_bearings/img_6.jpeg', title: 'Flanged Thrust Washers & Bearing Bushings' }
];

export function EngineBearingsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Engine Bearings, Bushings & Thrust Washers Manufacturer"
        description="Bimetal and trimetal main bearings, connecting rod bearing shells, bushings & thrust washers manufactured in India by Singhal Industrial Corporation."
        canonicalPath="/products/engine-bearings"
        image="https://indiasparepart.com/images/engine_bearings_1.jpeg"
      />

      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> Singhal Industrial Corporation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Precision Engine Bearings & Bushings
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              High-performance main bearings, rod bearings, and thrust washers engineered for heavy-duty commercial and agricultural engines.
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
                Metallurgical Precision
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Tri-Metal & Bi-Metal Heavy Duty Engine Bearings
              </h2>

              <p>
                Singhal Industrial Corporation produces high-grade <strong>Engine Bearings, Connecting Rod Bushings, and Thrust Washers</strong> designed to withstand extreme load pressures and high RPM operation in automotive, commercial vehicle, and agricultural diesel engines.
              </p>

              <p>
                Utilizing advanced bimetal (copper-lead/aluminum alloy) and trimetal overlay technology, our bearings offer exceptional fatigue resistance, anti-friction characteristics, and thermal conductivity.
              </p>
            </div>

            <div 
              onClick={() => setSelectedPhoto('/images/products/engine_bearings/img_1.jpeg')}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer group"
            >
              <img 
                src="/images/products/engine_bearings/img_1.jpeg" 
                alt="Engine Bearings" 
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
                Engine Bearing Lineup
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Actual manufactured products from Singhal Industrial Corporation Agra factory
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bearingPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-60 overflow-hidden bg-white p-4 flex items-center justify-center">
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
          <h2 className="text-3xl font-extrabold mb-4">Inquire About Engine Bearings</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact Singhal Industrial Corporation for custom bearing sizing and OEM inquiries.
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
