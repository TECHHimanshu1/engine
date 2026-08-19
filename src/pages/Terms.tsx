import { companyConfig } from '../config';

export function Terms() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg prose-zinc max-w-none text-zinc-600">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing this website and utilizing our manufacturing services, you agree to be bound by these Terms and Conditions. {companyConfig.name} reserves the right to modify these terms at any time.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">2. Quotations and Orders</h2>
          <p className="mb-4">
            All quotations provided via our website or email are valid for 30 days unless otherwise specified. A binding contract is only formed upon our formal acceptance of your purchase order.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">3. Manufacturing Tolerances and Quality</h2>
          <p className="mb-4">
            Components are manufactured according to the mutually agreed technical specifications, drawings, and internationally recognized manufacturing standards. Minor variations within acceptable engineering tolerances shall not be grounds for rejection.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">4. Intellectual Property</h2>
          <p className="mb-4">
            All engineering drawings, CAD models, and technical specifications provided by the customer remain the intellectual property of the customer. {companyConfig.name} will only use these materials for the purpose of fulfilling the requested manufacturing services.
          </p>
          
          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">5. Liability</h2>
          <p className="mb-4">
            Our liability for defective components is strictly limited to the replacement of the defective parts or a refund of the purchase price, at our discretion. We are not liable for consequential losses, downtime, or damage to other equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
