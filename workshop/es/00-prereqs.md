<!-- l10n-sync: source-file="00-prereqs.md" -->
# Ejercicio 0: Requisitos Previos

Antes de comenzar con el laboratorio, hay algunas tareas que necesitas completar para tener todo listo. Necesitas obtener una copia del repositorio que incluye el código, y luego iniciar un [codespace][codespaces] para crear tu código.

## Configuración del Repositorio del Laboratorio

Para crear una copia del repositorio para el código, crearás una instancia desde el [template][template-repository]. La nueva instancia contendrá todos los archivos necesarios para el laboratorio, y la usarás mientras trabajas en los ejercicios.

1. En una nueva ventana del navegador, navega al repositorio de GitHub para este laboratorio: `https://github.com/copilot-dev-days/tailspin-toys-workshop`.
2. Crea tu propia copia del repositorio seleccionando el botón **Use this template** en la página del repositorio del laboratorio. Luego selecciona **Create a new repository**.

    ![Use this template button](../images/0-use-template.png)

3. Si estás completando el taller como parte de un evento dirigido por GitHub o Microsoft, sigue las instrucciones proporcionadas por los mentores. De lo contrario, puedes crear el nuevo repositorio en una organización donde tengas acceso a Copilot.

    ![Input the repository template settings](../images/0-repository-settings.png)

4. Toma nota de la ruta del repositorio que creaste (**nombre-de-organización-o-usuario/nombre-del-repositorio**), ya que la necesitarás más adelante en el laboratorio.

## Creación de un codespace

A continuación, usarás un codespace para completar los ejercicios del laboratorio. [GitHub Codespaces][codespaces] es un entorno de desarrollo basado en la nube que te permite escribir, ejecutar y depurar código directamente en tu navegador. Proporciona un IDE con todas las funcionalidades, con soporte para múltiples lenguajes de programación, extensiones y herramientas.

1. Navega a tu repositorio recién creado.
2. Selecciona el botón verde **Code**.

    ![Select the Code button](../images/0-code-button.png)

3. Selecciona la pestaña **Codespaces** y selecciona el botón **+** para crear un nuevo Codespace.

    ![Create a new codespace](../images/0-create-codespace.png)

La creación del codespace tomará varios minutos, aunque sigue siendo mucho más rápido que tener que instalar manualmente todos los servicios. Dicho esto, ¡puedes usar este tiempo para explorar otras funcionalidades de GitHub Copilot, a las cuales dirigiremos tu atención a continuación!

> [!IMPORTANT]
> Volverás al codespace en un ejercicio futuro. Por el momento, déjalo abierto en una pestaña de tu navegador.

> [!NOTE]
> Este taller está diseñado para ejecutarse dentro de un codespace o contenedor. Esto asegura que el entorno en el que estás trabajando tenga todos los requisitos previos necesarios instalados y tendrás una experiencia fluida. Si deseas ejecutar el taller localmente en tu sistema, necesitarás versiones recientes de Node.js y Python instaladas, así como Visual Studio Code.
>
> Si estás ejecutando el taller localmente, en lugar de crear un codespace, clona el repositorio y ábrelo en VS Code:
>
> ```bash
> git clone https://github.com/copilot-dev-days/tailspin-toys-workshop.git
> cd tailspin-toys-workshop
> code .
> ```

## Resumen

¡Felicidades, has creado una copia del repositorio del laboratorio! También iniciaste el proceso de creación de tu codespace, que usarás cuando comiences a escribir código.

## Recursos

- [GitHub Codespaces overview][codespaces]
- [Creating a repository from a template][template-repository]
- [Getting started with Codespaces][codespaces-quickstart]

---

[codespaces]: https://github.com/features/codespaces
[template-repository]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-template-repository
[codespaces-quickstart]: https://docs.github.com/codespaces/getting-started/quickstart
