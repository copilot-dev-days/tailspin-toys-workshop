<!-- l10n-sync: source-file="07-slash-commands.md" -->
# Ejercicio 7 - Slash Commands en GitHub Copilot CLI

Como toda buena herramienta CLI, GitHub Copilot CLI incluye muchos Slash Commands para interactuar con él. Estos comandos exponen funcionalidad avanzada, información "detrás de escena" u opciones de configuración adicionales. Ya has explorado un par con `/clear` para limpiar el contexto y `/mcp` para registrar servidores MCP. Exploremos algunos otros poderosos, incluyendo `/context`, `/models` y `/share`.

## Escenario

Como desarrollador a tiempo parcial de Tailspin Toys, quieres compartir tu experiencia con Copilot CLI con el resto del equipo. También quieres explorar diferentes opciones dentro de la herramienta para asegurarte de que estás sacando el máximo provecho de ella.

En este ejercicio usarás:

- `/share` para crear un GitHub gist para compartir tu sesión con el equipo.
- `/context` para ver el contexto que Copilot CLI está usando actualmente.
- `/models` para explorar la lista de modelos disponibles y seleccionar uno nuevo si así lo deseas.

## Compartir una sesión

Usar cualquier herramienta, incluyendo una herramienta de IA, es una habilidad. Trabajar juntos como equipo, compartir aprendizajes entre sí, es la mejor manera de ayudar a mejorar la experiencia de todos y generar código de mayor calidad. Para apoyar esto, Copilot CLI proporciona un comando `/share`. El comando `/share` puede generar un archivo markdown o un GitHub gist con los detalles de la sesión, incluyendo los prompts utilizados y la lógica que Copilot siguió.

Creemos un GitHub gist que podríamos compartir con nuestro equipo.

1. Regresa a tu codespace.
2. Si está oculta, muestra la ventana de terminal seleccionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. En la ventana del prompt de Copilot CLI, envía el siguiente comando:

    ```
    /share gist
    ```

4. En solo un par de momentos, Copilot creará un gist y mostrará el enlace.
5. Copia el texto del enlace.
6. En una nueva pestaña del navegador, pega el enlace para explorar el gist. Nota cómo el gist resalta los prompts enviados, las skills y agentes usados, el proceso de pensamiento de Copilot e incluso el código y los resultados de los comandos ejecutados localmente.

Los gists y archivos markdown generados por `/share` pueden usarse con fines de documentación de cómo se generó el código, o para compartir con tu equipo sobre cómo se realizaron ciertas acciones que generaron los resultados deseados de Copilot.

## Explorando el contexto de Copilot CLI

Al trabajar en tareas más grandes o complejas, es posible que alcances la ventana de contexto máxima del modelo. El tamaño exacto de la ventana variará según el modelo que se esté usando y la versión de Copilot CLI. Cuando la ventana de contexto está al máximo, Copilot CLI la compactará automáticamente, resumiendo información y eliminando cualquier cosa que considere que no es relevante para la tarea actual. Puedes tanto ver el estado actual del contexto como compactar manualmente el contexto usando Slash Commands. Exploremos la ventana de contexto.

1. Regresa a tu codespace.
2. Si está oculta, muestra la ventana de terminal seleccionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. En la ventana del prompt de Copilot CLI, envía el siguiente comando:

    ```
    /context
    ```

4. En solo un par de momentos, Copilot CLI generará una representación visual de su contexto actual:

    ![Screenshot of context window from Copilot CLI][img-context-window]

5. Nota el modelo mostrado (que puede ser diferente al de la imagen), y el porcentaje actual de tokens utilizados. El resto de la información destaca:

    | Título       | Descripción                                            |
    | ------------ | ------------------------------------------------------ |
    | System/Tools | Archivos de instrucciones, contenido de archivos y definiciones de herramientas |
    | Messages     | Historial de conversación entre tú y Copilot           |
    | Buffer       | Espacio reservado por Copilot CLI para generar respuestas |
    | Free space   | Espacio libre restante                                   |

6. Compacta el historial de conversación enviando el siguiente Slash Command a Copilot CLI:

    ```
    /compact
    ```

7. Una vez completado, envía el siguiente comando para mostrar las estadísticas del contexto actual de nuevo:

    ```
    /context
    ```

8. Nota el cambio en el contexto. Puede que no haya un cambio drástico ya que la ventana de contexto probablemente es relativamente pequeña en este momento.

> [!NOTE]
> Copilot CLI compactará automáticamente cuando se llene. A medida que se acerca al 100% de capacidad, mostrará el porcentaje justo encima de la ventana del prompt. Normalmente compactará de forma asíncrona, permitiéndote continuar interactuando con Copilot mientras realiza su trabajo. Sin embargo, puede bloquear una operación en ejecución por varios segundos mientras realiza su trabajo.

### Mejores prácticas con el contexto

En la mayoría de las sesiones con Copilot, el contexto será gestionado eficientemente por Copilot mismo sin ninguna orientación específica. Sin embargo, puede haber instancias en las que decidas instruir manualmente a Copilot para que limpie o compacte su historial:

- Si estás cambiando a una parte diferente de la aplicación, o a una tarea no relacionada, puedes usar `/clear` para comenzar de nuevo y evitar confundir a Copilot con contexto antiguo no relacionado.
- Si te estás acercando a la ventana de contexto máxima, puedes `/compact` manualmente tu contexto para controlar cuándo sucede.

> [!IMPORTANT]
> De nuevo, la mayoría del tiempo, Copilot gestionará su contexto sin interacción directa de tu parte. Si notas que Copilot está un poco confundido por información antigua, o estás a punto de cambiar a una tarea no relacionada, entonces podrías considerar usar los comandos manuales.

## Eligiendo tu modelo

Diferentes modelos tienen diferentes fortalezas, y diferentes desarrolladores tienen diferentes modelos. ¡Copilot CLI te permite listar y seleccionar el modelo que deseas usar!

1. Regresa a tu codespace.
2. Si está oculta, muestra la ventana de terminal seleccionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Muestra la lista de modelos enviando el siguiente Slash Command a Copilot CLI:

    ```
    /models
    ```

4. Nota la lista de modelos. Cada modelo tendrá tanto su nombre como el modificador de costo por solicitud listado junto a él.
5. ¡Si deseas, selecciona un nuevo modelo! O selecciona <kbd>Esc</kbd> para salir de la lista de modelos.

> [!IMPORTANT]
> La selección de modelo persiste en Copilot CLI.

## Resumen y próximos pasos

Usar Slash Commands en Copilot CLI te permite configurarlo, compartir sesiones y obtener información interna sobre cómo está trabajando Copilot. En esta lección usaste:

- `/share` para crear un GitHub gist para compartir tu sesión con el equipo.
- `/context` para ver el contexto que Copilot CLI está usando actualmente.
- `/models` para explorar la lista de modelos disponibles y seleccionar uno nuevo si así lo deseas.

## Recursos

- [Using Copilot CLI][using-copilot-cli]
- [About Copilot CLI][about-copilot-cli]
- [Context Management in Copilot CLI][context-management]
- [Share Sessions with Copilot CLI][share-sessions]
- [Selecting Models in Copilot CLI][selecting-models]

---

[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[context-management]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#context-management
[share-sessions]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#share-sessions
[selecting-models]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#select-an-llm
[img-context-window]: ../images/7-context-window.png
