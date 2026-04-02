<!-- l10n-sync: source-file="00-prereqs.md" -->
# Exercício 0: Pré-requisitos

Antes de começar o laboratório, há algumas tarefas que você precisa completar para deixar tudo pronto. Você precisa obter uma cópia do repositório que inclui o código e, em seguida, criar um [codespace][codespaces] para usar na criação do seu código.

## Configurando o Repositório do Laboratório

Para criar uma cópia do repositório para o código, você criará uma instância a partir do [template][template-repository]. A nova instância conterá todos os arquivos necessários para o laboratório, e você a usará enquanto trabalha nos exercícios.

1. Em uma nova janela do navegador, navegue até o repositório GitHub deste laboratório: `https://github.com/copilot-dev-days/tailspin-toys-workshop`.
2. Crie sua própria cópia do repositório selecionando o botão **Use this template** na página do repositório do laboratório. Em seguida, selecione **Create a new repository**.

    ![Use this template button](./images/0-use-template.png)

3. Se você está completando o workshop como parte de um evento conduzido pelo GitHub ou Microsoft, siga as instruções fornecidas pelos mentores. Caso contrário, você pode criar o novo repositório em uma organização onde você tem acesso ao Copilot.

    ![Input the repository template settings](./images/0-repository-settings.png)

4. Anote o caminho do repositório que você criou (**nome-da-organização-ou-usuário/nome-do-repositório**), pois você precisará consultá-lo posteriormente no laboratório.

## Criando um codespace

A seguir, você usará um codespace para completar os exercícios do laboratório. [GitHub Codespaces][codespaces] é um ambiente de desenvolvimento baseado na nuvem que permite escrever, executar e depurar código diretamente no seu navegador. Ele oferece uma IDE completa com suporte a múltiplas linguagens de programação, extensões e ferramentas.

1. Navegue até o repositório recém-criado.
2. Selecione o botão verde **Code**.

    ![Select the Code button](./images/0-code-button.png)

3. Selecione a aba **Codespaces** e selecione o botão **+** para criar um novo Codespace.

    ![Create a new codespace](./images/0-create-codespace.png)

A criação do codespace levará vários minutos, embora ainda seja muito mais rápido do que ter que instalar manualmente todos os serviços! Dito isso, você pode usar esse tempo para explorar outros recursos do GitHub Copilot, para os quais voltaremos sua atenção a seguir!

> [!IMPORTANT]
> Você retornará ao codespace em um exercício futuro. Por enquanto, deixe-o aberto em uma aba do seu navegador.

> [!NOTE]
> Este workshop foi construído para rodar dentro de um codespace ou container. Isso garante que o ambiente em que você está trabalhando tenha todos os pré-requisitos necessários instalados e que você tenha uma experiência tranquila. Se você deseja rodar o workshop localmente no seu sistema, precisará de versões recentes do Node.js e Python instaladas, assim como o Visual Studio Code.
>
> Se você está rodando o workshop localmente, em vez de criar um codespace, clone o repositório e abra-o no VS Code:
>
> ```bash
> git clone https://github.com/copilot-dev-days/tailspin-toys-workshop.git
> cd tailspin-toys-workshop
> code .
> ```

## Resumo

Parabéns, você criou uma cópia do repositório do laboratório! Você também iniciou o processo de criação do seu codespace, que será usado quando você começar a escrever código.

## Recursos

- [Visão geral do GitHub Codespaces][codespaces]
- [Criando um repositório a partir de um template][template-repository]
- [Primeiros passos com Codespaces][codespaces-quickstart]

---

[codespaces]: https://github.com/features/codespaces
[template-repository]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-template-repository
[codespaces-quickstart]: https://docs.github.com/codespaces/getting-started/quickstart
