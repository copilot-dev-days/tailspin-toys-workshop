<!-- l10n-sync: source-file="03-mcp.md" -->
# Ejercicio 3 - Usando Servidores MCP con Copilot CLI

Hay más en escribir código que solo escribir código. Se necesitan crear issues, se necesitan llamar servicios externos y se necesita recopilar información. Normalmente esto implica interactuar con herramientas externas, lo que puede interrumpir el flujo del desarrollador. ¡A través del poder de Model Context Protocol (MCP), puedes acceder a toda esta funcionalidad directamente desde Copilot!

## Escenario

Eres un desarrollador a tiempo parcial de Tailspin Toys, una plataforma de crowdfunding para juegos de mesa con temática de desarrolladores. Te han asignado varias tareas para introducir nueva funcionalidad al sitio web. Siendo un buen miembro del equipo, quieres crear issues para dar seguimiento a tu trabajo. Para ayudar a tu yo del futuro, has decidido pedir ayuda a Copilot. Configurarás tu backlog de trabajo para el resto del laboratorio, Copilot CLI y el servidor GitHub Model Context Protocol (MCP) para que cree los issues por ti. También registrarás servidores MCP para las diversas tecnologías utilizadas en el proyecto, como Svelte y Astro.

En este ejercicio, tú:

- explorarás Model Context Protocol (MCP), que proporciona acceso a herramientas y capacidades externas.
- configurarás y utilizarás servidores MCP en GitHub Copilot CLI.
- usarás GitHub Copilot CLI para crear issues en tu repositorio.

Al final de este ejercicio, habrás creado un backlog de issues de GitHub para usar durante el resto del laboratorio.

## ¿Qué es el modo agente y Model Context Protocol (MCP)?

[Model Context Protocol (MCP)][mcp-blog-post] proporciona a los agentes de IA una forma de comunicarse con herramientas y servicios externos. Al usar MCP, los agentes de IA pueden comunicarse con herramientas y servicios externos en tiempo real. Esto les permite acceder a información actualizada (usando recursos) y realizar acciones en tu nombre (usando herramientas).

Estas herramientas y recursos se acceden a través de un servidor MCP, que actúa como un puente entre el agente de IA y las herramientas y servicios externos. El servidor MCP es responsable de gestionar la comunicación entre el agente de IA y las herramientas externas (como APIs existentes o herramientas locales como paquetes NPM). Cada servidor MCP representa un conjunto diferente de herramientas y recursos a los que el agente de IA puede acceder.

![Diagram showing the inner works of agent mode and how it interacts with context, LLM and tools - including tools contributed by MCP servers and VS Code extensions][img-mcp-diagram]

Un par de servidores MCP populares existentes son:

- **[GitHub MCP Server][github-mcp-server]**: Este servidor proporciona acceso a un conjunto de APIs para gestionar tus repositorios de GitHub. Permite al agente de IA realizar acciones como crear nuevos repositorios, actualizar los existentes y gestionar issues y pull requests. **El GitHub MCP Server está disponible automáticamente en Copilot CLI.**
- **[Playwright MCP Server][playwright-mcp-server]**: Este servidor proporciona capacidades de automatización de navegador usando Playwright. Permite al agente de IA realizar acciones como navegar a páginas web, llenar formularios y hacer clic en botones.
- **[Microsoft Learn MCP Server][microsoft-learn-mcp-server]**: Este servidor permite a clientes como GitHub Copilot y otros agentes de IA traer información confiable y actualizada directamente de la documentación oficial de Microsoft. Permite buscar en la documentación, obtener un artículo completo y buscar entre ejemplos de código.

Hay muchos otros servidores MCP disponibles que proporcionan acceso a diferentes herramientas y recursos. GitHub aloja un [registro de MCP][mcp-registry] para mejorar la descubribilidad y las contribuciones al ecosistema.

> [!IMPORTANT]
> Con respecto a la seguridad, trata los servidores MCP como tratarías cualquier otra dependencia en tu proyecto. Antes de usar un servidor MCP, revisa cuidadosamente su código fuente, verifica al publicador y considera las implicaciones de seguridad. Solo usa servidores MCP en los que confíes y ten precaución al otorgar acceso a recursos u operaciones sensibles.

## Permitir todas las herramientas

Como agente, Copilot CLI a menudo necesitará ejecutar varios comandos, como acceder a servidores MCP, realizar builds o ejecutar pruebas. Copilot CLI soporta un modo "[YOLO][yolo-wikipedia]", o modo de permitir todas las herramientas. Esto otorga a Copilot CLI la capacidad de ejecutar automáticamente cualquier comando sin obtener aprobación previa de tu parte.

> [!IMPORTANT]
> Si usas una opción de aprobación automática como `--allow-all-tools` o `--yolo`, Copilot tiene el mismo acceso que tú a los archivos en tu computadora, y puede ejecutar cualquier comando de shell que tú puedas ejecutar, sin obtener tu aprobación previa. Consulta la [documentación de consideraciones de seguridad][security-considerations] para más información.

Debido a que estamos trabajando en un entorno de taller en un codespace, utilizaremos `--allow-all-tools` para agilizar el taller.

## Agregando servidores MCP a Copilot CLI

Los servidores MCP se registran en **~/.copilot/mcp-config.json**. Puedes actualizar el archivo directamente, o agregarlos a través del comando `/mcp add`, que es la ruta que tomarás aquí. A medida que agregues cada servidor, o cuando inicies Copilot CLI en el futuro, se iniciarán automáticamente.

