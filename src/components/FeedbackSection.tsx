
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      customer: "Marie L.",
      product: "Produit Diamant",
      rating: 5,
      comment: "Excellent produit, très satisfaite de mon achat !",
      date: "2024-01-14",
      sentiment: "positive",
      verified: true
    },
    {
      id: 2,
      customer: "Jean M.",
      product: "Costume Premium",
      rating: 4,
      comment: "Bonne qualité mais délai de livraison un peu long.",
      date: "2024-01-13",
      sentiment: "positive",
      verified: true
    },
    {
      id: 3,
      customer: "Sophie R.",
      product: "Sneakers Elite",
      rating: 2,
      comment: "Pas conforme à la description, déçue.",
      date: "2024-01-12",
      sentiment: "negative",
      verified: false
    },
    {
      id: 4,
      customer: "Pierre D.",
      product: "Lampe Innovation",
      rating: 5,
      comment: "Parfait ! Design moderne et fonctionnel.",
      date: "2024-01-11",
      sentiment: "positive",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800";
      case "negative":
        return "bg-red-100 text-red-800";
      case "neutral":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <ThumbsUp className="w-4 h-4" />;
      case "negative":
        return <ThumbsDown className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Total Avis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-green-600 text-sm">+23 cette semaine</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Note Moyenne</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">4.3</div>
              <div className="flex">{renderStars(4)}</div>
            </div>
            <p className="text-green-600 text-sm">+0.2 vs mois dernier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avis Positifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-green-600 text-sm">1,112 avis positifs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Réponse Requise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-red-600 text-sm">Avis négatifs à traiter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Avis Récents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium">{feedback.customer}</h3>
                      {feedback.verified && (
                        <Badge variant="outline" className="text-xs">
                          Vérifié
                        </Badge>
                      )}
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{feedback.product}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">{renderStars(feedback.rating)}</div>
                      <span className="text-sm text-gray-500">{feedback.date}</span>
                    </div>
                    <p className="text-gray-700">{feedback.comment}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getSentimentColor(feedback.sentiment)}>
                    <span className="flex items-center gap-1">
                      {getSentimentIcon(feedback.sentiment)}
                      {feedback.sentiment === "positive" ? "Positif" : feedback.sentiment === "negative" ? "Négatif" : "Neutre"}
                    </span>
                  </Badge>
                  <Button variant="outline" size="sm">
                    Répondre
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

export default FeedbackSection;
