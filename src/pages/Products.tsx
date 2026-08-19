import { ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const products = [
  { 
    id: '1', 
    slug: 'pistons', 
    name: 'Pistons (Alfin & Steel Strut)', 
    category: 'Engine Components', 
    shortDescription: 'Precision engineered eutectic aluminum pistons with Ni-Resist ring carrier inserts, oil cooling galleries, and moly skirt coatings.', 
    image: '/images/piston_hero.jpg' 
  },
  { 
    id: '2', 
    slug: 'cylinder-liners', 
    name: 'Cylinder Liners (Dry & Wet)', 
    category: 'Engine Components', 
    shortDescription: 'Centrifugally cast grey iron cylinder liners with 95%+ pearlitic micro-structure, plateau honing, and high thermal wear resistance.', 
    image: '/images/cylinder_liners.jpg' 
  },
  { 
    id: '3', 
    slug: 'bush-pins', 
    name: 'Precision Bush Pins', 
    category: 'Machined Parts', 
    shortDescription: 'Induction hardened alloy steel & brass bush pins, precision centerless ground to ±0.003mm tolerance for heavy machinery.', 
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '4', 
    slug: 'piston-rings', 
    name: 'Piston Rings & Pins', 
    category: 'Engine Components', 
    shortDescription: 'Chromium plated and nitrided piston rings paired with case hardened wrist pins for high-pressure combustion sealing.', 
    image: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=800' 
  }
];

export function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pt-20 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block bg-[#D32F2F] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Products Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
            Engineered for Global Excellence
          </h1>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Browse our core catalog of auto and tractor engine parts. We specialize in custom OEM manufacturing based on your CAD drawings or physical samples.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search catalog by component name, specification, or application..." 
              className="w-full bg-white border border-zinc-200 rounded-xl py-3.5 pl-12 pr-4 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white border border-zinc-200/80 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-60 overflow-hidden bg-zinc-50 p-6 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#D32F2F] mb-2">{product.category}</div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{product.name}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link 
                  to={`/products/${product.slug}`} 
                  className="inline-flex items-center text-xs font-bold text-[#D32F2F] hover:text-red-700 transition-colors uppercase tracking-wider"
                >
                  View Details & Specs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}

          {/* Custom Manufacturing CTA Card */}
          <div className="group bg-[#111827] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between text-left p-8 relative">
            <div>
              <div className="inline-block bg-[#D32F2F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Custom OEM Engineering
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Custom Component Orders</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Send us your CAD technical drawings or physical sample components. We produce custom pistons, cylinder liners, and alloy castings to your exact specifications.
              </p>
            </div>
            <Link 
              to="/custom-manufacturing" 
              className="inline-flex justify-center items-center px-6 py-3.5 bg-[#D32F2F] text-white font-bold rounded-xl hover:bg-red-700 transition-colors w-full uppercase tracking-wider text-xs shadow-md"
            >
              Custom Inquiry Request
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
