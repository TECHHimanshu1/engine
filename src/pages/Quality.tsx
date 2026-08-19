import { ShieldCheck, Ruler, Focus, Microscope, FileText, CheckSquare } from 'lucide-react';

export function Quality() {
  const qualitySteps = [
    { title: 'Incoming Material Inspection', desc: 'Spectrographic analysis of raw material to ensure chemical composition matches metallurgical standards.' },
    { title: 'Process Control', desc: 'Continuous monitoring of temperature, pressure, and time during casting, forging, and heat treatment.' },
    { title: 'Dimensional Inspection', desc: 'Precision measurement using CMMs (Coordinate Measuring Machines) and bore gauges to verify tolerances.' },
    { title: 'Surface Inspection', desc: 'Profilometer testing to ensure surface roughness meets exact engineering specifications for optimal oil retention.' },
    { title: 'Performance Testing', desc: 'Hardness testing, ultrasonic flaw detection, and simulated load testing.' },
    { title: 'Final Inspection & Packaging', desc: '100% visual inspection and secure, anti-corrosive export packaging.' },
  ];

  return (
    <div className="w-full pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Quality Assurance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Quality Is Engineered Into Every Component.</h1>
          <p className="text-lg text-zinc-600">
            Our commitment to quality is non-negotiable. We employ a rigorous, multi-stage inspection process to ensure zero-defect delivery to our global OEM and aftermarket partners.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Quality Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['ISO 9001:2015', 'IATF 16949:2016', 'ISO 14001:2015'].map((cert, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl flex items-start group hover:border-[#D34747] hover:shadow-sm transition-all">
                <ShieldCheck className="w-8 h-8 text-[#D34747] mr-4 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{cert}</h3>
                  <p className="text-sm text-zinc-500">Certified for Excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">The Quality Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="bg-white border border-zinc-200 p-8 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 font-bold text-8xl text-[#D34747] select-none">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-zinc-600 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Inspection Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Focus, name: 'Coordinate Measuring Machine (CMM)' },
              { icon: Ruler, name: 'Surface Roughness Tester' },
              { icon: Microscope, name: 'Metallurgical Microscope' },
              { icon: CheckSquare, name: 'Hardness Tester' },
              { icon: FileText, name: 'Profile Projector' },
              { icon: Ruler, name: 'Bore Gauges & Micrometers' },
            ].map((eq, index) => (
              <div key={index} className="flex items-center p-4 bg-zinc-50 border border-zinc-200 rounded-md">
                <eq.icon className="w-5 h-5 text-[#3FB6C6] mr-3 shrink-0" />
                <span className="text-sm text-zinc-700 font-semibold">{eq.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
