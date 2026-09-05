import { CheckCircle2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';


const meltingItems = [
  "Inductotherm Melting Furnaces: More than 100 tons per month",
  "Non-Ferrous Melting Furnaces: x4"
];

const machiningItems = [
  "CNC Turning Machines",
  "VMC Milling Machine",
  "Over 30 Lathes, SPM's of Different Kinds (Turning, Drilling, Milling, Boring, Broaching etc.)",
  "Specialised Honing Machines for Cylinder Liners"
];

const measuringItems = [
  "Bore Gauges",
  "Micron Dials with Comparator Stands",
  "Vernier Calipers",
  "Rockwell Hardness Tester",
  "Piston Combustion Chamber Measuring",
  "Air Gauge with Digital Readout",
  "Height Gauge",
  "CE Meter",
  "Microstructure Analysis",
  "Resin Sand Analysis"
];

const otherEquipmentItems = [
  "Heat Treatment Furnace for Optimum Hardness",
  "Shot Blasting Machines",
  "Phosphate Coating Equipment",
  "Other Equipment for Surface Finishes Required by Customers"
];

const faqs = [
  { 
    q: "What is your Minimum Order Quantity (MOQ)?", 
    a: "Our MOQ is 300 pieces per order." 
  },
  { 
    q: "Are you a certified manufacturer?", 
    a: "Yes, Singhal Industrial Corporation (KOMODO Engine Parts) is ISO 9001:2015 certified for manufacturing and quality control." 
  },
  { 
    q: "Do you offer customized branding and packaging?", 
    a: "Yes, we offer tailored OEM packaging, custom laser marking, and customized box branding according to client specifications." 
  },
  { 
    q: "Which markets do you serve?", 
    a: "We export high-performance engine parts across international markets in Europe, Middle East, Africa, Latin America, and Asia." 
  },
  { 
    q: "Do you develop new engine parts?", 
    a: "Yes, our engineering team manufactures custom pistons, cylinder liners, and castings based on technical drawings or physical samples." 
  }
];

export function Infrastructure() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Manufacturing Infrastructure, Foundry & CNC Machining"
        description="Explore Singhal Industrial Corporation's manufacturing facility in Agra, India: Inductotherm melting furnaces, CNC turning, VMC milling, spectro analysis & honing."
        canonicalPath="/infrastructure"
      />

      {/* Hero Header */}
      <section className="bg-[#1C1F26] text-white py-16 md:py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-900 to-black z-0 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Infrastructure
          </h1>
        </div>
      </section>

      {/* Section 1: Melting */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Melting
              </h2>
              <ul className="space-y-4 pt-2">
                {meltingItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                <img 
                  src="/images/melting_furnace.jpg" 
                  alt="Melting Induction Furnace" 
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Machining */}
      <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Machine Illustrations */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
                <img 
                  src="/images/cnc_machine.jpg" 
                  alt="Precision CNC Turning Center Machine" 
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Machining
              </h2>
              <ul className="space-y-4 pt-2">
                {machiningItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Measuring */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Measuring
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3 pt-2">
                {measuringItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                <img 
                  src="/images/measuring_inspection.jpg" 
                  alt="Precision Measuring Dial Gauge Inspection" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Other Equipment */}
      <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                <img 
                  src="/images/heat_treatment.jpg" 
                  alt="Heat Treatment Furnace Equipment" 
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Other Equipment
              </h2>
              <ul className="space-y-4 pt-2">
                {otherEquipmentItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-10 text-center">
            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-zinc-50 hover:bg-zinc-100/80 transition-colors font-bold text-zinc-900 text-sm md:text-base"
                  >
                    <span className="flex items-center">
                      <span className="text-zinc-400 mr-2 font-mono">+</span> {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-zinc-500 shrink-0 ml-4" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-500 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-zinc-100 text-zinc-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
