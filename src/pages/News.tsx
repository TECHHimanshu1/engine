import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'Oversized Pistons Explained: When Your Engine Needs Them and Why They Boost Performance',
    date: '1 Aug 2025',
    category: 'Knowledge',
    excerpt: 'Understanding the mechanics of oversized pistons and when they are the right choice for engine rebuilds and performance enhancements.',
    image: 'https://images.unsplash.com/photo-1632731149791-238d21c3b177?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'The Role of High-Quality Auto Parts in Engine Performance',
    date: '30 Mar 2025',
    category: 'Knowledge',
    excerpt: 'A deep dive into how OEM-grade components directly impact fuel efficiency, horsepower, and overall engine longevity.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Singhal Industrial Corporation Expands Centrifugal Casting Capacity',
    date: '15 Jan 2025',
    category: 'Company News',
    excerpt: 'To meet growing global demand, we have added three new automated centrifugal casting lines for heavy-duty cylinder liners.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Understanding ISO 9001:2015 Certification in Auto Parts Manufacturing',
    date: '12 Nov 2024',
    category: 'Quality',
    excerpt: 'What our recent ISO recertification means for our OEM partners and the rigorous audits required to maintain compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  }
];

export function News() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#D34747] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Updates & Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">News & Events</h1>
          <p className="text-lg text-zinc-600">
            Stay up to date with the latest product releases, technical insights, and company announcements from Singhal Industrial Corporation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-56 overflow-hidden bg-zinc-100">
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-zinc-800 z-10 shadow-sm uppercase tracking-wider">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm font-semibold text-zinc-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-[#D34747]" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-[#D34747] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center text-sm font-bold text-zinc-900 hover:text-[#D34747] transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
