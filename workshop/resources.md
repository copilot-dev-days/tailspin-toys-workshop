# GitHub Copilot CLI Workshop Resources

This document contains curated resources for getting the most out of GitHub Copilot CLI. These are the essential references - the ones that will make the biggest impact for someone getting started.

---

## Official GitHub Documentation

### Core Copilot CLI Documentation

| Resource | Description |
|----------|-------------|
| [About Copilot CLI][about-copilot-cli] | Overview of Copilot CLI capabilities and use cases |
| [Install Copilot CLI][install-copilot-cli] | Step-by-step installation guide |
| [Using Copilot CLI][using-copilot-cli] | Comprehensive guide to using Copilot CLI features |

### Custom Instructions & Context

| Resource | Description |
|----------|-------------|
| [Repository Custom Instructions][repo-instructions] | How to add custom instructions to your repository |
| [5 Tips for Writing Better Custom Instructions][five-tips] | Best practices from the GitHub blog |
| [Personal Custom Instructions][personal-instructions] | Set up user-level instructions across all projects |
| [Using Custom Instructions in Copilot CLI][cli-custom-instructions] | How Copilot CLI uses custom instructions |

### MCP (Model Context Protocol)

| Resource | Description |
|----------|-------------|
| [MCP Specification][mcp-spec] | The official MCP specification |
| [Add an MCP Server][add-mcp-server] | How to configure MCP servers in Copilot CLI |

---

## Microsoft Learn Resources

### Training Modules

| Module | Duration | Description |
|--------|----------|-------------|
| [GitHub Copilot Across Environments: IDE, Chat, and Command Line Techniques][ms-learn-environments] | ~45 min | Comprehensive module covering Copilot in IDE, Chat, and CLI |
| [Introduction to GitHub Copilot][ms-learn-intro] | ~30 min | Foundational understanding of Copilot |
| [Introduction to Prompt Engineering with GitHub Copilot][ms-learn-prompts] | ~30 min | Learn to craft effective prompts |

### Learning Paths

| Learning Path | Description |
|---------------|-------------|
| [GitHub Copilot Fundamentals Part 1][ms-learn-fundamentals] | 6-module path covering Copilot basics |

### Specialized Guides

| Resource | Description |
|----------|-------------|
| [Copilot CLI for Java App Modernization][ms-learn-java] | Using Copilot CLI for Java migrations |
| [Copilot CLI for .NET App Migration][ms-learn-dotnet] | Using Copilot CLI for .NET migrations |

---

## Copilot CLI Advanced Features

### Custom Agents & Skills

| Resource | Description |
|----------|-------------|
| [Custom Agents in Copilot CLI][cli-custom-agents] | Creating and using custom agents |
| [About Agent Skills][agent-skills] | Understanding and creating agent skills |

### Copilot Plans

| Resource | Description |
|----------|-------------|
| [Compare Copilot Plans][copilot-plans] | Understand which features are available in each plan |

---

## Community & Additional Resources

### GitHub Repositories

| Repository | Description |
|------------|-------------|
| [github/awesome-copilot][awesome-copilot] | Community-curated collection of instructions files, tips, and resources |
| [github-samples/agents-in-sdlc][agents-in-sdlc] | Workshop on agentic Copilot capabilities across the SDLC |

---

## Instruction Files Guide

Instruction files are a powerful way to provide context to Copilot. Here's a quick reference:

### Types of Instruction Files

1. **Repository-level instructions** (`.github/copilot-instructions.md`)
   - Applies to all Copilot interactions in the repository
   - Include project overview, tech stack, coding standards
   - Always sent with every prompt

2. **Task-specific instructions** (`*.instructions.md`)
   - Located in `.github/instructions/` directory
   - Use `applyTo:` header to auto-apply to matching files
   - Great for language-specific or task-specific guidance

### Example: Repository Instructions Structure

```markdown
# Project Name Development Guidelines

## Overview
Brief description of what the project does.

## Tech Stack
- Backend: [Framework]
- Frontend: [Framework]
- Database: [Database]

## Code Standards
- Always include type hints
- Write docstrings for all functions
- Follow [style guide]

## Project Structure
- `src/`: Source code
- `tests/`: Test files
- `docs/`: Documentation
```

### Example: Task-Specific Instructions

```markdown
---
applyTo: "**/*.test.ts"
---

# TypeScript Test Guidelines

- Use Jest for testing
- Mock external dependencies
- Follow AAA pattern (Arrange, Act, Assert)
- Include both positive and negative test cases
```

---

## Quick Reference: Copilot CLI Slash Commands

| Command | Description |
|---------|-------------|
| `/help` | Show available commands |
| `/clear` | Clear conversation history |
| `/compact` | Toggle compact output |
| `/mcp add <name>` | Add an MCP server interactively |
| `/mcp show` | Show configured MCP servers |
| `/mcp remove <name>` | Remove an MCP server |
| `/agent` | Select a custom agent |
| `/model` | Change the AI model |

---

## Trusted Directories

Copilot CLI will ask you to confirm trust when working in a directory for the first time:

- **Yes, proceed**: Trust for this session only
- **Yes, and remember**: Trust permanently
- **No, exit**: Don't allow file access

Trusted directories are stored in `~/.copilot/trusted-directories.json`.

---

## Configuration Files

| File | Location | Purpose |
|------|----------|---------|
| `mcp-config.json` | `~/.copilot/` | MCP server configurations |
| `agents/` | `~/.copilot/` | User-level custom agent definitions |
| `trusted-directories.json` | `~/.copilot/` | List of trusted directories |

---

*Last updated: January 2026*

<!-- Reference Links -->
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[install-copilot-cli]: https://docs.github.com/copilot/how-tos/set-up/install-copilot-cli
[using-copilot-cli]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli
[repo-instructions]: https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-repository-instructions
[five-tips]: https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/
[personal-instructions]: https://docs.github.com/copilot/how-tos/configure-custom-instructions/add-personal-instructions
[cli-custom-instructions]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions
[mcp-spec]: https://modelcontextprotocol.io/
[add-mcp-server]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server
[ms-learn-environments]: https://learn.microsoft.com/training/modules/github-copilot-across-environments/
[ms-learn-intro]: https://learn.microsoft.com/training/modules/introduction-to-github-copilot/
[ms-learn-prompts]: https://learn.microsoft.com/training/modules/introduction-prompt-engineering-with-github-copilot/
[ms-learn-fundamentals]: https://learn.microsoft.com/training/paths/copilot/
[ms-learn-java]: https://learn.microsoft.com/azure/developer/java/migration/github-copilot-app-modernization-for-java-copilot-cli
[ms-learn-dotnet]: https://learn.microsoft.com/dotnet/azure/migration/appmod/copilot-cli-support
[cli-custom-agents]: https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents
[agent-skills]: https://docs.github.com/copilot/concepts/agents/about-agent-skills
[awesome-copilot]: https://github.com/github/awesome-copilot
[agents-in-sdlc]: https://github.com/github-samples/agents-in-sdlc
[copilot-plans]: https://github.com/features/copilot/plans
