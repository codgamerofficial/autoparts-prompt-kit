import { Shield, Truck, RotateCcw, Phone } from "lucide-react";

const TrustBadge = () => {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $99"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy returns & exchanges"
    },
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "SSL encrypted payments"
    },
    {
      icon: Phone,
      title: "Expert Support",
      description: "Call 1-800-AUTOPARTS"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div key={index} className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center">
              <Icon className="h-6 w-6 text-electric" />
            </div>
            <h4 className="font-semibold text-primary">{badge.title}</h4>
            <p className="text-sm text-muted-foreground">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadge;