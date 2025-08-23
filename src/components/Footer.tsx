import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = {
    shop: [
      "All Categories",
      "Engine Parts",
      "Brake System", 
      "Suspension",
      "Exhaust System",
      "Electrical"
    ],
    support: [
      "Help Center",
      "Track Order",
      "Returns",
      "Shipping Info",
      "Installation Guide",
      "Contact Us"
    ],
    company: [
      "About AutoParts",
      "Careers",
      "Press",
      "Blog",
      "Wholesale",
      "Affiliate Program"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-primary-foreground/80">Get the latest deals and automotive tips delivered to your inbox.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-electric hover:bg-electric/90 text-electric-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground text-primary p-2 rounded-lg">
                <span className="font-bold text-xl">AP</span>
              </div>
              <span className="font-bold text-xl">AutoParts</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted source for quality auto parts. We've been serving mechanics and car enthusiasts across the US for over 20 years with genuine OEM and premium aftermarket parts.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-2">
              {links.shop.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/10" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AutoParts. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;