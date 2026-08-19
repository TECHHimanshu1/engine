export function Infrastructure() {
  const facilities = [
    { name: 'Advanced CNC Machining', desc: 'Multi-axis turning centers ensuring consistent dimensional accuracy across high-volume production runs.', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800' },
    { name: 'Casting Foundry', desc: 'Centrifugal and gravity die casting capabilities with automated pouring and cooling for optimal grain structure.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800' },
    { name: 'Metallurgical Lab', desc: 'Spectrographic chemical analysis and microscopic grain structure validation.', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="w-full pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Facilities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Manufacturing Infrastructure.</h1>
          <p className="text-lg text-zinc-600">
            A vertically integrated facility allowing total control over the manufacturing process, from raw alloy melting to final precision honing.
          </p>
        </div>

        <div className="space-y-24">
          {facilities.map((fac, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 p-2 bg-zinc-50 border border-zinc-100 rounded-2xl">
                <img src={fac.img} alt={fac.name} className="w-full h-80 object-cover rounded-xl" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">{fac.name}</h3>
                <p className="text-zinc-600 text-lg leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
