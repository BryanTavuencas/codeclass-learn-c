import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";
import Quiz from "@/components/Quiz";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CLessons = () => {
  const [activeLesson, setActiveLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Carrega o progresso salvo ao montar o componente
  useEffect(() => {
    const saved = localStorage.getItem("c-course-progress");
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  // Salva o progresso sempre que mudar
  useEffect(() => {
    localStorage.setItem("c-course-progress", JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Verifica se uma aula está bloqueada
  const isLessonLocked = (lessonNumber: number) => {
    if (lessonNumber === 1) return false; // Primeira aula sempre desbloqueada
    return !completedLessons.includes(lessonNumber - 1); // Bloqueada se a anterior não foi completa
  };

  // Marca aula como completa quando acertar o quiz
  const handleLessonComplete = (lessonNumber: number) => {
    if (!completedLessons.includes(lessonNumber)) {
      setCompletedLessons([...completedLessons, lessonNumber]);
    }
  };

  // Tenta acessar uma aula
  const handleLessonClick = (lessonNumber: number) => {
    if (!isLessonLocked(lessonNumber)) {
      setActiveLesson(lessonNumber);
    }
  };

  const lessons = [
    {
      number: 1,
      title: "Introdução à Linguagem C",
      duration: "25 min",
      videoId: "2fzL6tC5FUk", // Substitua pelo ID do vídeo do YouTube
    },
    {
      number: 2,
      title: "Variáveis e Tipos de Dados",
      duration: "30 min",
      videoId: "COLOQUE_O_ID_DO_VIDEO_AQUI_2", // Substitua pelo ID do vídeo do YouTube
    },
    {
      number: 3,
      title: "Estruturas de Controle",
      duration: "35 min",
      videoId: "COLOQUE_O_ID_DO_VIDEO_AQUI_3", // Substitua pelo ID do vídeo do YouTube
    },
    {
      number: 4,
      title: "Funções e Modularização",
      duration: "40 min",
      videoId: "COLOQUE_O_ID_DO_VIDEO_AQUI_4", // Substitua pelo ID do vídeo do YouTube
    },
    {
      number: 5,
      title: "Ponteiros e Alocação de Memória",
      duration: "45 min",
      videoId: "COLOQUE_O_ID_DO_VIDEO_AQUI_5", // Substitua pelo ID do vídeo do YouTube
    },
  ];

  // Quiz questions for each lesson
  const quizzes = {
    1: [
      {
        id: 1,
        question: "Qual é a função principal de um programa em C?",
        options: ["start()", "main()", "begin()", "run()"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Qual biblioteca padrão é usada para entrada e saída em C?",
        options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Como se chama o processo de transformar código C em executável?",
        options: ["Interpretação", "Compilação", "Execução", "Debugging"],
        correctAnswer: 1,
      },
    ],
    2: [
      {
        id: 1,
        question: "Qual é o tipo de dado para números inteiros em C?",
        options: ["integer", "int", "number", "num"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Qual operador é usado para atribuir um valor a uma variável?",
        options: ["==", "=", "===", ":="],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Qual tipo de dado armazena caracteres em C?",
        options: ["string", "char", "character", "text"],
        correctAnswer: 1,
      },
    ],
    3: [
      {
        id: 1,
        question: "Qual estrutura é usada para tomar decisões em C?",
        options: ["for", "while", "if", "switch"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "Qual loop é mais adequado quando o número de iterações é conhecido?",
        options: ["while", "do-while", "for", "if"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "O que o comando 'break' faz em um loop?",
        options: [
          "Pausa o programa",
          "Encerra o loop",
          "Continua para próxima iteração",
          "Retorna ao início"
        ],
        correctAnswer: 1,
      },
    ],
    4: [
      {
        id: 1,
        question: "O que uma função retorna quando não tem tipo especificado?",
        options: ["int", "void", "null", "none"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Como se chama quando uma função chama a si mesma?",
        options: ["Iteração", "Recursão", "Loop", "Repetição"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Qual palavra-chave é usada para retornar um valor de uma função?",
        options: ["send", "return", "give", "output"],
        correctAnswer: 1,
      },
    ],
    5: [
      {
        id: 1,
        question: "O que é um ponteiro em C?",
        options: [
          "Um tipo de dado",
          "Uma variável que armazena endereço de memória",
          "Uma função",
          "Um operador"
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Qual operador é usado para obter o endereço de uma variável?",
        options: ["*", "&", "#", "@"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Qual função é usada para alocar memória dinamicamente?",
        options: ["alloc()", "malloc()", "memory()", "new()"],
        correctAnswer: 1,
      },
    ],
  };

  const currentLesson = lessons.find((l) => l.number === activeLesson);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8">
        <Link to="/courses">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para Cursos
          </Button>
        </Link>

        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Curso de Linguagem C</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda os fundamentos da programação em C com videoaulas práticas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Lessons Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Aulas do Curso</CardTitle>
                <CardDescription>5 aulas • 3h de conteúdo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {lessons.map((lesson) => (
                  <LessonCard
                    key={lesson.number}
                    number={lesson.number}
                    title={lesson.title}
                    duration={lesson.duration}
                    onClick={() => handleLessonClick(lesson.number)}
                    isActive={activeLesson === lesson.number}
                    completed={completedLessons.includes(lesson.number)}
                    locked={isLessonLocked(lesson.number)}
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Alerta de progresso */}
            {!completedLessons.includes(activeLesson) && activeLesson > 1 && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Complete o quiz desta aula para desbloquear a próxima!
                </AlertDescription>
              </Alert>
            )}

            {/* Video Player */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Aula {currentLesson?.number}: {currentLesson?.title}</CardTitle>
                    <CardDescription>{currentLesson?.duration}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                  {/* 
                    INSTRUÇÕES PARA ADICIONAR OS VÍDEOS DO YOUTUBE:
                    
                    1. Para cada aula, substitua "COLOQUE_O_ID_DO_VIDEO_AQUI_X" pelo ID real do vídeo do YouTube
                    2. O ID do vídeo é a parte que vem depois de "v=" na URL do YouTube
                    3. Exemplo: se a URL é "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                       o ID seria "dQw4w9WgXcQ"
                    
                    Descomente o iframe abaixo e remova o placeholder quando adicionar os vídeos:
                  */}
                  
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentLesson?.videoId}`}
                    title={currentLesson?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Remova este placeholder quando adicionar os vídeos reais */}
                  {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="text-center space-y-2">
                      <p className="text-lg font-semibold">Vídeo será carregado aqui</p>
                      <p className="text-sm text-muted-foreground">
                        Adicione o ID do vídeo do YouTube no código
                      </p>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Quiz Section */}
            <Quiz
              lessonNumber={activeLesson}
              questions={quizzes[activeLesson as keyof typeof quizzes]}
              onComplete={() => handleLessonComplete(activeLesson)}
            />
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Code Class. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CLessons;
