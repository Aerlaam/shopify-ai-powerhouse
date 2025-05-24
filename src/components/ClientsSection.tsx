
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      orders: 12,
      totalSpent: "1,250 €",
      status: "VIP"
    },
    {
      id: 2,
      name: "Jean Martin",
      email: "jean.martin@email.com",
      phone: "+33 6 98 76 54 32",
      location: "Lyon, France",
      orders: 8,
      totalSpent: "890 €",
      status: "Fidèle"
    },
    {
      id: 3,
      name: "Sophie Leroy",
      email: "sophie.leroy@email.com",
      phone: "+33 6 11 22 33 44",
      location: "Marseille, France",
      orders: 3,
      totalSpent: "320 €",
      status: "Nouveau"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "VIP":
        return "bg-purple-100 text-purple-800";
      case "Fidèle":
        return "bg-blue-100 text-blue-800";
      case "Nouveau":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Total Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-green-600 text-sm">+12% ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clients VIP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">143</div>
            <p className="text-blue-600 text-sm">+5% ce mois</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nouveaux Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-green-600 text-sm">Cette semaine</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{client.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {client.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {client.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {client.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">{client.totalSpent}</div>
                    <div className="text-sm text-gray-600">{client.orders} commandes</div>
                  </div>
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Voir détails
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

export default ClientsSection;
