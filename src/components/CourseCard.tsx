import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  status: "available" | "coming-soon";
  link?: string;
  icon: React.ReactNode;
}

const CourseCard = ({ title, description, lessons, duration, status, link, icon }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-primary/10 p-3 mb-4">
            {icon}
          </div>
          <Badge variant={status === "available" ? "default" : "secondary"}>
            {status === "available" ? "Disponível" : "Em Breve"}
          </Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} aulas</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {status === "available" && link ? (
          <Link to={link} className="w-full">
            <Button className="w-full group-hover:scale-105 transition-transform">
              Começar Curso
            </Button>
          </Link>
        ) : (
          <Button disabled className="w-full">
            Em Breve
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
