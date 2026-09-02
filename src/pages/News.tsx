import { useState } from 'react';
import { ArrowRight, Calendar, Clock, MapPin, X, Images, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  mainImg: string;
  gallery: string[];
}

const pastEvents: EventItem[] = [
  {
    id: 'dubai-2025',
    title: "Automechanika Dubai 2025",
    location: "Dubai World Trade Centre, UAE",
    date: "10–12 December 2025",
    mainImg: "/images/events/dubai_2025/img_1.jpeg",
    gallery: [
      "/images/events/dubai_2025/img_1.jpeg",
      "/images/events/dubai_2025/img_2.jpeg",
      "/images/events/dubai_2025/img_3.jpeg",
      "/images/events/dubai_2025/img_4.jpeg"
    ]
  },
  {
    id: 'dubai-2024',
    title: "Automechanika Dubai 2024",
    location: "Dubai World Trade Centre, UAE",
    date: "10–12 December 2024",
    mainImg: "/images/events/dubai_2024/img_1.jpeg",
    gallery: [
      "/images/events/dubai_2024/img_1.jpeg",
      "/images/events/dubai_2024/img_2.jpeg",
      "/images/events/dubai_2024/img_3.jpeg"
    ]
  },
  {
    id: 'delhi-2024',
    title: "Automechanika New Delhi 2024",
    location: "Pragati Maidan, New Delhi, India",
    date: "1–3 February 2024",
    mainImg: "/images/events/delhi_2024/img_1.jpeg",
    gallery: [
      "/images/events/delhi_2024/img_1.jpeg",
      "/images/events/delhi_2024/img_2.jpeg",
      "/images/events/delhi_2024/img_3.jpeg",
      "/images/events/delhi_2024/img_4.jpeg"
    ]
  },
  {
    id: 'dubai-2023',
    title: "Automechanika Dubai 2023",
    location: "Dubai World Trade Centre, UAE",
    date: "2–4 October 2023",
    mainImg: "/images/events/dubai_2023/img_1.jpeg",
    gallery: [
      "/images/events/dubai_2023/img_1.jpeg",
      "/images/events/dubai_2023/img_2.jpeg",
      "/images/events/dubai_2023/img_3.jpeg",
      "/images/events/dubai_2023/img_4.jpeg",
      "/images/events/dubai_2023/img_5.jpeg",
      "/images/events/dubai_2023/img_6.jpeg"
    ]
  },
  {
    id: 'dubai-2022',
    title: "Automechanika Dubai 2022",
    location: "Dubai World Trade Centre, UAE",
    date: "22–24 November 2022",
    mainImg: "/images/events/dubai_2022/img_1.jpeg",
    gallery: [
      "/images/events/dubai_2022/img_1.jpeg",
      "/images/events/dubai_2022/img_2.jpeg",
      "/images/events/dubai_2022/img_3.jpeg",
      "/images/events/dubai_2022/img_4.jpeg",
      "/images/events/dubai_2022/img_5.jpeg",
      "/images/events/dubai_2022/img_6.jpeg",
      "/images/events/dubai_2022/img_7.jpeg"
    ]
  },
  {
    id: 'istanbul-2022',
    title: "Automechanika Istanbul 2022",
    location: "TUYAP Fair & Congress Center, Istanbul, Turkey",
    date: "2–5 June 2022",
    mainImg: "/images/events/istanbul_2022/img_1.jpeg",
    gallery: [
      "/images/events/istanbul_2022/img_1.jpeg",
      "/images/events/istanbul_2022/img_2.jpeg",
      "/images/events/istanbul_2022/img_3.jpeg",
      "/images/events/istanbul_2022/img_4.jpeg",
      "/images/events/istanbul_2022/img_5.jpeg"
    ]
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
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const openLightbox = (evt: EventItem) => {
    setSelectedEvent(evt);
    setActivePhotoIdx(0);
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
    setActivePhotoIdx(0);
  };

  const prevPhoto = () => {
    if (!selectedEvent) return;
    setActivePhotoIdx((prev) => (prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    if (!selectedEvent) return;
    setActivePhotoIdx((prev) => (prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white">
      {/* Top Header */}
      <section className="py-12 bg-white text-center border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B] tracking-tight mb-2">
            News & Events
          </h1>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto font-medium">
            Explore global trade fairs, exhibition booth photos, and technical automotive engineering guides from {companyConfig.brandName}.
          </p>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Past Events Gallery
            </h2>
            <p className="text-zinc-500 text-xs mt-2">
              Click on any trade fair below to view high-resolution exhibition booth photos.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((evt) => (
              <div 
                key={evt.id} 
                onClick={() => openLightbox(evt)}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-zinc-100">
                    <img 
                      src={evt.mainImg} 
                      alt={evt.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center shadow-md">
                      <Images className="w-3.5 h-3.5 mr-1.5 text-red-400" />
                      {evt.gallery.length} Photos
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-extrabold text-[#1E293B] mb-2 leading-snug group-hover:text-[#D34747] transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-zinc-500 flex items-center font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D34747] mr-1.5 shrink-0" />
                      {evt.location}
                    </p>
                    <p className="text-xs text-zinc-400 flex items-center font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 mr-1.5 shrink-0" />
                      {evt.date}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="inline-flex items-center text-xs font-bold text-[#D34747] group-hover:underline">
                    View Photo Gallery &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Past Event Photos */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{selectedEvent.title}</h3>
                <p className="text-xs text-zinc-400">{selectedEvent.location} • {selectedEvent.date}</p>
              </div>
              <button 
                onClick={closeLightbox}
                className="p-2 bg-zinc-800 text-zinc-300 hover:text-white rounded-full hover:bg-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Photo View */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-4">
              <img 
                src={selectedEvent.gallery[activePhotoIdx]} 
                alt={`${selectedEvent.title} photo ${activePhotoIdx + 1}`} 
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />

              {/* Prev / Next buttons */}
              {selectedEvent.gallery.length > 1 && (
                <>
                  <button 
                    onClick={prevPhoto}
                    className="absolute left-4 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextPhoto}
                    className="absolute right-4 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer / Thumbnails */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
              <div className="text-xs text-zinc-400 font-medium">
                Photo {activePhotoIdx + 1} of {selectedEvent.gallery.length}
              </div>

              {/* Thumbnails row */}
              <div className="flex items-center space-x-2 overflow-x-auto max-w-[60vw] py-1 no-scrollbar">
                {selectedEvent.gallery.map((url, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activePhotoIdx === idx ? 'border-[#D34747] scale-105' : 'border-zinc-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={url} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

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
