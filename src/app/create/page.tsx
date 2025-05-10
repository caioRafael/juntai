import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreatePage(){
    return(
        <main className="flex min-h-screen flex-col py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="flex items-center text-emerald-600 mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para a página inicial
          </Link>
  
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold">Junta Aí: Criar novo grupo</CardTitle>
              <CardDescription>Preencha as informações abaixo para criar seu grupo de trabalho acadêmico</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <CriarGrupoForm /> */}
              <h1>formulário aqui</h1>
            </CardContent>
          </Card>
        </div>
      </main>
    )
}