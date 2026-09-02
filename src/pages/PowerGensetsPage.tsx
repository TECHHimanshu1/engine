import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function PowerGensetsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> {companyConfig.brandName}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Agricultural Diesel Engines & Power Gensets
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Reliable stationary engine spare parts, heavy-duty genset components, and agricultural water pump engines manufactured by Singhal Industrial Corporation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#D34747] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg">
                Request Catalog Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Copy & Image Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <span className="text-[#D34747] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Power Generation & Agriculture
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
                Engineered for High-Torque Continuous Operation
              </h2>
              <p>
                Singhal Industrial Corporation supplies heavy-duty replacement engine spare parts for agricultural diesel engines, stationary power gensets, and water pump engines operating in challenging rural, commercial, and industrial environments.
              </p>
              <p>
                Our power genset assemblies are manufactured from premium pearlitic cast iron and alloyed metals, engineered to maintain tight compression seals, withstand thermal cycles, and deliver reliable power output for continuous prime and standby applications.
              </p>
            </div>

            {/* Photo Cards Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-50 group">
                <img 
                  src="/images/power_gensets_1.jpeg" 
                  alt="Power Genset Engine Assembly - View 1" 
                  className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                  <div className="font-bold text-sm">Heavy Duty Power Genset</div>
                  <div className="text-[11px] text-zinc-300">Stationary Diesel Power Assembly</div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-50 group">
                <img 
                  src="/images/power_gensets_2.jpeg" 
                  alt="Power Genset Engine Assembly - View 2" 
                  className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                  <div className="font-bold text-sm">Agricultural Engine Assembly</div>
                  <div className="text-[11px] text-zinc-300">Pumpset & Field Generator Power</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
