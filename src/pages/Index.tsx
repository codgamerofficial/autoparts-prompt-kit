import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleSelector from "@/components/VehicleSelector";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import TrustBadge from "@/components/TrustBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Search, Wrench, Shield } from "lucide-react";
import { useFeaturedProducts, useCategories } from "@/hooks/useProducts";
import heroBg from "@/assets/hero-bg.jpg";
import brakePad from "@/assets/brake-pad.jpg";
import airFilter from "@/assets/air-filter.jpg";
import oilFilter from "@/assets/oil-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";

const Index = () => {
  const { data: featuredProducts = [], isLoading: productsLoading } = useFeaturedProducts();
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();

  // Fallback data for image mapping
  const getProductImage = (imageUrl?: string) => {
    if (imageUrl?.includes('brake-pad')) return brakePad;
    if (imageUrl?.includes('air-filter')) return airFilter;
    if (imageUrl?.includes('oil-filter')) return oilFilter;
    if (imageUrl?.includes('spark-plugs')) return sparkPlugs;
    return brakePad; // default fallback
  };

  // Transform database products to component format
  const transformedProducts = featuredProducts.map(product => ({
    id: product.id,
    name: product.name,
    brand: product.brand,
    price: product.price,
    originalPrice: product.original_price,
    rating: product.rating,
    reviewCount: product.review_count,
    image: getProductImage(product.image_url),
    inStock: product.in_stock,
    fitment: product.fitment || "Universal",
    partNumber: product.part_number || "N/A"
  }));

  const brands = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi", "Nissan"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-fade-in">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-electric text-electric-foreground px-4 py-1 text-sm font-medium">
                Trusted by 50,000+ Mechanics
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Find the Right Parts<br />
                <span className="text-electric">for Your Vehicle</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Premium OEM and aftermarket auto parts with fast shipping, expert support, and guaranteed fitment.
              </p>
            </div>
            
            <div className="search-slide-up">
              <VehicleSelector />
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Guaranteed Fitment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 fill-current" />
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <TrustBadge />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Top-rated parts trusted by professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {productsLoading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-4 animate-pulse stagger-fade-in">
                  <div className="aspect-square bg-accent rounded-lg mb-4"></div>
                  <div className="h-4 bg-accent rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-accent rounded w-1/2"></div>
                </div>
              ))
            ) : (
              transformedProducts.map((product) => (
                <div key={product.id} className="stagger-fade-in">
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find exactly what you need for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse stagger-fade-in">
                  <div className="aspect-video bg-accent rounded-lg mb-4"></div>
                  <div className="h-4 bg-accent rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-accent rounded w-1/2"></div>
                </div>
              ))
            ) : (
              categories.map((category, index) => (
                <div key={index} className="stagger-fade-in">
                  <CategoryCard 
                  key={index} 
                  category={{
                    name: category.name,
                    description: category.description || "",
                    image: category.image_url || "/api/placeholder/300/200",
                    productCount: category.product_count
                  }} 
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Top Brands</h2>
            <p className="text-muted-foreground text-lg">Genuine OEM and premium aftermarket parts</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="group cursor-pointer stagger-fade-in">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover-lift">
                  <h3 className="font-semibold text-primary group-hover:text-electric transition-smooth">
                    {brand}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Need Help Finding Parts?</h2>
            <p className="text-xl text-white/90">
              Our certified automotive experts are here to help you find the perfect parts for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-electric-foreground">
                Call 1-800-AUTOPARTS
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
