import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

interface CartDrawerProps {
  children: React.ReactNode;
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const { user } = useAuth();
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (!user) return <>{children}</>;

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {cartCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {cartCount === 0 ? 'Your cart is empty' : 'Review your items before checkout'}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {cartCount === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent/20 rounded-lg overflow-hidden">
                      {item.product.image_url && (
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                      {item.product.part_number && (
                        <p className="text-xs text-muted-foreground">Part #{item.product.part_number}</p>
                      )}
                      <p className="font-semibold text-sm">${item.product.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity({ itemId: item.id, quantity: item.quantity - 1 })}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity({ itemId: item.id, quantity: item.quantity + 1 })}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;