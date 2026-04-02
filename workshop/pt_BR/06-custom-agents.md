<!-- l10n-sync: source-file="06-custom-agents.md" -->
# Exercício 6 - Custom Agents

[Custom Agents][custom-agents] no GitHub Copilot permitem que você crie assistentes de IA especializados, adaptados a tarefas ou domínios específicos dentro do seu fluxo de trabalho de desenvolvimento. Ao definir agentes através de arquivos markdown na pasta `.github/agents` do seu repositório, você pode fornecer ao Copilot instruções focadas, melhores práticas, padrões de codificação e conhecimento específico de domínio que o guiam para realizar tipos específicos de trabalho de forma mais eficaz. Isso permite que equipes codifiquem sua expertise e padrões em agentes reutilizáveis. Você pode criar um agente de acessibilidade que garante conformidade com [WCAG][wcag], um agente de segurança que segue práticas de codificação segura, ou um agente de testes que mantém padrões de teste consistentes — permitindo que desenvolvedores aproveitem essas capacidades especializadas sob demanda para implementações mais rápidas e consistentes.

Você explorará o seguinte com custom agents:

- como criar um custom agent.
- atribuir uma tarefa a um custom agent.

## Cenário

A Tailspin Toys está comprometida em garantir que sua plataforma de crowdfunding seja acessível a todos os usuários, independentemente de suas habilidades visuais ou preferências. Feedback recente de usuários destacou que alguns usuários acham o tema escuro atual difícil de ler devido ao contraste insuficiente entre texto e cores de fundo. Para abordar essa preocupação de acessibilidade, a equipe de design solicitou a implementação de um modo de alto contraste que os usuários possam ativar e desativar.

Como a acessibilidade é crítica, você quer garantir que isso seja implementado o mais rápido possível. Você vai utilizar um custom agent para gerar a funcionalidade.

Neste exercício, você irá:

- explorar custom agents.
- habilitar um custom agent e atribuir uma tarefa a ele.

## Custom Agents

Custom agents são definidos por arquivos markdown na pasta **.github/agents** do seu projeto, ou globalmente em **~/.copilot/agents**. Os arquivos markdown conterão orientações para o Copilot sobre como melhor realizar uma tarefa.

## Custom Agents vs Skills

Existe alguma sobreposição lógica entre custom agents e skills. Ambos são primariamente definidos com arquivos markdown e fornecem à IA orientação sobre como realizar operações. A melhor forma de entender a diferença é pensar em um custom agent como o trabalhador, e skills como ferramentas.

Custom agents têm sua própria janela de contexto e são construídos para usar skills como parte de sua orquestração. No nosso exemplo, temos um custom agent de acessibilidade, que é projetado para revisar e fazer atualizações no site com base em diretrizes de acessibilidade definidas. Como parte do seu trabalho, ele poderia então chamar skills como a skill de pull request que vimos anteriormente, ou uma para executar e gerenciar testes.

Custom agents são lançados usando o comando `/agent` no Copilot CLI. Skills são lançadas dinamicamente, portanto podem ser reutilizadas em múltiplos agentes.

## Revisando o custom agent de acessibilidade

Um custom agent já foi criado para você para acessibilidade. Vamos revisar o conteúdo para entender como ele guiará o Copilot.

1. Retorne ao seu codespace.
2. Abra **.github/agents/accessibility.md**.
3. Note a seção de cabeçalho com o nome e descrição do agente.

> [!IMPORTANT]
> Esta seção é obrigatória para custom agents.

4. A partir daí, escaneie e revise as próximas seções que destacam:
    - Responsabilidades centrais ao gerar código para um site acessível.
    - Melhores práticas para acessibilidade.
    - Exemplos de código para HTML, CSS e JavaScript.
    - Uma lista de armadilhas e erros comuns.

> [!NOTE]
> Não existe um "melhor markdown" para um custom agent. Como em qualquer coisa em IA, você vai querer testar e explorar para determinar o que funciona melhor para seus ambientes e cenários.

## Usando um custom agent no Copilot CLI

Você pode iniciar um custom agent no Copilot CLI usando o comando `/agent`. Vamos realizar uma análise de acessibilidade no nosso site, primeiro retornando à nossa branch principal e depois iniciando o agente.

1. Retorne ao seu codespace.
2. Se ainda não estiver aberto, abra uma janela de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Se ainda não estiver rodando, inicie o Copilot CLI executando o seguinte comando na janela do terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Retorne à branch principal executando um comando CLI diretamente de dentro do Copilot usando o seguinte prompt:

    ```
    !git checkout main
    ```

> [!NOTE]
> Prefixar um prompt com `!` permite executar ferramentas CLI diretamente de dentro do Copilot CLI.

1. Abra a lista de agentes digitando `/agent` na janela de prompt do Copilot CLI e selecionando <kbd>Enter</kbd>.
2. Selecione o **Accessibility agent** da lista de agentes disponíveis.
3. Use o seguinte prompt para pedir ao agente de acessibilidade que realize uma revisão e gere correções para uma classe particular de possíveis erros relacionados a cabeçalhos HTML:

    ```
    Perform an accessibility review of the site. Pull the related issue down from the repository for details. We're going to build in stages, so for now focus on headers, ensuring we're following good guidelines. Ensure there are e2e tests for any updates made to the project. Then create a PR with the updates.
    ```

4. O Copilot começa a trabalhar na tarefa! Ele começará buscando a issue, depois realizará a revisão, gerará atualizações e, por fim, criará o PR. Você também deve notar que, quando ele cria o PR, utiliza a skill focada em PRs do projeto.

> [!NOTE]
> Este processo provavelmente levará alguns minutos. É um bom momento para refletir sobre tudo que você aprendeu, aproveitar uma bebida, ou avançar para o próximo módulo que fala sobre alguns comandos adicionais disponíveis no Copilot CLI.

> [!IMPORTANT]
> **NÃO** saia do Copilot CLI. Precisaremos dele no próximo exercício.

## Resumo e próximos passos

Esta lição explorou [Custom Agents][custom-agents] no GitHub Copilot, assistentes de IA especializados adaptados a tarefas e domínios específicos. Com custom agents você pode codificar a expertise e padrões da sua equipe em agentes reutilizáveis que guiam o Copilot para realizar tipos específicos de trabalho de forma mais eficaz.

Você explorou estes conceitos:

- como criar um custom agent.
- atribuir uma tarefa a um custom agent.

## Recursos

- [Custom Agents][custom-agents]
- [Criando custom agents para um repositório][creating-custom-agents]
- [Custom agents no awesome-copilot][awesome-copilot-agents]
- [Preparando para usar custom agents na sua organização][org-custom-agents]
- [Preparando para usar custom agents na sua empresa][enterprise-custom-agents]

---

[custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents
[creating-custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents
[awesome-copilot-agents]: https://github.com/github/awesome-copilot/tree/main/agents
[wcag]: https://www.w3.org/WAI/standards-guidelines/wcag/
[org-custom-agents]: https://docs.github.com/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents
[enterprise-custom-agents]: https://docs.github.com/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents
