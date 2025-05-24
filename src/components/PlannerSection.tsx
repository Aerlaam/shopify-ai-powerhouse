
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Target, Plus } from 'lucide-react';

const PlannerSection = () => {
  const tasks = [
    {
      id: 1,
      title: "Lancement Nouvelle Collection",
      date: "2024-01-15",
      time: "10:00",
      type: "marketing",
      status: "En cours",
      priority: "high"
    },
    {
      id: 2,
      title: "Optimisation SEO Produits",
      date: "2024-01-16",
      time: "14:30",
      type: "seo",
      status: "Planifié",
      priority: "medium"
    },
    {
      id: 3,
      title: "Analyse Concurrentielle",
      date: "2024-01-17",
      time: "09:00",
      type: "analyse",
      status: "Planifié",
      priority: "high"
    },
    {
      id: 4,
      title: "Création Vidéo Publicitaire",
      date: "2024-01-18",
      time: "16:00",
      type: "video",
      status: "À faire",
      priority: "medium"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "Planifié":
        return "bg-yellow-100 text-yellow-800";
      case "À faire":
        return "bg-gray-100 text-gray-800";
      case "Terminé":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "marketing":
        return <Target className="w-4 h-4" />;
      case "video":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mr-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Tâches Aujourd'hui
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-blue-600 text-sm">2 en cours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cette Semaine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-green-600 text-sm">8 planifiées</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taux de Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-green-600 text-sm">+5% vs semaine dernière</p>
            </CardContent>
          </Card>
        </div>
        
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nouvelle Tâche
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Planning des Tâches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {getTypeIcon(task.type)}
                  </div>
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-3 h-3" />
                      {task.date}
                      <Clock className="w-3 h-3 ml-2" />
                      {task.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority === "high" ? "Haute" : task.priority === "medium" ? "Moyenne" : "Basse"}
                  </Badge>
                  <Badge className={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Modifier
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

export default PlannerSection;
