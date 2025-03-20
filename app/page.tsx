import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const topics = [
    {
      id: "frontend-basics",
      title: "O que é frontend?",
      description:
        "Entenda a diferença entre frontend e backend de forma simples",
      duration: 5,
    },
    {
      id: "browser-interpretation",
      title: "Como os Navegadores Funcionam",
      description: "A jornada de transformação do código em páginas web",
      duration: 5,
    },
    {
      id: "seo",
      title: "Como Aparecer no Google",
      description: "O processo de indexação e visibilidade nos buscadores",
      duration: 5,
    },
    {
      id: "security",
      title: "Segurança no Frontend",
      description: "Protegendo a porta da frente do seu site",
      duration: 5,
    },
    {
      id: "dev-tools",
      title: "Nossas Ferramentas",
      description: "O que usamos para criar sites incríveis",
      duration: 5,
    },
    {
      id: "nextjs-performance",
      title: "Sites Ultra-Rápidos",
      description: "Como o Next.js torna nossos sites extremamente velozes",
      duration: 5,
    },
    {
      id: "nielsen-heuristics",
      title: "10 Regras de Ouro do Design",
      description: "Princípios para criar sites que as pessoas adoram usar",
      duration: 10,
    },
  ];

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frontend além da tela. A arte de criar experiências digitais
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Uma jornada pelo mundo do desenvolvimento web frontend, explicada de
          forma simples e acessível para todos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            className="flex flex-col hover:shadow-lg dark:hover:shadow-primary/20 transition-all hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>{topic.duration} minutos</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/topics/${topic.id}`} className="w-full">
                <Button className="w-full">Explorar Tópico</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
