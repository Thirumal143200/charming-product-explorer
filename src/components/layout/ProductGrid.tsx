
import { ProductCard, ProductProps } from './ProductCard';

// Sample product data
const products: ProductProps[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    description: "Elegant design with adjustable lighting",
    price: 129,
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Lighting",
    isNew: true
  },
  {
    id: "2",
    name: "Ceramic Mug Set",
    description: "Set of 4 handcrafted ceramic mugs",
    price: 59,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Kitchenware"
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    description: "Premium sound quality with noise cancellation",
    price: 199,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Audio",
    isNew: true
  },
  {
    id: "4",
    name: "Minimalist Watch",
    description: "Swiss movement with sapphire crystal",
    price: 249,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1999&q=80",
    category: "Accessories"
  },
  {
    id: "5",
    name: "Smart Home Hub",
    description: "Control all your devices from one place",
    price: 179,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1741&q=80",
    category: "Technology"
  },
  {
    id: "6",
    name: "Wooden Desk Organizer",
    description: "Handcrafted from sustainable bamboo",
    price: 49,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
    category: "Office"
  }
];

interface ProductGridProps {
  title: string;
  description?: string;
}

export function ProductGrid({ title, description }: ProductGridProps) {
  return (
    <section id="products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 reveal-text">{title}</h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto reveal-text reveal-text-delay-1">{description}</p>
          )}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
