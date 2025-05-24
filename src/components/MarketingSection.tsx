
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Calendar,
  BarChart3,
  ChevronRight
} from 'lucide-react';

const MarketingSection = () => {
  const campaigns = [
    {
      name: "Campagne TikTok Automne",
      status: "Actif",
      budget: "500€",
      performance: 78,
      roi: "+145%"
    },
    {
      name: "Retargeting Meta",
      status: "En pause",
      budget: "300€",
      performance: 45,
      roi: "+89%"
    },
    {
      name: "Influence Marketing",
      status: "Planifié",
      budget: "800€",
      performance: 0,
      roi: "Estimé +200%"
    }
  ];

  const insights = [
    {
      title: "Meilleure Heure de Publication",
      value: "14h-16h",
      icon: Calendar,
      change: "+23% engagement"
    },
    {
      title: "Audience Principale",
      value: "25-34 ans",
      icon: Users,
      change: "68% des ventes"
    },
    {
      title: "Plateforme Top",
      value: "TikTok",
      icon: TrendingUp,
      change: "+156% cette semaine"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Revenue Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Prévision de Revenus IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-gray-600">Estimation pour les 30 prochains jours</p>
              <p className="text-4xl font-bold text-blue-600">9.800 €</p>
              <p className="text-sm text-green-600">+15% par rapport au mois dernier</p>
            </div>
            <Button className="w-full">
              <BarChart3 className="w-4 h-4 mr-2" />
              Voir le Détail des Prévisions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Marketing Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Insights Marketing IA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium">{insight.title}</p>
                  <p className="text-xl font-bold text-gray-900">{insight.value}</p>
                  <p className="text-sm text-green-600">{insight.change}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Campaigns */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Campagnes Actives</CardTitle>
          <Button variant="outline" size="sm">
            <Target className="w-4 h-4 mr-2" />
            Nouvelle Campagne
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium">{campaign.name}</h3>
                    <Badge 
                      variant={campaign.status === 'Actif' ? 'default' : 'secondary'}
                      className={
                        campaign.status === 'Actif' 
                          ? 'bg-green-100 text-green-800' 
                          : campaign.status === 'En pause'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span>Budget: {campaign.budget}</span>
                    <span>ROI: {campaign.roi}</span>
                  </div>
                  {campaign.performance > 0 && (
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Performance</span>
                        <span>{campaign.performance}%</span>
                      </div>
                      <Progress value={campaign.performance} className="h-2" />
                    </div>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Report */}
      <Card>
        <CardHeader>
          <CardTitle>Rapport Quotidien IA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">+23%</p>
              <p className="text-sm text-green-700">Taux de conversion</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">1.2k</p>
              <p className="text-sm text-blue-700">Nouveaux visiteurs</p>
            </div>
          </div>
          <Button className="w-full">
            Générer Rapport Complet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingSection;
