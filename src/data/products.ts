export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  applications: string[];
  materials: string[];
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'High-Performance Pistons',
    slug: 'high-performance-pistons',
    shortDescription: 'Engineered for durability, thermal stability and efficient combustion.',
    description: 'Our pistons are manufactured using advanced casting and forging techniques, ensuring exceptional strength and thermal conductivity. Designed to withstand high cylinder pressures and temperatures in modern diesel and gasoline engines.',
    category: 'Pistons',
    image: 'https://images.unsplash.com/photo-1590218731006-259e86c07222?auto=format&fit=crop&q=80&w=800',
    applications: ['Heavy-Duty Commercial', 'Agricultural Equipment', 'Marine Engines'],
    materials: ['Aluminium Alloy', 'Forged Steel', 'Cast Iron'],
  },
  {
    id: '2',
    name: 'Precision Cylinder Liners',
    slug: 'precision-cylinder-liners',
    shortDescription: 'Machined liners designed for dimensional accuracy and long service life.',
    description: 'We manufacture both dry and wet cylinder liners using centrifugally cast iron for superior wear resistance. The cross-hatch honing ensures optimal oil retention and reduced ring wear.',
    category: 'Cylinder Liners',
    image: 'https://images.unsplash.com/photo-1620063231662-7901cb009085?auto=format&fit=crop&q=80&w=800',
    applications: ['Passenger Vehicles', 'Generators', 'Industrial Engines'],
    materials: ['Centrifugally Cast Iron', 'Alloy Cast Iron'],
  },
  {
    id: '3',
    name: 'Compression Piston Rings',
    slug: 'compression-piston-rings',
    shortDescription: 'Engineered sealing solutions designed to support compression.',
    description: 'Our piston rings are designed for maximum sealing efficiency and minimal friction. Available with various coatings including chrome, molybdenum, and nitriding to suit specific operating environments.',
    category: 'Piston Rings',
    image: 'https://images.unsplash.com/photo-1536417724391-76495b45c225?auto=format&fit=crop&q=80&w=800',
    applications: ['Automotive', 'Heavy Machinery', 'Locomotives'],
    materials: ['Cast Iron', 'Steel', 'Ductile Iron'],
  },
  {
    id: '4',
    name: 'Hardened Piston Pins',
    slug: 'hardened-piston-pins',
    shortDescription: 'Precision pins manufactured for demanding mechanical loads.',
    description: 'Manufactured from high-grade alloy steel and case-hardened for a tough core and wear-resistant surface. Centerless ground and lapped for precise fit and finish.',
    category: 'Piston Pins',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800',
    applications: ['High-Performance Engines', 'Diesel Engines'],
    materials: ['Alloy Steel', 'Case-Hardened Steel'],
  }
];
