<!-- l10n-sync: source-file="06-custom-agents.md" -->
# Ejercicio 6 - Custom Agents

Los [Custom Agents][custom-agents] en GitHub Copilot te permiten crear asistentes de IA especializados adaptados a tareas o dominios específicos dentro de tu flujo de trabajo de desarrollo. Al definir agentes a través de archivos markdown en la carpeta `.github/agents` de tu repositorio, puedes proporcionar a Copilot instrucciones enfocadas, mejores prácticas, patrones de codificación y conocimiento específico del dominio que lo guían para realizar tipos particulares de trabajo de manera más efectiva. Esto permite a los equipos codificar su experiencia y estándares en agentes reutilizables. Podrías crear un agente de accesibilidad que asegure el cumplimiento de [WCAG][wcag], un agente de seguridad que siga prácticas de codificación segura, o un agente de pruebas que mantenga patrones de pruebas consistentes, permitiendo a los desarrolladores aprovechar estas capacidades especializadas bajo demanda para implementaciones más rápidas y consistentes.

Explorarás lo siguiente con Custom Agents:

- cómo crear un Custom Agent.
- asignar una tarea a un Custom Agent.

## Escenario

Tailspin Toys está comprometido a asegurar que su plataforma de crowdfunding sea accesible para todos los usuarios, independientemente de sus capacidades visuales o preferencias. Los comentarios recientes de los usuarios han destacado que algunos usuarios encuentran difícil de leer el tema oscuro actual debido al contraste insuficiente entre el texto y los colores de fondo. Para abordar esta preocupación de accesibilidad, el equipo de diseño ha solicitado la implementación de un modo de alto contraste que los usuarios puedan activar y desactivar.

Debido a que la accesibilidad es crítica, quieres asegurar que esto se implemente lo más rápido posible. Vas a utilizar un Custom Agent para generar la funcionalidad.

En este ejercicio, tú:

- explorarás Custom Agents.
- habilitarás un Custom Agent y le asignarás una tarea.

## Custom Agents

Los Custom Agents se definen mediante archivos markdown en la carpeta **.github/agents** de tu proyecto, o globalmente en **~/.copilot/agents**. Los archivos markdown contendrán orientación para Copilot sobre cómo realizar mejor una tarea.

## Custom Agents vs Skills

Hay cierta superposición lógica entre Custom Agents y skills. Ambos se definen principalmente con archivos markdown, y proporcionan orientación a una IA sobre cómo realizar operaciones. La mejor forma de entender la diferencia es pensar en un Custom Agent como el trabajador, y las skills como herramientas.

Los Custom Agents tienen su propia ventana de contexto, y están diseñados para usar skills como parte de su orquestación. En nuestro ejemplo, tenemos un Custom Agent de accesibilidad, que está diseñado para revisar y hacer actualizaciones al sitio basándose en directrices de accesibilidad definidas. Como parte de su trabajo, podría luego llamar a skills como la skill de pull request que vimos anteriormente, o una para ejecutar y gestionar pruebas.

Los Custom Agents se lanzan usando el comando `/agent` en Copilot CLI. Las skills se lanzan dinámicamente, por lo que pueden reutilizarse en múltiples agentes.

## Revisando el Custom Agent de accesibilidad

Ya se ha creado un Custom Agent de accesibilidad para ti. Revisemos el contenido para entender cómo guiará a Copilot.

1. Regresa a tu codespace.
2. Abre **.github/agents/accessibility.md**.
3. Nota la sección del encabezado con el nombre y la descripción del agente.

> [!IMPORTANT]
> Esta sección es obligatoria para los Custom Agents.

4. A partir de ahí, escanea y revisa las siguientes secciones que destacan:
    - Responsabilidades principales al generar código para un sitio web accesible.
    - Mejores prácticas para accesibilidad.
    - Ejemplos de código para HTML, CSS y JavaScript.
    - Una lista de errores y equivocaciones comunes.

> [!NOTE]
> No hay un "mejor markdown" para un Custom Agent. Como con cualquier cosa en IA, querrás probar y explorar para determinar qué funciona mejor para tus entornos y escenarios.

## Usando un Custom Agent en Copilot CLI

Puedes iniciar un Custom Agent en Copilot CLI usando el comando `/agent`. Realicemos una revisión de accesibilidad en nuestro sitio web regresando primero a nuestro branch principal y luego iniciando el agente.

1. Regresa a tu codespace.
2. Si no está ya abierta, abre una ventana de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Si no está ya en ejecución, inicia Copilot CLI ejecutando el siguiente comando en la ventana de terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Regresa al branch principal ejecutando un comando CLI directamente dentro de Copilot usando el siguiente prompt:

    ```
    !git checkout main
    ```

> [!NOTE]
> Prefijar un prompt con `!` te permite ejecutar herramientas CLI directamente dentro de Copilot CLI.

1. Muestra la lista de agentes escribiendo `/agent` en la ventana del prompt en Copilot CLI y seleccionando <kbd>Enter</kbd>.
2. Selecciona el **Accessibility agent** de la lista de agentes disponibles.
3. Usa el siguiente prompt para pedirle al agente de accesibilidad que realice una revisión y genere correcciones para una clase particular de posibles errores relacionados con encabezados HTML:

    ```
    Perform an accessibility review of the site. Pull the related issue down from the repository for details. We're going to build in stages, so for now focus on headers, ensuring we're following good guidelines. Ensure there are e2e tests for any updates made to the project. Then create a PR with the updates.
    ```

4. ¡Copilot se pone a trabajar en la tarea! Comenzará obteniendo el issue, luego realizando la revisión, generando actualizaciones y finalmente creando el PR. También deberías notar que cuando crea el PR utiliza la skill enfocada en PRs para el proyecto.

> [!NOTE]
> Este proceso probablemente tomará unos minutos. Es un buen momento para reflexionar sobre todo lo que has aprendido, disfrutar de una bebida, o adelantarte al próximo módulo que habla sobre algunos comandos adicionales disponibles para ti en Copilot CLI.

> [!IMPORTANT]
> **NO** salgas de Copilot CLI. Lo necesitaremos en el próximo ejercicio.

## Resumen y próximos pasos

Esta lección exploró los [Custom Agents][custom-agents] en GitHub Copilot, asistentes de IA especializados adaptados a tareas y dominios específicos. Con Custom Agents puedes codificar la experiencia y estándares de tu equipo en agentes reutilizables que guían a Copilot para realizar tipos particulares de trabajo de manera más efectiva.

Exploraste estos conceptos:

- cómo crear un Custom Agent.
- asignar una tarea a un Custom Agent.

## Recursos

- [Custom agents][custom-agents]
- [Creating custom agents for a repository][creating-custom-agents]
- [Custom agents on awesome-copilot][awesome-copilot-agents]
- [Preparing to use custom agents in your organization][org-custom-agents]
- [Preparing to use custom agents in your enterprise][enterprise-custom-agents]

---

[custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents
[creating-custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents
[awesome-copilot-agents]: https://github.com/github/awesome-copilot/tree/main/agents
[wcag]: https://www.w3.org/WAI/standards-guidelines/wcag/
[org-custom-agents]: https://docs.github.com/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents
[enterprise-custom-agents]: https://docs.github.com/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents
