import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Briefcase, BarChart2, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  // className: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "trending-up":
        return <TrendingUp className={`h-10 w-10 mb-4 `} />;
      case "briefcase":
        return <Briefcase className="h-10 w-10 mb-4" />;
      case "bar-chart-2":
        return <BarChart2 className="h-10 w-10 mb-4" />;
      case "users":
        return <Users className="h-10 w-10 mb-4" />;
      default:
        return <TrendingUp className="h-10 w-10 mb-4" />;
    }
  };

  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        {getIcon()}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}
