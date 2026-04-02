<!-- l10n-sync: source-file="05-agent-skills.md" -->
# Ejercicio 5 - Usando Agent Skills

Agent Skills son carpetas de instrucciones, scripts y recursos que Copilot puede cargar cuando son relevantes para mejorar su rendimiento en tareas especializadas. [Agent Skills es un estándar abierto][agent-skills-repo], utilizado por una variedad de agentes diferentes. Agent Skills funciona en Copilot Chat en Agent Mode, Copilot Coding Agent (CCA) y Copilot CLI.

Exploremos las skills, cómo son utilizadas por los agentes de IA, y cómo podemos usar una skill para asegurar que las acciones se realicen de acuerdo con las especificaciones establecidas por nuestro equipo.

## Escenario

Eres un desarrollador a tiempo parcial de Tailspin Toys, una plataforma de crowdfunding para juegos de mesa con temática de desarrolladores. El equipo tiene un conjunto de requisitos para los pull requests (PR):

- mensajes de commit claros, con archivos agrupados lógicamente.
- todas las pruebas deben pasar antes de crear un PR.
- cada PR debe contener las siguientes secciones:
    - una descripción de por qué se realizaron los cambios.
    - una descripción general de los archivos modificados.
    - fragmentos de bloques de código importantes.
    - detalles de los cambios realizados agrupados.

Como el equipo está usando Copilot para generar código y PRs, quiere asegurar que las herramientas de IA sigan estos requisitos.

En este ejercicio tú:

- explorarás una skill existente para crear pull requests.
- aprenderás cómo las skills son utilizadas por el agente de IA.
- crearás un PR que coincida con las directrices con la ayuda de la skill.

## Agent Skills

Las skills te permiten decirle a Copilot y otros agentes de IA cómo realizar tareas específicas. Esto podría incluir cómo ejecutar pruebas, desplegar proyectos o crear un PR. Las skills se incluyen en el proyecto en la carpeta **.github/skills**, o globalmente en **~/.copilot/skills**.

Cada skill se define como una carpeta con un nombre. Cada carpeta contiene un archivo **SKILL.md**, que define la skill. El archivo **SKILL.md** debe tener frontmatter YAML con un nombre y descripción.

```yaml
---
name: branching-commits-prs
description: All changes to the repository must be done through a pull request (PR). A branch must always be created, and commits grouped together logically. Whenever asked to create commit messages, to push code, or create a pull request (PR), use this skill so everything is done correctly.
---
```

> [!IMPORTANT]
> Las skills se cargan dinámicamente por el agente cuando el agente determina que son necesarias. Lo hace utilizando la descripción. Tener descripciones claras que definan cuándo deben ser usadas es clave para el éxito.

Las skills también pueden tener subcarpetas con scripts, assets y referencias para proporcionar información y capacidades adicionales. Puedes explorar la [especificación][agent-skills-spec] completa para aprender más sobre cómo se definen las skills.

## Ejecutando skills

Las skills se cargan dinámicamente cuando el agente determina que son necesarias. La decisión de qué skills usar está impulsada por la descripción en el archivo **SKILL.md**. Como tal, es importante tener descripciones claras que definan el caso de uso para la skill.

## Explorando la skill de PR

Debido a que Tailspin Toys tiene un conjunto de requisitos para crear PRs, crearon una skill para ayudar a las herramientas de IA a generar PRs que sigan estas directrices. Exploremos la skill para entender qué hará.

1. Regresa a tu codespace.
2. Abre **.github/skills/branches-commits-prs/SKILL.md**.
3. Nota el nombre y la descripción. Observa cómo la descripción resalta el escenario en el que debe usarse, que es cada vez que se hace una solicitud para crear un pull request o hacer commit de código.
4. Lee la skill. Nota que las reglas están definidas sobre cómo se deben crear los branches, generar los commits y el contenido del pull request.

## Usando la skill

Como se destacó anteriormente, las skills son invocadas automáticamente por Copilot CLI. Como resultado, ¡todo lo que necesitamos hacer es pedirle a Copilot que cree un PR!

1. Regresa a tu codespace.
2. Si no está ya abierta, abre una ventana de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Si no está ya en ejecución, inicia Copilot CLI ejecutando el siguiente comando en la ventana de terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Pídele a Copilot que cree un PR usando el siguiente prompt:

    ```
    Can you please create a pull request for me!
    ```

5. Copilot reconocerá la solicitud. Después de unos momentos, notarás que Copilot indicará que está utilizando la skill **branches-commits-prs**.

    ![Screenshot of the agent skill being called by Copilot CLI](../images/5-agent-skill.png)

6. Copilot luego seguirá las instrucciones de la skill. Comenzará ejecutando las pruebas. Luego creará un branch, commits y finalmente el PR.
7. Una vez creado el PR, regresa a tu repositorio y abre el PR. Nota que las secciones siguen las directrices establecidas en la skill, coincidiendo con los requisitos que el equipo estableció.

## Resumen y próximos pasos

¡Con la ayuda de una Agent Skill, creaste un nuevo PR que coincide con los requisitos documentados! Tú:

- exploraste una skill existente para crear pull requests.
- aprendiste cómo las skills son utilizadas por el agente de IA.
- creaste un PR que coincide con las directrices con la ayuda de la skill.

## Recursos

- [About Agent Skills][about-agent-skills]
- [Agent Skills Specification][agent-skills-spec]
- [Agent Skills Repository][agent-skills-repo]
- [Agent Skills on awesome-copilot][awesome-copilot-skills]

---

[agent-skills-repo]: https://github.com/agentskills/agentskills
[agent-skills-spec]: https://agentskills.io/specification
[about-agent-skills]: https://docs.github.com/copilot/concepts/agents/about-agent-skills
[awesome-copilot-skills]: https://github.com/github/awesome-copilot/tree/main/skills
