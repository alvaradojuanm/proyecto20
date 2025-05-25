"use client"

import { Mail, MapPin } from "lucide-react"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Registro al Congreso</h1>
        <p className="text-center mb-12 text-muted-foreground">
          Agradecemos tu interés en participar en el Congreso de Inteligencia Artificial Generativa.
          Para completar tu inscripción, por favor sigue los pasos que te indicamos a continuación.
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
            <h2 className="text-2xl font-bold mb-6">Guía para el Registro</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-4 mb-6">
              <li>
                Revisa los requisitos de participación y el cronograma del congreso.
              </li>
              <li>
                Completa el formulario de registro en línea haciendo clic en el botón que aparece a continuación.
              </li>
              <li>
                Una vez completado el formulario, recibirás un correo de confirmación con más detalles.
              </li>
            </ol>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexDvkvIjQRpepIhpp99c-gCORcibQTGvYIkn5ujUmjhuIvqw/viewform?usp=sharing&ouid=112674129769674638646"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full md:w-auto">
                Ir al Formulario de Inscripción
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}