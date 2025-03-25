
import { useState } from 'react';
import { Plus, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export function ProductCard({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category, 
  isNew = false 
}: ProductProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className="product-card bg-white rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-square">
        {/* Loading placeholder */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="loader"></div>
          </div>
        )}
        
        {/* Product image with blur-up loading */}
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-600 ease-apple",
            isHovering ? "scale-105" : "scale-100",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
            New
          </div>
        )}
        
        {/* Hover actions */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/5 flex items-center justify-center gap-2 transition-opacity duration-300",
            isHovering ? "opacity-100" : "opacity-0"
          )}
        >
          <Button 
            size="icon" 
            className="bg-white hover:bg-white text-black rounded-full w-10 h-10"
            aria-label="Add to cart"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="outline" 
            className="bg-white/80 hover:bg-white border-transparent hover:border-gray-200 text-black rounded-full w-10 h-10"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{name}</h3>
          <span className="font-medium">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          {category}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
