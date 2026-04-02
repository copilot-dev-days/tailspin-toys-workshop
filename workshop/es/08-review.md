<!-- l10n-sync: source-file="08-review.md" -->
# Ejercicio 8 - Revisión y Próximos Pasos

A lo largo de los últimos ejercicios, exploraste algunos de los casos de uso más comunes de GitHub Copilot CLI, incluyendo:

- interactuar con GitHub y otros servidores MCP.
- usar archivos de instrucciones para guiar la generación de código.
- implementar skills para agregar herramientas a la caja de herramientas de Copilot CLI.
- llamar Custom Agents para tareas avanzadas y más complejas.

Hablemos sobre algunos Slash Commands, mejores prácticas y próximos pasos.

## Slash Commands

Copilot CLI tiene una serie de Slash Commands disponibles para interactuar con él, incluyendo algunos que te permiten configurarlo o ver qué está pasando detrás de escena. Ya has usado `/clear` para iniciar un nuevo chat que limpia el contexto actual, y `/mcp` para registrar servidores MCP. Algunos adicionales que podrías encontrar útiles son:

| Comando            | Descripción                                                   |
| ------------------ | ------------------------------------------------------------- |
| `/add-dir`         | Agregar un directorio a la lista de confianza para Copilot    |
| `/clear`, `/new`   | Limpiar el historial de conversación y comenzar de nuevo      |
| `/compact`         | Resumir el historial de conversación para reducir el uso de la ventana de contexto |
| `/context`         | Mostrar el uso de tokens y visualización de la ventana de contexto |
| `/diff`            | Revisar los cambios realizados en el directorio actual        |
| `/model`           | Seleccionar el modelo de IA a usar (Claude Sonnet, GPT-5, etc.) |
| `/plan <prompt>`   | Crear un plan de implementación antes de codificar            |
| `/review <prompt>` | Ejecutar agente de revisión de código para analizar cambios   |
| `/delegate`        | Delegar tarea a Copilot Coding Agent para procesamiento asíncrono |
| `/session`         | Mostrar información de la sesión y resumen del workspace      |
| `/share`           | Compartir sesión a archivo markdown o GitHub gist             |
| `/skills`          | Gestionar skills para capacidades mejoradas                   |
| `/usage`           | Mostrar métricas y estadísticas de uso de la sesión           |

> [!TIP]
> Usa `/help` para ver la lista completa de comandos disponibles y atajos de teclado.

## Mejores prácticas

Al usar cualquier herramienta de IA, invertir en la infraestructura subyacente generará mejor código y una mejor experiencia. Esto incluye tener archivos de instrucciones robustos, Custom Agents y Agent Skills. Exploraste cada uno de estos en el taller. Un gran recurso para templates es [awesome-copilot][awesome-copilot]. ¡También puedes pedirle a Copilot que explore tu proyecto y cree estos como punto de partida! De hecho, todos los archivos de infraestructura de IA en este taller fueron tanto obtenidos de awesome-copilot como generados con la ayuda de Copilot.

Recuerda siempre que el contexto es clave, tanto en la vida como al trabajar con herramientas de IA. Una buena infraestructura ciertamente contribuye mucho a ayudar a generar código de la más alta calidad, pero los prompts también tienen un gran impacto. Describir claramente qué quieres construir, por qué quieres construirlo y cómo quieres construirlo ayudará a Copilot. Básicamente, si hay una pieza de información de la que Copilot se beneficiaría al tenerla, ¡asegúrate de proporcionársela!

## Próximos Pasos

¡La mejor manera de mejorar tus habilidades con cualquier herramienta es seguir usándola! Úsala para código de producción, para código de hobby, para esa pequeña aplicación que has tenido en mente durante años pero nunca te pusiste a construir. Comparte tus aprendizajes con tu equipo y aprende de tu equipo. Y, como siempre, explora la documentación:

## Recursos

- [About Copilot CLI][about-copilot-cli]
- [Using Copilot CLI][using-copilot-cli]
- [Awesome Copilot Repository][awesome-copilot]
- [Custom Instructions Guide][repo-instructions]
- [Agent Skills Documentation][agent-skills]
- [Custom Agents Documentation][custom-agents]
- [MCP Specification][mcp-spec]

---

[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[awesome-copilot]: https://github.com/github/awesome-copilot
[repo-instructions]: https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions
[agent-skills]: https://docs.github.com/copilot/concepts/agents/about-agent-skills
[custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents
[mcp-spec]: https://modelcontextprotocol.io/
