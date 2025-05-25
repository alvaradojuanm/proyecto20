import Link from "next/link"
import { CalendarDays, MapPin, Users, BookOpen, Lightbulb, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
  <div className="container mx-auto px-4 py-6">
    {/* Encabezado con logos y texto institucional */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      {/* Logo UPT Aragua */}
      <div className="flex-shrink-0">
        <img
          src="/images/logoUPTA.png"
          alt="Logo UPT Aragua"
          className="h-24 md:h-28 w-auto"
        />
      </div>

      {/* Texto institucional */}
      <div className="text-center text-sm md:text-base leading-snug md:leading-normal max-w-xl">
        <div>República Bolivariana de Venezuela</div>
        <div>Ministerio del Poder Popular para la Educación Universitaria</div>
        <div className="font-semibold">Universidad Politécnica Territorial del Estado Aragua</div>
        <div className="font-semibold">"Federico Brito Figueroa"</div>
      </div>

      {/* Logo Congreso */}
      <div className="flex-shrink-0">
        <img
          src="/images/logo-congreso-ia.png"
          alt="Logo Congreso IA Generativa"
          className="h-24 md:h-28 w-auto"
        />
      </div>
    </div>

    {/* Título del congreso */}
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Congreso "Desarrollando las Potencialidades y Capacidades del Sector Universitario en Inteligencia
        Artificial Generativa"
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <span>Lunes 14, martes 15 y sábado 19 de julio de 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <span>UPT Aragua FBF</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
          <Link href="/registro">Registrarse</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
          <Link href="/informacion">Más Información</Link>
        </Button>
      </div>
    </div>
  </div>
</header>


      {/* Main Content */}
      <main className="flex-1">
        {/* Objetivos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Objetivos del Congreso</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Objetivo General</h3>
                <p className="text-gray-700">
                  Propiciar el desarrollo y las potencialidades del sector universitario del país para la adopción de la
                  IA Generativa en los procesos de formación, creación intelectual y articulación socio productiva.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Objetivos Específicos</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
              </div>
            </div>
          </div>
        </section>

        {/* Modalidad y Metodología */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Modalidad y Metodología</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Modalidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Presencial:</span> Conferencias, ponencias, paneles de discusión,
                        bootcamps.
                      </li>
                      <li>
                        <span className="font-medium">Virtual:</span> Conferencias, ponencias, paneles de discusión.
                      </li>
                      <li>
                        <span className="font-medium">Póster:</span> Experiencias, proyectos y vivencias de las
                        comunidades universitarias.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Metodología</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Conferencias, ponencias y paneles de discusión de expertos del sistema universitario venezolano.
                      </li>
                      <li>
                        Bootcamps dictados por expertos para propiciar el estudio y desarrollo de la IA Generativa.
                      </li>
                      <li>Posters de experiencias, proyectos y vivencias de las comunidades universitarias.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ejes Temáticos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ejes Temáticos</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-purple-700" />
                  </div>
                  <CardTitle>Planes y Experiencias Universitarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Integración de la IA Generativa en planes de estudio</li>
                    <li>El rol del sector universitario en una estrategia nacional</li>
                    <li>Tendencias para el desarrollo curricular</li>
                    <li>IA generativa en la investigación académica</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle>Entrenamiento y Producción de Modelos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Desarrollo local de soluciones basadas en IA</li>
                    <li>Creación y diseño de datasets venezolanos</li>
                    <li>Entrenamiento de modelos propios</li>
                    <li>Retos técnicos y oportunidades</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Network className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle>Articulación Socio-Productiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Articulación entre universidades, gobierno y sector productivo</li>
                    <li>Emprendimientos universitarios con base en IA generativa</li>
                    <li>Aplicaciones prácticas en diversos sectores</li>
                    <li>Estrategias nacionales de IA</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-red-700" />
                  </div>
                  <CardTitle>Consideraciones Éticas y Privacidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Derechos digitales, privacidad y autonomía cultural</li>
                    <li>Retos éticos, culturales y técnicos en el contexto venezolano</li>
                    <li>Brecha tecnológica y dependencia digital</li>
                    <li>Riesgos de colonización algorítmica</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full md:col-span-2 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle>Bootcamps de Desarrollo</CardTitle>
                  <CardDescription>
                    Cursos intensivos para el desarrollo de habilidades en IA Generativa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Introducción al desarrollo de aplicaciones de IA Generativas</li>
                        <li>Ingeniería de Prompts</li>
                        <li>Generación Aumentada de Recuperación (RAG)</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Desarrollo de Agentes de IA</li>
                        <li>Entrenamiento de Modelos Generativos</li>
                        <li>Técnicas para maximizar la efectividad en la interacción con modelos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¡Participa en este evento único!</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Únete a la comunidad académica venezolana para impulsar el desarrollo de la Inteligencia Artificial
              Generativa en nuestras universidades y sectores productivos.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/registro">Registrarse Ahora</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  )
}
