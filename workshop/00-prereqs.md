# Exercise 0: Prerequisites

Before you get started on the lab, there's a few tasks you need to complete to get everything ready. You should first create your own copy of the repository, then choose whether to work in a [codespace][codespaces] or by cloning your own repository locally.

## Setting up the lab repository

To create a copy of the repository for the code you'll create an instance from the [template][template-repository]. The new instance will contain all of the necessary files for the lab, and you'll use it as you work through the exercises. 

1. In a new browser window, navigate to the GitHub repository for this lab: `https://github.com/copilot-dev-days/tailspin-toys-workshop`.
2. Create your own copy of the repository by selecting the **Use this template** button on the lab repository page. Then select **Create a new repository**.

    ![Use this template button](./images/0-use-template.png)

3. If you are completing the workshop as part of an event being led by GitHub or Microsoft, follow the instructions provided by the mentors. Otherwise, you can create the new repository in an organization where you have access to Copilot.

    ![Input the repository template settings](./images/0-repository-settings.png)

4. Make a note of the repository path you created (**organization-or-user-name/repository-name**), as you will be referring to this later in the lab.

## Choose your development environment

Now that you've created your own repository, choose one of the following options:

### Option A: Create a codespace for your repository (recommended)

[GitHub Codespaces][codespaces] are a cloud-based development environment that allows you to write, run, and debug code directly in your browser. It provides a fully-featured IDE with support for multiple programming languages, extensions, and tools.

1. Navigate to your newly created repository.
2. Select the green **Code** button.

    ![Select the Code button](./images/0-code-button.png)

3. Select the **Codespaces** tab and select the **+** button to create a new Codespace.

    ![Create a new codespace](./images/0-create-codespace.png)

The creation of the codespace will take several minutes, although it's still far quicker than having to manually install all the services! That said, you can use this time to explore other features of GitHub Copilot, which we'll turn your attention to next!

### Option B: Clone your repository locally

If you prefer to work locally rather than in a codespace, clone your own repository and open it in VS Code:

```bash
git clone https://github.com/<organization-or-user-name>/<repository-name>.git
cd <repository-name>
code .
```

> [!IMPORTANT]
> If you chose Option A, you'll return to the codespace in a future exercise. For the time being, leave it open in a tab in your browser.

> [!NOTE]
> This workshop is built to run inside of a codespace or container. This ensures the environment you're working in has all of the necessary prerequisites installed and you'll have a smooth experience. If you wish to run the workshop locally on your system, you will need recent versions of Node.js and Python installed, as well as Visual Studio Code.

## Summary

Congratulations, you have created a copy of the lab repository and selected your development environment.

## Resources

- [GitHub Codespaces overview][codespaces]
- [Creating a repository from a template][template-repository]
- [Getting started with Codespaces][codespaces-quickstart]

---

[codespaces]: https://github.com/features/codespaces
[template-repository]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-template-repository
[codespaces-quickstart]: https://docs.github.com/codespaces/getting-started/quickstart
