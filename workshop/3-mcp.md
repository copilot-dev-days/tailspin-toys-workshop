# Exercise 3 - Using MCP Servers with Copilot CLI

| [← Previous lesson: Installing Copilot CLI][previous-lesson] | [Next lesson: Generating Code →][next-lesson] |
|:--|--:|

There's more to writing code than just writing code. Issues need to be filed, external services need to be called, and information needs to be gathered. Typically this involves interacting with external tools, which can break a developer's flow. Through the power of Model Context Protocol (MCP), you can access all of this functionality right from Copilot!

## Scenario

You are a part-time developer for Tailspin Toys - a crowdfunding platform for board games with a developer theme. You've been assigned various tasks to introduce new functionality to the website. Being a good team member, you want to file issues to track your work. To help future you, you've decided to enlist the help of Copilot. You will set up your backlog of work for the rest of the lab, Copilot CLI and the GitHub Model Context Protocol (MCP) server to create the issues for you. You'll also register MCP servers for the various technologies used in the project, such as Svelte and Astro.

In this exercise, you will:

- explore Model Context Protocol (MCP), which provides access to external tools and capabilities.
- set up and utilize MCP servers in GitHub Copilot CLI.
- use GitHub Copilot CLI to create issues in your repository.

By the end of this exercise, you will have created a backlog of GitHub issues for use throughout the remainder of the lab.

## What is agent mode and Model Context Protocol (MCP)?

[Model Context Protocol (MCP)][mcp-blog-post] provides AI agents with a way to communicate with external tools and services. By using MCP, AI agents can communicate with external tools and services in real-time. This allows them to access up-to-date information (using resources) and perform actions on your behalf (using tools).

These tools and resources are accessed through an MCP server, which acts as a bridge between the AI agent and the external tools and services. The MCP server is responsible for managing the communication between the AI agent and the external tools (such as existing APIs or local tools like NPM packages). Each MCP server represents a different set of tools and resources that the AI agent can access.

![Diagram showing the inner works of agent mode and how it interacts with context, LLM and tools - including tools contributed by MCP servers and VS Code extensions][img-mcp-diagram]

A couple of popular existing MCP servers are:

- **[GitHub MCP Server][github-mcp-server]**: This server provides access to a set of APIs for managing your GitHub repositories. It allows the AI agent to perform actions such as creating new repositories, updating existing ones, and managing issues and pull requests. **The GitHub MCP server is automatically available in Copilot CLI.**
- **[Playwright MCP Server][playwright-mcp-server]**: This server provides browser automation capabilities using Playwright. It allows the AI agent to perform actions such as navigating to web pages, filling out forms, and clicking buttons.
- **[Microsoft Learn MCP Server][microsoft-learn-mcp-server]**: This server enables clients like GitHub Copilot and other AI agents to bring trusted and up-to-date information directly from Microsoft's official documentation. It allows to search through documentation, fetch a complete article, and search through code samples.

There are many other MCP servers available that provide access to different tools and resources. GitHub hosts an [MCP registry][mcp-registry] to enhance discoverability and contributions to the ecosystem. 

> [!IMPORTANT]
> With regards to security, treat MCP servers as you would any other dependency in your project. Before using an MCP server, carefully review its source code, verify the publisher, and consider the security implications. Only use MCP servers that you trust and be cautious about granting access to sensitive resources or operations.

## Allowing all tools

As an agent, Copilot CLI will often need to execute various commands, such as accessing MCP servers, performing builds, or running tests. Copilot CLI supports a "[YOLO][yolo-wikipedia] mode", or an allow all tools mode. This grants Copilot CLI the ability to automatically run any command without getting prior approval from you.

> [!IMPORTANT]
> If you use an automatic approval option such as `--allow-all-tools` or `--yolo`, Copilot has the same access as you do to files on your computer, and can run any shell commands that you can run, without getting your prior approval. See the [security considerations documentation][security-considerations] for more information.

Because we are working in a workshop environment on a codespace, we will utilize `--allow-all-tools` to streamline the workshop.

## Adding MCP servers to Copilot CLI

