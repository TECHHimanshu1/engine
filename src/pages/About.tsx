import { companyConfig } from '../config';

export function About() {
  return (
    <div className="w-full pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#D34747] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Company</h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            {companyConfig.name}, established in 1966, is a trusted name in the global automotive and agricultural aftermarket, with more than six decades of experience in manufacturing, sourcing, and exporting high-quality engine spare parts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="prose prose-lg text-zinc-600">
            <p>
              Over the years, we have built lasting relationships with customers across international markets through our commitment to quality, reliability, technical expertise, and dependable customer service.
            </p>
            <p>
              Our aftermarket brand, <strong>{companyConfig.brandName}</strong>, represents our commitment to delivering reliable, high-performance engine components for a wide range of automotive, commercial vehicle, and agricultural applications.
            </p>
            <p>
              We manufacture and supply a comprehensive range of engine components, including Cylinder Liners, Pistons, Piston Rings, Engine Valves, Valve Guides, Gaskets, and other critical engine spare parts. Our manufacturing and machining capabilities, supported by a carefully selected network of suppliers, allow us to offer a broad range of products and applications to customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-100 rounded-xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Factory interior" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
            <div className="bg-zinc-100 rounded-xl overflow-hidden h-64 mt-8">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="Engine components" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
          </div>
        </div>

        <div className="bg-[#f4f6f8] rounded-2xl p-8 md:p-16 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">Commitment to Quality</h2>
            <div className="prose prose-lg text-zinc-600 mx-auto">
              <p>
                At {companyConfig.name}, quality is built into every stage of our operations. Products manufactured in-house as well as those sourced from approved suppliers undergo rigorous quality checks, dimensional inspection, and value-adding processes before reaching our customers. This enables us to maintain consistent standards across our product range and markets.
              </p>
              <blockquote className="border-l-4 border-[#D34747] pl-6 my-8 text-xl font-medium text-zinc-900 italic">
                We strongly believe that quality is never an accident—it is the result of disciplined processes, continuous improvement, technical expertise, and an uncompromising commitment to excellence.
              </blockquote>
              <p>
                Our experienced team, skilled manufacturing workforce, machining capabilities, and dedicated warehousing facilities in Agra, India, provide us with the infrastructure and expertise required to serve customers across international markets.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-zinc-950 rounded-2xl overflow-hidden text-white">
          <div className="p-12 md:p-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              With over 60 years of industry experience, {companyConfig.name} continues to strengthen its global presence through {companyConfig.brandName}, combining traditional expertise with modern manufacturing practices and a forward-looking approach to the aftermarket.
            </p>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Our mission is simple: to deliver dependable engine parts, create lasting customer relationships, and be a trusted global partner for automotive and agricultural spare parts.
            </p>
            <div className="pt-8 border-t border-white/10">
              <p className="font-bold text-xl uppercase tracking-wider mb-2">{companyConfig.name}</p>
              <p className="text-zinc-500 mb-6">Established 1966 | Agra, India</p>
              <div className="inline-block bg-[#D34747] text-white px-4 py-2 rounded-sm font-bold text-sm">
                {companyConfig.brandName} - Built for Performance. Trusted for Quality.
              </div>
            </div>
          </div>
          <div className="h-full min-h-[400px] relative">
            <img src="https://images.unsplash.com/photo-1563725515259-78170c91ba1e?auto=format&fit=crop&q=80&w=1200" alt="Mission and Vision" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
