# Exercise 0: Prerequisites

Before you get started on the lab, there's a few tasks you need to complete to get everything ready. You can either create your own copy of the repository (recommended when you want to push code and create PRs), or launch a [codespace][codespaces] directly from this repository to get started quickly.

## Setting up the Lab Repository (recommended)

To create a copy of the repository for the code you'll create an instance from the [template][template-repository]. The new instance will contain all of the necessary files for the lab, and you'll use it as you work through the exercises. 

1. In a new browser window, navigate to the GitHub repository for this lab: `https://github.com/copilot-dev-days/tailspin-toys-workshop`.
2. Create your own copy of the repository by selecting the **Use this template** button on the lab repository page. Then select **Create a new repository**.

    ![Use this template button](./images/0-use-template.png)

3. If you are completing the workshop as part of an event being led by GitHub or Microsoft, follow the instructions provided by the mentors. Otherwise, you can create the new repository in an organization where you have access to Copilot.

    ![Input the repository template settings](./images/0-repository-settings.png)

4. Make a note of the repository path you created (**organization-or-user-name/repository-name**), as you will be referring to this later in the lab.

## Creating a codespace

Next up, you'll be using a codespace to complete the lab exercises. [GitHub Codespaces][codespaces] are a cloud-based development environment that allows you to write, run, and debug code directly in your browser. It provides a fully-featured IDE with support for multiple programming languages, extensions, and tools.

1. Choose one of the following options:
   - **Option A (recommended):** Navigate to your newly created repository.
   - **Option B (no repository copy):** Open this repository directly in Codespaces by visiting [codespaces.new/copilot-dev-days/tailspin-toys-workshop][direct-codespace].
2. Select the green **Code** button.

    ![Select the Code button](./images/0-code-button.png)

3. Select the **Codespaces** tab and select the **+** button to create a new Codespace.

    ![Create a new codespace](./images/0-create-codespace.png)

The creation of the codespace will take several minutes, although it's still far quicker than having to manually install all the services! That said, you can use this time to explore other features of GitHub Copilot, which we'll turn your attention to next!

> [!TIP]
> If you choose the direct Codespaces option (Option B), you may not have permissions to push branches or create pull requests to this repository. If you plan to complete the PR-focused exercises, use your own repository copy (Option A).

> [!IMPORTANT]
> You'll return to the codespace in a future exercise. For the time being, leave it open in a tab in your browser.

> [!NOTE]
> This workshop is built to run inside of a codespace or container. This ensures the environment you're working in has all of the necessary prerequisites installed and you'll have a smooth experience. If you wish to run the workshop locally on your system, you will need recent versions of Node.js and Python installed, as well as Visual Studio Code.
>
> If you are running the workshop locally, rather than creating a codespace, clone the repository and open it in VS Code:
>
> ```bash
> git clone https://github.com/copilot-dev-days/tailspin-toys-workshop.git
> cd tailspin-toys-workshop
> code .
> ```

## Summary

Congratulations, you have created a copy of the lab repository! You also began the creation process of your codespace, which you'll use when you begin writing code.

## Resources

- [GitHub Codespaces overview][codespaces]
- [Creating a repository from a template][template-repository]
- [Getting started with Codespaces][codespaces-quickstart]
- [Open this repository in Codespaces][direct-codespace]

---

[codespaces]: https://github.com/features/codespaces
[template-repository]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-template-repository
[codespaces-quickstart]: https://docs.github.com/codespaces/getting-started/quickstart
[direct-codespace]: https://codespaces.new/copilot-dev-days/tailspin-toys-workshop
