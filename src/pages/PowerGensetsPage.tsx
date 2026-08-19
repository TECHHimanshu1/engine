import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function PowerGensetsPage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> KOMODO Engine Parts
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Agricultural Diesel Engines & Power Gensets
            </h1>
            <p className="text-zinc-300 text-lg mb-8">
              Reliable stationary engine spare parts, heavy-duty genset components, and agricultural water pump engines manufactured by Singhal Industrial Corporation.
            </p>
            <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors inline-block">
              Request Catalog Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-zinc-700 leading-relaxed text-sm">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">Agricultural & Industrial Power Solutions</h2>
            <p>
              Singhal Industrial Corporation supplies heavy-duty replacement engine spare parts for agricultural diesel engines, stationary power gensets, and water pump engines operating in challenging rural and industrial environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
