
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Video,
  Target,
  Calendar,
  MessageSquare,
  AlertTriangle,
  Brain,
  Settings
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3
    },
    {
      id: 'products',
      label: 'Produits',
      icon: Package
    },
    {
      id: 'orders',
      label: 'Commandes',
      icon: ShoppingCart
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: Users
    },
    {
      id: 'top-products',
      label: 'Top Produits',
      icon: TrendingUp
    },
    {
      id: 'video',
      label: 'Création Vidéo',
      icon: Video
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: Target
    },
    {
      id: 'planning',
      label: 'Planificateur',
      icon: Calendar
    },
    {
      id: 'feedback',
      label: 'Feedback Clients',
      icon: MessageSquare
    },
    {
      id: 'risks',
      label: 'Centre de Risques',
      icon: AlertTriangle
    },
    {
      id: 'ai',
      label: 'Tableau IA',
      icon: Brain
    }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-slate-800 text-white shadow-xl">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-8">Shopify Bot IA</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  currentView === item.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button 
          onClick={() => onViewChange('settings')}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            currentView === 'settings'
              ? "bg-blue-600 text-white"
              : "text-slate-300 hover:text-white hover:bg-slate-700"
          )}
        >
          <Settings className="w-5 h-5" />
          Paramètres
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
