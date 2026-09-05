import { ShieldCheck, CheckCircle2, ArrowRight, Cog, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { SEO } from '../components/SEO';

export function BushPinsPage() {
  return (
    <div className="w-full bg-white">
      <SEO 
        title="Precision Bush Pins & Gudgeon Pins Manufacturer"
        description="High precision induction hardened bush pins, gudgeon pins & king pins for heavy engines & machinery manufactured by Singhal Industrial Corporation."
        canonicalPath="/products/bush-pins"
      />

      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> Precision Machined Parts
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              High Precision Bush Pins & Accessories
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Engineered by {companyConfig.brandName} with induction hardening, ground surface finishes, and strict concentricity for heavy machinery and engine alignment assemblies.
            </p>
            <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg inline-block">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest block mb-2">Technical Rigor</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">Engineered for High-Load Mechanical Wear</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Singhal Industrial bush pins are produced from alloy steel and brass stock, undergoing case hardening (58-62 HRC) and precision centerless grinding.
              </p>
              <ul className="space-y-3">
                {["High-frequency induction hardening", "Precision cylindrical tolerance within ±0.003mm", "100% surface crack detection & micro-hardness testing"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs text-zinc-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-100 rounded-2xl p-8 border border-zinc-200">
              <div className="font-bold text-lg text-zinc-900 mb-4">Product Specifications</div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Material Alloys</span>
                  <span className="font-bold text-zinc-800">EN8, EN19, SAE 8620, Brass</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Hardness Depth</span>
                  <span className="font-bold text-zinc-800">1.0 - 2.5 mm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-200">
                  <span className="text-zinc-500">Surface Finish</span>
                  <span className="font-bold text-zinc-800">Ra 0.2 - 0.4 µm</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">MOQ</span>
                  <span className="font-bold text-zinc-800">300 Pieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
