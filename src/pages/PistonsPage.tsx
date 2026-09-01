import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

const pistonHighlights = [
  {
    title: "High-Strength Alloy Metallurgy",
    desc: "KOMODO Pistons are manufactured from high-strength alloys using advanced manufacturing processes to deliver reliable performance, durability, and dimensional stability under demanding engine conditions."
  },
  {
    title: "Thermal Conductivity & Structural Strength",
    desc: "Combines high thermal conductivity, lightweight construction, and structural strength for efficient engine operation and effective heat dissipation."
  },
  {
    title: "Wear Resistance & Heat Treatment",
    desc: "Enhanced wear resistance in ring grooves, piston skirt, and gudgeon pin bore. Controlled heat treatment and ageing achieve optimum strength and durability."
  }
];

export function PistonsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> Singhal Industrial Corporation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Singhal Precision Pistons
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Engineered from high-strength alloys for automotive, commercial vehicle, and agricultural engines worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg">
                Request Product Quote
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
                Piston Manufacturing Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Engineered for Dimensional Stability & Performance
              </h2>

              <p>
                <strong>KOMODO Pistons</strong> are manufactured from high-strength alloys using advanced manufacturing processes to deliver reliable performance, durability, and dimensional stability under demanding engine conditions.
              </p>

              <p>
                Our carefully engineered piston designs combine high thermal conductivity, lightweight construction, and structural strength for efficient engine operation and effective heat dissipation. Enhanced resistance to wear in the ring grooves, piston skirt, and gudgeon pin bore helps maintain critical dimensions and performance throughout the service life. All alloy piston castings undergo controlled heat treatment and ageing to achieve optimum strength and durability.
              </p>

              <p>
                With extensive manufacturing and export experience, <strong>Singhal Industrial Corporation</strong> produces Pistons in a wide range of designs and dimensions, including custom specifications to meet specific customer and market requirements. Manufactured in accordance with international quality standards, KOMODO Pistons are suitable for OEM replacement applications across a broad range of automotive and agricultural engines worldwide.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
              <img 
                src="/images/piston_hero.jpg" 
                alt="KOMODO Precision Piston" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="font-bold text-lg">KOMODO Alloy Piston Assembly</div>
                <div className="text-xs text-zinc-300">Heat Treated & Aged | Controlled Thermal Expansion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Piston Engineering Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pistonHighlights.map((ph, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-bold text-base mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{ph.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{ph.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need Custom KOMODO Pistons?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact our engineering team for technical catalogs or custom OEM manufacturing quotes. Minimum Order Quantity (MOQ): 300 pieces.
          </p>
          <Link to="/quote" className="inline-flex items-center px-8 py-3.5 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
            Contact Engineering Team <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
