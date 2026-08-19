import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

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

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
              <img 
                src="/images/cylinder_liners.jpg" 
                alt="KOMODO Cylinder Liners" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className="font-bold text-lg">KOMODO Centrifugal Cylinder Liners</div>
                <div className="text-xs text-zinc-300">Dry & Wet Type Liners | Shell Moulded Air-Cooled Blocks</div>
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
              Cylinder Liner Highlights
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
    </div>
  );
}
