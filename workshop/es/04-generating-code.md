<!-- l10n-sync: source-file="04-generating-code.md" -->
# Ejercicio 4 - Agregando funcionalidades al proyecto con GitHub Copilot CLI

Como podrías esperar, las tareas principales que realizarás con GitHub Copilot CLI son agregar funcionalidades, funcionalidad y código a un proyecto. Como ya has explorado, puedes agregar archivos de instrucciones y servidores MCP para ayudar a guiar a Copilot y asegurarte de obtener el código que esperas, siguiendo las mejores prácticas establecidas por el equipo y la comunidad. Tomemos uno de los issues que generamos anteriormente y pidamos a Copilot que nos ayude a implementarlo.

## Escenario

Ha llegado el momento de finalmente implementar el filtrado en el proyecto. Ya tienes el issue en GitHub. Hagamos que Copilot obtenga los detalles del issue y elabore un plan para implementarlo. Luego pondremos a Copilot a trabajar para crear el código y ejecutar las pruebas.

En este ejercicio, tú:

- utilizarás el modo plan para generar un plan para implementar la funcionalidad de filtrado.
- generarás el código necesario para agregar filtrado al sitio web con Copilot.

Al final de este ejercicio, habrás agregado nueva funcionalidad al proyecto.

## Utiliza el modo plan

Uno de los mejores usos de la IA es la planificación. A menudo tendrás un buen concepto de lo que quieres construir, pero solo necesitas intercambiar algunas ideas con algo. Las herramientas de IA pueden ayudarte a cristalizar tus pensamientos haciéndote preguntas de seguimiento y trabajando a través de diferentes obstáculos o componentes faltantes. Para apoyar este proceso, Copilot CLI ofrece un modo plan.

Comenzarás el proceso de crear la nueva funcionalidad utilizando el modo plan en Copilot CLI.

1. Regresa a tu codespace.
2. Si no está ya abierta, abre una ventana de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Si no está ya en ejecución, inicia Copilot CLI ejecutando el siguiente comando en la ventana de terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Si ya está en ejecución, limpia el contexto de Copilot enviando el comando `/clear` en el prompt.
5. Cambia Copilot CLI al modo plan seleccionando <kbd>Shift</kbd>+<kbd>Tab</kbd> hasta que veas **Plan mode** justo debajo de la ventana del prompt.
6. Ingresa el siguiente prompt en Copilot CLI para que obtenga el issue de tu repositorio y proponga un plan para implementar la funcionalidad:

    ```
    Retrieve the issue on the repository related to adding filtering. Help me build a good plan to implement this functionality.
    ```

7. Copilot puede hacer preguntas de seguimiento mientras construye su plan. A medida que surjan, respóndelas basándote en cómo construirías la funcionalidad.
8. Una vez generado el plan, revisa el blueprint. Deberías notar que recomienda cambios en el backend y frontend, así como la generación de pruebas. Puedes utilizar <kbd>Ctrl</kbd>+<kbd>Y</kbd> para ver los detalles completos como un archivo markdown en VS Code.
9.  ¡Si deseas hacer alguna sugerencia al plan que Copilot generó, siéntete libre de hacerlo!
10. Una vez que estés satisfecho, sal del modo plan seleccionando <kbd>Shift</kbd>+<kbd>Tab</kbd>.
11. Dile a Copilot que comience el trabajo enviando un prompt de `start` (o una frase similar como "¡Vamos a hacerlo!") a Copilot.
12. ¡Copilot se pondrá a trabajar generando los archivos!

> [!NOTE]
> Esta operación probablemente tomará varios minutos. Verás a Copilot editar y crear archivos, actualizar y generar pruebas, y ejecutar todas las pruebas para asegurar que todo tenga éxito. Ahora es un buen momento para reflexionar sobre lo que has explorado hasta ahora, o para disfrutar de una bebida.

## Revisa el código

Todo el código de IA necesita ser revisado antes de fusionarse en producción. Tomemos el tiempo ahora para explorar los archivos que Copilot creó y modificó al implementar la nueva funcionalidad.

1. Oculta la ventana de terminal en tu codespace seleccionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
2. Selecciona **Source Control** en tu codespace.
3. Nota los archivos modificados. Deberías ver actualizaciones en archivos como **games.py**, la API de Games, y **test_games.py**, las pruebas para esa API. También deberías ver nuevos archivos creados, como componentes Svelte para la nueva funcionalidad de filtrado, y pruebas de Playwright para validar el frontend.
4. Abre los archivos y explora los cambios. En particular, nota las secciones de comentarios que se han agregado. Todo esto viene de los archivos de instrucciones con los que trabajaste anteriormente en este taller.

## Resumen y próximos pasos

¡Ahora has agregado funcionalidad de filtrado al sitio web con la ayuda de Copilot CLI! Específicamente, tú:

- utilizaste el modo plan para generar un plan para implementar la funcionalidad de filtrado.
- generaste el código necesario para agregar filtrado al sitio web con Copilot.

## Recursos

- [Using Copilot CLI][using-copilot-cli]
- [About Copilot CLI][about-copilot-cli]
- [Context management in Copilot CLI][context-management]

---

[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[context-management]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#context-management
