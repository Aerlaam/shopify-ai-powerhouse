
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Play,
  Settings,
  Video,
  Target
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import MetricCard from '@/components/MetricCard';
import ProductTable from '@/components/ProductTable';
import VideoSection from '@/components/VideoSection';
import MarketingSection from '@/components/MarketingSection';
import ClientsSection from '@/components/ClientsSection';
import TopProductsSection from '@/components/TopProductsSection';
import PlannerSection from '@/components/PlannerSection';
import FeedbackSection from '@/components/FeedbackSection';
import AITableauSection from '@/components/AITableauSection';
import SettingsSection from '@/components/SettingsSection';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const metrics = [
    {
      title: "Ventes Aujourd'hui",
      value: "750 €",
      icon: TrendingUp,
      trend: "+12%",
      trendUp: true
    },
    {
      title: "Commandes Cette Semaine",
      value: "32",
      icon: ShoppingCart,
      trend: "+5%",
      trendUp: true
    },
    {
      title: "Produit le Plus Vendu",
      value: "Nom du produit",
      icon: Package,
      trend: "69 ventes",
      trendUp: true
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'products':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Produits</h1>
            <ProductTable />
          </div>
        );
      case 'clients':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
            <ClientsSection />
          </div>
        );
      case 'top-products':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Top Produits</h1>
            <TopProductsSection />
          </div>
        );
      case 'planning':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Planificateur</h1>
            <PlannerSection />
          </div>
        );
      case 'feedback':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Feedback Clients</h1>
            <FeedbackSection />
          </div>
        );
      case 'ai':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Tableau IA</h1>
            <AITableauSection />
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
            <SettingsSection />
          </div>
        );
      case 'video':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Création Vidéo</h1>
            <VideoSection />
          </div>
        );
      case 'marketing':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Marketing</h1>
            <MarketingSection />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <Button variant="outline" size="sm" onClick={() => setCurrentView('settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
            </div>

            {/* Métriques principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            {/* Alerte stock */}
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                Le produit XYZ est bientôt en rupture de stock
              </AlertDescription>
            </Alert>

            {/* Section principale avec produits */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">Produits</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentView('products')}>
                      Voir tout →
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <ProductTable compact />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Création Vidéo */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      Création Vidéo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">Sélectionner un produit</p>
                    <Button className="w-full" onClick={() => setCurrentView('video')}>
                      <Play className="w-4 h-4 mr-2" />
                      Générer une vidéo
                    </Button>
                  </CardContent>
                </Card>

                {/* Marketing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm">
                      <p className="font-medium">Générer deviAn</p>
                      <p className="text-blue-600 font-bold">9.800 € sur 30 jours</p>
                    </div>
                    <Button className="w-full" onClick={() => setCurrentView('marketing')}>
                      Rapport du jour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 p-6 ml-64">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
