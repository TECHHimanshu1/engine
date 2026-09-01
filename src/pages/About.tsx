import { Award, CheckCircle2, ArrowRight, ShieldCheck, Building2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> Established 1966 | Agra, India
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight leading-tight">
              About Singhal Industrial Corporation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <div className="p-6 rounded-2xl bg-red-50 border border-red-100 mb-8">
                <h2 className="text-2xl font-extrabold text-zinc-900 mb-2">Company Overview</h2>
                <p className="text-zinc-800 font-semibold">
                  Singhal Industrial Corporation, established in 1966, is a trusted name in the global automotive and agricultural aftermarket, with more than six decades of experience in manufacturing, sourcing, and exporting high-quality engine spare parts.
                </p>
              </div>

              <p>
                Over the years, we have built lasting relationships with customers across international markets through our commitment to quality, reliability, technical expertise, and dependable customer service.
              </p>

              <p>
                Our aftermarket brand, <strong>KOMODO Engine Parts</strong>, represents our commitment to delivering reliable, high-performance engine components for a wide range of automotive, commercial vehicle, and agricultural applications.
              </p>

              <p>
                We manufacture and supply a comprehensive range of engine components, including <strong>Cylinder Liners, Pistons, Piston Rings, Engine Valves, Valve Guides, Gaskets</strong>, and other critical engine spare parts. Our manufacturing and machining capabilities, supported by a carefully selected network of suppliers, allow us to offer a broad range of products and applications to customers worldwide.
              </p>

              <div className="my-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Uncompromising Quality Philosophy</h3>
                <p className="mb-4">
                  At Singhal Industrial Corporation, quality is built into every stage of our operations. Products manufactured in-house as well as those sourced from approved suppliers undergo rigorous quality checks, dimensional inspection, and value-adding processes before reaching our customers. This enables us to maintain consistent standards across our product range and markets.
                </p>
                <p className="font-bold text-[#D32F2F]">
                  We strongly believe that quality is never an accident—it is the result of disciplined processes, continuous improvement, technical expertise, and an uncompromising commitment to excellence.
                </p>
              </div>

              <p>
                Our experienced team, skilled manufacturing workforce, machining capabilities, and dedicated warehousing facilities in Agra, India, provide us with the infrastructure and expertise required to serve customers across international markets.
              </p>

              <p>
                With over 60 years of industry experience, Singhal Industrial Corporation continues to strengthen its global presence through <strong>KOMODO Engine Parts</strong>, combining traditional expertise with modern manufacturing practices and a forward-looking approach to the aftermarket.
              </p>

              <div className="p-6 rounded-2xl bg-zinc-900 text-white mt-8">
                <div className="flex items-center space-x-3 mb-2 text-[#D32F2F] font-bold text-xs uppercase tracking-wider">
                  <Target className="w-5 h-5" /> Our Mission
                </div>
                <p className="text-lg font-bold">
                  Our mission is simple: to deliver dependable engine parts, create lasting customer relationships, and be a trusted global partner for automotive and agricultural spare parts.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-xl text-zinc-900 mb-1 uppercase">Singhal Industrial Corporation</h3>
                <div className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider mb-4">Established 1966 | Agra, India</div>
                <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-800">
                  KOMODO Engine Parts<br/>
                  <span className="text-zinc-500 font-normal">Built for Performance. Trusted for Quality.</span>
                </div>
              </div>

              <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl">
                <h4 className="font-bold text-lg mb-4 text-[#D32F2F] uppercase tracking-wider">Key Product Lines</h4>
                <ul className="space-y-3 text-xs">
                  {["Cylinder Liners & Sleeves", "Pistons & Pin Assemblies", "Piston Rings", "Engine Valves & Guides", "Air Brake Compressor Kits", "Engine Gaskets & Bearings", "Crankshafts & Connecting Rods", "Cylinder Heads & Castings"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 mr-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-8 block w-full py-3 text-center bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors">
                  Contact Sales Office
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
