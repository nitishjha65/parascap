import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Briefcase, BarChart2, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "trending-up":
        return <TrendingUp className="h-10 w-10 mb-4 text-parascap-green" />;
      case "briefcase":
        return <Briefcase className="h-10 w-10 mb-4 text-parascap-green" />;
      case "bar-chart-2":
        return <BarChart2 className="h-10 w-10 mb-4 text-parascap-green" />;
      case "users":
        return <Users className="h-10 w-10 mb-4 text-parascap-green" />;
      default:
        return <TrendingUp className="h-10 w-10 mb-4 text-parascap-green" />;
    }
  };

  return (
    <Card className="flex flex-col items-center text-center bg-white shadow-md h-full p-4 md:p-6 border border-gray-100">
      <CardHeader className="pb-2 pt-4 px-4 w-full">
        <div className="flex flex-col items-center">
          {getIcon()}
          <CardTitle className="text-lg md:text-xl font-bold text-black">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-2 px-4 w-full text-sm md:text-base text-gray-500">
        {description}
      </CardContent>
    </Card>
  );
}
