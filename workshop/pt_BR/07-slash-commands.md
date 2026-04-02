<!-- l10n-sync: source-file="07-slash-commands.md" -->
# Exercício 7 - Slash Commands no GitHub Copilot CLI

Como qualquer boa ferramenta CLI, o GitHub Copilot CLI inclui muitos slash commands para interagir com ele. Esses comandos expõem funcionalidades avançadas, informações "por trás dos bastidores" ou opções adicionais de configuração. Você já explorou alguns com `/clear` para limpar o contexto e `/mcp` para registrar servidores MCP. Vamos explorar alguns outros poderosos, incluindo `/context`, `/models` e `/share`.

## Cenário

Como desenvolvedor de meio período da Tailspin Toys, você quer compartilhar sua experiência com o Copilot CLI com o restante da equipe. Você também quer explorar diferentes opções dentro da ferramenta para garantir que está aproveitando ao máximo.

Neste exercício você usará:

- `/share` para criar um GitHub gist para compartilhar sua sessão com a equipe.
- `/context` para ver o contexto que o Copilot CLI está utilizando atualmente.
- `/models` para explorar a lista de modelos disponíveis e selecionar um novo se desejar.

## Compartilhando uma sessão

Usar qualquer ferramenta, incluindo uma ferramenta de IA, é uma habilidade. Trabalhar em equipe, compartilhando aprendizados uns com os outros, é a melhor maneira de ajudar a melhorar a experiência de todos e gerar código de maior qualidade. Para apoiar isso, o Copilot CLI fornece o comando `/share`. O comando `/share` pode gerar um arquivo markdown ou GitHub gist com os detalhes da sessão, incluindo os prompts usados e a lógica que o Copilot seguiu.

Vamos criar um GitHub gist que poderíamos compartilhar com nossa equipe.

1. Retorne ao seu codespace.
2. Se estiver oculta, mostre a janela do terminal selecionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Na janela de prompt do Copilot CLI, envie o seguinte comando:

    ```
    /share gist
    ```

4. Em apenas alguns instantes, o Copilot criará um gist e exibirá o link.
5. Copie o texto do link.
6. Em uma nova aba do navegador, cole o link para explorar o gist. Note como o gist destaca os prompts enviados, skills e agentes usados, o processo de pensamento do Copilot e até o código e resultados de comandos executados localmente.

Os gists e arquivos markdown gerados pelo `/share` podem ser usados para fins de documentação de como o código foi gerado, ou para compartilhar com sua equipe sobre como certas ações foram realizadas que geraram os resultados desejados do Copilot.

## Explorando o contexto do Copilot CLI

Ao trabalhar em tarefas maiores ou mais complexas, você pode atingir a janela de contexto máxima do modelo. O tamanho exato da janela variará com base no modelo sendo usado e na versão do Copilot CLI. Quando a janela de contexto atinge o máximo, o Copilot CLI automaticamente a compacta, resumindo informações e removendo o que considera não ser relevante para a tarefa atual. Você pode tanto ver o estado atual do contexto quanto compactar manualmente o contexto usando slash commands. Vamos explorar a janela de contexto.

1. Retorne ao seu codespace.
2. Se estiver oculta, mostre a janela do terminal selecionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Na janela de prompt do Copilot CLI, envie o seguinte comando:

    ```
    /context
    ```

4. Em apenas alguns instantes, o Copilot CLI gerará uma representação visual do seu contexto atual:

    ![Screenshot of context window from Copilot CLI][img-context-window]

5. Note o modelo exibido (que pode ser diferente do da imagem), e a porcentagem atual de tokens utilizados. O restante das informações destaca:

    | Título       | Descrição                                                      |
    | ------------ | -------------------------------------------------------------- |
    | System/Tools | Instruction files, conteúdo de arquivos e definições de tools  |
    | Messages     | Histórico de conversa entre você e o Copilot                   |
    | Buffer       | Espaço reservado pelo Copilot CLI para gerar respostas         |
    | Free space   | Espaço livre restante                                          |

6. Compacte o histórico da conversa enviando o seguinte slash command ao Copilot CLI:

    ```
    /compact
    ```

7. Uma vez concluído, envie o seguinte comando para exibir as estatísticas de contexto atuais novamente:

    ```
    /context
    ```

8. Note a mudança no contexto. Pode não haver uma mudança drástica, pois a janela de contexto provavelmente é relativamente pequena no momento.

> [!NOTE]
> O Copilot CLI compactará automaticamente quando ficar cheio. Conforme se aproxima de 100% da capacidade, ele exibirá a porcentagem logo acima da janela de prompt. Normalmente, ele compactará de forma assíncrona, permitindo que você continue interagindo com o Copilot enquanto ele faz seu trabalho. No entanto, ele pode bloquear uma operação em execução por vários segundos enquanto realiza seu trabalho.

### Melhores práticas com contexto

Na maioria das sessões com o Copilot, o contexto será gerenciado eficientemente pelo próprio Copilot sem nenhuma orientação específica. No entanto, pode haver instâncias em que você decida instruir manualmente o Copilot a limpar ou compactar seu histórico:

- Se você está mudando para uma parte diferente da aplicação, ou para uma tarefa não relacionada, pode usar `/clear` para começar do zero e evitar confundir o Copilot com contexto antigo e não relacionado.
- Se você está se aproximando da janela de contexto máxima, pode manualmente `/compact` seu contexto para controlar quando isso acontece.

> [!IMPORTANT]
> Novamente, na maioria das vezes, o Copilot gerenciará seu contexto sem interação direta da sua parte. Se você notar que o Copilot está um pouco confuso com informações antigas, ou está prestes a mudar para uma tarefa não relacionada, então pode considerar usar os comandos manuais.

## Escolhendo seu modelo

Diferentes modelos têm diferentes pontos fortes, e diferentes desenvolvedores têm diferentes preferências. O Copilot CLI permite que você liste e selecione o modelo que deseja usar!

1. Retorne ao seu codespace.
2. Se estiver oculta, mostre a janela do terminal selecionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Exiba a lista de modelos enviando o seguinte slash command ao Copilot CLI:

    ```
    /models
    ```

4. Note a lista de modelos. Cada modelo terá tanto seu nome quanto o modificador de custo por requisição listado ao lado.
5. Se desejar, selecione um novo modelo! Ou selecione <kbd>Esc</kbd> para sair da lista de modelos.

> [!IMPORTANT]
> A seleção de modelo persiste no Copilot CLI.

## Resumo e próximos passos

Usar slash commands no Copilot CLI permite que você o configure, compartilhe sessões e obtenha informações internas sobre como o Copilot está funcionando. Nesta lição você usou:

- `/share` para criar um GitHub gist para compartilhar sua sessão com a equipe.
- `/context` para ver o contexto que o Copilot CLI está utilizando atualmente.
- `/models` para explorar a lista de modelos disponíveis e selecionar um novo se desejar.

## Recursos

- [Usando o Copilot CLI][using-copilot-cli]
- [Sobre o Copilot CLI][about-copilot-cli]
- [Gerenciamento de contexto no Copilot CLI][context-management]
- [Compartilhar sessões com o Copilot CLI][share-sessions]
- [Selecionando modelos no Copilot CLI][selecting-models]

---

[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[context-management]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#context-management
[share-sessions]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#share-sessions
[selecting-models]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#select-an-llm
[img-context-window]: ./images/7-context-window.png
