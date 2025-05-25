"use client"

import { Mail, MapPin } from "lucide-react"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Contacto</h1>
        <p className="text-center mb-12 text-muted-foreground">
          ¿Tienes alguna pregunta sobre el congreso? Contáctanos
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Correo electrónico</h3>
                  <p className="text-muted-foreground">congresoiag@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full flex space-x-2">
                  <FaTelegramPlane className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                  <FaWhatsapp className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Telegram / WhatsApp</h3>
                  <p className="text-muted-foreground">+58 (0424) 343-90-53</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Dirección</h3>
                  <p className="text-muted-foreground">
                    Universidad Politécnica Territorial del Estado Aragua 'Federico Brito Figueroa'
                    <br />
                    La Victoria, Estado Aragua
                    <br />
                    Venezuela
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">Horario de atención</h3>
              <p className="text-muted-foreground">
                Lunes a Viernes
                <br />
                8:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <p className="text-muted-foreground">
              Para cualquier duda, sugerencia o comentario, puedes contactarnos a través del correo o mensajería instantánea.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

