<!-- l10n-sync: source-file="02-install-copilot-cli.md" -->
# Ejercicio 2 - Instalación de GitHub Copilot CLI

[GitHub Copilot CLI][about-copilot-cli] es un poderoso asistente de codificación agéntico que se ejecuta en tu terminal, permitiéndote explorar bases de código, generar código, ejecutar comandos e interactuar con herramientas externas, todo desde la línea de comandos.

## Escenario

Tailspin Toys es una organización incipiente con un sitio web que carece de muchas funcionalidades. Su backlog continúa creciendo y hay una fuerte demanda de crecimiento. Para ayudar a los desarrolladores, quieren comenzar a utilizar agentes de IA a través de Copilot CLI. Esto permitirá a los desarrolladores ser más productivos, ya que pueden enfocarse en el panorama general mientras se mueven más rápido. El primer paso para hacer esto es, por supuesto, ¡instalar Copilot CLI!

En este ejercicio, aprenderás cómo:

- instalar GitHub Copilot CLI usando npm.
- autenticarte con tu cuenta de GitHub.
- verificar la instalación.

## Abre una terminal en tu codespace

Antes de instalar Copilot CLI, necesitas abrir una ventana de terminal en VS Code.

1. Regresa a tu codespace si no estás ya allí.
2. Abre una ventana de terminal presionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Deberías ver un panel de terminal aparecer en la parte inferior de tu ventana de VS Code.

## Instala Copilot CLI

GitHub Codespaces viene con Node.js preinstalado, así que puedes usar npm para instalar Copilot CLI globalmente.

1. En la terminal, verifica que Node.js esté instalado y cumpla con el requisito de versión:

   ```bash
   node --version
   ```

   Deberías ver la versión 22 o superior (por ejemplo, `v22.x.x`).

2. Instala Copilot CLI globalmente usando npm:

   ```bash
   npm install -g @github/copilot
   ```

3. Verifica la instalación comprobando la versión:

   ```bash
   copilot --version
   ```

   Deberías ver el número de versión mostrado (por ejemplo, `v0.0.393`).

> [!TIP]
> Si encuentras errores de permisos, es posible que necesites usar `sudo npm install -g @github/copilot` en algunos sistemas. Sin embargo, esto no debería ser necesario en GitHub Codespaces.

## Autenticación con GitHub

En el primer inicio, Copilot CLI te pedirá que te autentiques con tu cuenta de GitHub.

1. Inicia Copilot CLI:

   ```bash
   copilot
   ```

2. Si no estás actualmente conectado, verás un mensaje para autenticarte. Copilot CLI mostrará un código de dispositivo y te pedirá que visites una URL.
3. Sigue las instrucciones en pantalla:
   - Abre la URL proporcionada en tu navegador
   - Ingresa el código de dispositivo cuando se te solicite
   - Autoriza a Copilot CLI para acceder a tu cuenta de GitHub
4. Una vez autenticado, verás el prompt de Copilot CLI, listo para aceptar tus preguntas y comandos.

> [!NOTE]
> En un codespace, es posible que ya estés autenticado a través de tu sesión de GitHub. Si Copilot CLI inicia sin solicitar autenticación, ¡estás listo para continuar!

## Confía en el directorio

Cuando usas Copilot CLI por primera vez en un directorio, te pedirá que confirmes que confías en los archivos de esa carpeta. Esta es una función de seguridad para evitar que Copilot trabaje accidentalmente con código no confiable.

1. Cuando se te solicite, verás tres opciones:
   - **Yes, proceed**: Confiar solo para esta sesión
   - **Yes, and remember this folder for future sessions**: Confiar permanentemente
   - **No, exit (Esc)**: No permitir acceso a archivos
2. Para este taller, selecciona **Yes, and remember this folder for future sessions** ya que trabajarás en este repositorio durante todo el taller.

## Verifica que todo funcione

Asegurémonos de que Copilot CLI esté correctamente instalado y conectado.

1. Si saliste de Copilot CLI, inícialo de nuevo:

   ```bash
   copilot
   ```

2. Hazle a Copilot una pregunta simple para verificar que funciona:

   ```
   What files are in this project?
   ```

3. Copilot debería explorar el repositorio y proporcionar un resumen de la estructura del proyecto.
4. Prueba el comando `/help` para ver los Slash Commands disponibles:

   ```
   /help
   ```

## Resumen y próximos pasos

¡Felicidades! Has instalado y autenticado exitosamente GitHub Copilot CLI. Aprendiste cómo:

- instalar Copilot CLI usando npm.
- autenticarte con tu cuenta de GitHub.
- confiar en un directorio para que Copilot CLI trabaje con él.
- verificar que la instalación funcione correctamente.

## Recursos

- [Installing GitHub Copilot CLI][install-copilot-cli]
- [About Copilot CLI][about-copilot-cli]
- [Using Copilot CLI][using-copilot-cli]

---

[install-copilot-cli]: https://docs.github.com/copilot/how-tos/set-up/install-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
