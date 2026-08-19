import { companyConfig } from '../config';

export function PrivacyPolicy() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg prose-zinc max-w-none text-zinc-600">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">1. Information We Collect</h2>
          <p className="mb-4">
            At {companyConfig.name}, we collect information that you provide directly to us when requesting a quotation, submitting engineering drawings, or contacting our sales team. This includes your name, company name, email address, phone number, and any technical documents you upload.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Process and respond to your quotation requests.</li>
            <li>Review engineering drawings and technical specifications for manufacturing feasibility.</li>
            <li>Communicate with you regarding your orders, production status, and logistics.</li>
            <li>Improve our products and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">3. Data Security and Confidentiality</h2>
          <p className="mb-4">
            We understand the sensitive nature of OEM drawings and technical specifications. We implement appropriate technical and organizational measures to protect your intellectual property and personal data against unauthorized access, alteration, disclosure, or destruction. We do not sell or rent your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${companyConfig.email}`} className="text-[#D34747] font-semibold">{companyConfig.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
