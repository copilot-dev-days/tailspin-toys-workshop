<!-- l10n-sync: source-file="01-custom-instructions.md" -->
# Exercício 1 - Fornecendo contexto ao Copilot com instruction files

Contexto é fundamental em muitos aspectos da vida, e ao trabalhar com IA generativa. Se você está realizando uma tarefa que precisa ser completada de uma maneira específica, ou se uma informação de contexto é importante, você quer garantir que o Copilot tenha acesso a essa informação. Você pode usar [instruction files][instruction-files] para fornecer orientações para que o Copilot não apenas entenda o que você quer que ele faça, mas também como você quer que seja feito.

Neste exercício, você aprenderá como:

- fornecer ao Copilot contexto específico do projeto, diretrizes de codificação e padrões de documentação usando [repository custom instructions][repository-custom-instructions] **.github/copilot-instructions.md**.
- fornecer instruction files de caminho para orientar o Copilot em tarefas repetitivas ou baseadas em templates para tipos específicos de arquivos.
- implementar tanto instruções em nível de repositório quanto instruções específicas por tarefa.

> [!IMPORTANT]
> Note que o código gerado pode divergir de alguns dos padrões que você definiu. Ferramentas de IA como o Copilot são não-determinísticas e podem nem sempre fornecer o mesmo resultado. Os outros arquivos na codebase não contêm docstrings ou cabeçalhos de comentários, o que pode levar o Copilot em outra direção. Consistência é fundamental, então garantir que seu código siga os padrões estabelecidos é importante. Você sempre pode dar continuidade no chat e pedir ao Copilot para seguir seus padrões de codificação, o que ajudará a guiá-lo na direção certa.

## Cenário

Como qualquer bom time de desenvolvimento, a Tailspin Toys tem um conjunto de diretrizes e requisitos para práticas de desenvolvimento. Estes incluem:

- API sempre precisa de testes unitários.
- UI deve estar em modo escuro e ter uma aparência moderna.
- Documentação deve ser adicionada ao código na forma de docstrings.
- Um bloco de comentários deve ser adicionado no início de cada arquivo descrevendo o que o arquivo faz.

Através do uso de instruction files, você garantirá que o Copilot tenha as informações corretas para realizar as tarefas em alinhamento com as práticas destacadas.

## Custom Instructions

Custom Instructions permitem que você forneça contexto e preferências ao Copilot chat, para que ele possa entender melhor seu estilo de codificação e requisitos. Esta é uma funcionalidade poderosa que pode ajudá-lo a direcionar o Copilot para obter sugestões e trechos de código mais relevantes. Você pode especificar suas convenções de codificação preferidas, bibliotecas e até os tipos de comentários que gosta de incluir no seu código. Você pode criar instruções para todo o repositório, ou para tipos específicos de arquivos para contexto em nível de tarefa.

Existem dois tipos de instruction files:

- **.github/copilot-instructions.md**, um único arquivo de instrução enviado ao Copilot para **cada** prompt de chat no repositório. Este arquivo deve conter informações em nível de projeto, contexto que é relevante para a maioria das solicitações de chat enviadas ao Copilot. Isso pode incluir a stack tecnológica sendo utilizada, uma visão geral do que está sendo construído e melhores práticas, e outras orientações globais para o Copilot.
- Arquivos **\*.instructions.md** podem ser criados para tarefas específicas ou tipos de arquivo. Você pode usar arquivos **\*.instructions.md** para fornecer diretrizes para linguagens específicas (como Python ou TypeScript), ou para tarefas como criar um componente React ou um novo conjunto de testes unitários.

## Melhores práticas para gerenciar instruction files

Uma conversa completa sobre a criação de instruction files está além do escopo do workshop. No entanto, os exemplos fornecidos no projeto de exemplo fornecem uma representação de como abordar seu gerenciamento. Em alto nível:

- Mantenha as instruções no **copilot-instructions.md** focadas em orientação em nível de projeto, como uma descrição do que está sendo construído, a estrutura do projeto e padrões de codificação globais.
- Use arquivos **\*.instructions.md** para fornecer instruções específicas para tipos de arquivo (testes unitários, componentes React, endpoints de API), ou para tarefas específicas.
- Use linguagem natural nos seus instruction files. Mantenha as orientações claras. Forneça exemplos de como o código deve (e não deve) parecer.

