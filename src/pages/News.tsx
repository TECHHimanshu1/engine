import { ArrowRight, BookOpen, Clock, Calendar, MapPin, Building, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

const upcomingEvent = {
  title: "Automechanika Frankfurt 2026",
  stallNo: "1.1",
  boothNo: "J26",
  date: "8th–12th September, 2026",
  location: "Messe Frankfurt, Frankfurt am Main, Germany",
  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
  desc: "Join Singhal Industrial Corporation at the world's leading trade fair for the automotive service industry. Discover our high-performance cylinder liners, precision engine pistons, valve guides, and custom casting solutions."
};

const pastEvents = [
  {
    id: 1,
    title: "Automechanika Istanbul 2026",
    location: "Istanbul Expo Center, Turkey",
    date: "23-26 May 2026",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Automechanika New Delhi 2026",
    location: "Pragati Maidan, New Delhi, India",
    date: "1-3 February 2026",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Agritechnika Germany 2025",
    location: "Exhibition Grounds Hannover, Germany",
    date: "9-15 November 2025",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "AM Istanbul 2025",
    location: "TUYAP Fair & Congress Center, Istanbul",
    date: "12-15 June 2025",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
  }
];

const articles = [
  {
    id: 1,
    category: "Knowledge",
    date: "1 August 2025",
    readTime: "5 min read",
    title: "Oversized Pistons Explained: When Your Engine Needs Them and Why They Boost Performance",
    summary: "When engine cylinders wear down or become scored over time, standard pistons lose compression. Learn how reboring cylinders to oversized diameters (+0.25mm, +0.50mm, +1.00mm) paired with Singhal Industrial precision oversized pistons restores engine power, compression ratio, and thermal efficiency.",
    img: "https://images.unsplash.com/photo-1632731149791-238d21c3b177?auto=format&fit=crop&q=80&w=800",
    content: "Engine reconditioning often requires cylinder reboring after high mileage or severe operating wear. Installing precision oversized pistons (+0.25mm to +1.00mm) eliminates blow-by gases, restores cylinder wall oil film retention, and ensures proper compression seal."
  },
  {
    id: 2,
    category: "Technical Guide",
    date: "30 March 2025",
    readTime: "7 min read",
    title: "The Role of High-Quality Auto Parts in Engine Performance & Operating Life",
    summary: "High-temperature combustion chambers demand unyielding metallurgical standards. Discover how Singhal Industrial's 95%+ pearlitic cast iron cylinder liners and ring carrier pistons withstand extreme friction, thermal expansion, and peak cylinder pressures in commercial diesel engines.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    content: "Substandard alloy compositions lead to premature ring groove failure, piston scuffing, and liner cavitation. Utilizing ISO 9001 certified components guarantees microstructural integrity and long service life."
  }
];

export function News() {
  return (
    <div className="w-full bg-white">
      {/* Top Header */}
      <section className="py-12 bg-white text-center border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B] tracking-tight mb-2">
            News & Events
          </h1>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto font-medium">
            Explore global trade fairs, exhibition schedules, and technical automotive engineering guides from {companyConfig.brandName}.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-[#F8FAFC] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Upcoming Events
            </h2>
          </div>

          {/* Featured Upcoming Event Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-md transition-all p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Event Image */}
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-sm h-56 md:h-64 bg-zinc-100 border border-zinc-200">
                <img 
                  src={upcomingEvent.img} 
                  alt={upcomingEvent.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#D34747] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Upcoming Fair
                </div>
              </div>

              {/* Event Details */}
              <div className="md:col-span-7 space-y-4 text-zinc-700">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Visit us at
                </div>
                
                <h3 className="text-xl md:text-2xl font-extrabold text-[#1E293B] leading-snug">
                  {upcomingEvent.title}
                </h3>

                <div className="space-y-1.5 text-xs md:text-sm font-medium text-zinc-700">
                  <div className="flex items-center text-zinc-800">
                    <span className="font-bold text-zinc-900 min-w-[90px]">Stall No.:</span> 
                    <span>{upcomingEvent.stallNo}</span>
                  </div>

                  <div className="flex items-center text-zinc-800">
                    <span className="font-bold text-zinc-900 min-w-[90px]">Booth No.:</span> 
                    <span>{upcomingEvent.boothNo}</span>
                  </div>

                  <div className="flex items-center text-zinc-800">
                    <span className="font-bold text-zinc-900 min-w-[90px]">Date:</span> 
                    <span>{upcomingEvent.date}</span>
                  </div>

                  <div className="flex items-start text-zinc-500 pt-1 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#D34747] mr-1.5 shrink-0 mt-0.5" />
                    <span>{upcomingEvent.location}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link 
                    to="/quote" 
                    className="inline-flex items-center px-5 py-2.5 bg-[#D34747] text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors shadow-sm uppercase tracking-wider"
                  >
                    Schedule Meeting At Stall <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Past Events Gallery
            </h2>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((evt) => (
              <div 
                key={evt.id} 
                className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-zinc-100">
                    <img 
                      src={evt.img} 
                      alt={evt.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {evt.date}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-[#1E293B] mb-1.5 leading-snug group-hover:text-[#D34747] transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 flex items-center font-medium">
                      <MapPin className="w-3 h-3 text-red-500 mr-1 shrink-0" />
                      {evt.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Articles & Knowledge Base */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D34747] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Industry Knowledge
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Technical Guides & Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((art) => (
              <div key={art.id} className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden bg-zinc-100">
                    <span className="absolute top-4 left-4 bg-[#D34747] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      {art.category}
                    </span>
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 mb-3">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {art.date}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-zinc-900 leading-snug mb-3 hover:text-[#D34747] transition-colors cursor-pointer">
                      {art.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed mb-4">{art.summary}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link to="/quote" className="inline-flex items-center text-[#D34747] font-bold text-xs uppercase tracking-wider hover:text-red-700 transition-colors">
                    Inquire About Technical Specifications <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
