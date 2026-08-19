import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { companyConfig } from '../config';

export function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productCategory: 'Pistons',
    quantity: '300',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-zinc-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-zinc-900 to-zinc-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Clock className="w-4 h-4 mr-1" /> Fast Response Within 24 Hrs
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Contact Us / Get a Quote
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Reach out to {companyConfig.brandName} for product pricing, technical catalogs, custom manufacturing inquiries, or OEM partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <span className="text-[#D32F2F] text-xs font-extrabold uppercase tracking-widest block mb-2">
                  Direct Communication
                </span>
                <h2 className="text-2xl font-extrabold text-zinc-900 mb-6">
                  Tracko International Office
                </h2>
                <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                  Our sales and engineering offices in Agra are available Monday through Saturday to discuss your engine part needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] mr-4 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">Factory & Office Address</div>
                    <div className="text-zinc-600 text-xs leading-relaxed">{companyConfig.address}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] mr-4 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">Phone / WhatsApp</div>
                    <a href={`tel:${companyConfig.phone}`} className="text-zinc-600 text-xs font-semibold hover:text-[#D32F2F] transition-colors">{companyConfig.phone}</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] mr-4 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 text-sm mb-1">Direct Email</div>
                    <a href={`mailto:${companyConfig.email}`} className="text-zinc-600 text-xs font-semibold hover:text-[#D32F2F] transition-colors">{companyConfig.email}</a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs space-y-3">
                <div className="font-bold text-zinc-900 flex items-center">
                  <ShieldCheck className="w-4 h-4 text-[#D32F2F] mr-2" /> Minimum Order Quantity
                </div>
                <div className="text-zinc-600">Standard MOQ: 300 pieces per part line item. Custom packaging available for bulk orders.</div>
              </div>
            </div>

            {/* Quote Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-xl">
                <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">Request Technical Quote</h3>
                <p className="text-zinc-500 text-xs mb-8">Fill out the inquiry form below and our technical export manager will reach out to you within 24 hours.</p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-red-50 border border-red-100 text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
                    <h4 className="text-xl font-extrabold text-zinc-900 mb-2">Thank You for Reaching Out!</h4>
                    <p className="text-zinc-600 text-xs leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received by Tracko International. Our sales engineering team at <strong>{companyConfig.email}</strong> will review your request and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 555 0192 283"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Company / Organization</label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Product Line Interest</label>
                        <select 
                          value={formData.productCategory}
                          onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium bg-white"
                        >
                          <option value="Pistons">Engine Pistons (Alfin / Steel Strut / Conventional)</option>
                          <option value="Cylinder Liners">Cylinder Liners (Dry / Wet / Finned)</option>
                          <option value="Custom Manufacturing">Custom Casting & CNC Machining</option>
                          <option value="Bush Pins">Precision Bush Pins & Rings</option>
                          <option value="Piston Rings">Piston Rings & Pins</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Estimated Quantity (Pcs)</label>
                        <input 
                          type="text" 
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 300 Pcs"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">Inquiry / Specifications Details *</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include engine make, model numbers, bore sizes, or drawing references if available..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-[#D32F2F] text-xs font-medium"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
