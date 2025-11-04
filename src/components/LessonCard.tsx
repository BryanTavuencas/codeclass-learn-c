import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle2, Lock } from "lucide-react";

interface LessonCardProps {
  number: number;
  title: string;
  duration: string;
  completed?: boolean;
  onClick: () => void;
  isActive: boolean;
  locked?: boolean;
}

const LessonCard = ({ number, title, duration, completed, onClick, isActive, locked }: LessonCardProps) => {
  return (
    <Card
      className={`transition-all duration-300 ${
        locked 
          ? "opacity-50 cursor-not-allowed" 
          : "cursor-pointer hover:shadow-md"
      } ${isActive ? "border-primary bg-primary/5" : ""}`}
      onClick={locked ? undefined : onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                locked
                  ? "bg-muted text-muted-foreground"
                  : completed
                  ? "bg-secondary text-secondary-foreground"
                  : isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {locked ? (
                <Lock className="h-4 w-4" />
              ) : completed ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                number
              )}
            </div>
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{duration}</p>
            </div>
          </div>
          {isActive && <PlayCircle className="h-5 w-5 text-primary animate-pulse" />}
        </div>
      </CardHeader>
    </Card>
  );
};

export default LessonCard;
