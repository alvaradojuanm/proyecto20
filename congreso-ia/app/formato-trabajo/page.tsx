export default function FormatoTrabajoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Formato de Trabajo para Ponentes</h1>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <h2>Instrucciones para la presentación de trabajos</h2>

          <p>
            A continuación se presentan las instrucciones detalladas para la preparación y envío de trabajos
            científicos, artículos técnicos o ensayos para el Congreso "Desarrollando las Potencialidades y Capacidades
            del Sector Universitario en Inteligencia Artificial Generativa".
          </p>

          <h3>Título del Artículo</h3>
          <p>El título debe estar en fuente Arial 14 pt, centrada y negrita, a espacio sencillo.</p>

          <h3>Identificación de los autores</h3>
          <p>Debe incluir:</p>
          <ul>
            <li>Título de postgrado más alto (en caso de poseerlo)</li>
            <li>Primer apellido, seguido del primer nombre, separados por una coma</li>
            <li>Institución de procedencia o entidad de afiliación, y abreviatura</li>
            <li>Correo electrónico en minúsculas</li>
            <li>Ciudad, país</li>
            <li>Registro ReCITVEN y/o ORCID</li>
          </ul>

          <h3>Resumen</h3>
          <p>
            El resumen no deberá ser mayor a 250 palabras (en español y en inglés, Arial 12). Reflejará el contenido del
            artículo, describiendo de manera concisa, el trabajo realizado. Esto generalmente se logra describiendo lo
            que se hizo en la investigación o el ensayo, cómo se hizo, los resultados, si los tiene, y su relevancia.
            Para lo cual se podría considerar los fundamentos de la investigación realizada, el propósito y/o objetivos,
            metodología utilizada (si aplica), resultados más relevantes y conclusiones.
          </p>

          <h3>Palabras clave</h3>
          <p>Deben ser entre tres y seis, separadas por coma.</p>

          <h3>Diseño de página</h3>
          <p>
            El contenido del documento debe limitarse a un máximo de doce (12) páginas, incluyendo texto, ilustraciones,
            gráficos y referencias. Por página se entiende una cara de papel tamaño carta ó 21.59 cm x 27.94 cm (8.5" x
            11"). El cuerpo del artículo es a dos (2) columnas, cada una con 8.79 cm de ancho y 1.0 cm de espacio entre
            cada columna.
          </p>
          <p>
            La configuración de los márgenes es la siguiente: superior 3.97 cm, inferior 2.5 cm, izquierdo 1.5 cm y
            derecho 1.5 cm. La configuración del encabezado de página es de 2 cm y el pie página es a 1.5 cm, ambos solo
            aplicados en la primera página.
          </p>

          <h3>Tipos de letra y estilos</h3>
          <p>
            Utilice texto con el tipo de letra Times New Roman. Los párrafos deben iniciar con una sangría de 0.5 cm.
            Además, el texto debe estar completamente justificado.
          </p>

          <h3>Texto principal</h3>
          <p>
            El texto principal en Times New Roman, 11 puntos, a espacio sencillo. Las secciones a considerar, después de
            Título y Palabras clave, son: 1. Introducción, 2. Fundamentos o estado del arte del tema. Materiales y
            métodos. 3. Resultados y discusión, 4. Conclusiones, 5. Agradecimientos, 7. Referencias. En caso de ser un
            ensayo, siéntase libre de desarrollar el tema, manteniendo los formatos descritos.
          </p>
          <p>El texto principal debe ser justificado.</p>

          <h3>Títulos de las secciones</h3>
          <p>
            Los títulos de las secciones deben tener una fuente de 14 puntos, las subsecciones deben tener ser de 12
            puntos.
          </p>

          <h3>Ejes temáticos</h3>
          <p>Los ejes temáticos para el congreso son:</p>
          <ul>
            <li>
              Planes, experiencias y proyectos de la universidad venezolana para el uso, adopción, desarrollo e
              investigaciones en IA Generativa
            </li>
            <li>Entrenamiento y producción de modelos de generación de lenguaje</li>
            <li>
              Articulación con los sectores socio productivos y gubernamentales para propiciar y maximizar su adopción y
              uso, con ética y responsabilidad social
            </li>
            <li>Consideraciones éticas y de privacidad de la IA Generativa</li>
          </ul>

          <h3>Envío de trabajos</h3>
          <p>
            Los trabajos deben ser enviados al correo electrónico{" "}
            <a href="mailto:congresoiag@gmail.com" className="text-blue-600 dark:text-blue-400">
              congresoiag@gmail.com
            </a>
            con el asunto "Trabajo para Congreso IA Generativa - [Nombre del Autor]".
          </p>

          <h3>Fecha límite de envío</h3>
          <p>La fecha límite para el envío de trabajos es el 15 de junio de 2025.</p>

          <h3>Consultas</h3>
          <p>
            Para cualquier consulta adicional sobre el formato o envío de trabajos, por favor contactar al comité
            organizador a través del correo{" "}
            <a href="mailto:congresoiag@gmail.com" className="text-blue-600 dark:text-blue-400">
              congresoiag@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
