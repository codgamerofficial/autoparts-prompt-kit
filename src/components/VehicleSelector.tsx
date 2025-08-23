import { ChevronDown, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VehicleSelector = () => {
  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());
  const makes = ["Chevrolet", "Ford", "Toyota", "Honda", "Nissan", "BMW", "Mercedes-Benz", "Audi"];
  const models = ["Civic", "Accord", "Camry", "Corolla", "F-150", "Silverado", "3 Series", "C-Class"];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-medium border border-border">
      <div className="flex items-center mb-4">
        <Car className="h-5 w-5 text-electric mr-2" />
        <h3 className="text-lg font-semibold text-primary">Find Parts for Your Vehicle</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Year</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Make</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Make" />
            </SelectTrigger>
            <SelectContent>
              {makes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Model</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">&nbsp;</label>
          <Button className="w-full btn-electric font-medium">
            Find Parts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;