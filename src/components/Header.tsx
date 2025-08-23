import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-electric text-electric-foreground text-center py-2 text-sm font-medium">
        Free Shipping on Orders Over $99 • Fast US Delivery • 30-Day Returns
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <span className="font-bold text-xl">AP</span>
            </div>
            <span className="font-bold text-xl text-primary">AutoParts</span>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 focus:border-electric"
                placeholder="Search by part #, vehicle, or keyword..."
              />
            </div>
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-electric text-electric-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t border-border">
          <a href="#" className="text-primary hover:text-electric transition-smooth font-medium">Shop</a>
          <a href="#" className="text-muted-foreground hover:text-electric transition-smooth">Brands</a>
          <a href="#" className="text-muted-foreground hover:text-electric transition-smooth">Categories</a>
          <a href="#" className="text-muted-foreground hover:text-electric transition-smooth">Deals</a>
          <a href="#" className="text-muted-foreground hover:text-electric transition-smooth">About</a>
          <a href="#" className="text-muted-foreground hover:text-electric transition-smooth">Support</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;