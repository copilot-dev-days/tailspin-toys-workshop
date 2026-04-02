<!-- l10n-sync: source-file="08-review.md" -->
# Exercício 8 - Revisão e Próximos Passos

Ao longo dos últimos exercícios, você explorou alguns dos casos de uso mais comuns do GitHub Copilot CLI, incluindo:

- interagir com o GitHub e outros servidores MCP.
- usar instruction files para guiar a geração de código.
- implementar skills para adicionar ferramentas à caixa de ferramentas do Copilot CLI.
- chamar custom agents para tarefas avançadas e mais complexas.

Vamos falar sobre alguns slash commands, melhores práticas e próximos passos.

## Slash Commands

O Copilot CLI tem uma série de slash commands disponíveis para interagir com ele, incluindo os que permitem configurá-lo ou ver o que está acontecendo nos bastidores. Você já usou `/clear` para iniciar um novo chat que limpa o contexto atual, e `/mcp` para registrar servidores MCP. Alguns adicionais que podem ser úteis são:

| Comando            | Descrição                                                        |
| ------------------ | ---------------------------------------------------------------- |
| `/add-dir`         | Adicionar um diretório à lista de confiáveis do Copilot          |
| `/clear`, `/new`   | Limpar o histórico da conversa e começar do zero                 |
| `/compact`         | Resumir o histórico da conversa para reduzir o uso da janela de contexto |
| `/context`         | Mostrar uso de tokens e visualização da janela de contexto       |
| `/diff`            | Revisar as alterações feitas no diretório atual                  |
| `/model`           | Selecionar modelo de IA a usar (Claude Sonnet, GPT-5, etc.)     |
| `/plan <prompt>`   | Criar um plano de implementação antes de codificar               |
| `/review <prompt>` | Executar agente de revisão de código para analisar alterações    |
| `/delegate`        | Delegar tarefa ao Copilot coding agent para processamento assíncrono |
| `/session`         | Mostrar informações da sessão e resumo do workspace              |
| `/share`           | Compartilhar sessão como arquivo markdown ou GitHub gist         |
| `/skills`          | Gerenciar skills para capacidades aprimoradas                    |
| `/usage`           | Exibir métricas e estatísticas de uso da sessão                  |

> [!TIP]
> Use `/help` para ver a lista completa de comandos disponíveis e atalhos de teclado.

## Melhores práticas

Ao usar qualquer ferramenta de IA, investir na infraestrutura subjacente resultará em código melhor e uma experiência melhor. Isso inclui ter instruction files robustos, custom agents e agent skills. Você explorou cada um desses no workshop. Um ótimo recurso para templates é o [awesome-copilot][awesome-copilot]. Você também pode pedir ao Copilot para explorar seu projeto e criar esses arquivos como ponto de partida! Na verdade, todos os arquivos de infraestrutura de IA neste workshop foram tanto obtidos do awesome-copilot quanto gerados com a ajuda do Copilot.

Lembre-se sempre de que contexto é fundamental, tanto na vida quanto ao trabalhar com ferramentas de IA. Uma boa infraestrutura certamente ajuda muito na geração de código da mais alta qualidade, mas os prompts também têm um grande impacto. Descrever claramente o que você quer construir, por que quer construir e como quer construir ajudará o Copilot. Basicamente, se há uma informação da qual o Copilot se beneficiaria, certifique-se de passá-la adiante!

## Próximos Passos

A melhor forma de melhorar suas habilidades com qualquer ferramenta é continuar usando a ferramenta! Use-a para código de produção, para código de hobby, para aquele pequeno app que você tem em mente há anos mas nunca conseguiu construir. Compartilhe seus aprendizados com sua equipe, e aprenda com sua equipe. E, como sempre, explore a documentação:

## Recursos

- [Sobre o Copilot CLI][about-copilot-cli]
- [Usando o Copilot CLI][using-copilot-cli]
- [Repositório Awesome Copilot][awesome-copilot]
- [Guia de Custom Instructions][repo-instructions]
- [Documentação de Agent Skills][agent-skills]
- [Documentação de Custom Agents][custom-agents]
- [Especificação MCP][mcp-spec]

---

[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[awesome-copilot]: https://github.com/github/awesome-copilot
[repo-instructions]: https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions
[agent-skills]: https://docs.github.com/copilot/concepts/agents/about-agent-skills
[custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents
[mcp-spec]: https://modelcontextprotocol.io/
