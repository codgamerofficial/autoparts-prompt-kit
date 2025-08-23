import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    inStock: boolean;
    fitment: string;
    partNumber: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, brand, price, originalPrice, rating, reviewCount, image, inStock, fitment, partNumber } = product;
  
  return (
    <Card className="group hover-lift cursor-pointer border border-border rounded-2xl overflow-hidden">
      <div className="relative aspect-square bg-accent/20 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {!inStock && (
          <Badge variant="destructive" className="absolute top-3 left-3">
            Out of Stock
          </Badge>
        )}
        {originalPrice && originalPrice > price && (
          <Badge className="absolute top-3 left-3 bg-electric text-electric-foreground">
            Sale
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{brand}</p>
          <h3 className="font-semibold text-primary line-clamp-2 leading-tight">{name}</h3>
          <p className="text-xs text-muted-foreground mt-1">Part #{partNumber}</p>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>
        
        <div className="text-xs text-electric font-medium">
          Fits: {fitment}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="btn-electric"
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;