import { CalendarDays, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InformacionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Información del Congreso</h1>

        <div className="grid gap-8">
          {/* Información General */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Información General</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Fecha</h3>
                      <p>Lunes 14, martes 15 y sábado 19 de julio de 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Lugar</h3>
                      <p>UPT Aragua FBF</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Objetivos */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
            <Card>
              <CardHeader>
                <CardTitle>Objetivo General</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Propiciar el desarrollo y las potencialidades del sector universitario del país para la adopción de la
                  IA Generativa en los procesos de formación, creación intelectual y articulación socio productiva.
                </p>

                <h3 className="font-semibold text-lg mb-2">Objetivos Específicos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Promover y sistematizar experiencias y proyectos en IA Generativa desarrollados por universidades
                    venezolanas.
                  </li>
                  <li>
                    Impulsar la adopción de la IA Generativa en los planes de estudio de pre y postgrado, la creación
                    intelectual y la innovación universitaria.
                  </li>
                  <li>
                    Fomentar la articulación de la universidad, el estado y los sectores socio productivos como parte de
                    una estrategia nacional en IA Generativa.
                  </li>
                  <li>
                    Propiciar el desarrollo de soluciones tecnológicas locales basadas en entrenamiento de modelos de
                    lenguaje generativos y herramientas de código abierto.
                  </li>
                  <li>
                    Promover la conformación de redes de colaboración de aprendizaje, investigación y desarrollo entre
                    comunidades universitarias en IA Generativa.
                  </li>
                  <li>
                    Iniciar el estudio de la IA Generativa mediante bootcamps sobre sus fundamentos, aplicaciones y
                    principios y estrategias de entrenamiento en IA Generativa.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Modalidad */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Modalidad</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <span className="font-medium">Presencial:</span>
                    <p className="mt-1">Conferencias, ponencias, paneles de discusión, bootcamps.</p>
                  </li>
                  <li>
                    <span className="font-medium">Virtual:</span>
                    <p className="mt-1">Conferencias, ponencias, paneles de discusión.</p>
                  </li>
                  <li>
                    <span className="font-medium">Póster:</span>
                    <p className="mt-1">Experiencias, proyectos y vivencias de las comunidades universitarias.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Metodología */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Metodología</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  El Congreso "Desarrollando las Potencialidades y Capacidades del Sector Universitario en Inteligencia
                  Artificial Generativa", se desarrollará bajo la siguiente metodología:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <p className="font-medium">Conferencias, ponencias y paneles de discusión de expertos</p>
                    <p className="mt-1">
                      Del sistema universitario venezolano en las diferentes temáticas, cuyo objetivo es presentar las
                      bases fundamentales de la IA Generativa, los desarrollos mundiales y locales, las experiencias de
                      las universidades, los retos y alcances de esta tecnología disruptiva para el desarrollo
                      universitario y del país.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Bootcamps dictados por expertos</p>
                    <p className="mt-1">
                      Cuyo objetivo es propiciar el estudio y desarrollo de la IA Generativa en nuestras comunidades
                      universitarias.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Posters de experiencias, proyectos y vivencias</p>
                    <p className="mt-1">
                      De las comunidades universitarias en materia de IA Generativa, para fomentar y articular su
                      adopción y desarrollo.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Comité */}
          
        </div>
      </div>
    </div>
  )
}
