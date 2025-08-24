import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  category: {
    name: string;
    description: string;
    image: string;
    productCount: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="group hover-lift hover-glow cursor-pointer border border-border rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] bg-accent/20 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-spring"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent group-hover:from-primary/80 transition-smooth" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm opacity-90">{category.productCount} products</p>
          </div>
          <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-white group-hover:translate-x-2 transition-spring" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;