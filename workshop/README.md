# GitHub Copilot CLI Workshop

Welcome to this 90-minute instructor-led workshop on **GitHub Copilot CLI**! In this hands-on session, you'll learn how to leverage the power of AI-assisted development directly from your terminal.

## Workshop Overview

GitHub Copilot CLI is a powerful agentic coding assistant that runs directly in your terminal. Unlike traditional IDE-based Copilot experiences, Copilot CLI enables you to work with AI where many developers spend much of their time - the command line. It can explore codebases, make code changes, run commands, and interact with external tools through Model Context Protocol (MCP) servers.

### Learning Objectives

By the end of this workshop, you will be able to:

1. **Understand custom instructions** - Provide context and guidelines to improve code generation quality
2. **Install and configure GitHub Copilot CLI** - Set up Copilot CLI in a codespace and authenticate with GitHub
3. **Work with MCP servers** - Extend Copilot CLI's capabilities by connecting to external services
4. **Generate and modify code** - Leverage AI to create new features from the terminal
5. **Use agent skills** - Enhance Copilot's capabilities with specialized skills
6. **Create custom agents** - Build specialized agents for specific tasks

## Prerequisites

Before attending this workshop, please ensure you have:

- [ ] A GitHub account with an active **Copilot Pro, Pro+, Business, or Enterprise** subscription
- [ ] Basic familiarity with terminal/command line operations
- [ ] Git installed and configured

> [!NOTE]
> If you are using Copilot Business or Copilot Enterprise, ensure your admin has enabled Copilot CLI for use.

## The Scenario: Tailspin Toys

Throughout this workshop, you'll be working with **Tailspin Toys**, a crowdfunding platform for games with a developer theme. The application features:

- **Backend**: Flask API with SQLAlchemy ORM for database interactions
- **Frontend**: Astro/Svelte with Tailwind CSS for styling
- **Database**: SQLite for local development

This full-stack application provides an excellent playground for exploring Copilot CLI's capabilities across different file types, languages, and development tasks.

## Workshop Exercises

| Exercise | Topic | Description |
|----------|-------|-------------|
| [0. Prerequisites][ex0] | Setup | Create your repository and codespace |
| [1. Custom Instructions][ex1] | Context | Learn how instruction files guide Copilot |
| [2. Installing Copilot CLI][ex2] | Installation | Install and authenticate Copilot CLI |
| [3. MCP Servers][ex3] | External Tools | Connect to GitHub and other services via MCP |
| [4. Generating Code][ex4] | Code Generation | Use plan mode and generate features |
| [5. Agent Skills][ex5] | Skills | Enhance Copilot with specialized skills |
| [6. Custom Agents][ex6] | Agents | Create and use custom agents |
| [7. Slash Commands][ex7] | CLI Features | Explore context, models, and sharing |
| [8. Review][ex8] | Summary | Review key concepts and next steps |

## Getting Started

**[Start the workshop with Exercise 0: Prerequisites →][ex0]**

## Tips for Success

1. **Be specific** - The more context you provide, the better the results
2. **Start with exploration** - Ask Copilot to explain the codebase before making changes
3. **Iterate** - Refine your prompts based on initial results
4. **Trust but verify** - Always review generated code before committing
5. **Use instruction files** - Leverage `.github/copilot-instructions.md` for project-wide guidance

## Support

- **During the workshop**: Raise your hand or use the chat to ask questions
- **After the workshop**: Open an issue in this repository

---

*Happy coding with GitHub Copilot CLI! 🚀*

[ex0]: ./0-prereqs.md
[ex1]: ./1-custom-instructions.md
[ex2]: ./2-install-copilot-cli.md
[ex3]: ./3-mcp.md
[ex4]: ./4-generating-code.md
[ex5]: ./5-agent-skills.md
[ex6]: ./6-custom-agents.md
[ex7]: ./7-slash-commands.md
[ex8]: ./8-review.md
