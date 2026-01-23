# Exercise 2 - Installing GitHub Copilot CLI

| [← Previous lesson: Custom Instructions][previous-lesson] | [Next lesson: MCP Servers →][next-lesson] |
|:--|--:|

In this exercise, you'll install GitHub Copilot CLI directly in your codespace. Copilot CLI is a powerful agentic coding assistant that runs in your terminal, enabling you to explore codebases, generate code, run commands, and interact with external tools - all from the command line.

In this exercise, you will learn how to:

- Open a terminal in VS Code / GitHub Codespaces
- Install GitHub Copilot CLI using npm
- Authenticate with your GitHub account
- Verify the installation

## Prerequisites

Before proceeding, ensure you have:

- A GitHub account with an active **Copilot Pro, Pro+, Business, or Enterprise** subscription
- Your codespace from Exercise 0 running
- Node.js 22 or later (pre-installed in your codespace)

> [!NOTE]
> If you have access to GitHub Copilot via your organization or enterprise, you cannot use Copilot CLI if your organization owner or enterprise administrator has disabled it in the organization or enterprise settings.

## Open a terminal in your codespace

Before installing Copilot CLI, you need to open a terminal window in VS Code.

1. Return to your codespace if you're not already there.
2. Open a terminal window by pressing <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. You should see a terminal panel appear at the bottom of your VS Code window.

## Install Copilot CLI

GitHub Codespaces come with Node.js pre-installed, so you can use npm to install Copilot CLI globally.

1. In the terminal, verify Node.js is installed and meets the version requirement:

   ```bash
   node --version
   ```

   You should see version 22 or higher (e.g., `v22.x.x`).

2. Install Copilot CLI globally using npm:

   ```bash
   npm install -g @github/copilot
   ```

3. Verify the installation by checking the version:

   ```bash
   copilot --version
   ```

   You should see the version number displayed (e.g., `v0.0.390`).

> [!TIP]
> If you encounter permission errors, you may need to use `sudo npm install -g @github/copilot` on some systems. However, this shouldn't be necessary in GitHub Codespaces.

## Authenticate with GitHub

On first launch, Copilot CLI will prompt you to authenticate with your GitHub account.

1. Start Copilot CLI:

   ```bash
   copilot
   ```

2. If you're not currently logged in, you'll see a prompt to authenticate. Copilot CLI will display a device code and ask you to visit a URL.

3. Follow the on-screen instructions:
   - Open the provided URL in your browser
   - Enter the device code when prompted
   - Authorize Copilot CLI to access your GitHub account

4. Once authenticated, you'll see the Copilot CLI prompt, ready to accept your questions and commands.

> [!NOTE]
> In a codespace, you may already be authenticated through your GitHub session. If Copilot CLI starts without prompting for authentication, you're good to go!

## Trust the directory

When you first use Copilot CLI in a directory, it will ask you to confirm that you trust the files in that folder. This is a security feature to prevent Copilot from accidentally working with untrusted code.

1. When prompted, you'll see three options:
   - **Yes, proceed**: Trust for this session only
   - **Yes, and remember this folder for future sessions**: Trust permanently
   - **No, exit (Esc)**: Don't allow file access

2. For this workshop, select **Yes, and remember this folder for future sessions** since you'll be working in this repository throughout.

## Verify everything is working

Let's make sure Copilot CLI is properly installed and connected.

1. If you exited Copilot CLI, start it again:

   ```bash
   copilot
   ```

2. Ask Copilot a simple question to verify it's working:

   ```
   What files are in this project?
   ```

3. Copilot should explore the repository and provide a summary of the project structure.

4. Try the `/help` command to see available slash commands:

   ```
   /help
   ```

## Alternative installation methods

While npm is the recommended method for codespaces, Copilot CLI can also be installed via other methods on your local machine:

| Method | Command | Platform |
|--------|---------|----------|
| **Homebrew** | `brew install copilot-cli` | macOS, Linux |
| **WinGet** | `winget install GitHub.Copilot` | Windows |
| **Install script** | `curl -fsSL https://gh.io/copilot-install \| bash` | macOS, Linux |

## Summary and next steps

Congratulations! You've successfully installed and authenticated GitHub Copilot CLI. You learned how to:

- Open a terminal window in VS Code
- Install Copilot CLI using npm
- Authenticate with your GitHub account
- Trust a directory for Copilot CLI to work with
- Verify the installation is working correctly

Now that Copilot CLI is installed, let's start using it to explore and modify code! Continue to [Exercise 3 - Using Copilot CLI][next-lesson].

## Resources

- [Installing GitHub Copilot CLI][install-copilot-cli]
- [About Copilot CLI][about-copilot-cli]
- [Using Copilot CLI][using-copilot-cli]

---

| [← Previous lesson: Custom Instructions][previous-lesson] | [Next lesson: MCP Servers →][next-lesson] |
|:--|--:|

[previous-lesson]: ./1-custom-instructions.md
[next-lesson]: ./3-mcp.md
[install-copilot-cli]: https://docs.github.com/copilot/how-tos/set-up/install-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
