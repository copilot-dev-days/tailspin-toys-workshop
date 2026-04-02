<!-- l10n-sync: source-file="01-custom-instructions.md" -->
# Ejercicio 1 - Proporcionando contexto a Copilot con archivos de instrucciones

El contexto es clave en muchos aspectos de la vida, y al trabajar con IA generativa. Si estás realizando una tarea que necesita completarse de una manera particular, o si una pieza de información de fondo es importante, quieres asegurarte de que Copilot tenga acceso a esa información. Puedes usar [archivos de instrucciones][instruction-files] para proporcionar orientación para que Copilot no solo entienda lo que quieres que haga, sino también cómo quieres que se haga.

En este ejercicio, aprenderás cómo:

- proporcionar a Copilot contexto específico del proyecto, directrices de codificación y estándares de documentación usando [Custom Instructions del repositorio][repository-custom-instructions] **.github/copilot-instructions.md**.
- proporcionar archivos de instrucciones de ruta para guiar a Copilot en tareas repetitivas o con template en tipos específicos de archivos.
- implementar instrucciones tanto a nivel de repositorio como específicas por tarea.

> [!IMPORTANT]
> Ten en cuenta que el código generado puede divergir de algunos de los estándares que establezcas. Las herramientas de IA como Copilot son no determinísticas y pueden no siempre proporcionar el mismo resultado. Los otros archivos en la base de código no contienen docstrings ni encabezados de comentarios, lo que podría llevar a Copilot en otra dirección. La consistencia es clave, así que asegurarte de que tu código siga los patrones establecidos es importante. Siempre puedes hacer un seguimiento en el chat y pedirle a Copilot que siga tus estándares de codificación, lo que ayudará a guiarlo en la dirección correcta.

## Escenario

Como todo buen equipo de desarrollo, Tailspin Toys tiene un conjunto de directrices y requisitos para las prácticas de desarrollo. Estos incluyen:

- La API siempre necesita pruebas unitarias.
- La interfaz de usuario debe estar en modo oscuro y tener un aspecto moderno.
- Se debe agregar documentación al código en forma de docstrings.
- Se debe agregar un bloque de comentarios al inicio de cada archivo describiendo lo que hace el archivo.

A través del uso de archivos de instrucciones, te asegurarás de que Copilot tenga la información correcta para realizar las tareas en alineación con las prácticas destacadas.

## Custom Instructions

Custom Instructions te permiten proporcionar contexto y preferencias a Copilot chat, para que pueda entender mejor tu estilo de codificación y requisitos. Esta es una funcionalidad poderosa que puede ayudarte a dirigir a Copilot para obtener sugerencias y fragmentos de código más relevantes. Puedes especificar tus convenciones de codificación preferidas, bibliotecas e incluso los tipos de comentarios que te gusta incluir en tu código. Puedes crear instrucciones para todo tu repositorio, o para tipos específicos de archivos para contexto a nivel de tarea.

Hay dos tipos de archivos de instrucciones:

- **.github/copilot-instructions.md**, un único archivo de instrucciones enviado a Copilot para **cada** prompt del chat del repositorio. Este archivo debe contener información a nivel de proyecto, contexto que es relevante para la mayoría de las solicitudes de chat enviadas a Copilot. Esto podría incluir la pila tecnológica que se está utilizando, una descripción general de lo que se está construyendo y mejores prácticas, y otra orientación global para Copilot.
- Los archivos **\*.instructions.md** pueden crearse para tareas o tipos de archivos específicos. Puedes usar archivos **\*.instructions.md** para proporcionar directrices para lenguajes particulares (como Python o TypeScript), o para tareas como crear un componente React o un nuevo conjunto de pruebas unitarias.

## Mejores prácticas para gestionar archivos de instrucciones

Una conversación completa sobre la creación de archivos de instrucciones está fuera del alcance del taller. Sin embargo, los ejemplos proporcionados en el proyecto de ejemplo ofrecen un ejemplo representativo de cómo abordar su gestión. A alto nivel:

- Mantén las instrucciones en **copilot-instructions.md** enfocadas en la orientación a nivel de proyecto, como una descripción de lo que se está construyendo, la estructura del proyecto y los estándares de codificación globales.
- Usa archivos **\*.instructions.md** para proporcionar instrucciones específicas para tipos de archivos (pruebas unitarias, componentes React, endpoints de API), o para tareas específicas.
- Usa lenguaje natural en tus archivos de instrucciones. Mantén la orientación clara. Proporciona ejemplos de cómo el código debería (y no debería) verse.

