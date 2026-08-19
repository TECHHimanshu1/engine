import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Quote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setEnquiryRef(`ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-16 h-16 bg-[#D34747]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#D34747]" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Enquiry Received</h2>
          <p className="text-zinc-600 mb-8">
            Thank you. Our engineering/export team will review your requirements and contact you shortly.
          </p>
          <div className="bg-white border border-zinc-200 p-4 rounded-md mb-8 shadow-sm">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Your Reference Number</p>
            <p className="text-xl font-mono text-zinc-900 font-bold">{enquiryRef}</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-[#D34747] font-semibold hover:text-red-700 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Request a Quote</h1>
          <p className="text-zinc-600">Provide your requirements and our team will get back to you with a comprehensive commercial and technical proposal.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors",
                step >= i ? "bg-[#D34747] text-white border-[#D34747]" : "bg-white text-zinc-400 border-zinc-300"
              )}>
                {i}
              </div>
              {i < 3 && (
                <div className={cn(
                  "h-px flex-1 mx-4 transition-colors",
                  step > i ? "bg-[#D34747]" : "bg-zinc-200"
                )} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-xl p-6 md:p-10 shadow-sm">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">What are you looking for?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Pistons', 'Cylinder Liners', 'Piston Rings', 'Piston Pins', 'Bushes', 'Custom Component'].map((item) => (
                  <label key={item} className="flex items-center p-4 border border-zinc-200 rounded-md cursor-pointer hover:bg-zinc-50 transition-colors has-[:checked]:border-[#D34747] has-[:checked]:bg-red-50">
                    <input type="radio" name="product_type" value={item} className="hidden" />
                    <span className="text-zinc-700 font-semibold">{item}</span>
                  </label>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-8 py-3 bg-[#D34747] text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Company Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">First Name</label>
                  <input type="text" required className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Company Name</label>
                  <input type="text" required className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="px-6 py-3 text-zinc-500 font-semibold hover:text-zinc-900 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="button" 
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-[#D34747] text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Technical Requirements & Uploads</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Estimated Quantity</label>
                  <select className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]">
                    <option>Prototype (1-50)</option>
                    <option>Low Volume (50-500)</option>
                    <option>Medium Volume (500-5000)</option>
                    <option>High Volume (5000+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Additional Information</label>
                  <textarea rows={4} className="w-full bg-white border border-zinc-300 rounded-md px-4 py-3 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D34747] focus:border-[#D34747]" placeholder="Please provide any specific material requirements, tolerances, or application details..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Upload Drawings/Specifications</label>
                  <div className="border-2 border-dashed border-zinc-300 rounded-md p-8 text-center hover:bg-zinc-50 transition-colors cursor-pointer bg-zinc-50/50">
                    <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
                    <p className="text-zinc-900 font-semibold text-sm mb-1">Click to upload or drag and drop</p>
                    <p className="text-zinc-500 text-xs">PDF, DWG, DXF, STEP up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-zinc-500 font-semibold hover:text-zinc-900 transition-colors"
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-[#D34747] text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          )}
        </form>

      </div>
    </div>
  );
}
