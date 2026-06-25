export const PROPERTY_TYPES = ['Apartamento', 'Casa', 'Local'];

export const mockProperties = [
  {
    id: 1,
    type: 'Apartamento',
    location: 'Cúcuta • La Playa',
    habitaciones: 2,
    baños: 2,
    areaM2: 68,
    priceCOP: 240000000,
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 2,
    type: 'Casa',
    location: 'Cúcuta • Castañeda',
    habitaciones: 3,
    baños: 2,
    areaM2: 120,
    priceCOP: 410000000,
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 3,
    type: 'Local',
    location: 'Cúcuta • Centro',
    habitaciones: 1,
    baños: 1,
    areaM2: 55,
    priceCOP: 180000000,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 4,
    type: 'Apartamento',
    location: 'Cúcuta • Gran Colombia',
    habitaciones: 3,
    baños: 2,
    areaM2: 92,
    priceCOP: 360000000,
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 5,
    type: 'Casa',
    location: 'Cúcuta • Quinta Oriental',
    habitaciones: 4,
    baños: 3,
    areaM2: 165,
    priceCOP: 560000000,
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id: 6,
    type: 'Apartamento',
    location: 'Cúcuta • Jardín',
    habitaciones: 2,
    baños: 1,
    areaM2: 55,
    priceCOP: 210000000,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=60'
  }
];

export function formatCOP(value){
  return new Intl.NumberFormat('es-CO', { style:'currency', currency:'COP', maximumFractionDigits:0 }).format(value);
}

