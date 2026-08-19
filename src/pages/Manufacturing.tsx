import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Material Selection',
    desc: 'Rigorous selection of raw materials based on mechanical and metallurgical properties. Incoming alloys are tested for chemical composition.',
    img: 'https://images.unsplash.com/photo-1620063231662-7901cb009085?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '02',
    title: 'Casting / Forging',
    desc: 'Advanced centrifugal casting and precision forging processes to ensure structural integrity and desired grain flow.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '03',
    title: 'Heat Treatment',
    desc: 'Controlled thermal cycles to optimize hardness, strength, and relieve internal stresses, tailored to specific applications.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    number: '04',
    title: 'CNC Machining',
    desc: 'Multi-axis CNC turning and milling for exacting dimensional accuracy and superior surface finishes.',
    img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800'
  }
];

export function Manufacturing() {
  return (
    <div className="w-full pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Process
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">From Raw Material to Precision Component.</h1>
          <p className="text-lg text-zinc-600">
            Our manufacturing workflow is designed to control every variable, ensuring each component meets the strictest international standards.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-zinc-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl z-10" />
                  <img 
                    src={step.img} 
                    alt={step.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                  {/* Center Dot for desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#D34747] rounded-full z-20 ${index % 2 === 0 ? '-right-[34px]' : '-left-[34px]'}`} />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                  <div className="text-[#3FB6C6] font-mono text-sm font-bold mb-2">{step.number} —</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-2">
                    {['Tight process control', 'Traceability', 'Documentation'].map((item) => (
                      <li key={item} className="flex items-center text-sm text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#D34747]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
