/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { PistonsPage } from './pages/PistonsPage';
import { CylinderLinersPage } from './pages/CylinderLinersPage';
import { BushPinsPage } from './pages/BushPinsPage';
import { AirCompressorKitsPage } from './pages/AirCompressorKitsPage';
import { ValvesPage } from './pages/ValvesPage';
import { PowerGensetsPage } from './pages/PowerGensetsPage';
import { EngineBearingsPage } from './pages/EngineBearingsPage';
import { GasketsPage } from './pages/GasketsPage';
import { AgriculturalEnginesPage } from './pages/AgriculturalEnginesPage';
import { CrankshaftsPage } from './pages/CrankshaftsPage';
import { ProductDetail } from './pages/ProductDetail';
import { Quote } from './pages/Quote';
import { Quality } from './pages/Quality';
import { About } from './pages/About';
import { Infrastructure } from './pages/Infrastructure';
import { CustomManufacturing } from './pages/CustomManufacturing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { News } from './pages/News';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/pistons', element: <PistonsPage /> },
      { path: 'products/cylinder-liners', element: <CylinderLinersPage /> },
      { path: 'products/bush-pins', element: <BushPinsPage /> },
      { path: 'products/air-compressor-kits', element: <AirCompressorKitsPage /> },
      { path: 'products/valves', element: <ValvesPage /> },
      { path: 'products/power-gensets', element: <PowerGensetsPage /> },
      { path: 'products/engine-bearings', element: <EngineBearingsPage /> },
      { path: 'products/gaskets', element: <GasketsPage /> },
      { path: 'products/agricultural-diesel-engines', element: <AgriculturalEnginesPage /> },
      { path: 'products/crankshafts', element: <CrankshaftsPage /> },
      { path: 'products/:slug', element: <ProductDetail /> },
      { path: 'quote', element: <Quote /> },
      { path: 'quality', element: <Quality /> },
      { path: 'about', element: <About /> },
      { path: 'infrastructure', element: <Infrastructure /> },
      { path: 'custom-manufacturing', element: <CustomManufacturing /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'news', element: <News /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


