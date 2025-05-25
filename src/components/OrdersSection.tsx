
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

const OrdersSection = () => {
  const orders = [
    {
      id: "#CMD-001",
      customer: "Marie Dubois",
      product: "Produit Diamant",
      amount: "250 €",
      status: "En cours",
      date: "Aujourd'hui 14:30",
      items: 2
    },
    {
      id: "#CMD-002",
      customer: "Jean Martin",
      product: "Costume Premium",
      amount: "189 €",
      status: "Expédiée",
      date: "Hier 16:45",
      items: 1
    },
    {
      id: "#CMD-003",
      customer: "Sophie Leroy",
      product: "Sneakers Elite",
      amount: "156 €",
      status: "Livrée",
      date: "Il y a 2 jours",
      items: 1
    },
    {
      id: "#CMD-004",
      customer: "Pierre Durand",
      product: "Lampe Innovation",
      amount: "89 €",
      status: "Annulée",
      date: "Il y a 3 jours",
      items: 1
    },
    {
      id: "#CMD-005",
      customer: "Claire Bernard",
      product: "Montre Luxury",
      amount: "320 €",
      status: "En cours",
      date: "Aujourd'hui 09:15",
      items: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "Expédiée":
        return "bg-orange-100 text-orange-800";
      case "Livrée":
        return "bg-green-100 text-green-800";
      case "Annulée":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "En cours":
        return <Clock className="w-4 h-4" />;
      case "Expédiée":
        return <Package className="w-4 h-4" />;
      case "Livrée":
        return <CheckCircle className="w-4 h-4" />;
      case "Annulée":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Total Commandes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-green-600 text-sm">+8% ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>En Cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-blue-600 text-sm">À traiter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expédiées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-orange-600 text-sm">En livraison</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenus du Jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250 €</div>
            <p className="text-green-600 text-sm">+15% vs hier</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commandes Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{order.id}</h3>
                    <div className="text-sm text-gray-600">
                      <p>{order.customer} • {order.product}</p>
                      <p>{order.date} • {order.items} article(s)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold">{order.amount}</div>
                    <div className="flex items-center gap-1 text-sm">
                      {getStatusIcon(order.status)}
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Détails
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersSection;