1. Regresa a tu codespace.
2. Si no está ya abierta, abre una ventana de terminal seleccionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Si Copilot ya está en ejecución, detenlo seleccionando <kbd>Ctrl</kbd>+<kbd>C</kbd> dos veces.
4. Inicia Copilot ejecutando el siguiente comando en la ventana de terminal:

    ```bash
    copilot --allow-all-tools
    ```

5. Dentro de Copilot CLI, usa el siguiente comando para iniciar la interfaz de agregar servidor MCP:

    ```text
    /mcp add
    ```

6. Establece el **Server name** a **Svelte** y selecciona <kbd>Tab</kbd>.
7. Establece el **Server type** a **\[3\] HTTP** y selecciona <kbd>Tab</kbd>.
8. Establece la **URL** a **https://mcp.svelte.dev/mcp**.
9. Selecciona <kbd>Ctrl</kbd>+<kbd>S</kbd> para guardar el servidor.
10. Selecciona <kbd>A</kbd> para agregar otro servidor.
11. Sigue los pasos 5 a 9 para registrar Playwright, Astro y Microsoft Learn, usando la siguiente tabla:

    | Server Name | Server Type | Command or URL |
    | ----------- | ----------- | -------------- |
    | Playwright | \[1\] Local | `npx @playwright/mcp@latest` |
    | Astro | \[3\] HTTP | `https://mcp.docs.astro.build/mcp` |
    | Microsoft Learn | \[3\] HTTP | `https://learn.microsoft.com/api/mcp` |

12. Una vez completado, selecciona <kbd>Q</kbd> para salir de la interfaz.

## Creando un backlog de tareas

Ahora que has configurado el GitHub MCP Server, puedes usar el modo agente de Copilot para crear un backlog de tareas para usar en el resto del laboratorio.

1. Regresa a tu codespace.
2. Si no está ya abierta, abre una ventana de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Si no está ya en ejecución, inicia Copilot CLI ejecutando el siguiente comando en la ventana de terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Si ya está en ejecución, limpia el contexto de Copilot enviando el comando `/clear` en el prompt.
5. Escribe o pega el siguiente prompt para crear los issues en los que trabajarás en el laboratorio:

    ```markdown
    In my GitHub repo, create GitHub issues for our Tailspin Toys backlog. Each issue should include:
    - A clear title
    - A brief description of the task and why it is important to the project
    - A checkbox list of acceptance criteria

    From our recent planning meeting, the upcoming backlog includes the following tasks:

    1. Allow users to filter games by category and publisher
    2. Perform an accessibility review and ensure the site is following good practices
    3. Implement pagination on the game list page
    ```

> [!TIP]
> <kbd>Enter</kbd> envía automáticamente el prompt a Copilot CLI. Si deseas escribir mensajes más largos en múltiples líneas, puedes usar <kbd>Shift</kbd>+<kbd>Enter</kbd> para agregar líneas en blanco.

6. Presiona <kbd>Enter</kbd> para enviar el prompt a Copilot.
7. GitHub Copilot procesará la solicitud y creará los issues en tu repositorio de GitHub.
8. En una pestaña separada del navegador, navega a tu repositorio de GitHub y selecciona la pestaña de issues.
9.  Deberías ver una lista de issues que han sido creados por Copilot. Cada issue debería incluir un título claro y una lista de criterios de aceptación con checkboxes.

![Example of issues created in GitHub][img-github-issues]

Deberías notar que los issues son bastante detallados. Aquí es donde te beneficias del poder de los Large Language Models (LLMs) y Model Context Protocol (MCP), ya que ha podido crear una descripción inicial clara de los issues.

## Resumen y próximos pasos

¡Felicidades, has creado issues en GitHub usando Copilot CLI y MCP, y registrado servidores MCP!

Para recapitular, en este ejercicio:

- exploraste Model Context Protocol (MCP), que proporciona acceso a herramientas y capacidades externas.
- configuraste y utilizaste servidores MCP en GitHub Copilot CLI.
- usaste GitHub Copilot CLI para crear issues en tu repositorio.

Con el GitHub MCP Server configurado, ahora puedes usar GitHub Copilot CLI para realizar acciones adicionales en tu nombre, como crear nuevos repositorios, gestionar pull requests y buscar información en tus repositorios.

## Recursos

- [What the heck is MCP and why is everyone talking about it?][mcp-blog-post]
- [GitHub MCP Server][github-mcp-server]
- [Microsoft Playwright MCP Server][playwright-mcp-server]
- [GitHub MCP Registry][mcp-registry]
- [VS Code Extensions][vscode-extensions]

---

[mcp-blog-post]: https://github.blog/ai-and-ml/llms/what-the-heck-is-mcp-and-why-is-everyone-talking-about-it/
[github-mcp-server]: https://github.com/github/github-mcp-server
[playwright-mcp-server]: https://github.com/microsoft/playwright-mcp
[mcp-registry]: https://github.com/mcp
[vscode-extensions]: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
[remote-github-mcp-server]: https://github.blog/changelog/2025-06-12-remote-github-mcp-server-is-now-available-in-public-preview/
[yolo-wikipedia]: https://wikipedia.org/wiki/YOLO_(aphorism)
[security-considerations]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli#security-considerations
[microsoft-learn-mcp-server]: https://learn.microsoft.com/training/support/mcp
[img-mcp-diagram]: ../images/3-mcp-diagram.png
[img-github-issues]: ../images/3-github-issues-created.png
