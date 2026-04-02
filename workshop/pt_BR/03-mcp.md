<!-- l10n-sync: source-file="03-mcp.md" -->
# Exercício 3 - Usando servidores MCP com o Copilot CLI

Há mais em escrever código do que apenas escrever código. Issues precisam ser registradas, serviços externos precisam ser chamados e informações precisam ser coletadas. Normalmente, isso envolve interagir com ferramentas externas, o que pode quebrar o fluxo do desenvolvedor. Através do poder do Model Context Protocol (MCP), você pode acessar toda essa funcionalidade diretamente do Copilot!

## Cenário

Você é um desenvolvedor de meio período da Tailspin Toys - uma plataforma de crowdfunding para jogos de tabuleiro com tema de desenvolvedores. Você recebeu várias tarefas para introduzir novas funcionalidades no site. Sendo um bom membro da equipe, você quer registrar issues para rastrear seu trabalho. Para ajudar o seu eu futuro, você decidiu contar com a ajuda do Copilot. Você configurará seu backlog de trabalho para o restante do laboratório, usando o Copilot CLI e o servidor Model Context Protocol (MCP) do GitHub para criar as issues para você. Você também registrará servidores MCP para as diversas tecnologias usadas no projeto, como Svelte e Astro.

Neste exercício, você irá:

- explorar o Model Context Protocol (MCP), que fornece acesso a ferramentas e capacidades externas.
- configurar e utilizar servidores MCP no GitHub Copilot CLI.
- usar o GitHub Copilot CLI para criar issues no seu repositório.

Ao final deste exercício, você terá criado um backlog de issues no GitHub para uso ao longo do restante do laboratório.

## O que é agent mode e Model Context Protocol (MCP)?

O [Model Context Protocol (MCP)][mcp-blog-post] fornece aos agentes de IA uma forma de se comunicar com ferramentas e serviços externos. Ao usar o MCP, agentes de IA podem se comunicar com ferramentas e serviços externos em tempo real. Isso permite que eles acessem informações atualizadas (usando recursos) e realizem ações em seu nome (usando ferramentas).

Essas ferramentas e recursos são acessados através de um servidor MCP, que atua como uma ponte entre o agente de IA e as ferramentas e serviços externos. O servidor MCP é responsável por gerenciar a comunicação entre o agente de IA e as ferramentas externas (como APIs existentes ou ferramentas locais como pacotes NPM). Cada servidor MCP representa um conjunto diferente de ferramentas e recursos que o agente de IA pode acessar.

![Diagram showing the inner works of agent mode and how it interacts with context, LLM and tools - including tools contributed by MCP servers and VS Code extensions][img-mcp-diagram]

Alguns servidores MCP populares existentes são:

- **[GitHub MCP Server][github-mcp-server]**: Este servidor fornece acesso a um conjunto de APIs para gerenciar seus repositórios GitHub. Ele permite que o agente de IA realize ações como criar novos repositórios, atualizar existentes e gerenciar issues e pull requests. **O servidor MCP do GitHub está automaticamente disponível no Copilot CLI.**
- **[Playwright MCP Server][playwright-mcp-server]**: Este servidor fornece capacidades de automação de navegador usando Playwright. Ele permite que o agente de IA realize ações como navegar em páginas web, preencher formulários e clicar em botões.
- **[Microsoft Learn MCP Server][microsoft-learn-mcp-server]**: Este servidor permite que clientes como GitHub Copilot e outros agentes de IA tragam informações confiáveis e atualizadas diretamente da documentação oficial da Microsoft. Ele permite pesquisar na documentação, buscar um artigo completo e pesquisar exemplos de código.

Existem muitos outros servidores MCP disponíveis que fornecem acesso a diferentes ferramentas e recursos. O GitHub hospeda um [registro MCP][mcp-registry] para aprimorar a descoberta e contribuições ao ecossistema.

> [!IMPORTANT]
> Com relação à segurança, trate servidores MCP como você trataria qualquer outra dependência no seu projeto. Antes de usar um servidor MCP, revise cuidadosamente seu código-fonte, verifique o publicador e considere as implicações de segurança. Use apenas servidores MCP em que você confia e seja cauteloso ao conceder acesso a recursos ou operações sensíveis.

## Permitindo todas as ferramentas

Como agente, o Copilot CLI frequentemente precisará executar vários comandos, como acessar servidores MCP, realizar builds ou executar testes. O Copilot CLI suporta um modo "[YOLO][yolo-wikipedia]", ou modo de permitir todas as ferramentas. Isso concede ao Copilot CLI a capacidade de executar automaticamente qualquer comando sem obter aprovação prévia de você.

