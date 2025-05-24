
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';

interface ProductTableProps {
  compact?: boolean;
}

const ProductTable = ({ compact = false }: ProductTableProps) => {
  const [products] = useState([
    {
      id: 1,
      name: "Produite",
      status: "Actif",
      views: 40,
      sales: 69,
      score: "chaud",
      icon: "💎"
    },
    {
      id: 2,
      name: "Produit 1",
      status: "Actif",
      views: 27,
      sales: 54,
      score: "tiède",
      icon: "👔"
    },
    {
      id: 3,
      name: "Nom du produit",
      status: "Épuisé",
      views: 118,
      sales: 0,
      score: "mort",
      icon: "👟"
    },
    {
      id: 4,
      name: "Nom du produit",
      status: "Actif",
      views: 55,
      sales: 0,
      score: "chaud",
      icon: "💡"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800";
      case "Épuisé":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreIndicator = (score: string) => {
    switch (score) {
      case "chaud":
        return <div className="flex gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>;
      case "tiède":
        return <div className="flex gap-1">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>;
      case "mort":
        return <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>;
      default:
        return null;
    }
  };

  const displayedProducts = compact ? products.slice(0, 3) : products;

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Vues</TableHead>
            <TableHead>Ventes</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedProducts.map((product) => (
            <TableRow key={product.id} className="hover:bg-gray-50">
              <TableCell className="flex items-center gap-3">
                <span className="text-xl">{product.icon}</span>
                <span className="font-medium">{product.name}</span>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className={getStatusColor(product.status)}>
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>{product.views}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell>
                {getScoreIndicator(product.score)}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {!compact && (
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Modifier
            </Button>
            <Button variant="outline" size="sm">
              Supprimer
            </Button>
            <Button variant="outline" size="sm">
              Traduire
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
