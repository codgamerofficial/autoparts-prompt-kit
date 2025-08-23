import * as React from "react"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const categories = [
  {
    title: "Engine Parts",
    subcategories: [
      { name: "Air Filters", href: "/category/engine/air-filters" },
      { name: "Oil Filters", href: "/category/engine/oil-filters" },
      { name: "Spark Plugs", href: "/category/engine/spark-plugs" },
      { name: "Belts & Hoses", href: "/category/engine/belts-hoses" },
    ]
  },
  {
    title: "Brake System",
    subcategories: [
      { name: "Brake Pads", href: "/category/brakes/pads" },
      { name: "Brake Rotors", href: "/category/brakes/rotors" },
      { name: "Brake Fluid", href: "/category/brakes/fluid" },
      { name: "Brake Lines", href: "/category/brakes/lines" },
    ]
  },
  {
    title: "Suspension",
    subcategories: [
      { name: "Shocks", href: "/category/suspension/shocks" },
      { name: "Struts", href: "/category/suspension/struts" },
      { name: "Springs", href: "/category/suspension/springs" },
      { name: "Bushings", href: "/category/suspension/bushings" },
    ]
  },
  {
    title: "Electrical",
    subcategories: [
      { name: "Batteries", href: "/category/electrical/batteries" },
      { name: "Alternators", href: "/category/electrical/alternators" },
      { name: "Starters", href: "/category/electrical/starters" },
      { name: "Wiring", href: "/category/electrical/wiring" },
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
]

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full py-6">
          <div className="space-y-4">
            {/* Categories */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Collapsible key={category.title}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                      {category.title}
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 pl-6 pt-2">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>

            <Separator />

            {/* Brands */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Brands</h3>
              <div className="space-y-1">
                {brands.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>

            <Separator />

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
              <div className="space-y-1">
                <a
                  href="/deals"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Deals
                </a>
                <a
                  href="/about"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/help"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}