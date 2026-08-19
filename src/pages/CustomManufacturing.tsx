import { Link } from 'react-router-dom';

export function CustomManufacturing() {
  return (
    <div className="w-full pt-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Custom Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Have a Drawing? We'll Build It.</h1>
          <p className="text-lg text-zinc-600">
            We specialize in manufacturing custom engine components directly from customer OEM drawings, CAD models, or physical samples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-100 pb-4">The Development Process</h3>
            <ol className="space-y-8 border-l-2 border-zinc-200 pl-8 relative">
              {[
                'Submit your technical drawings and volume requirements.',
                'Engineering review and material specification.',
                'Prototyping and sample development.',
                'Validation and dimensional reporting.',
                'Full-scale production and quality control.',
                'Global dispatch.'
              ].map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#D34747]" />
                  <p className="text-zinc-700 font-semibold">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <Link to="/quote" className="px-8 py-4 bg-[#D34747] text-white font-bold rounded-md hover:bg-red-700 transition-colors inline-block w-full text-center uppercase tracking-wider text-sm">
                Submit Engineering Request
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-zinc-950 shadow-xl flex items-center justify-center p-8 text-center">
            {/* Decorative Blueprint Motif */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBUMHoiLz48L2c+PC9zdmc+')] opacity-20" />
            <div className="relative z-10 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
               <h3 className="text-2xl font-bold text-white mb-4">Supported File Types</h3>
               <p className="font-mono font-bold text-lg text-[#3FB6C6]">PDF, DWG, DXF, IGES, STEP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
