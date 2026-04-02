<!-- l10n-sync: source-file="04-generating-code.md" -->
# Exercício 4 - Adicionando funcionalidades ao projeto com o GitHub Copilot CLI

Como você pode esperar, as tarefas principais que você realizará com o GitHub Copilot CLI são adicionar funcionalidades, recursos e código a um projeto. Como você já explorou, pode adicionar instruction files e servidores MCP para ajudar a guiar o Copilot e garantir que você está obtendo o código esperado, seguindo as melhores práticas definidas pela equipe e comunidade. Vamos pegar uma das issues que geramos anteriormente e pedir ao Copilot para nos ajudar a implementá-la.

## Cenário

Chegou a hora de finalmente implementar a filtragem no projeto. Você já tem a issue no GitHub. Vamos fazer o Copilot buscar os detalhes da issue e montar um plano para implementá-la. Depois, colocaremos o Copilot para trabalhar criando o código e executando os testes.

Neste exercício, você irá:

- utilizar o modo de planejamento para gerar um plano de implementação da funcionalidade de filtragem.
- gerar o código necessário para adicionar filtragem ao site com o Copilot.

Ao final deste exercício, você terá adicionado uma nova funcionalidade ao projeto.

## Utilize o modo de planejamento

Um dos melhores usos da IA é o planejamento. Muitas vezes você terá um bom conceito do que quer construir, mas só precisa trocar algumas ideias. Ferramentas de IA podem ajudá-lo a cristalizar seus pensamentos fazendo perguntas de acompanhamento e trabalhando diferentes armadilhas ou componentes faltantes. Para apoiar esse processo, o Copilot CLI oferece um modo de planejamento.

Você começará o processo de criação da nova funcionalidade utilizando o modo de planejamento no Copilot CLI.

1. Retorne ao seu codespace.
2. Se ainda não estiver aberto, abra uma janela de terminal utilizando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Se ainda não estiver rodando, inicie o Copilot CLI executando o seguinte comando na janela do terminal:

    ```bash
    copilot --allow-all-tools
    ```

4. Se já estiver rodando, limpe o contexto do Copilot enviando o comando `/clear` no prompt.
5. Mude o Copilot CLI para o modo de planejamento selecionando <kbd>Shift</kbd>+<kbd>Tab</kbd> até ver **Plan mode** logo abaixo da janela de prompt.
6. Digite o seguinte prompt no Copilot CLI para que ele busque a issue do seu repositório e proponha um plano para implementar a funcionalidade:

    ```
    Retrieve the issue on the repository related to adding filtering. Help me build a good plan to implement this functionality.
    ```

7. O Copilot pode fazer perguntas de acompanhamento enquanto elabora seu plano. Conforme elas surgirem, responda-as com base em como você construiria a funcionalidade.
8. Uma vez gerado o plano, revise o blueprint. Você deve notar que ele recomenda alterações no backend e frontend, bem como geração de testes. Você pode utilizar <kbd>Ctrl</kbd>+<kbd>Y</kbd> para visualizar os detalhes completos como um arquivo markdown no VS Code.
9.  Se desejar fazer sugestões ao plano que o Copilot gerou, fique à vontade!
10. Quando estiver satisfeito, saia do modo de planejamento selecionando <kbd>Shift</kbd>+<kbd>Tab</kbd>.
11. Diga ao Copilot para começar o trabalho enviando um prompt `start` (ou outra frase similar como "Vamos lá!") ao Copilot.
12. O Copilot começará a trabalhar gerando os arquivos!

> [!NOTE]
> Esta operação provavelmente levará vários minutos. Você verá o Copilot editar e criar arquivos, atualizar e gerar testes, e executar todos os testes para garantir que tudo funcione. Agora é um bom momento para refletir sobre o que você explorou até agora, ou para aproveitar uma bebida.

## Revise o código

Todo código de IA precisa ser revisado antes de ser mesclado em produção. Vamos aproveitar este momento para explorar os arquivos que o Copilot criou e modificou ao implementar a nova funcionalidade.

1. Oculte a janela do terminal no seu codespace selecionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
2. Selecione **Source Control** no seu codespace.
3. Note os arquivos alterados. Você deverá ver atualizações em arquivos como **games.py**, a API de Games, e **test_games.py**, os testes para essa API. Você também deverá ver novos arquivos criados, como componentes Svelte para a nova funcionalidade de filtro, e testes Playwright para validar o frontend.
4. Abra os arquivos e explore as alterações. Em particular, note as seções de comentários que foram adicionadas. Tudo isso vem dos instruction files com os quais você trabalhou anteriormente neste workshop.

## Resumo e próximos passos

Você adicionou a funcionalidade de filtragem ao site com a ajuda do Copilot CLI! Especificamente, você:

- utilizou o modo de planejamento para gerar um plano de implementação da funcionalidade de filtragem.
- gerou o código necessário para adicionar filtragem ao site com o Copilot.

## Recursos

- [Usando o Copilot CLI][using-copilot-cli]
- [Sobre o Copilot CLI][about-copilot-cli]
- [Gerenciamento de contexto no Copilot CLI][context-management]

---

[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[context-management]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#context-management
