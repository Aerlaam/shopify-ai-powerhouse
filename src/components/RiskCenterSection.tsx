
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertTriangle, 
  TrendingDown, 
  Package, 
  Users, 
  CreditCard,
  Shield,
  Eye,
  RefreshCw
} from 'lucide-react';

const RiskCenterSection = () => {
  const risks = [
    {
      id: 1,
      type: "Stock",
      title: "Rupture de stock imminente",
      description: "Produit Diamant - Seulement 3 unités restantes",
      severity: "Élevé",
      icon: Package,
      color: "red",
      action: "Réapprovisionner"
    },
    {
      id: 2,
      type: "Ventes",
      title: "Baisse des ventes",
      description: "Sneakers Elite - 40% de baisse sur 7 jours",
      severity: "Moyen",
      icon: TrendingDown,
      color: "orange",
      action: "Analyser"
    },
    {
      id: 3,
      type: "Client",
      title: "Commentaires négatifs",
      description: "Lampe Innovation - 3 avis 1 étoile cette semaine",
      severity: "Moyen",
      icon: Users,
      color: "orange",
      action: "Contacter"
    },
    {
      id: 4,
      type: "Paiement",
      title: "Échecs de paiement",
      description: "15% d'échecs de paiement aujourd'hui",
      severity: "Élevé",
      icon: CreditCard,
      color: "red",
      action: "Vérifier"
    },
    {
      id: 5,
      type: "Sécurité",
      title: "Tentatives de fraude",
      description: "2 commandes suspectes détectées",
      severity: "Faible",
      icon: Shield,
      color: "yellow",
      action: "Examiner"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Élevé":
        return "bg-red-100 text-red-800";
      case "Moyen":
        return "bg-orange-100 text-orange-800";
      case "Faible":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-600 bg-red-50";
      case "orange":
        return "text-orange-600 bg-orange-50";
      case "yellow":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              Risques Élevés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-red-600 text-sm">Action requise</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Risques Moyens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-orange-600 text-sm">À surveiller</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-600">Risques Faibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-yellow-600 text-sm">Sous contrôle</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Score Santé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-green-600 text-sm">Correct</p>
          </CardContent>
        </Card>
      </div>

      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>Attention:</strong> 2 risques élevés nécessitent une action immédiate
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Centre de Surveillance des Risques</CardTitle>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualiser
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {risks.map((risk) => {
              const Icon = risk.icon;
              return (
                <div key={risk.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getRiskColor(risk.color)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{risk.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {risk.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{risk.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={getSeverityColor(risk.severity)}>
                      {risk.severity}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Voir
                      </Button>
                      <Button size="sm" className={
                        risk.severity === "Élevé" 
                          ? "bg-red-600 hover:bg-red-700" 
                          : "bg-blue-600 hover:bg-blue-700"
                      }>
                        {risk.action}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskCenterSection;