> [!IMPORTANT]
> Se você usar uma opção de aprovação automática como `--allow-all-tools` ou `--yolo`, o Copilot tem o mesmo acesso que você aos arquivos no seu computador e pode executar quaisquer comandos shell que você pode executar, sem obter sua aprovação prévia. Veja a [documentação de considerações de segurança][security-considerations] para mais informações.

Como estamos trabalhando em um ambiente de workshop em um codespace, utilizaremos `--allow-all-tools` para agilizar o workshop.

## Adicionando servidores MCP ao Copilot CLI

Servidores MCP são registrados em **~/.copilot/mcp-config.json**. Você pode atualizar o arquivo diretamente, ou adicioná-los através do comando `/mcp add`, que é a rota que você seguirá aqui. À medida que você adiciona cada servidor, ou quando iniciar o Copilot CLI no futuro, eles serão automaticamente iniciados.

1. Retorne ao seu codespace.
2. Se ainda não estiver aberto, abra uma janela de terminal selecionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Se o Copilot já estiver rodando, pare-o selecionando <kbd>Ctrl</kbd>+<kbd>C</kbd> duas vezes.
4. Inicie o Copilot executando o seguinte comando na janela do terminal:

    ```bash
    copilot --allow-all-tools
    ```

5. Dentro do Copilot CLI, use o seguinte comando para iniciar a interface de adicionar servidor MCP:

    ```text
    /mcp add
    ```

6. Defina o **Server name** como **Svelte** e selecione <kbd>Tab</kbd>.
7. Defina o **Server type** como **\[3\] HTTP** e selecione <kbd>Tab</kbd>.
8. Defina a **URL** como **https://mcp.svelte.dev/mcp**.
9. Selecione <kbd>Ctrl</kbd>+<kbd>S</kbd> para salvar o servidor.
10. Selecione <kbd>A</kbd> para adicionar outro servidor.
11. Siga os passos 5 a 9 para registrar Playwright, Astro e Microsoft Learn, usando a seguinte tabela:

    | Server Name | Server Type | Command ou URL |
    | ----------- | ----------- | -------------- |
    | Playwright | \[1\] Local | `npx @playwright/mcp@latest` |
    | Astro | \[3\] HTTP | `https://mcp.docs.astro.build/mcp` |
    | Microsoft Learn | \[3\] HTTP | `https://learn.microsoft.com/api/mcp` |

12. Uma vez concluído, selecione <kbd>Q</kbd> para sair da interface.

## Criando um backlog de tarefas

Agora que você configurou o servidor MCP do GitHub, pode usar o Copilot Agent mode para criar um backlog de tarefas para uso no restante do laboratório.

1. Retorne ao seu codespace.
2. Se ainda não estiver aberto, abra uma janela de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Se ainda não estiver rodando, inicie o Copilot CLI executando o seguinte comando na janela do terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Se já estiver rodando, limpe o contexto do Copilot enviando o comando `/clear` no prompt.
5. Digite ou cole o seguinte prompt para criar as issues em que você trabalhará no laboratório:

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
> <kbd>Enter</kbd> envia automaticamente o prompt para o Copilot CLI. Se você deseja digitar mensagens mais longas em várias linhas, pode usar <kbd>Shift</kbd>+<kbd>Enter</kbd> para adicionar linhas em branco.

6. Pressione <kbd>Enter</kbd> para enviar o prompt ao Copilot.
7. O GitHub Copilot processará a solicitação e criará as issues no seu repositório GitHub.
8. Em uma aba separada do navegador, navegue até seu repositório GitHub e selecione a aba de issues.
9.  Você deverá ver uma lista de issues que foram criadas pelo Copilot. Cada issue deve incluir um título claro e uma lista de critérios de aceitação com checkboxes.

![Example of issues created in GitHub][img-github-issues]

Você deve notar que as issues são bastante detalhadas. É aqui que você se beneficia do poder dos Large Language Models (LLMs) e do Model Context Protocol (MCP), pois ele conseguiu criar uma descrição inicial clara para a issue.

## Resumo e próximos passos

Parabéns, você criou issues no GitHub usando o Copilot CLI e MCP, e registrou servidores MCP!

Para recapitular, neste exercício você:

- explorou o Model Context Protocol (MCP), que fornece acesso a ferramentas e capacidades externas.
- configurou e utilizou servidores MCP no GitHub Copilot CLI.
- usou o GitHub Copilot CLI para criar issues no seu repositório.

Com o servidor MCP do GitHub configurado, você agora pode usar o GitHub Copilot CLI para realizar ações adicionais em seu nome, como criar novos repositórios, gerenciar pull requests e pesquisar informações em seus repositórios.

## Recursos

- [O que diabos é MCP e por que todo mundo está falando sobre isso?][mcp-blog-post]
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
[img-mcp-diagram]: ./images/3-mcp-diagram.png
[img-github-issues]: ./images/3-github-issues-created.png
