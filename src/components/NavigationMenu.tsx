import * as React from "react"
import { ChevronDown, Package, Wrench, Car, Zap, Settings, Phone } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Engine Parts",
    href: "/category/engine",
    description: "Complete engine components and accessories",
    icon: Settings,
    subcategories: [
      { name: "Air Filters", href: "/category/engine/air-filters" },
      { name: "Oil Filters", href: "/category/engine/oil-filters" },
      { name: "Spark Plugs", href: "/category/engine/spark-plugs" },
      { name: "Belts & Hoses", href: "/category/engine/belts-hoses" },
    ]
  },
  {
    title: "Brake System",
    href: "/category/brakes",
    description: "Brake pads, rotors, and complete brake systems",
    icon: Package,
    subcategories: [
      { name: "Brake Pads", href: "/category/brakes/pads" },
      { name: "Brake Rotors", href: "/category/brakes/rotors" },
      { name: "Brake Fluid", href: "/category/brakes/fluid" },
      { name: "Brake Lines", href: "/category/brakes/lines" },
    ]
  },
  {
    title: "Suspension",
    href: "/category/suspension",
    description: "Shocks, struts, and suspension components",
    icon: Car,
    subcategories: [
      { name: "Shocks", href: "/category/suspension/shocks" },
      { name: "Struts", href: "/category/suspension/struts" },
      { name: "Springs", href: "/category/suspension/springs" },
      { name: "Bushings", href: "/category/suspension/bushings" },
    ]
  },
  {
    title: "Electrical",
    href: "/category/electrical",
    description: "Batteries, alternators, and electrical components",
    icon: Zap,
    subcategories: [
      { name: "Batteries", href: "/category/electrical/batteries" },
      { name: "Alternators", href: "/category/electrical/alternators" },
      { name: "Starters", href: "/category/electrical/starters" },
      { name: "Wiring", href: "/category/electrical/wiring" },
    ]
  },
  {
    title: "Tools & Equipment",
    href: "/category/tools",
    description: "Professional automotive tools and equipment",
    icon: Wrench,
    subcategories: [
      { name: "Hand Tools", href: "/category/tools/hand-tools" },
      { name: "Power Tools", href: "/category/tools/power-tools" },
      { name: "Diagnostic", href: "/category/tools/diagnostic" },
      { name: "Lifts & Jacks", href: "/category/tools/lifts-jacks" },
    ]
  },
]

const brands = [
  { name: "Toyota", href: "/brand/toyota" },
  { name: "Honda", href: "/brand/honda" },
  { name: "Ford", href: "/brand/ford" },
  { name: "Chevrolet", href: "/brand/chevrolet" },
  { name: "BMW", href: "/brand/bmw" },
  { name: "Mercedes-Benz", href: "/brand/mercedes" },
  { name: "Audi", href: "/brand/audi" },
  { name: "Nissan", href: "/brand/nissan" },
]

const support = [
  { name: "Help Center", href: "/help" },
  { name: "Track Order", href: "/track-order" },
  { name: "Returns", href: "/returns" },
  { name: "Shipping Info", href: "/shipping" },
  { name: "Installation Guide", href: "/installation" },
  { name: "Contact Us", href: "/contact" },
]

export function MainNavigationMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Shop Categories */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-primary hover:text-electric transition-smooth font-medium">
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[800px] grid-cols-2">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary mb-4">Categories</h4>
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <div key={category.title} className="group">
                      <NavigationMenuLink
                        href={category.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5 text-electric group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-sm font-medium leading-none">{category.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                      <div className="ml-8 mt-2 space-y-1">
                        {category.subcategories.map((sub) => (
                          <NavigationMenuLink
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-muted-foreground hover:text-electric transition-colors py-1"
                          >
                            {sub.name}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary mb-4">Popular Brands</h4>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <NavigationMenuLink
                      key={brand.name}
                      href={brand.href}
                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                    >
                      {brand.name}
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Brands */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-electric transition-smooth">
            Brands
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px] grid-cols-2">
              {brands.map((brand) => (
                <NavigationMenuLink
                  key={brand.name}
                  href={brand.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{brand.name}</div>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Deals */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/deals" className={navigationMenuTriggerStyle()}>
            <span className="text-muted-foreground hover:text-electric transition-smooth">Deals</span>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
            <span className="text-muted-foreground hover:text-electric transition-smooth">About</span>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Support */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-electric transition-smooth">
            Support
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[300px]">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-5 w-5 text-electric" />
                <div>
                  <div className="text-sm font-medium">Need Help?</div>
                  <div className="text-sm text-muted-foreground">Call 1-800-AUTOPARTS</div>
                </div>
              </div>
              {support.map((item) => (
                <NavigationMenuLink
                  key={item.name}
                  href={item.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{item.name}</div>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}