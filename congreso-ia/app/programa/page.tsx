import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Programa del Congreso</h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">(En construcción)</h1>

        <Tabs defaultValue="dia1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="dia1">Día 1 - 14 de julio</TabsTrigger>
            <TabsTrigger value="dia2">Día 2 - 15 de julio</TabsTrigger>
            <TabsTrigger value="dia3">Día 3 - 19 de julio</TabsTrigger>
          </TabsList>

          <TabsContent value="dia1">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle>Sala de Conferencias. Mañana - 8:00 AM a 12:00 M</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">8:00 AM - 9:00 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">Registro de participantes</p>
                      <p className="text-muted-foreground">Lobby principal</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">9:00 AM - 9:15 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">Ceremonia de apertura</p>
                      <p className="text-muted-foreground">Dra. Bettys Muñoz - Rectora de la UPT Aragua FBF</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">9:15 AM - 9:35 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Conferencia magistral: "El futuro de la IA Generativa en Venezuela"
                      </p>
                      <p className="text-muted-foreground">Ponente invitado</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">9:35 AM - 10:00 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Panel de discusión: "•	El rol del sector universitario en una estrategia nacional de IA Generativa"
                      </p>
                      <p className="text-muted-foreground">Dra. Bettys Muñoz</p>
                      <p className="text-muted-foreground">Dr. Pedro Vicente Calderon</p>
                      <p className="text-muted-foreground">Dr. Benito </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">10:00 AM - 10:15 AM</h3>
                      <p className="font-medium">Sesión de preguntas y respuestas</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">10:15 AM - 10:30 AM</h3>
                      <p className="font-medium">Receso - Café</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">10:30 AM - 10:50 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Panel: "Experiencias universitarias en IA Generativa"
                      </p>
                      <p className="text-muted-foreground">Representantes de universidades venezolanas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                  <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                    <CardTitle>Sala Temática - Mañana - 8:00 AM a 12:00 M</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold">9:00 AM - 12:00 AM</h3>
                        <p className="font-medium text-purple-700 dark:text-purple-400">Trabajos de investigación y desarrollo de los estudiantes de postgrado en Informática, mención desarrollo de software, en modelos de lenguaje con IA Generativa</p>
                        <p className="text-muted-foreground">Expertos en el área</p>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>

              <Card>
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle>Laboratorios. Tarde - 12:30 PM a 4:00 PM</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">12:30 PM - 4:00 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Bootcamp: "Introducción al desarrollo de aplicaciones de IA Generativas. Desarrollo de aplicaciones de la IA Generativa basadas en LLM de código abierto"
                      </p>
                      <p className="text-muted-foreground">Laboratorio de Inteligencia Artificial Generativa</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">12:30 PM - 4:00 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Bootcamp: "Ingeniería de Prompts: Técnicas para maximizar la efectividad en la interacción con modelos de IA Generativa"
                      </p>
                      <p className="text-muted-foreground">Laboratorio de Informática Diseño II</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">12:30 PM - 4:00 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Bootcamp: "Desarrollo de Agentes de IA: Diseño y despliegue de agentes autónomos impulsados por IA."
                      </p>
                      <p className="text-muted-foreground">Laboratorio de Programación</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">2:00 PM - 2:15 PM</h3>
                      <p className="font-medium">Receso - Café</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dia2">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle>Sala de Conferencias. Mañana - 9:00 AM a 12:00 M</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">9:00 AM - 9:25 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Panel: "Articulación universidad-estado-sector productivo"
                      </p>
                      <p className="text-muted-foreground">Representantes de los tres sectores</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">9:25 AM - 9:35 AM</h3>
                      <p className="font-medium">Sesión de preguntas y respuestas</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">9:35 AM - 9:55 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Conferencia: "Entrenamiento de modelos propios: retos y oportunidades"
                      </p>
                      <p className="text-muted-foreground">Ponente invitado</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">10:00 AM - 10:15 AM</h3>
                      <p className="font-medium">Receso - Café</p>
                    </div>
                                        
                    <div>
                      <h3 className="text-lg font-semibold">10:00 AM - 12:00 M</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Sesión de pósters: Proyectos universitarios en IA Generativa
                      </p>
                      <p className="text-muted-foreground">Área de exposición</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">11:45 AM - 12:00 M</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Ceremonia de clausura y conclusiones
                      </p>
                      <p className="text-muted-foreground">Dra. Bettys Muñoz y Dr. Jimy Santana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                  <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                    <CardTitle>Sala Temática - Mañana - 8:00 AM a 12:00 M</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold">9:00 AM - 9:20 AM</h3>
                        <p className="font-medium text-purple-700 dark:text-purple-400">Virtualización con herramientas de la IA Generativa</p>
                        <p className="text-muted-foreground">Experto en el área</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">9:20 AM - 9:40 AM</h3>
                        <p className="font-medium text-purple-700 dark:text-purple-400">Aplicaciones de la IA Generativa...</p>
                        <p className="text-muted-foreground">Experto en el área</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">9:40 AM - 12:00 AM</h3>
                        <p className="font-medium text-purple-700 dark:text-purple-400">Trabajos de investigación y desarrollo de los estudiantes de postgrado en Informática, mención desarrollo de software, en modelos de lenguaje con IA Generativa</p>
                        <p className="text-muted-foreground">Expertos en el área</p>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>

              <Card>
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle>Laboratorios. Tarde - 12:30 PM a 4:00 PM</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">12:30 PM - 4:00 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Bootcamp: "Entrenamiento de Modelos Generativos: Introducción al entrenamiento y ajuste fino de modelos de lenguaje."
                      </p>
                      <p className="text-muted-foreground">Laboratorio de Inteligencia Artificial</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">12:30 PM - 4:00 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Bootcamp: "Generación Aumentada de Recuperación (RAG): Métodos avanzados para integrar datos externos con modelos generativos."
                      </p>
                      <p className="text-muted-foreground">Laboratorio de Diseño II</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">2:00 PM - 2:15 PM</h3>
                      <p className="font-medium">Receso - Café</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dia3">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                  <CardTitle>Sala de Conferencias. Mañana - 8:30 AM a 12:30 PM</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">8:30 AM - 9:00 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Panel: "Integración de la universidad con el sector productivo para la adopción y desarrollo de aplicaciones de la IA Generativa, con seguridad, eficiencia, ética y responsabilidad social"
                      </p>
                      <p className="text-muted-foreground">Representantes de los sectores</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">9:00 AM - 9:20 AM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Conferencia: "Integración de la IA Generativa en los planes y programas de estudio de postgrado. Una mirada critica y reflexiva a los procesos de aprendizaje, investigación y desarrollo"
                      </p>
                      <p className="text-muted-foreground">Ponente invitado</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">9:20 AM - 9:35 AM</h3>
                      <p className="font-medium">Sesión de preguntas y respuestas</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">9:35 AM - 9:50 AM</h3>
                      <p className="font-medium">Receso - Café</p>
                    </div>
                                        
                    <div>
                      <h3 className="text-lg font-semibold">9:50 AM - 12:00 M</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Sesión de pósters: Proyectos universitarios en IA Generativa
                      </p>
                      <p className="text-muted-foreground">Área de exposición</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">12:00 AM - 12:30 PM</h3>
                      <p className="font-medium text-purple-700 dark:text-purple-400">
                        Ceremonia de clausura y conclusiones
                      </p>
                      <p className="text-muted-foreground">Dra. Bettys Muñoz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </TabsContent>

        </Tabs>

        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Notas importantes:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              El programa está sujeto a cambios. Se notificará a los participantes registrados sobre cualquier
              modificación.
            </li>
            <li>Los bootcamps tienen cupo limitado. Se recomienda inscribirse con anticipación.</li>
            <li>
              Las sesiones virtuales estarán disponibles a través de un enlace que se enviará a los participantes
              registrados en esta modalidad.
            </li>
            <li>Se otorgarán certificados de participación y asistencia.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
