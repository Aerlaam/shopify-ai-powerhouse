
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Settings, Key, Bell, Shield, Database, Palette } from 'lucide-react';

const SettingsSection = () => {
  const settingsCategories = [
    {
      title: "Connexions API",
      icon: Key,
      items: [
        { name: "Shopify API", status: "Connecté", enabled: true },
        { name: "OpenAI API", status: "Connecté", enabled: true },
        { name: "TikTok API", status: "Non connecté", enabled: false },
        { name: "Meta API", status: "Connecté", enabled: true }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { name: "Alertes stock", status: "Activé", enabled: true },
        { name: "Nouveaux avis", status: "Activé", enabled: true },
        { name: "Rapports quotidiens", status: "Activé", enabled: true },
        { name: "Alertes prix", status: "Désactivé", enabled: false }
      ]
    },
    {
      title: "Sécurité",
      icon: Shield,
      items: [
        { name: "Authentification 2FA", status: "Activé", enabled: true },
        { name: "Chiffrement données", status: "Activé", enabled: true },
        { name: "Logs d'activité", status: "Activé", enabled: true },
        { name: "Accès restreint", status: "Activé", enabled: true }
      ]
    },
    {
      title: "Base de Données",
      icon: Database,
      items: [
        { name: "Sauvegarde auto", status: "Activé", enabled: true },
        { name: "Synchronisation", status: "Activé", enabled: true },
        { name: "Nettoyage auto", status: "Activé", enabled: true },
        { name: "Cache intelligent", status: "Activé", enabled: true }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connecté":
      case "Activé":
        return "bg-green-100 text-green-800";
      case "Non connecté":
      case "Désactivé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Statut Système
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Opérationnel</div>
            <p className="text-green-600 text-sm">Tous systèmes OK</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>APIs Connectées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/4</div>
            <p className="text-yellow-600 text-sm">TikTok à connecter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dernière Sauvegarde</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12:30</div>
            <p className="text-green-600 text-sm">Aujourd'hui</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilisation CPU</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-green-600 text-sm">Performances optimales</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <Badge className={getStatusColor(item.status)} variant="secondary">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch checked={item.enabled} />
                        <Button variant="ghost" size="sm">
                          Configurer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Paramètres Avancés
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Configuration API</div>
                <div className="text-sm text-gray-600">Gérer les clés et endpoints</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Gestion Utilisateurs</div>
                <div className="text-sm text-gray-600">Permissions et accès</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Sauvegarde & Restore</div>
                <div className="text-sm text-gray-600">Gérer les sauvegardes</div>
              </div>
            </Button>
            <Button className="h-auto p-4 justify-start" variant="outline">
              <div className="text-left">
                <div className="font-medium">Logs & Monitoring</div>
                <div className="text-sm text-gray-600">Surveillance système</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsSection;