Não existe uma maneira específica de criar instruction files, assim como não existe uma maneira específica de usar IA. Você descobrirá através da experimentação o que funciona melhor para o seu projeto. As orientações fornecidas aqui e os [recursos](#recursos) abaixo devem ajudá-lo a começar.

> [!TIP]
> Todo projeto usando GitHub Copilot deveria ter uma coleção robusta de instruction files para fornecer contexto e melhor orientar a geração de código. Ao explorar os instruction files no projeto, você pode notar que existem arquivos para vários tipos de arquivos e tarefas, incluindo [atualizações de UI][ui-instructions] e [Astro][astro-instructions]. O investimento feito em instruction files melhorará significativamente a qualidade das sugestões de código do Copilot, garantindo que correspondam melhor ao estilo e requisitos que sua organização possui.
> 
> Você pode até ter o Copilot auxiliando na geração de instruction files selecionando o ícone de engrenagem para **Configure Chat** no Copilot chat e selecionando **Generate Agent Instructions**.
> 
> ![Screenshot of option in GitHub Copilot chat with configure chat highlighted and generate agent instructions highlighted][img-generate-instructions]
>
> E, se você está procurando templates ou um ponto de partida para instruction files, pode explorar o [awesome-copilot][awesome-copilot], um repositório cheio de instruction files, custom agents e outros recursos para ajudá-lo! 

## Certifique-se de que seu codespace está pronto

Em um [exercício anterior][prereqs-lesson] você iniciou o codespace que usará para o restante dos exercícios de codificação neste laboratório. Vamos dar os toques finais antes de começar a usá-lo.

1. Retorne à aba onde você iniciou seu codespace. Se você fechou a aba, retorne ao seu repositório, selecione **Code** > **Codespaces** e depois o nome do codespace.
2. Selecione **Extensions** na barra de atividades no lado esquerdo do seu codespace.

    ![Screenshot of the extensions window with multiple extensions showing either Update or Reload Window buttons][img-extensions-updates]

3. Selecione **Update** em quaisquer extensões com um botão **Update**. Repita conforme necessário.
4. Selecione **Reload Window** em quaisquer extensões com um botão **Reload Window** para recarregar o codespace.
5. Quando solicitado por um diálogo, selecione **Reload** para recarregar a janela. Isso garantirá que a versão mais recente esteja sendo usada.

## Explore os instruction files personalizados

Vamos começar explorando os instruction files criados para este projeto. Você notará que há um arquivo central **copilot-instructions.md**, e uma coleção de arquivos **.instructions** para várias tarefas.

1. Retorne ao seu codespace.
2. Abra **.github/copilot-instructions.md**.
3. Explore o arquivo, notando a breve descrição do projeto e seções para **Code standards**, **Scripts** e **GitHub Actions Workflows**. Estes são aplicáveis a qualquer interação que você teria com o Copilot, são robustos e fornecem orientação clara sobre o que você está fazendo e como quer realizá-lo.
4. Abra **.github/instructions**, e explore os arquivos contidos nele. Note que existem instruções para arquivos Astro, arquivos Svelte, os vários testes, e outros.
5. Abra **.github/instructions/python-tests.instructions.md**. Observe a seção `applyTo`. Isso define o caminho, relativo à raiz do projeto, que determina a quais arquivos as instruções se aplicam. Neste caso, qualquer arquivo Python na pasta **server/tests** com nome começando com **test_** corresponderá ao padrão.
6. Observe as instruções específicas para criar testes Python neste projeto.
7. Por fim, abra **.github/instructions/flask-endpoint.instructions.md**, e role até o final do arquivo. Note os links para outros instruction files e arquivos existentes no projeto. Isso permite tanto decompor conjuntos maiores de instruções em arquivos menores e reutilizáveis, quanto apontar para exemplos que o Copilot deve considerar ao gerar código. Note que esses caminhos são relativos ao arquivo de instruções em vez da raiz do projeto.

## Examine o impacto dos custom instructions

Para ver o impacto dos custom instructions, você começará enviando um prompt com a versão atual dos arquivos e verá como o Copilot incorpora esses arquivos no contexto. Em seguida, você fará algumas atualizações, enviará o mesmo prompt novamente e notará a diferença.

> [!NOTE]
> Vamos começar utilizando o chat no VS Code ou no seu codespace para agilizar o processo de ver o impacto das atualizações nos instruction files no código gerado. Como o Copilot CLI utiliza o mesmo paradigma de instruções, o mesmo comportamento será experimentado lá.

1. Retorne ao seu codespace.
2. Feche quaisquer arquivos abertos no codespace.
3. Abra `server/routes/publishers.py`, um arquivo vazio.
4. Se o **Copilot chat** não estiver aberto, abra-o selecionando o ícone do Copilot na parte superior do seu codespace.

   ![Chat icon in VS Code](./images/1-chat-icon.png)

5. Crie uma nova sessão de chat digitando `/clear` na janela de chat e selecionando <kbd>Enter</kbd> (ou <kbd>return</kbd> em um Mac).
6. Selecione **Ask** no menu suspenso de modos.

   ![Chat mode selection dialog with Ask mode highlighted][img-select-chat-mode]

7. Defina o modelo para **Claude Sonnet 4.5**.

    ![Example of selecting the Claude Sonnet 4.5 model][img-select-model]

> [!NOTE]
> O workshop está configurado para usar Claude Sonnet 4.5, pois é o modelo testado ao criar o workshop. Isso não indica preferência de um modelo sobre outro.

8. Envie o seguinte prompt para criar um novo endpoint que retorna todos os publishers:

   ```plaintext
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers.
   ```

9.  O Copilot explora o projeto para aprender a melhor forma de implementar o código, e gera uma lista de sugestões, que pode incluir código para `publishers.py`, `app.py`, e testes para garantir que o novo código funcione corretamente.
10. Note a seção de referências na janela de chat. Expanda a lista e observe os arquivos usados para contexto. Eles devem incluir **copilot-instructions.md**, assim como arquivos **.instructions** para criar endpoints Flask e testes Python. O primeiro é porque **copilot-instructions.md** é incluído em toda requisição, enquanto o último é carregado sempre que um arquivo corresponde ao padrão no cabeçalho `applyTo` dos arquivos **.instructions**.

   ![Screenshot of the references section in Copilot Chat in VS Code][img-references]

11. Explore o código, notando que o código gerado inclui [type hints][python-type-hints] porque, como você verá, os custom instructions incluem a diretiva para incluí-los.
12. Observe que o código gerado **não possui** docstring ou um cabeçalho de comentário - ou ambos!

> [!IMPORTANT]
> Como destacado anteriormente, o GitHub Copilot e ferramentas LLM são probabilísticos, não determinísticos. Como resultado, o código exato gerado pode variar, e há até a chance de que ele siga suas regras sem que você precise explicitar! Mas para ajudar na consistência do código, você deve sempre documentar tudo o que quer garantir que o Copilot entenda sobre como você quer que seu código seja gerado.

## Adicione novos padrões do repositório ao copilot-instructions.md

Como destacado anteriormente, `copilot-instructions.md` é projetado para fornecer informações em nível de projeto ao Copilot. Vamos garantir que os padrões de codificação do repositório estejam documentados para melhorar as sugestões de código do Copilot chat.

1. Retorne ao seu codespace.
2. Abra `.github/copilot-instructions.md`.
3. Localize a seção **Code formatting requirements**, que deve estar próxima da linha 35. Observe como ela contém uma nota para usar type hints. É por isso que você viu aqueles no código gerado anteriormente.
4. Adicione as seguintes linhas de markdown logo abaixo da nota sobre type hints para instruir o Copilot a adicionar cabeçalhos de comentário aos arquivos e docstrings (que devem estar próximas da linha 35):

   ```markdown
   - Every function should have docstrings or the language equivalent.
   - Before imports or any code, add a comment block to the file that explains its purpose.
   ```

5. Feche o **copilot-instructions.md**.
6. Selecione **New Chat** no Copilot chat para limpar o buffer e iniciar uma nova conversa.
7. Retorne ao **server/routes/publishers.py** para garantir que o foco esteja definido corretamente.
8. Envie o mesmo prompt de antes para criar o endpoint.

   ```plaintext
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers.
   ```

9.  Observe como o código recém-gerado inclui um cabeçalho de comentário no topo do arquivo que se assemelha ao seguinte:

   ```python
   """
   Publisher API routes for the Tailspin Toys Crowd Funding platform.
   This module provides endpoints to retrieve publisher information.
   """
   ```

10. Observe como o código recém-gerado inclui uma docstring dentro da função que se assemelha ao seguinte:

   ```python
   """
   Returns a list of all publishers with their id and name.
    
   Returns:
      Response: JSON response containing an array of publisher objects
   """
   ```

11. Note que o código gerado agora inclui uma docstring assim como um bloco de comentário no topo!
12. Note também como o código existente não é atualizado, mas é claro que você poderia pedir ao Copilot para realizar essa operação se desejasse!
13. **Não implemente as alterações sugeridas**, pois você fará isso em um exercício posterior.

> [!NOTE]
> Se você aceitou as alterações, sempre pode selecionar o botão **Undo** no canto superior direito da janela do Copilot chat.

A partir desta seção, você explorou como o arquivo de custom instructions forneceu ao Copilot o contexto necessário para gerar código que segue as diretrizes estabelecidas.

## Explore o impacto de um arquivo .instructions

Nosso foco nos últimos dois conjuntos de passos foi no **copilot-instructions.md**, o arquivo global de instruções usado para todas as requisições de chat para Copilot Chat, Copilot Coding Agent (CCA), e Copilot CLI. Agora vamos explorar o impacto de um arquivo **.instructions**.

Arquivos **.instructions** podem conter uma configuração `applyTo` em seu frontmatter, que permite especificar um padrão ou caminho. O Copilot utilizará essas instruções sempre que trabalhar em um arquivo que corresponda ao padrão. No nosso caso, temos um arquivo de instruções para testes Python definido em **.github/instructions/python-tests.instructions.md**, que será usado pelo Copilot para quaisquer arquivos que correspondam ao padrão **server/tests/test\_*.py**.

> [!NOTE]
> Há uma chance de que o Copilot já tenha gerado código de teste no exercício anterior, então você pode estar olhando para o mesmo código novamente. Para garantir que possamos ver o comportamento, vamos tirar um momento, ser um pouco mais específicos com o prompt, e ver os testes que o Copilot gera com base nas instruções.

1. Retorne ao seu codespace.
2. Abra o Copilot Chat se ainda não estiver aberto.
3. Selecione **New Chat** no Copilot Chat para limpar o buffer e iniciar uma nova conversa.
4. Envie o seguinte prompt ao Copilot Chat para garantir que testes sejam gerados.

   ```
   Create a new endpoint to return a list of all publishers. It should return the name and id for all publishers. Also generate the tests for the newly generated endpoint.
   ```

5. Note novamente a seção de referências, e como o Copilot inclui o arquivo **python-tests.instructions.md** para orientação específica para este tipo de arquivo.
6. Explore o código gerado para o teste. Com base nas instruções, ele deve:
    - conter variável `TEST_DATA` em nível de classe com dados de teste.
    - utilizar SQLite em memória para seu banco de dados.
    - conter funções de setup e teardown.

## Resumo e próximos passos

Parabéns! Você explorou como garantir que o Copilot tenha o contexto correto para gerar código seguindo as práticas que sua organização estabeleceu. Isso pode ser feito em nível de repositório com o arquivo **.github/copilot-instructions.md**, ou em base de tarefa com instruction files. Você explorou como:

- fornecer ao Copilot contexto específico do projeto, diretrizes de codificação e padrões de documentação usando custom instructions (.github/copilot-instructions.md).
- usar instruction files para orientar o Copilot em tarefas repetitivas ou baseadas em templates.
- implementar tanto instruções em nível de repositório quanto instruções específicas por tarefa.

## Recursos

- [Instruction files para personalização do GitHub Copilot][instruction-files]
- [5 dicas para escrever melhores custom instructions para o Copilot][copilot-instructions-five-tips]
- [Melhores práticas para criar custom instructions][instructions-best-practices]
- [Custom instructions pessoais para o GitHub Copilot][personal-instructions]
- [Awesome Copilot - uma coleção de instruction files e outros recursos][awesome-copilot]

---

[instruction-files]: https://code.visualstudio.com/docs/copilot/copilot-customization
[python-type-hints]: https://docs.python.org/3/library/typing.html
[games-endpoints]: ../server/routes/games.py
[games-tests]: ../server/tests/test_games.py
[instructions-best-practices]: https://docs.github.com/enterprise-cloud@latest/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks#adding-custom-instructions-to-your-repository
[personal-instructions]: https://docs.github.com/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot
[copilot-instructions-five-tips]: https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/
[awesome-copilot]: https://github.com/github/awesome-copilot
[ui-instructions]: ../.github/instructions/ui.instructions.md
[astro-instructions]: ../.github/instructions/astro.instructions.md
[img-generate-instructions]: ./images/1-generate-instructions.png
[img-extensions-updates]: ./images/1-extensions-updates.png
[img-select-chat-mode]: ./images/1-select-chat-mode.png
[img-select-model]: ./images/1-select-model.png
[img-references]: ./images/1-custom-instructions-references.png
