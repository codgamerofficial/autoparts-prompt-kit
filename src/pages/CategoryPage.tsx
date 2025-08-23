import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import brakePad from "@/assets/brake-pad.jpg";
import airFilter from "@/assets/air-filter.jpg";
import oilFilter from "@/assets/oil-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const { data: products = [], isLoading } = useProducts();

  const getProductImage = (imageUrl?: string) => {
    if (imageUrl?.includes('brake-pad')) return brakePad;
    if (imageUrl?.includes('air-filter')) return airFilter;
    if (imageUrl?.includes('oil-filter')) return oilFilter;
    if (imageUrl?.includes('spark-plugs')) return sparkPlugs;
    return brakePad;
  };

  const transformedProducts = products.map(product => ({
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

  const categoryTitle = subcategory 
    ? `${category?.charAt(0).toUpperCase()}${category?.slice(1)} - ${subcategory?.charAt(0).toUpperCase()}${subcategory?.slice(1)}`
    : category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Header */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-electric text-electric-foreground">
              {transformedProducts.length} Products Available
            </Badge>
            <h1 className="text-4xl font-bold text-primary">{categoryTitle}</h1>
            <p className="text-lg text-muted-foreground">
              Premium quality parts with guaranteed fitment and fast shipping
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformedProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;