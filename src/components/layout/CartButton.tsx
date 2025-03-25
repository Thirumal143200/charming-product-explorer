
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';

export function CartButton() {
  const { totalItems } = useCart();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="relative"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="h-4 w-4" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}

export default CartButton;
