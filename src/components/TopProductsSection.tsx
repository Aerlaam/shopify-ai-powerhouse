
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const TopProductsSection = () => {
  const topProducts = [
    {
      id: 1,
      name: "Produit Diamant",
      sales: 145,
      revenue: "3,250 €",
      trend: "up",
      change: "+25%",
      icon: "💎",
      rank: 1
    },
    {
      id: 2,
      name: "Costume Premium",
      sales: 123,
      revenue: "2,890 €",
      trend: "up",
      change: "+18%",
      icon: "👔",
      rank: 2
    },
    {
      id: 3,
      name: "Sneakers Elite",
      sales: 98,
      revenue: "2,156 €",
      trend: "down",
      change: "-5%",
      icon: "👟",
      rank: 3
    },
    {
      id: 4,
      name: "Lampe Innovation",
      sales: 87,
      revenue: "1,980 €",
      trend: "stable",
      change: "0%",
      icon: "💡",
      rank: 4
    },
    {
      id: 5,
      name: "Montre Luxury",
      sales: 76,
      revenue: "1,750 €",
      trend: "up",
      change: "+12%",
      icon: "⌚",
      rank: 5
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Produit #1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💎</span>
              <div>
                <div className="font-bold">Produit Diamant</div>
                <div className="text-green-600">3,250 € ce mois</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meilleure Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👔</span>
              <div>
                <div className="font-bold">Costume Premium</div>
                <div className="text-green-600">+25% de ventes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Ventes Top 5</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,026 €</div>
            <p className="text-green-600 text-sm">+15% vs mois dernier</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Classement des Top Produits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {product.rank}
                  </div>
                  <span className="text-2xl">{product.icon}</span>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.sales} ventes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold">{product.revenue}</div>
                    <div className={`text-sm flex items-center gap-1 ${getTrendColor(product.trend)}`}>
                      {getTrendIcon(product.trend)}
                      {product.change}
                    </div>
                  </div>
                  <Badge variant="outline">
                    Rang #{product.rank}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopProductsSection;
