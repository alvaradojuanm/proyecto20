import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function PonentesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Ponentes</h1>
        <p className="text-center mb-12 text-muted-foreground">Conoce a los expertos que participarán en el congreso</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ponente 1 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dr. Jimy Santana" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Dr. Jimy Santana</CardTitle>
              <CardDescription>Comité Científico</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Experto en Inteligencia Artificial y modelos de lenguaje. Investigador principal en el área de IA
                Generativa aplicada a la educación.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">IA Educativa</Badge>
                <Badge variant="outline">LLMs</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Universidad Politécnica Territorial de Aragua</p>
            </CardFooter>
          </Card>

          {/* Ponente 2 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dra. Bettys Muñoz" />
                <AvatarFallback>BM</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Dra. Bettys Muñoz</CardTitle>
              <CardDescription>Rectora UPT Aragua FBF</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Líder en innovación educativa y transformación universitaria. Impulsora de la integración de IA
                en procesos académicos.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">Gestión Universitaria</Badge>
                <Badge variant="outline">Innovación</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Universidad Politécnica Territorial de Aragua</p>
            </CardFooter>
          </Card>

          {/* Ponente 3 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-green-500 to-yellow-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Prof. Andrés Castillo" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Prof. Andrés Castillo</CardTitle>
              <CardDescription>Comité Científico</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Especialista en virtualización aumentada. Pionero en la creación laboratorios virtuales con asistencia de la IA.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">Virtualización</Badge>
                <Badge variant="outline">Realidad aumentada</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Universidad Politécnica Territorial de Aragua</p>
            </CardFooter>
          </Card>

          {/* Ponente 4 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-yellow-500 to-red-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dr. Gabriel Santana" />
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Dr. Gabriel Santana</CardTitle>
              <CardDescription>Comité Científico</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Investigador en ética de la IA y consideraciones de privacidad. Desarrollador de aplicaciones  e
                impacto social de la IA.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">Ética</Badge>
                <Badge variant="outline">Privacidad</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Universidad Central de Venezuelar</p>
            </CardFooter>
          </Card>

          {/* Ponente 5 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-red-500 to-purple-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Dr. Pedro Vicente Calderon" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Dr. Pedro Vicente Calderon</CardTitle>
              <CardDescription>Ponente Invitada</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Investigador e innovador en el área educativa y sector productivo. •	Investigador del rol del sector universitario para la
                transformación.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">Sector Productivo</Badge>
                <Badge variant="outline">Innovador educativo</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Rector de la Universidad Politécnica Territorial de los Altos Mirandinos</p>
            </CardFooter>
          </Card>

          {/* Ponente 6 */}
          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="flex justify-center -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-950">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Ingeniera Niurka Oropeza" />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-2">
              <CardTitle>Ingeniera Niurka Oropeza</CardTitle>
              <CardDescription>Instructora de Bootcamp</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Desarrollo de Agentes, soluciones basadas en IA Generativa.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline">Agentes</Badge>
                <Badge variant="outline">IA Generativa</Badge>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">Universidad Politécnica Territorial del Estado Aragua</p>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            *La lista de ponentes se actualizará a medida que se confirmen más participaciones.
          </p>
        </div>
      </div>
    </div>
  )
}
