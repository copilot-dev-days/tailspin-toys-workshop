<!-- l10n-sync: source-file="02-install-copilot-cli.md" -->
# Exercício 2 - Instalando o GitHub Copilot CLI

[GitHub Copilot CLI][about-copilot-cli] é um poderoso assistente de codificação agêntico que roda no seu terminal, permitindo que você explore codebases, gere código, execute comandos e interaja com ferramentas externas - tudo a partir da linha de comando.

## Cenário

A Tailspin Toys é uma organização recente com um site que carece de muitas funcionalidades. Seu backlog continua crescendo, e há uma forte demanda por crescimento. Para ajudar os desenvolvedores, eles querem começar a utilizar agentes de IA através do Copilot CLI. Isso permitirá que os desenvolvedores sejam mais produtivos, pois podem se concentrar no panorama geral enquanto avançam mais rápido. O primeiro passo para fazer isso é, claro, instalar o Copilot CLI!

Neste exercício, você aprenderá como:

- instalar o GitHub Copilot CLI usando npm.
- autenticar com sua conta GitHub.
- verificar a instalação.

## Abra um terminal no seu codespace

Antes de instalar o Copilot CLI, você precisa abrir uma janela de terminal no VS Code.

1. Retorne ao seu codespace se ainda não estiver lá.
2. Abra uma janela de terminal pressionando <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Você deverá ver um painel de terminal aparecer na parte inferior da sua janela do VS Code.

## Instale o Copilot CLI

GitHub Codespaces vem com Node.js pré-instalado, então você pode usar npm para instalar o Copilot CLI globalmente.

1. No terminal, verifique se o Node.js está instalado e atende ao requisito de versão:

   ```bash
   node --version
   ```

   Você deverá ver a versão 22 ou superior (ex.: `v22.x.x`).

2. Instale o Copilot CLI globalmente usando npm:

   ```bash
   npm install -g @github/copilot
   ```

3. Verifique a instalação checando a versão:

   ```bash
   copilot --version
   ```

   Você deverá ver o número da versão exibido (ex.: `v0.0.393`).

> [!TIP]
> Se você encontrar erros de permissão, pode ser necessário usar `sudo npm install -g @github/copilot` em alguns sistemas. No entanto, isso não deve ser necessário no GitHub Codespaces.

## Autentique com o GitHub

Na primeira execução, o Copilot CLI solicitará que você autentique com sua conta GitHub.

1. Inicie o Copilot CLI:

   ```bash
   copilot
   ```

2. Se você não estiver logado, verá um prompt para autenticação. O Copilot CLI exibirá um código de dispositivo e pedirá que você visite uma URL.
3. Siga as instruções na tela:
   - Abra a URL fornecida no seu navegador
   - Digite o código de dispositivo quando solicitado
   - Autorize o Copilot CLI a acessar sua conta GitHub
4. Uma vez autenticado, você verá o prompt do Copilot CLI, pronto para aceitar suas perguntas e comandos.

> [!NOTE]
> Em um codespace, você pode já estar autenticado através da sua sessão GitHub. Se o Copilot CLI iniciar sem solicitar autenticação, está tudo pronto!

## Confie no diretório

Quando você usa o Copilot CLI pela primeira vez em um diretório, ele pedirá que você confirme que confia nos arquivos daquela pasta. Esta é uma medida de segurança para evitar que o Copilot trabalhe acidentalmente com código não confiável.

1. Quando solicitado, você verá três opções:
   - **Yes, proceed**: Confiar apenas para esta sessão
   - **Yes, and remember this folder for future sessions**: Confiar permanentemente
   - **No, exit (Esc)**: Não permitir acesso aos arquivos
2. Para este workshop, selecione **Yes, and remember this folder for future sessions**, pois você trabalhará neste repositório durante todo o workshop.

## Verifique se tudo está funcionando

Vamos garantir que o Copilot CLI está devidamente instalado e conectado.

1. Se você saiu do Copilot CLI, inicie-o novamente:

   ```bash
   copilot
   ```

2. Faça uma pergunta simples ao Copilot para verificar se está funcionando:

   ```
   What files are in this project?
   ```

3. O Copilot deve explorar o repositório e fornecer um resumo da estrutura do projeto.
4. Experimente o comando `/help` para ver os slash commands disponíveis:

   ```
   /help
   ```

## Resumo e próximos passos

Parabéns! Você instalou e autenticou com sucesso o GitHub Copilot CLI. Você aprendeu como:

- instalar o Copilot CLI usando npm.
- autenticar com sua conta GitHub.
- confiar em um diretório para o Copilot CLI trabalhar.
- verificar se a instalação está funcionando corretamente.

## Recursos

- [Instalando o GitHub Copilot CLI][install-copilot-cli]
- [Sobre o Copilot CLI][about-copilot-cli]
- [Usando o Copilot CLI][using-copilot-cli]

---

[install-copilot-cli]: https://docs.github.com/copilot/how-tos/set-up/install-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
