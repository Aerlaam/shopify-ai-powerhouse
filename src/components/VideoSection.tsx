
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Settings, ChevronRight } from 'lucide-react';

const VideoSection = () => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    { id: '1', name: 'Produit Premium', sales: 69 },
    { id: '2', name: 'Produit Standard', sales: 54 },
    { id: '3', name: 'Nouveau Produit', sales: 12 }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5" />
            Générateur de Vidéo IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Sélectionner un produit</label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un produit..." />
              </SelectTrigger>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name} ({product.sales} ventes)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Script Automatique</h3>
              <p className="text-sm text-gray-600 mb-4">
                L'IA génère un script optimisé basé sur les performances du produit
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Configurer
              </Button>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium mb-2">Voix IA</h3>
              <p className="text-sm text-gray-600 mb-4">
                Narration professionnelle avec différents styles disponibles
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Choisir la voix
              </Button>
            </Card>
          </div>

          <div className="border-t pt-6">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              size="lg"
              disabled={!selectedProduct}
            >
              <Play className="w-5 h-5 mr-2" />
              Générer la Vidéo
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vidéos Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center">
                    <Play className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">Vidéo Produit {i}</p>
                    <p className="text-sm text-gray-500">Il y a {i} jour(s)</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoSection;
