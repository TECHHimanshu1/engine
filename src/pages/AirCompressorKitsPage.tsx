import { CheckCircle2, ArrowRight, Award, ShieldAlert, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function AirCompressorKitsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> KOMODO Repair Kits
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Air Brake Compressor Repair Kits
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Complete repair kits including cylinder block, pistons, and piston rings for heavy-duty commercial truck and bus braking systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg">
                Request Quote
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
                Heavy-Duty Brake Safety
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                OEM-Grade Reliability for Air Brake Compressors
              </h2>

              <p>
                Heavy-duty air brake compressors produce the pressurized air essential for safe, responsive braking in trucks, buses and trailers. Complete repair kits including cylinder block, pistons, piston rings.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  A faulty or neglected compressor leads to low air pressure, brake lag and dangerous overheating. Singhal Industrial compressor repair kits deliver OEM-grade reliability and durability, keeping your fleet safe with regular maintenance and quality parts.
                </div>
              </div>

              <p>
                Singhal Industrial Corporation manufactures complete air brake compressor overhaul kits precision-machined for leading commercial vehicle applications.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
              <img 
                src="/images/image1.jpeg" 
                alt="Air Brake Compressor Kit" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="font-bold text-lg">Air Brake Compressor Kit</div>
                <div className="text-xs text-zinc-300">Cylinder Block, Pistons & Piston Rings Set</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Kit Components & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cylinder Block Sleeve", desc: "Precision cast and bored cylinder block with optimum cross-hatch hone for long seal life." },
              { title: "Compressor Pistons", desc: "Lightweight aluminum alloy compressor pistons engineered for low friction and efficient heat dissipation." },
              { title: "Compressor Ring Set", desc: "High-grade nitrided steel ring sets ensuring leak-free air compression and minimal oil carryover." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-bold text-base mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Order Air Brake Compressor Repair Kits</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact Singhal Industrial Corporation for fleet maintenance supply or OEM quote. MOQ: 300 pieces.
          </p>
          <Link to="/quote" className="inline-flex items-center px-8 py-3.5 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
            Request Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
