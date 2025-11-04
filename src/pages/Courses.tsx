import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Code, FileCode, Braces, Database, Globe, Smartphone } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Linguagem C",
      description: "Aprenda os fundamentos da programação com a linguagem C, desde variáveis e estruturas de controle até ponteiros e alocação dinâmica de memória.",
      lessons: 5,
      duration: "3h",
      status: "available" as const,
      link: "/lessons/c",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Python",
      description: "Domine Python, uma das linguagens mais versáteis e populares. Ideal para ciência de dados, automação e desenvolvimento web.",
      lessons: 8,
      duration: "5h",
      status: "coming-soon" as const,
      icon: <FileCode className="h-6 w-6 text-primary" />,
    },
    {
      title: "JavaScript",
      description: "Aprenda a linguagem da web. Desenvolvimento front-end e back-end com Node.js, criação de aplicações interativas e dinâmicas.",
      lessons: 10,
      duration: "6h",
      status: "coming-soon" as const,
      icon: <Braces className="h-6 w-6 text-primary" />,
    },
    {
      title: "Java",
      description: "Programação orientada a objetos com Java. Desenvolva aplicações robustas, escaláveis e compatíveis com múltiplas plataformas.",
      lessons: 12,
      duration: "8h",
      status: "coming-soon" as const,
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      title: "SQL & Databases",
      description: "Fundamentos de bancos de dados relacionais, consultas SQL, modelagem de dados e otimização de queries.",
      lessons: 6,
      duration: "4h",
      status: "coming-soon" as const,
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "React Native",
      description: "Desenvolvimento de aplicativos móveis multiplataforma usando React Native. Crie apps para iOS e Android com uma única base de código.",
      lessons: 10,
      duration: "7h",
      status: "coming-soon" as const,
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Nossos Cursos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore nossa coleção crescente de cursos de programação. Comece com C e prepare-se para muito mais!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
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

export default Courses;
