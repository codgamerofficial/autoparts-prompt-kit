import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Shield, Truck } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import brakePad from "@/assets/brake-pad.jpg";
import airFilter from "@/assets/air-filter.jpg";
import oilFilter from "@/assets/oil-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";

const BrandPage = () => {
  const { brand } = useParams();
  const { data: products = [], isLoading } = useProducts();

  const getProductImage = (imageUrl?: string) => {
    if (imageUrl?.includes('brake-pad')) return brakePad;
    if (imageUrl?.includes('air-filter')) return airFilter;
    if (imageUrl?.includes('oil-filter')) return oilFilter;
    if (imageUrl?.includes('spark-plugs')) return sparkPlugs;
    return brakePad;
  };

  // Filter products by brand
  const brandProducts = products.filter(product => 
    product.brand.toLowerCase() === brand?.toLowerCase()
  );

  const transformedProducts = brandProducts.map(product => ({
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

  const brandTitle = brand?.charAt(0).toUpperCase() + brand?.slice(1);

  const brandInfo = {
    description: `Discover genuine ${brandTitle} parts and accessories. We offer a comprehensive selection of OEM and aftermarket parts specifically designed for ${brandTitle} vehicles.`,
    features: [
      { icon: Shield, title: "Genuine Parts", description: "OEM quality guaranteed" },
      { icon: Award, title: "Certified Quality", description: "Meets manufacturer standards" },
      { icon: Truck, title: "Fast Shipping", description: "Quick delivery nationwide" },
      { icon: Star, title: "Expert Support", description: "Professional assistance" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Brand Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-electric text-electric-foreground">
              {transformedProducts.length} Products Available
            </Badge>
            <h1 className="text-5xl font-bold">{brandTitle} Parts</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {brandInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Features */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandInfo.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-3 animate-slide-in-from-bottom" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mx-auto w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="font-semibold text-primary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {brandTitle} Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Premium quality parts designed specifically for {brandTitle} vehicles
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-4 animate-pulse">
                  <div className="aspect-square bg-accent rounded-lg mb-4"></div>
                  <div className="h-4 bg-accent rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-accent rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : transformedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformedProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No {brandTitle} products available at the moment.
              </p>
              <Button variant="outline">
                Browse All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;