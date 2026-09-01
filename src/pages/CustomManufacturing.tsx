import { CheckCircle2, ArrowRight, Cog, Layers, ShieldCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

const processSteps = [
  { step: "01", title: "CAD Drawing / Sample Review", desc: "Our engineering team reviews client technical CAD models, physical samples, or OEM reference numbers." },
  { step: "02", title: "Metallurgical Alloy Formulation", desc: "Custom selection of eutectic aluminum (LM13), pearlitic grey iron, or alloy steel to suit operational loads." },
  { step: "03", title: "Pattern & Tooling Development", desc: "Precision die casting tooling and centrifugal carousel pattern fabrication." },
  { step: "04", title: "CNC Machining & Finishing", desc: "Multi-axis CNC turning, ovality grinding, and surface coating (moly skirt / ceramic crown)." },
  { step: "05", title: "100% Quality Inspection", desc: "Spectro analysis, dimensional CMM verification, surface roughness check, and batch certification." },
  { step: "06", title: "Custom OEM Packaging", desc: "Custom private label laser marking, anti-rust oil coating, branded boxes, and sea-worthy export pallets." }
];

export function CustomManufacturing() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Cog className="w-4 h-4 mr-1" /> Tailored Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Custom Manufacturing & OEM Branding
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Singhal Industrial Corporation specializes in custom engine part development according to sample components or CAD technical drawings.
            </p>
            <Link to="/quote" className="px-6 py-3 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shadow-lg inline-block">
              Submit Custom Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
              From Concept to Delivery
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Custom Development Workflow
            </h2>
            <p className="text-zinc-600 text-sm">
              Our end-to-end custom manufacturing process ensures 100% compliance with your exact technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((p, i) => (
              <div key={i} className="bg-zinc-50 rounded-2xl p-7 border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-[#D32F2F] mb-4">{p.step}</div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{p.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Branding */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Private Labeling
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Custom OEM Packaging & Laser Marking
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                We understand that brand identity is crucial for global distributors. Singhal Industrial Corporation provides full private-label packaging support:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Laser engraving of part numbers, logos, and batch codes on piston crowns / liner flanges",
                  "Custom printed inner boxes and master cartons with client artwork and barcoding",
                  "VCI anti-rust paper wrapping and protective polybags",
                  "Heavy-duty fumigated wooden pallets with plastic stretch strapping for safe ocean freight"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs text-zinc-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] mr-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/quote" className="inline-flex items-center px-6 py-3 bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors">
                Request Packaging Options <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-200">
              <h3 className="font-extrabold text-zinc-900 text-xl mb-4">Minimum Order Requirements</h3>
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="font-bold text-zinc-900 mb-1">Pistons & Liners</div>
                  <div className="text-zinc-600">MOQ: 300 pieces per part number</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="font-bold text-zinc-900 mb-1">New Development Lead Time</div>
                  <div className="text-zinc-600">Tooling & sample development within 30-45 days</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="font-bold text-zinc-900 mb-1">Quality Inspection Certificate</div>
                  <div className="text-zinc-600">Issued with 3.1 Mill Test Reports per shipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
