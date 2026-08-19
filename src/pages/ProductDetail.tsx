import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const STATIC_PRODUCTS: Record<string, any> = {
  'cylinder-liners': {
    name: 'Cylinder Liners',
    category: 'Engine Components',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1200',
    description: 'High performance dry, wet and air-cooled liners',
    richDescription: `
      <p class="mb-4">We offer Cylinder Liners, Sleeves, and Air-Cooled Blocks manufactured to OE specifications, upgraded specifications, or specific customer requirements to suit different market needs. Our expertise in design, materials, and manufacturing enables us to deliver high-performance, cost-effective products built to withstand demanding operating conditions.</p>
      <p class="mb-4">Our Cylinder Liners are manufactured from high-quality grey cast iron using the centrifugal casting process, widely regarded as one of the most effective methods for producing durable liners. The process ensures uniform material distribution, a fine-grained structure, excellent wear resistance, and reliable dimensional stability. Special chemical compositions can also be used to enhance corrosion resistance and lubrication performance.</p>
      <p class="mb-4">Our Air-Cooled Cylinder Liners are manufactured using a specialized shell moulding process with close-grained, wear-resistant iron, providing long service life, efficient cooling, and dependable performance even under demanding conditions.</p>
    `,
    applications: ['Commercial Vehicles', 'Tractors', 'Industrial Engines'],
    materials: ['Grey Cast Iron', 'Alloyed Cast Iron']
  },
  'pistons': {
    name: 'Pistons',
    category: 'Engine Components',
    image: 'https://images.unsplash.com/photo-1590218731006-259e86c07222?auto=format&fit=crop&q=80&w=1200',
    description: 'Durable and efficient pistons, alfin and oil-cooled types',
    richDescription: `
      <p class="mb-4">KOMODO Pistons are manufactured from high-strength alloys using advanced manufacturing processes to deliver reliable performance, durability, and dimensional stability under demanding engine conditions.</p>
      <p class="mb-4">Our carefully engineered piston designs combine high thermal conductivity, lightweight construction, and structural strength for efficient engine operation and effective heat dissipation. Enhanced resistance to wear in the ring grooves, piston skirt, and gudgeon pin bore helps maintain critical dimensions and performance throughout the service life. All alloy piston castings undergo controlled heat treatment and ageing to achieve optimum strength and durability.</p>
      <p class="mb-4">With extensive manufacturing and export experience, Singhal Industrial Corporation produces Pistons in a wide range of designs and dimensions, including custom specifications to meet specific customer and market requirements. Manufactured in accordance with international quality standards, KOMODO Pistons are suitable for OEM replacement applications across a broad range of automotive and agricultural engines worldwide.</p>
    `,
    applications: ['Automotive Engines', 'Agricultural Engines', 'Heavy Duty Vehicles'],
    materials: ['High-Strength Alloys', 'Aluminum Matrix']
  },
  'air-compressor-kits': {
    name: 'Air Brake Compressor Kits',
    category: 'Repair Kits',
    image: 'https://images.unsplash.com/photo-1601737786196-856ec85c18b7?auto=format&fit=crop&q=80&w=1200',
    description: 'Complete repair kits including cylinder block, pistons, piston rings',
    richDescription: `
      <p class="mb-4">Heavy-duty air brake compressors produce the pressurized air essential for safe, responsive braking in trucks, buses and trailers. Complete repair kits including cylinder block, pistons, and piston rings are available.</p>
      <p class="mb-4">A faulty or neglected compressor leads to low air pressure, brake lag and dangerous overheating. Singhal Industrial compressor repair kits deliver OEM-grade reliability and durability, keeping your fleet safe with regular maintenance and quality parts.</p>
    `,
    applications: ['Commercial Trucks', 'Buses', 'Trailers'],
    materials: ['OE Grade Steel', 'Premium Cast Iron']
  }
};

export function ProductDetail() {
  const { slug } = useParams();
  
  // Try to find in our static detailed list, otherwise fallback to a generic display
  const product = slug ? STATIC_PRODUCTS[slug] : null;

  if (!product) {
    return (
      <div className="w-full pt-32 pb-24 min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">Product Category Details Coming Soon</h1>
        <p className="text-zinc-500 mb-8">We are updating our catalog for this category.</p>
        <Link to="/products" className="text-[#D34747] font-semibold hover:text-red-700 transition-colors">Return to Products</Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <Link to="/products" className="inline-flex items-center text-sm font-bold text-zinc-500 hover:text-[#D34747] transition-colors mb-12 uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="inline-block bg-zinc-100 text-zinc-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 mb-6">{product.name}</h1>
            
            {product.richDescription ? (
              <div 
                className="prose prose-lg text-zinc-600 mb-10"
                dangerouslySetInnerHTML={{ __html: product.richDescription }}
              />
            ) : (
              <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                {product.description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-200 pb-2">Primary Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((app: string) => (
                    <li key={app} className="flex items-start text-zinc-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-[#3FB6C6] shrink-0 mt-0.5" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-200 pb-2">Available Materials</h3>
                <ul className="space-y-3">
                  {product.materials.map((mat: string) => (
                    <li key={mat} className="flex items-start text-zinc-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-[#3FB6C6] shrink-0 mt-0.5" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Ready to order?</h3>
              <p className="text-sm text-zinc-500 mb-6">Our engineering team is ready to discuss your volume requirements or custom specifications.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="inline-flex justify-center items-center px-6 py-3 bg-[#D34747] text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
                  Request a Quote
                </Link>
                <Link to="/custom-manufacturing" className="inline-flex justify-center items-center px-6 py-3 bg-transparent border border-zinc-300 text-zinc-700 font-semibold rounded-md hover:bg-zinc-100 transition-colors">
                  Custom Requirement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
