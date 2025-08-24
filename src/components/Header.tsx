import { Search, ShoppingCart, User, Heart, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNavigationMenu } from "@/components/NavigationMenu";
import { MobileMenu } from "@/components/MobileMenu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  
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
            <ModeToggle />
            {user ? (
              <>
                <span className="text-sm text-muted-foreground hidden sm:block">
                  Welcome, {user.email?.split('@')[0]}
                </span>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-electric text-electric-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center pulse-glow">
                    0
                  </span>
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={signOut}
                  className="text-foreground hover:text-electric"
                  title="Sign Out"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-electric text-electric-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center pulse-glow">
                    0
                  </span>
                </Button>
                <Link to="/auth">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            )}
            <MobileMenu />
          </div>
        </div>
        
        {/* Navigation */}
        <div className="py-4 border-t border-border">
          <MainNavigationMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;