No hay una forma específica de crear archivos de instrucciones, así como no hay una forma específica de usar IA. Encontrarás a través de la experimentación lo que funciona mejor para tu proyecto. La orientación proporcionada aquí y los [recursos](#recursos) a continuación deberían ayudarte a comenzar.

> [!TIP]
> Cada proyecto que use GitHub Copilot debería tener una colección robusta de archivos de instrucciones para proporcionar contexto y guiar mejor la generación de código. Al explorar los archivos de instrucciones en el proyecto, puedes notar que hay archivos para numerosos tipos de archivos y tareas, incluyendo [actualizaciones de UI][ui-instructions] y [Astro][astro-instructions]. La inversión hecha en archivos de instrucciones mejorará enormemente la calidad de las sugerencias de código de Copilot, asegurando que coincida mejor con el estilo y los requisitos que tu organización tiene.
> 
> Incluso puedes hacer que Copilot ayude a generar archivos de instrucciones seleccionando el ícono de engranaje para **Configure Chat** en Copilot chat y seleccionando **Generate Agent Instructions**.
> 
> ![Screenshot of option in GitHub Copilot chat with configure chat highlighted and generate agent instructions highlighted][img-generate-instructions]
>
> Y, si estás buscando templates o un punto de partida para archivos de instrucciones, puedes explorar [awesome-copilot][awesome-copilot], ¡un repositorio lleno de archivos de instrucciones, Custom Agents y otros recursos para ayudarte! 

## Asegúrate de que tu codespace esté listo

En un [ejercicio anterior][prereqs-lesson] lanzaste el codespace que usarás para el resto de los ejercicios de codificación en este laboratorio. Pongamos los toques finales antes de que comiences a usarlo.

1. Regresa a la pestaña donde iniciaste tu codespace. Si cerraste la pestaña, regresa a tu repositorio, selecciona **Code** > **Codespaces** y luego el nombre del codespace.
2. Selecciona **Extensions** en la barra de trabajo en el lado izquierdo de tu codespace.

    ![Screenshot of the extensions window with multiple extensions showing either Update or Reload Window buttons][img-extensions-updates]

3. Selecciona **Update** en cualquier extensión con un botón **Update**. Repite según sea necesario.
4. Selecciona **Reload Window** en cualquier extensión con un botón **Reload Window** para recargar el codespace.
5. Cuando aparezca un diálogo, selecciona **Reload** para recargar la ventana. Esto asegurará que se esté usando la última versión.

## Explora los archivos de Custom Instructions

Comencemos explorando los archivos de instrucciones creados para este proyecto. Notarás que hay un archivo central **copilot-instructions.md**, y una colección de archivos **.instructions** para varias tareas.

1. Regresa a tu codespace.
2. Abre **.github/copilot-instructions.md**.
3. Explora el archivo, notando la breve descripción del proyecto y las secciones para **Code standards**, **Scripts** y **GitHub Actions Workflows**. Estas son aplicables a cualquier interacción que tendrías con Copilot, son robustas y proporcionan orientación clara sobre lo que estás haciendo y cómo quieres lograrlo.
4. Abre **.github/instructions**, y explora los archivos contenidos dentro. Nota que hay instrucciones para archivos Astro, archivos Svelte, las diversas pruebas y otros.
5. Abre **.github/instructions/python-tests.instructions.md**. Toma nota de la sección `applyTo`. Esto establece la ruta, relativa a la raíz del proyecto, que determina a qué archivos se aplican las instrucciones. En este caso, cualquier archivo Python en la carpeta **server/tests** con un nombre que comience con **test_** coincidirá con el slug.
6. Nota las instrucciones específicas para crear pruebas de Python para este proyecto.
7. Finalmente, abre **.github/instructions/flask-endpoint.instructions.md**, y desplázate hasta el final del archivo. Nota los enlaces a otros archivos de instrucciones y archivos existentes en el proyecto. Esto te permite tanto desglosar conjuntos de instrucciones más grandes en archivos más pequeños y reutilizables, como señalar ejemplos que Copilot debería considerar al generar código. Ten en cuenta que estas rutas son relativas al archivo de instrucciones en lugar de la raíz del proyecto.

## Examina el impacto de Custom Instructions

Para ver el impacto de Custom Instructions, comenzarás enviando un prompt con la versión actual de los archivos, y verás cómo Copilot incorpora esos archivos en el contexto. Luego harás algunas actualizaciones, enviarás el mismo prompt de nuevo y notarás la diferencia.

> [!NOTE]
> Vamos a comenzar utilizando el chat en VS Code o tu codespace para agilizar el proceso de ver el impacto de las actualizaciones a las instrucciones en el código generado. Debido a que Copilot CLI utiliza el mismo paradigma de instrucciones, el mismo comportamiento se experimentará allí.

1. Regresa a tu codespace.
2. Cierra cualquier archivo abierto en el codespace.
3. Abre `server/routes/publishers.py`, un archivo vacío.
4. Si **Copilot chat** no está ya abierto, ábrelo seleccionando el ícono de Copilot hacia la parte superior de tu codespace.

   ![Chat icon in VS Code](../images/1-chat-icon.png)

5. Crea una nueva sesión de chat escribiendo `/clear` en la ventana del chat y seleccionando <kbd>Enter</kbd> (o <kbd>return</kbd> en Mac).
6. Selecciona **Ask** del menú desplegable de modos.

   ![Chat mode selection dialog with Ask mode highlighted][img-select-chat-mode]

7. Establece el modelo a **Claude Sonnet 4.5**.

    ![Example of selecting the Claude Sonnet 4.5 model][img-select-model]

> [!NOTE]
> El taller está configurado para usar Claude Sonnet 4.5 ya que es el modelo probado al crear el taller. Esto no es una indicación de preferencia de un modelo sobre otro.

8. Envía el siguiente prompt para crear un nuevo endpoint que devuelva todos los publishers:

   ```plaintext
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers.
   ```

9.  Copilot explora el proyecto para aprender cómo implementar mejor el código, y genera una lista de sugerencias, que pueden incluir código para `publishers.py`, `app.py`, y pruebas para asegurar que el nuevo código funcione correctamente.
10. Nota la sección de lista de referencias en la ventana del chat. Expande la lista y toma nota de los archivos usados como contexto. Deberían incluir **copilot-instructions.md**, así como archivos **.instructions** para crear endpoints de Flask y pruebas de Python. El primero es porque **copilot-instructions.md** se incluye en cada solicitud, mientras que el último se carga cada vez que un archivo coincide con el slug en el encabezado `applyTo` de los archivos **.instructions**.

   ![Screenshot of the references section in Copilot Chat in VS Code][img-references]

11. Explora el código, notando que el código generado incluye [type hints][python-type-hints] porque, como verás, Custom Instructions incluye la directiva de incluirlos.
12. Nota que al código generado **le falta** ya sea un docstring o un encabezado de comentario - ¡o ambos!

> [!IMPORTANT]
> Como se destacó anteriormente, GitHub Copilot y las herramientas LLM son probabilísticas, no determinísticas. Como resultado, el código exacto generado puede variar, ¡e incluso hay una posibilidad de que cumpla con tus reglas sin que las especifiques! Pero para ayudar a la consistencia en el código, siempre debes documentar todo lo que quieras asegurar que Copilot entienda sobre cómo quieres que se genere tu código.

## Agrega nuevos estándares del repositorio a copilot-instructions.md

Como se destacó anteriormente, `copilot-instructions.md` está diseñado para proporcionar información a nivel de proyecto a Copilot. Asegurémonos de que los estándares de codificación del repositorio estén documentados para mejorar las sugerencias de código de Copilot chat.

1. Regresa a tu codespace.
2. Abre `.github/copilot-instructions.md`.
3. Localiza la sección **Code formatting requirements**, que debería estar cerca de la línea 35. Nota cómo contiene una nota para usar type hints. Por eso los viste en el código generado anteriormente.
4. Agrega las siguientes líneas de markdown justo debajo de la nota sobre type hints para instruir a Copilot a agregar encabezados de comentarios a los archivos y docstrings (que debería estar cerca de la línea 35):

   ```markdown
   - Every function should have docstrings or the language equivalent.
   - Before imports or any code, add a comment block to the file that explains its purpose.
   ```

5. Cierra **copilot-instructions.md**.
6. Selecciona **New Chat** en Copilot chat para limpiar el buffer e iniciar una nueva conversación.
7. Regresa a **server/routes/publishers.py** para asegurarte de que el foco esté configurado correctamente.
8. Envía el mismo prompt de antes para crear el endpoint.

   ```plaintext
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers.
   ```

9.  Nota cómo el código recién generado incluye un encabezado de comentario en la parte superior del archivo que se asemeja a lo siguiente:

   ```python
   """
   Publisher API routes for the Tailspin Toys Crowd Funding platform.
   This module provides endpoints to retrieve publisher information.
   """
   ```

10. Nota cómo el código recién generado incluye un docstring dentro de la función que se asemeja a lo siguiente:

   ```python
   """
   Returns a list of all publishers with their id and name.
    
   Returns:
      Response: JSON response containing an array of publisher objects
   """
   ```

11. ¡Nota que el código generado ahora incluye un docstring así como un bloque de comentarios en la parte superior!
12. También nota cómo el código existente no se actualiza, ¡pero por supuesto podrías pedirle a Copilot que realice esa operación si así lo deseas!
13. **No implementes los cambios sugeridos**, ya que harás eso en un ejercicio posterior.

> [!NOTE]
> Si aceptaste los cambios, siempre puedes seleccionar el botón **Undo** hacia la parte superior derecha de la ventana de Copilot chat.

De esta sección, exploraste cómo el archivo de Custom Instructions ha proporcionado a Copilot el contexto que necesita para generar código que sigue las directrices establecidas.

## Explora el impacto de un archivo .instructions

Nuestro enfoque en los últimos dos conjuntos de pasos fue en **copilot-instructions.md**, el archivo de instrucciones global usado para todas las solicitudes de chat para Copilot Chat, Copilot Coding Agent (CCA) y Copilot CLI. Ahora exploremos el impacto de un archivo **.instructions**.

Los archivos **.instructions** pueden contener una configuración `applyTo` en su frontmatter, que te permite especificar un slug o ruta. Copilot utilizará estas instrucciones cada vez que trabaje en un archivo que coincida con el slug. En nuestro caso, tenemos un archivo de instrucciones para pruebas de Python definido en **.github/instructions/python-tests.instructions.md**, que será usado por Copilot para cualquier archivo que coincida con el patrón **server/tests/test\_*.py**.

> [!NOTE]
> Hay una posibilidad de que Copilot ya haya generado código de prueba en el ejercicio anterior, así que podrías estar viendo el mismo código de nuevo. Para asegurarnos de que podemos ver el comportamiento, vamos a tomarnos un momento, ser un poco más específicos con el prompt y ver las pruebas que Copilot genera basándose en las instrucciones.

1. Regresa a tu codespace.
2. Abre Copilot Chat si no está ya abierto.
3. Selecciona **New Chat** en Copilot Chat para limpiar el buffer e iniciar una nueva conversación.
4. Envía el siguiente prompt a Copilot Chat para asegurar que se generen las pruebas.

   ```
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers. Also generate the tests for the newly generated endpoint.
   ```

5. Nota de nuevo la sección de referencias, y cómo Copilot incluye el archivo **python-tests.instructions.md** para orientación específica a este tipo de archivo.
6. Explora el código generado para la prueba. Basándose en las instrucciones, debería:
    - contener una variable `TEST_DATA` a nivel de clase con datos de prueba.
    - utilizar SQLite en memoria para su base de datos.
    - contener funciones tanto de setup como de teardown.

## Resumen y próximos pasos

¡Felicidades! Exploraste cómo asegurarte de que Copilot tenga el contexto adecuado para generar código siguiendo las prácticas que tu organización ha establecido. Esto se puede hacer a nivel de repositorio con el archivo **.github/copilot-instructions.md**, o por tarea con archivos de instrucciones. Exploraste cómo:

- proporcionar a Copilot contexto específico del proyecto, directrices de codificación y estándares de documentación usando Custom Instructions (.github/copilot-instructions.md).
- usar archivos de instrucciones para guiar a Copilot en tareas repetitivas o con template.
- implementar instrucciones tanto a nivel de repositorio como específicas por tarea.

## Recursos

- [Instruction files for GitHub Copilot customization][instruction-files]
- [5 tips for writing better custom instructions for Copilot][copilot-instructions-five-tips]
- [Best practices for creating custom instructions][instructions-best-practices]
- [Personal custom instructions for GitHub Copilot][personal-instructions]
- [Awesome Copilot - a collection of instructions files and other resources][awesome-copilot]

---

[instruction-files]: https://code.visualstudio.com/docs/copilot/copilot-customization
[python-type-hints]: https://docs.python.org/3/library/typing.html
[games-endpoints]: ../../server/routes/games.py
[games-tests]: ../../server/tests/test_games.py
[instructions-best-practices]: https://docs.github.com/enterprise-cloud@latest/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks#adding-custom-instructions-to-your-repository
[personal-instructions]: https://docs.github.com/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot
[copilot-instructions-five-tips]: https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/
[awesome-copilot]: https://github.com/github/awesome-copilot
[ui-instructions]: ../../.github/instructions/ui.instructions.md
[astro-instructions]: ../../.github/instructions/astro.instructions.md
[prereqs-lesson]: ./00-prereqs.md
[repository-custom-instructions]: https://code.visualstudio.com/docs/copilot/copilot-customization
[img-generate-instructions]: ../images/1-generate-instructions.png
[img-extensions-updates]: ../images/1-extensions-updates.png
[img-select-chat-mode]: ../images/1-select-chat-mode.png
[img-select-model]: ../images/1-select-model.png
[img-references]: ../images/1-custom-instructions-references.png
