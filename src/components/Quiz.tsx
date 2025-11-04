import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  lessonNumber: number;
  questions: Question[];
}

const Quiz = ({ lessonNumber, questions }: QuizProps) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);
    
    if (correct === questions.length) {
      toast.success("Parabéns! Você acertou todas as questões!");
    } else {
      toast.info(`Você acertou ${correct} de ${questions.length} questões.`);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz - Aula {lessonNumber}</CardTitle>
        <CardDescription>
          Teste seus conhecimentos sobre o conteúdo desta aula
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-sm text-muted-foreground">
                {question.id}.
              </span>
              <p className="font-medium">{question.question}</p>
            </div>
            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) =>
                setAnswers({ ...answers, [question.id]: parseInt(value) })
              }
              disabled={submitted}
              className="space-y-2 ml-6"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`q${question.id}-${index}`} />
                  <Label
                    htmlFor={`q${question.id}-${index}`}
                    className={`cursor-pointer ${
                      submitted && index === question.correctAnswer
                        ? "text-secondary font-semibold"
                        : submitted && answers[question.id] === index && index !== question.correctAnswer
                        ? "text-destructive"
                        : ""
                    }`}
                  >
                    {option}
                    {submitted && index === question.correctAnswer && (
                      <CheckCircle2 className="inline-block ml-2 h-4 w-4 text-secondary" />
                    )}
                    {submitted && answers[question.id] === index && index !== question.correctAnswer && (
                      <XCircle className="inline-block ml-2 h-4 w-4 text-destructive" />
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}

        <div className="pt-4 flex gap-3">
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
              className="w-full"
            >
              Enviar Respostas
            </Button>
          ) : (
            <>
              <div className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-muted px-4 py-2">
                <span className="font-semibold">
                  Pontuação: {score}/{questions.length}
                </span>
              </div>
              <Button onClick={handleReset} variant="outline">
                Refazer Quiz
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
