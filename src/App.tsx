/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Quote } from './pages/Quote';
import { Manufacturing } from './pages/Manufacturing';
import { Quality } from './pages/Quality';
import { AdminDashboard } from './pages/AdminDashboard';
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
      { path: 'products/:slug', element: <ProductDetail /> },
      { path: 'quote', element: <Quote /> },
      { path: 'manufacturing', element: <Manufacturing /> },
      { path: 'quality', element: <Quality /> },
      { path: 'about', element: <About /> },
      { path: 'infrastructure', element: <Infrastructure /> },
      { path: 'custom-manufacturing', element: <CustomManufacturing /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'news', element: <News /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminDashboard />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
