
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

interface CartDialogProps {
  setOpen: (open: boolean) => void;
}

const CartDialog = ({ setOpen }: CartDialogProps) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Order placed successfully",
      description: "Thank you for your purchase!",
    });
    clearCart();
    setOpen(false);
  };

  if (cart.length === 0) {
    return (
      <div className="py-6 text-center">
        <p className="text-gray-500">Your cart is empty</p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => setOpen(false)}
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Cart items */}
      <div className="space-y-4 max-h-[50vh] overflow-auto pr-2">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium">₹{(item.price * 83).toFixed(0)}</span>
                <div className="flex items-center gap-2">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="h-7 w-7" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="h-7 w-7" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-7 w-7 text-red-500" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Billing Summary */}
      <div className="space-y-2">
        <h3 className="font-medium">Order Summary</h3>
        
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹{(totalPrice * 83).toFixed(0)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>₹{cart.length > 0 ? '250' : '0'}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>₹{(totalPrice * 0.18 * 83).toFixed(0)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>₹{((totalPrice * 1.18 * 83) + (cart.length > 0 ? 250 : 0)).toFixed(0)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => {
            clearCart();
            toast({
              title: "Cart cleared",
              description: "All items have been removed from your cart",
            });
          }}
        >
          Clear Cart
        </Button>
        <Button 
          className="flex-1"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDialog;
