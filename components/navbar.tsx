"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-950 border-b dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <img
                  src="/images/logo-congreso-ia.png"
                  alt="Logo Congreso IA"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-purple-900 dark:text-purple-400 hidden sm:inline">
                Congreso IA 2025
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Inicio
              </Link>
              <Link
                href="/informacion"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Información
              </Link>
              <Link
                href="/programa"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Programa
              </Link>
              <Link
                href="/ponentes"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Ponentes
              </Link>
              <Link
                href="/contacto"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contacto
              </Link>
              <ThemeToggle />
              <Button asChild size="sm" className="bg-purple-900 hover:bg-purple-800 text-white">
                <Link href="/registro">Registrarse</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/informacion"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Información
            </Link>
            <Link
              href="/programa"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Programa
            </Link>
            <Link
              href="/ponentes"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Ponentes
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-2">
              <Button asChild size="sm" className="w-full bg-purple-900 hover:bg-purple-800 text-white">
                <Link href="/registro" onClick={() => setIsMenuOpen(false)}>
                  Registrarse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
