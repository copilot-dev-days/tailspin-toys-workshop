<!-- l10n-sync: source-file="README.md" -->
# Workshop GitHub Copilot CLI

Bem-vindo a este workshop de 90 minutos conduzido por instrutor sobre o **GitHub Copilot CLI**! Nesta sessão prática, você aprenderá como aproveitar o poder do desenvolvimento assistido por IA diretamente do seu terminal.

## Visão Geral do Workshop

GitHub Copilot CLI é um poderoso assistente de codificação agêntico que roda diretamente no seu terminal. Diferente das experiências tradicionais do Copilot baseadas em IDE, o Copilot CLI permite que você trabalhe com IA onde muitos desenvolvedores passam boa parte do seu tempo - a linha de comando. Ele pode explorar codebases, fazer alterações no código, executar comandos e interagir com ferramentas externas através de servidores Model Context Protocol (MCP).

### Objetivos de Aprendizado

Ao final deste workshop, você será capaz de:

1. **Entender Custom Instructions** - Fornecer contexto e diretrizes para melhorar a qualidade da geração de código
2. **Instalar e configurar o GitHub Copilot CLI** - Configurar o Copilot CLI em um codespace e autenticar com o GitHub
3. **Trabalhar com servidores MCP** - Estender as capacidades do Copilot CLI conectando-se a serviços externos
4. **Gerar e modificar código** - Aproveitar a IA para criar novas funcionalidades a partir do terminal
5. **Usar Agent Skills** - Aprimorar as capacidades do Copilot com skills especializadas
6. **Criar Custom Agents** - Construir agentes especializados para tarefas específicas

## Pré-requisitos

Antes de participar deste workshop, certifique-se de que você tem:

- [ ] Uma conta GitHub com uma assinatura ativa do **Copilot Pro, Pro+, Business ou Enterprise**
- [ ] Familiaridade básica com operações de terminal/linha de comando
- [ ] Git instalado e configurado

> [!NOTE]
> Se você está usando Copilot Business ou Copilot Enterprise, certifique-se de que seu administrador habilitou o Copilot CLI para uso.

## O Cenário: Tailspin Toys

Ao longo deste workshop, você trabalhará com o **Tailspin Toys**, uma plataforma de crowdfunding para jogos com tema de desenvolvedores. A aplicação possui:

- **Backend**: Flask API com SQLAlchemy ORM para interações com banco de dados
- **Frontend**: Astro/Svelte com Tailwind CSS para estilização
- **Banco de dados**: SQLite para desenvolvimento local

Esta aplicação full-stack oferece um excelente playground para explorar as capacidades do Copilot CLI em diferentes tipos de arquivo, linguagens e tarefas de desenvolvimento.

## Exercícios do Workshop

| Exercício | Tópico | Descrição |
|-----------|--------|-----------|
| [0. Pré-requisitos][ex0] | Configuração | Crie seu repositório e codespace |
| [1. Custom Instructions][ex1] | Contexto | Aprenda como instruction files orientam o Copilot |
| [2. Instalando o Copilot CLI][ex2] | Instalação | Instale e autentique o Copilot CLI |
| [3. Servidores MCP][ex3] | Ferramentas Externas | Conecte-se ao GitHub e outros serviços via MCP |
| [4. Gerando Código][ex4] | Geração de Código | Use o modo de planejamento e gere funcionalidades |
| [5. Agent Skills][ex5] | Skills | Aprimore o Copilot com skills especializadas |
| [6. Custom Agents][ex6] | Agentes | Crie e use agentes personalizados |
| [7. Slash Commands][ex7] | Funcionalidades da CLI | Explore contexto, modelos e compartilhamento |
| [8. Revisão][ex8] | Resumo | Revise conceitos-chave e próximos passos |

## Dicas para o Sucesso

1. **Seja específico** - Quanto mais contexto você fornecer, melhores serão os resultados
2. **Comece pela exploração** - Peça ao Copilot para explicar a codebase antes de fazer alterações
3. **Itere** - Refine seus prompts com base nos resultados iniciais
4. **Confie, mas verifique** - Sempre revise o código gerado antes de fazer commit
5. **Use instruction files** - Aproveite o `.github/copilot-instructions.md` para orientação em todo o projeto

## Suporte

- **Durante o workshop**: Levante a mão ou use o chat para fazer perguntas
- **Após o workshop**: Abra uma issue neste repositório

---

*Bom coding com GitHub Copilot CLI! 🚀*

[ex0]: ./00-prereqs.md
[ex1]: ./01-custom-instructions.md
[ex2]: ./02-install-copilot-cli.md
[ex3]: ./03-mcp.md
[ex4]: ./04-generating-code.md
[ex5]: ./05-agent-skills.md
[ex6]: ./06-custom-agents.md
[ex7]: ./07-slash-commands.md
[ex8]: ./08-review.md
