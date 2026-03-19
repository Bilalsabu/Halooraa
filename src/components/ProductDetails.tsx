import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

const properties = [
  {
    id: "villa-aurora",
    title: "Villa Aurora",
    description: "A stunning contemporary villa featuring panoramic ocean views, infinity pool, and state-of-the-art smart home integration. Experience the pinnacle of luxury living.",
    fullDescription: "Villa Aurora is a masterpiece of modern architecture, designed to seamlessly blend indoor and outdoor living. The property features 5 spacious bedrooms, 7 bathrooms, a chef's kitchen, and a custom-built wine cellar. The expansive outdoor terrace includes a zero-edge infinity pool that appears to drop off into the ocean, providing breathtaking sunset views every evening.",
    image: "https://picsum.photos/seed/villa1/2000/1200",
    gallery: [
      "https://picsum.photos/seed/villa-g1/1000/800",
      "https://picsum.photos/seed/villa-g2/1000/800",
      "https://picsum.photos/seed/villa-g3/1000/800"
    ],
    price: "$12,500,000",
    location: "Beverly Hills, CA",
    specs: {
      beds: 5,
      baths: 7,
      sqft: "8,500"
    }
  },
  {
    id: "the-pinnacle",
    title: "The Pinnacle Penthouse",
    description: "Perched above the city skyline, this exclusive penthouse offers unmatched elegance with floor-to-ceiling windows, private elevator access, and a rooftop terrace.",
    fullDescription: "Occupying the entire top floor of the city's most prestigious residential tower, The Pinnacle Penthouse offers 360-degree views of the skyline. The interior is finished with the finest materials, including imported Italian marble and custom millwork. The private rooftop terrace features a plunge pool, outdoor kitchen, and lounge area perfect for entertaining.",
    image: "https://picsum.photos/seed/penthouse1/2000/1200",
    gallery: [
      "https://picsum.photos/seed/penthouse-g1/1000/800",
      "https://picsum.photos/seed/penthouse-g2/1000/800",
      "https://picsum.photos/seed/penthouse-g3/1000/800"
    ],
    price: "$8,900,000",
    location: "Manhattan, NY",
    specs: {
      beds: 3,
      baths: 4,
      sqft: "4,200"
    }
  },
  {
    id: "serenity-estate",
    title: "Serenity Estate",
    description: "Nestled in a private enclave, this sprawling estate combines classic architecture with modern amenities, featuring lush gardens, a tennis court, and a guest house.",
    fullDescription: "Serenity Estate is a private sanctuary set on 5 acres of meticulously landscaped grounds. The main residence boasts classic European architecture with modern updates throughout. Features include a grand double-height foyer, a wood-paneled library, a state-of-the-art home theater, and an indoor spa. The property also includes a separate 2-bedroom guest house and a championship tennis court.",
    image: "https://picsum.photos/seed/estate1/2000/1200",
    gallery: [
      "https://picsum.photos/seed/estate-g1/1000/800",
      "https://picsum.photos/seed/estate-g2/1000/800",
      "https://picsum.photos/seed/estate-g3/1000/800"
    ],
    price: "$15,200,000",
    location: "Aspen, CO",
    specs: {
      beds: 7,
      baths: 9,
      sqft: "12,000"
    }
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-black)] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Property Not Found</h1>
          <Link to="/" className="text-[var(--color-gold)] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-black)] text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold text-gradient-gold">{property.location}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6">{property.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-8 font-mono text-sm text-white/80 border-y border-white/10 py-6">
              <div><span className="text-[var(--color-gold)]">Price:</span> {property.price}</div>
              <div><span className="text-[var(--color-gold)]">Beds:</span> {property.specs.beds}</div>
              <div><span className="text-[var(--color-gold)]">Baths:</span> {property.specs.baths}</div>
              <div><span className="text-[var(--color-gold)]">Sq Ft:</span> {property.specs.sqft}</div>
            </div>
            
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              {property.fullDescription}
            </p>
            
            <div 
              onClick={() => setIsModalOpen(true)}
              className="p-[1px] bg-gradient-gold rounded-full inline-block self-start group cursor-pointer"
            >
              <button className="bg-[var(--color-black)] text-[var(--color-gold)] px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase flex items-center gap-3 group-hover:bg-transparent group-hover:text-black transition-colors">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif mb-8">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {property.gallery.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden aspect-square">
                <img src={img} alt={`${property.title} gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={`Inquire About ${property.title}`}
      />
    </div>
  );
}
