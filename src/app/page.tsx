import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import Link from "next/link";

const grupos = [
  {
    id: "grupo-1",
    nome: "Desenvolvimento Web Avançado",
    curso: "Ciência da Computação",
    descricao: "Grupo para desenvolvimento de projetos web usando React, Next.js e outras tecnologias modernas.",
    membros: 4,
  },
  {
    id: "grupo-2",
    nome: "Análise de Dados com Python",
    curso: "Estatística",
    descricao: "Grupo para estudar e aplicar técnicas de análise de dados e machine learning com Python.",
    membros: 3,
  },
  {
    id: "grupo-3",
    nome: "Projeto Integrador - IoT",
    curso: "Engenharia Eletrônica",
    descricao: "Desenvolvimento de soluções IoT para problemas reais usando Arduino e Raspberry Pi.",
    membros: 5,
  },
  {
    id: "grupo-4",
    nome: "TCC em Marketing Digital",
    curso: "Administração",
    descricao: "Grupo para desenvolvimento de TCC sobre estratégias de marketing digital para pequenas empresas.",
    membros: 2,
  },
  {
    id: "grupo-5",
    nome: "Estudo de Caso Clínico",
    curso: "Enfermagem",
    descricao: "Grupo para discussão e análise de casos clínicos para o trabalho final da disciplina.",
    membros: 6,
  },
  {
    id: "grupo-6",
    nome: "Projeto Sustentabilidade",
    curso: "Engenharia Ambiental",
    descricao: "Desenvolvimento de soluções sustentáveis para o campus universitário.",
    membros: 4,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              JuntAí: Encontre seu grupo ideal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Participe de grupos acadêmicos em formação ou crie o seu para reunir colegas em projetos universitários.
            </p>
            <Link href="/create">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Criar novo grupo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Grupos disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grupos.map((grupo) => (
              <Card key={grupo.id} className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{grupo.nome}</CardTitle>
                  <CardDescription className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-emerald-600" />
                    {grupo.curso}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{grupo.descricao}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{grupo.membros} membros</span>
                  </div>
                  <Link href={`/${grupo.id}`}>
                    <Button variant="outline" size="sm">
                      Ver grupo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