MCP servers are registered in **~/.copilot/mcp-config.json**. You can update the file directly, or add them through the `/mcp add` command, which is the route you'll take here. As you add each server, or when you start Copilot CLI in the future, they'll automatically be started. 

1. Return to your codespace.
2. If not already open, open a terminal window by selecting <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. If Copilot is already running, stop it by selecting <kbd>Ctrl</kbd>+<kbd>C</kbd> twice.
4. Start Copilot by issuing the following command in the terminal window:

    ```bash
    copilot --allow-all-tools
    ```

5. Inside Copilot CLI, use the following command to start the add MCP server interface:

    ```text
    /mcp add
    ```

6. Set the **Server name** to **Svelte** and select <kbd>Tab</kbd>.
7. Set the **Server type** to **\[3\] HTTP** and select <kbd>Tab</kbd>.
8. Set the **URL** to **https://mcp.svelte.dev/mcp**.
9. Select <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the server.
10. Select <kbd>A</kbd> to add another server.
11. Follow steps 5 through 9 to register Playwright, Astro and Microsoft Learn, using the following table:

    | Server Name | Server Type | Command or URL |
    | ----------- | ----------- | -------------- |
    | Playwright | \[1\] Local | `npx @playwright/mcp@latest` |
    | Astro | \[3\] HTTP | `https://mcp.docs.astro.build/mcp` |
    | Microsoft Learn | \[3\] HTTP | `https://learn.microsoft.com/api/mcp` |

12. Once complete, select <kbd>Q</kbd> to exit the interface.

## Creating a backlog of tasks

Now that you have set up the GitHub MCP server, you can use Copilot Agent mode to create a backlog of tasks for use in the rest of the lab.

1. Return to your codespace.
2. If not already open, open a terminal window by utilizing <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. If not already running, start Copilot CLI by issuing the following command in the terminal window:

    ```bash
    copilot --allow-all-tools
    ```

4. If already running, clear Copilot's context by sending the `/clear` command in the prompt.
5. Type or paste the following prompt to create the issues you'll be working on in the lab:

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
> <kbd>Enter</kbd> automatically sends the prompt to Copilot CLI. If you wish to type longer messages across multiple lines, you can use <kbd>Shift</kbd>+<kbd>Enter</kbd> to add blank lines.

6. Press <kbd>Enter</kbd> to send the prompt to Copilot.
7. GitHub Copilot will process the request and create the issues on your GitHub repository.
8. In a separate browser tab, navigate to your GitHub repository and select the issues tab.
9.  You should see a list of issues that have been created by Copilot. Each issue should include a clear title and a checkbox list of acceptance criteria.

![Example of issues created in GitHub][img-github-issues]

You should notice that the issues are fairly detailed. This is where you benefit from the power of Large Language Models (LLMs) and Model Context Protocol (MCP), as it has been able to create a clear initial issue description.

## Summary and next steps

Congratulations, you have created issues on GitHub using Copilot CLI and MCP, and registered MCP servers!

To recap, in this exercise you:

- explore Model Context Protocol (MCP), which provides access to external tools and capabilities.
- set up and utilize MCP servers in GitHub Copilot CLI.
- use GitHub Copilot CLI to create issues in your repository.

With the GitHub MCP server configured, you can now use GitHub Copilot CLI to perform additional actions on your behalf, like creating new repositories, managing pull requests, and searching for information across your repositories.

You can now continue to the next exercise, where you will learn how to [provide Copilot guidance with custom instructions][next-lesson] to ensure code is generated following your organization's defined patterns and practices.

## Resources

- [What the heck is MCP and why is everyone talking about it?][mcp-blog-post]
- [GitHub MCP Server][github-mcp-server]
- [Microsoft Playwright MCP Server][playwright-mcp-server]
- [GitHub MCP Registry][mcp-registry]
- [VS Code Extensions][vscode-extensions]

---

| [← Previous lesson: Installing Copilot CLI][previous-lesson] | [Next lesson: Generating Code →][next-lesson] |
|:--|--:|

[previous-lesson]: ./2-install-copilot-cli.md
[next-lesson]: ./4-generating-code.md
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
