import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function ValvesPage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> KOMODO Engine Parts
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Engine Intake & Exhaust Valves
            </h1>
            <p className="text-zinc-300 text-lg mb-8">
              Manufactured by Singhal Industrial Corporation from bi-metallic alloy steel for high heat resistance, precision sealing, and long service life.
            </p>
            <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors inline-block">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-700 leading-relaxed text-sm">
              <span className="text-[#D34747] text-xs font-extrabold uppercase tracking-widest block mb-2">
                High Temperature Metallurgical Precision
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Precision Engine Valves & Valve Guides</h2>
              <p>
                Singhal Industrial Corporation manufactures and supplies a comprehensive range of Engine Valves and Valve Guides for automotive, commercial vehicle, and agricultural diesel engines.
              </p>
              <p>
                Our valves undergo friction welding of valve stems, hard chrome plating, and seat stellite facing for extreme operating temperatures and wear resistance under continuous load.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
              <img 
                src="/images/image2.jpeg" 
                alt="Precision Engine Valves" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
