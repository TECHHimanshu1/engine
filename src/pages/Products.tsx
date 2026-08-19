import { ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', slug: 'cylinder-liners', name: 'Cylinder Liners', category: 'Engine Components', shortDescription: 'High performance dry, wet and air-cooled liners', image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800' },
  { id: '2', slug: 'pistons', name: 'Pistons', category: 'Engine Components', shortDescription: 'Durable and efficient pistons, alfin and oil-cooled types', image: 'https://images.unsplash.com/photo-1590218731006-259e86c07222?auto=format&fit=crop&q=80&w=800' },
  { id: '3', slug: 'air-compressor-kits', name: 'Air Brake Compressor Kits', category: 'Repair Kits', shortDescription: 'Complete repair kits including cylinder block, pistons, piston rings', image: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=800' },
  { id: '4', slug: 'valves', name: 'Valves', category: 'Engine Components', shortDescription: 'Engineered for optimal performance and durability', image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&q=80&w=800' },
  { id: '5', slug: 'power-gensets', name: 'Power Gensets', category: 'Power', shortDescription: 'Reliable power generation solutions', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' }
];

export function Products() {
  return (
    <div className="w-full pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Engineered for Excellence.</h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Precision-manufactured components designed for demanding operating environments. Browse our standard catalogue or contact us for custom manufacturing based on your drawings.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by product name, part number or application..." 
              className="w-full bg-white border border-zinc-200 rounded-md py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:border-[#D34747] focus:ring-1 focus:ring-[#D34747] transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center px-6 py-3 bg-white border border-zinc-200 rounded-md text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm font-semibold">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-transparent transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-zinc-100 p-8 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{product.name}</h3>
                <p className="text-zinc-600 text-sm mb-6 line-clamp-2">
                  {product.shortDescription}
                </p>
                <Link 
                  to={`/products/${product.slug}`} 
                  className="inline-flex items-center text-sm font-bold text-[#D34747] hover:text-red-700 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}

          {/* Custom Manufacturing CTA Card */}
          <div className="group bg-zinc-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center p-8 relative">
            <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800')" }} />
            <div className="relative z-10 w-full">
              <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Custom Requirements
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Component?</h3>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Submit your technical drawings and specifications. We manufacture to exact tolerances for specific OEM requirements.
              </p>
              <Link 
                to="/custom-manufacturing" 
                className="inline-flex justify-center items-center px-6 py-3 bg-[#D34747] text-white font-bold rounded-md hover:bg-red-700 transition-colors w-full uppercase tracking-wider text-sm"
              >
                Engineering Request
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
