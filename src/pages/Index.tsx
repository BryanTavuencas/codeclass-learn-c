import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Code2 className="h-4 w-4" />
              Aprenda programação do zero
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Domine a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              programação
            </span>
            {" "}com a Code Class
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Cursos práticos e objetivos de programação. Aprenda no seu ritmo com videoaulas
            de qualidade e questionários para fixar o conhecimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="text-base px-8">
                Ver Cursos
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base px-8">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 border-t border-border">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Conteúdo de Qualidade</h3>
            <p className="text-muted-foreground">
              Videoaulas detalhadas e bem estruturadas para facilitar seu aprendizado
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-secondary/10 p-4">
              <Trophy className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Pratique com Quizzes</h3>
            <p className="text-muted-foreground">
              Questionários após cada aula para testar e fixar seu conhecimento
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-accent/10 p-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Aprenda no Seu Ritmo</h3>
            <p className="text-muted-foreground">
              Acesse o conteúdo quando e onde quiser, sem pressão
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 border-t border-border">
        <div className="mx-auto max-w-3xl text-center space-y-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-12 border border-border">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece agora mesmo com nosso curso de Linguagem C e desenvolva suas habilidades em programação.
          </p>
          <Link to="/courses">
            <Button size="lg" className="text-base px-8">
              Explorar Cursos
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Code Class. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
