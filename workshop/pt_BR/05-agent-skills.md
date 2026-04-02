<!-- l10n-sync: source-file="05-agent-skills.md" -->
# Exercício 5 - Usando Agent Skills

Agent Skills são pastas de instruções, scripts e recursos que o Copilot pode carregar quando relevantes para melhorar seu desempenho em tarefas especializadas. [Agent Skills é um padrão aberto][agent-skills-repo], usado por diversos agentes diferentes. Agent Skills funciona no Copilot Chat em Agent Mode, Copilot Coding Agent (CCA) e Copilot CLI.

Vamos explorar skills, como elas são utilizadas por agentes de IA e como podemos usar uma skill para garantir que ações sejam realizadas de acordo com as especificações definidas pela nossa equipe.

## Cenário

Você é um desenvolvedor de meio período da Tailspin Toys - uma plataforma de crowdfunding para jogos de tabuleiro com tema de desenvolvedores. A equipe tem um conjunto de requisitos para pull requests (PR):

- mensagens de commit claras, com arquivos agrupados logicamente.
- todos os testes devem passar antes de um PR ser criado.
- cada PR deve conter as seguintes seções:
    - uma descrição do porquê das alterações terem sido feitas.
    - uma visão geral dos arquivos alterados.
    - trechos de blocos de código importantes.
    - detalhes das alterações feitas agrupados.

Como a equipe está usando o Copilot para gerar código e PRs, ela quer garantir que as ferramentas de IA sigam esses requisitos.

Neste exercício, você irá:

- explorar uma skill existente para criação de pull requests.
- aprender como skills são utilizadas pelo agente de IA.
- criar um PR que corresponda às diretrizes com a ajuda da skill.

## Agent Skills

Skills permitem que você diga ao Copilot e outros agentes de IA como realizar tarefas específicas. Isso pode incluir como executar testes, fazer deploy de projetos ou criar um PR. Skills são incluídas no projeto na pasta **.github/skills**, ou globalmente em **~/.copilot/skills**.

Cada skill é definida como uma pasta com um nome. Cada pasta então contém um arquivo **SKILL.md**, que define a skill. O arquivo **SKILL.md** deve ter frontmatter YAML com um nome e descrição.

```yaml
---
name: branching-commits-prs
description: All changes to the repository must be done through a pull request (PR). A branch must always be created, and commits grouped together logically. Whenever asked to create commit messages, to push code, or create a pull request (PR), use this skill so everything is done correctly.
---
```

> [!IMPORTANT]
> Skills são carregadas dinamicamente pelo agente quando ele determina que são necessárias. Ele faz isso utilizando a descrição. Ter descrições claras que definam quando devem ser usadas é fundamental para o sucesso.

Skills também podem ter subpastas com scripts, assets e referências para fornecer informações e capacidades adicionais. Você pode explorar a [especificação][agent-skills-spec] completa para aprender mais sobre como skills são definidas.

## Executando skills

Skills são carregadas dinamicamente quando o agente determina que são necessárias. A decisão de quais skills usar é orientada pela descrição no arquivo **SKILL.md**. Portanto, é importante ter descrições claras que definam o caso de uso da skill.

## Explorando a skill de PR

Como a Tailspin Toys tem um conjunto de requisitos para criação de PRs, eles criaram uma skill para ajudar ferramentas de IA a gerar PRs que sigam essas diretrizes. Vamos explorar a skill para entender o que ela fará.

1. Retorne ao seu codespace.
2. Abra **.github/skills/branches-commits-prs/SKILL.md**.
3. Note o nome e a descrição. Observe como a descrição destaca o cenário em que deve ser usada, que é sempre que uma solicitação é feita para criar um pull request ou fazer commit de código.
4. Leia a skill. Observe as regras definidas sobre como branches devem ser criadas, commits gerados e o conteúdo do pull request.

## Usando a skill

Como destacado anteriormente, skills são invocadas automaticamente pelo Copilot CLI. Como resultado, tudo o que precisamos fazer é pedir ao Copilot para criar um PR!

1. Retorne ao seu codespace.
2. Se ainda não estiver aberto, abra uma janela de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Se ainda não estiver rodando, inicie o Copilot CLI executando o seguinte comando na janela do terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Peça ao Copilot para criar um PR usando o seguinte prompt:

    ```
    Can you please create a pull request for me!
    ```

5. O Copilot reconhecerá a solicitação. Após alguns instantes, você notará que o Copilot indicará que está utilizando a skill **branches-commits-prs**.

    ![Screenshot of the agent skill being called by Copilot CLI](./images/5-agent-skill.png)

6. O Copilot então seguirá as instruções na skill. Ele começará executando os testes. Em seguida, criará uma branch, commits e, eventualmente, o PR.
7. Uma vez que o PR for criado, retorne ao seu repositório e abra o PR. Note que as seções seguem as diretrizes definidas na skill, correspondendo aos requisitos que a equipe estabeleceu.

## Resumo e próximos passos

Com a ajuda de uma agent skill, você criou um novo PR que corresponde aos requisitos documentados! Você:

- explorou uma skill existente para criação de pull requests.
- aprendeu como skills são utilizadas pelo agente de IA.
- criou um PR que corresponde às diretrizes com a ajuda da skill.

## Recursos

- [Sobre Agent Skills][about-agent-skills]
- [Especificação de Agent Skills][agent-skills-spec]
- [Repositório de Agent Skills][agent-skills-repo]
- [Agent Skills no awesome-copilot][awesome-copilot-skills]

---

[agent-skills-repo]: https://github.com/agentskills/agentskills
[agent-skills-spec]: https://agentskills.io/specification
[about-agent-skills]: https://docs.github.com/copilot/concepts/agents/about-agent-skills
[awesome-copilot-skills]: https://github.com/github/awesome-copilot/tree/main/skills
