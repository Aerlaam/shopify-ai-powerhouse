
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const AITableauSection = () => {
  const aiInsights = [
    {
      id: 1,
      type: "prediction",
      title: "Prédiction de Ventes",
      description: "Les ventes devraient augmenter de 23% la semaine prochaine",
      confidence: 89,
      impact: "high",
      category: "Ventes"
    },
    {
      id: 2,
      type: "optimization",
      title: "Optimisation Prix",
      description: "Recommandation d'augmenter le prix du Produit Diamant de 15%",
      confidence: 76,
      impact: "medium",
      category: "Prix"
    },
    {
      id: 3,
      type: "alert",
      title: "Stock Critique",
      description: "3 produits risquent la rupture de stock dans 5 jours",
      confidence: 95,
      impact: "high",
      category: "Inventaire"
    },
    {
      id: 4,
      type: "opportunity",
      title: "Nouvelle Tendance",
      description: "Opportunité détectée dans la catégorie 'Lifestyle'",
      confidence: 67,
      impact: "medium",
      category: "Marketing"
    }
  ];

  const aiMetrics = [
    {
      title: "Précision IA",
      value: "94.2%",
      change: "+2.1%",
      icon: Brain
    },
    {
      title: "Recommandations Actives",
      value: "27",
      change: "+5",
      icon: Lightbulb
    },
    {
      title: "ROI Optimisations",
      value: "+18.5%",
      change: "+3.2%",
      icon: TrendingUp
    },
    {
      title: "Alertes Résolues",
      value: "12/15",
      change: "80%",
      icon: Target
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "prediction":
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case "optimization":
        return <Target className="w-5 h-5 text-green-600" />;
      case "alert":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "opportunity":
        return <Lightbulb className="w-5 h-5 text-yellow-600" />;
      default:
        return <Brain className="w-5 h-5 text-purple-600" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-600";
    if (confidence >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {aiMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-green-600 text-sm">{metric.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Insights et Recommandations IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    {getTypeIcon(insight.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium">{insight.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {insight.category}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-2">{insight.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Confiance:</span>
                      <span className={`text-sm font-medium ${getConfidenceColor(insight.confidence)}`}>
                        {insight.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getImpactColor(insight.impact)}>
                    Impact {insight.impact === "high" ? "Élevé" : insight.impact === "medium" ? "Moyen" : "Faible"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Appliquer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Actions Recommandées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Optimiser Catalogue</div>
                <div className="text-sm text-gray-600">Analyser et optimiser vos produits</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Ajuster Prix</div>
                <div className="text-sm text-gray-600">Appliquer les recommandations de prix</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Gérer Stock</div>
                <div className="text-sm text-gray-600">Prévenir les ruptures de stock</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Lancer Campagne</div>
                <div className="text-sm text-gray-600">Créer une campagne ciblée</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AITableauSection;
