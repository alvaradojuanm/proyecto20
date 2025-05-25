import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo-congreso-ia.png" alt="Logo Congreso IA" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Desarrollando las Potencialidades y Capacidades del Sector Universitario en Inteligencia Artificial
              Generativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Comité Organizador</h3>
              <ul className="space-y-2">
                <li>Dra. Bettys Muñoz - Rectora de la UPT Aragua FBF</li>
                <li>Dr. Jimy Santana</li>
                <li>Prof. Richard Castellanos</li>
                <li>Prof. Luis Díaz</li>
                <li>Prof. Edervlanger Vanegas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Comité Científico</h3>
              <ul className="space-y-2">
                <li>Dr. Jimy Santana</li>
                <li>Prof. Andrés Castillo</li>
                <li>Dr. Gabriel Santana</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2025 Congreso de IA Generativa - UPT Aragua FBF. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
