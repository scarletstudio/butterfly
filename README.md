# Butterfly

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod-redirect.herokuapp.com/)

## Links

- [Product and Engineering Design Doc](https://docs.google.com/document/d/1X_RHbXHpLTzLspmzhQ2klwR37ELQBq5CaEYkF4KTLdQ/edit)
- [Codebase Map on CodeSee](https://app.codesee.io/maps/public/d4c38260-d070-11ec-bfe6-f55abd149412)

## Product

An app to meet new people in your community.

<img width="650" alt="Screen Shot 2022-06-05 at 12 03 06 PM" src="https://user-images.githubusercontent.com/11896652/174471547-3528edc8-6be2-44c3-8e32-cb1d74b87e4b.png">

## Commands

### Common App Commands

The UI and API automatically update when you make changes to source files.

| Command    | Description                |
| ---------- | -------------------------- |
| `run ui`   | Open frontend UI in a tab. |
| `run api`  | Open backend API in a tab. |
| `run book` | Open Storybook in a tab.   |

### Common Pipeline Commands

The pipeline version in Prefect dashboard automatically updates when you save `.py` files.

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `run pytest`        | Run all pytest tests.            |
| `run flow matching` | Run the matching flow locally.   |
| `run dash`          | Open Prefect dashboard in a tab. |

### Command Development Commands

| Command                       | Description                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| `git checkout -b branch_name` | Create a new branch.                                                                             |
| `git checkout branch_name`    | Switch to an existing branch.                                                                    |
| `git status`                  | Display current branch and list files that have been changed or staged for commit.               |
| `git branch`                  | Display current branch and list local branches.                                                  |
| `git add .`                   | Stage changed files in the current directory for commit.                                         |
| `pre-commit run`              | Run pre-commit checks. Remember to stage your changes beforehand! (`run pre-commit` also works)  |
| `git commit -m "message"`     | Commit changes with a message.                                                                   |
| `git fetch`                   | Fetch information about the latest branches from origin repository.                              |
| `git pull`                    | Pulls latest commits for current branch from origin repository.                                  |
| `git push`                    | Push latest commits for current branch to origin repository.                                     |
| `git log`                     | View list of commits on current branch.                                                          |
| `git merge branch_name`       | Merge changes from another branch into the current branch.                                       |
| `git rebase -i branch_name`   | Interactively rebase the current branch so its commits come after the commits on another branch. |

## Tools Used

- Frontend App
  - JavaScript
  - React
  - Vite
  - React Router
  - Storybook
  - GitHub Pages
  - Firebase
  - Font Awesome Icons
- Backend API
  - Python
  - Dataclasses
  - Django
  - SQLite (Coming soon...)
  - Firebase
  - Pytest
- Offline Pipeline
  - Python
  - Prefect
  - Dataclasses
  - SQLite (Coming soon...)
  - Firebase
  - Pytest
- Developer Tools
  - GitPod
  - GitHub Actions
  - Watchdog
  - Black, mypy, pycln, isort, Bandit (default Black style guide)
  - ESLint, Prettier (Airbnb style guide)

## Advanced

### Automatic GitPod Commands

These commands run automatically when starting a new GitPod workspace.

| Command                     | Description                       |
| --------------------------- | --------------------------------- |
| `source .venv/bin/activate` | Start Python virtual environment. |
| `run install-frontend`      | Install JavaScript dependencies.  |
| `run install-backend`       | Install Python dependencies.      |
| `run frontend`              | Start frontend UI.                |
| `run storybook`             | Start Storybook.                  |
| `run backend`               | Start backend API.                |
| `run prefect`               | Start Prefect dashboard.          |

### All Other Commands

| Command                   | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `run frontend-static`     | Build and serve static frontend UI, similar to production.             |
| `run backend-server`      | Server backend API with Gunicorn, similar to production.               |
| `run install-frontend-ci` | Install locked frontend dependencies, for continuous integration only. |
| `run install-eslint`      | Install ESLint dependencies, for continuous integration only.          |
| `run lint-frontend`       | Runs linter on frontend code, prefer `pre-commit run`.                 |
| `run formatter-frontend`  | Runs formatter on frontend code, prefer `pre-commit run`.              |
| `run prefect-register`    | Update pipeline version in Prefect.                                    |
| `run prefect-listen`      | Listens for changes to pipeline code to update version in Prefect.     |
| `run manage ...`          | Run a Django management command.                                       |
| `run shell`               | Start a Django shell.                                                  |

### Connect to Localhost with GitPod

We use mock logins when running the Butterfly app on GitPod because Firebase login is not authorized on GitPod. If you need to login with a real account, you can run [GitPod Local Companion](https://www.gitpod.io/blog/local-app), which will let you connect to the app being served on GitPod from your own localhost. Your Firebase login should work on localhost.
