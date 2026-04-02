<!-- l10n-sync: source-file="README.md" -->
# Taller de GitHub Copilot CLI

¡Bienvenido a este taller guiado por instructor de 90 minutos sobre **GitHub Copilot CLI**! En esta sesión práctica, aprenderás cómo aprovechar el poder del desarrollo asistido por IA directamente desde tu terminal.

## Descripción General del Taller

GitHub Copilot CLI es un poderoso asistente de codificación agéntico que se ejecuta directamente en tu terminal. A diferencia de las experiencias tradicionales de Copilot basadas en IDE, Copilot CLI te permite trabajar con IA donde muchos desarrolladores pasan gran parte de su tiempo: la línea de comandos. Puede explorar bases de código, realizar cambios en el código, ejecutar comandos e interactuar con herramientas externas a través de servidores Model Context Protocol (MCP).

### Objetivos de Aprendizaje

Al finalizar este taller, serás capaz de:

1. **Entender Custom Instructions** - Proporcionar contexto y directrices para mejorar la calidad de la generación de código
2. **Instalar y configurar GitHub Copilot CLI** - Configurar Copilot CLI en un codespace y autenticarte con GitHub
3. **Trabajar con servidores MCP** - Extender las capacidades de Copilot CLI conectándote a servicios externos
4. **Generar y modificar código** - Aprovechar la IA para crear nuevas funcionalidades desde la terminal
5. **Usar Agent Skills** - Mejorar las capacidades de Copilot con habilidades especializadas
6. **Crear Custom Agents** - Construir agentes especializados para tareas específicas

## Requisitos Previos

Antes de asistir a este taller, asegúrate de tener:

- [ ] Una cuenta de GitHub con una suscripción activa de **Copilot Pro, Pro+, Business o Enterprise**
- [ ] Familiaridad básica con operaciones de terminal/línea de comandos
- [ ] Git instalado y configurado

> [!NOTE]
> Si estás usando Copilot Business o Copilot Enterprise, asegúrate de que tu administrador haya habilitado Copilot CLI para su uso.

## El Escenario: Tailspin Toys

A lo largo de este taller, trabajarás con **Tailspin Toys**, una plataforma de crowdfunding para juegos con temática de desarrolladores. La aplicación cuenta con:

- **Backend**: Flask API con SQLAlchemy ORM para interacciones con la base de datos
- **Frontend**: Astro/Svelte con Tailwind CSS para estilos
- **Base de datos**: SQLite para desarrollo local

Esta aplicación full-stack proporciona un excelente entorno de pruebas para explorar las capacidades de Copilot CLI a través de diferentes tipos de archivos, lenguajes y tareas de desarrollo.

## Ejercicios del Taller

| Ejercicio | Tema | Descripción |
|-----------|------|-------------|
| [0. Requisitos Previos][ex0] | Configuración | Crea tu repositorio y codespace |
| [1. Custom Instructions][ex1] | Contexto | Aprende cómo los archivos de instrucciones guían a Copilot |
| [2. Instalación de Copilot CLI][ex2] | Instalación | Instala y autentica Copilot CLI |
| [3. Servidores MCP][ex3] | Herramientas Externas | Conéctate a GitHub y otros servicios vía MCP |
| [4. Generación de Código][ex4] | Generación de Código | Usa el modo plan y genera funcionalidades |
| [5. Agent Skills][ex5] | Skills | Mejora Copilot con habilidades especializadas |
| [6. Custom Agents][ex6] | Agentes | Crea y usa agentes personalizados |
| [7. Slash Commands][ex7] | Funcionalidades del CLI | Explora contexto, modelos y uso compartido |
| [8. Revisión][ex8] | Resumen | Revisa conceptos clave y próximos pasos |

## Consejos para el Éxito

1. **Sé específico** - Cuanto más contexto proporciones, mejores serán los resultados
2. **Comienza con exploración** - Pide a Copilot que explique la base de código antes de hacer cambios
3. **Itera** - Refina tus prompts basándote en los resultados iniciales
4. **Confía pero verifica** - Siempre revisa el código generado antes de hacer commit
5. **Usa archivos de instrucciones** - Aprovecha `.github/copilot-instructions.md` para orientación a nivel de proyecto

## Soporte

- **Durante el taller**: Levanta la mano o usa el chat para hacer preguntas
- **Después del taller**: Abre un issue en este repositorio

---

*¡Feliz codificación con GitHub Copilot CLI! 🚀*

[ex0]: ./00-prereqs.md
[ex1]: ./01-custom-instructions.md
[ex2]: ./02-install-copilot-cli.md
[ex3]: ./03-mcp.md
[ex4]: ./04-generating-code.md
[ex5]: ./05-agent-skills.md
[ex6]: ./06-custom-agents.md
[ex7]: ./07-slash-commands.md
[ex8]: ./08-review.md
