import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

const articles = [
  {
    id: 1,
    category: "Knowledge",
    date: "1 August 2025",
    readTime: "5 min read",
    title: "Oversized Pistons Explained: When Your Engine Needs Them and Why They Boost Performance",
    summary: "When engine cylinders wear down or become scored over time, standard pistons lose compression. Learn how reboring cylinders to oversized diameters (+0.25mm, +0.50mm, +1.00mm) paired with Tracko precision oversized pistons restores engine power, compression ratio, and thermal efficiency.",
    img: "https://images.unsplash.com/photo-1632731149791-238d21c3b177?auto=format&fit=crop&q=80&w=800",
    content: "Engine reconditioning often requires cylinder reboring after high mileage or severe operating wear. Installing precision oversized pistons (+0.25mm to +1.00mm) eliminates blow-by gases, restores cylinder wall oil film retention, and ensures proper compression seal."
  },
  {
    id: 2,
    category: "Technical Guide",
    date: "30 March 2025",
    readTime: "7 min read",
    title: "The Role of High-Quality Auto Parts in Engine Performance & Operating Life",
    summary: "High-temperature combustion chambers demand unyielding metallurgical standards. Discover how Tracko's 95%+ pearlitic cast iron cylinder liners and Alfin ring carrier pistons withstand extreme friction, thermal expansion, and peak cylinder pressures in commercial diesel engines.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    content: "Substandard alloy compositions lead to premature ring groove failure, piston scuffing, and liner cavitation. Utilizing ISO 9001 certified components guarantees microstructural integrity and long service life."
  }
];

export function News() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 mr-1" /> Industry Knowledge
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              News, Articles & Technical Insights
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Explore technical guides, metallurgical insights, and automotive engineering articles from {companyConfig.brandName}.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {articles.map((art) => (
              <div key={art.id} className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <span className="absolute top-4 left-4 bg-[#D32F2F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      {art.category}
                    </span>
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 mb-3">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {art.date}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {art.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-zinc-900 leading-snug mb-4 hover:text-[#D32F2F] transition-colors cursor-pointer">
                      {art.title}
                    </h2>
                    <p className="text-zinc-600 text-xs leading-relaxed mb-6">{art.summary}</p>
                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700 leading-relaxed mb-6 font-medium">
                      {art.content}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link to="/quote" className="inline-flex items-center text-[#D32F2F] font-bold text-xs uppercase tracking-wider hover:text-red-700 transition-colors">
                    Inquire About Technical Specifications <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
