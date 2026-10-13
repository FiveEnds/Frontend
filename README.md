# Frontend

Frontend part of the app, built with **React**, **TypeScript** and **Vite**.

> ⚠️ **Please read this guide before you start working with the project.**

---

## Table of Contents

- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Branching Strategy](#branching-strategy)
- [Submitting Your Work](#submitting-your-work)
- [Branch Naming Convention](#branch-naming-convention)

---

## Getting Started

After cloning the repository for the first time, install the dependencies:

```bash
npm i
```

If you see a list of errors, use the following command:

```bash
npm i --legacy-peer-deps
```

---

## Running the App

Once the dependencies are installed, start the development server:

```bash
npm run dev
```

Vite will start the server and print a local address in the terminal (by default `http://localhost:5173`). Open it in your browser. The page reloads automatically whenever you save a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## Branching Strategy

We work **only** with the `develop` branch. Never commit directly to it: always create a feature branch.

```bash
# 1. Switch to the develop branch
git checkout develop

# 2. Pull the latest updates from the server to stay up to date
git pull origin -u develop

# 3. Create and switch to a new feature branch
git checkout -b feature/my-new-task
```

---

## Submitting Your Work

After completing your task:

```bash
git add .
git commit -m "Describe your changes"
git push origin feature/my-new-task
```

> ❗ **Always push to the branch you are working on.**
> For example, if your branch is named `feature/TTP-4329`, run:
>
> ```bash
> git push origin feature/TTP-4329
> ```

---

## Branch Naming Convention

**Rule:** create a separate branch for every separate task. This keeps changes isolated and makes it easier to find and fix a bug if one appears.

### Format

```
<type>/<TICKET-ID>__<short-description-in-kebab-case>
```

Use a double underscore (`__`) between the ticket ID and the description, and hyphens inside the description.

### Branch types

| Branch               | Purpose                                         | Example                               |
| -------------------- | ----------------------------------------------- | ------------------------------------- |
| `main` / `master`    | Production-ready code                           | `main`                                |
| `release-YYYY-MM-DD` | Testing before a release                        | `release-2024-02-13`                  |
| `develop`            | Integration branch: new features are added here | `develop`                             |
| `feature/`           | New functionality                               | `feature/RQ-1234__shopping-cart-page` |
| `bugfix/`            | Fixing a bug found during development           | `bugfix/BF-3421__fix-sticky-header`   |
| `hotfix/`            | Urgent fix for a problem in production          | `hotfix/HF__something-went-wrong`     |
| `chore/`             | Non-functional changes (docs, configs, tooling) | `chore/changes_in_claude_md`          |

### Tips

- Always include the ticket ID from your task tracker (for example `TTP-4329`) so the branch can be traced back to its task.
- Keep the description short and meaningful: it should tell what the branch is for at a glance.
- Branch from `develop` for `feature/`, `bugfix/` and `chore/` branches.

---

## Quick Reference

| Step                 | Command                                           |
| -------------------- | ------------------------------------------------- |
| Install dependencies | `npm i --legacy-peer-deps`                        |
| Run the app locally  | `npm run dev`                                     |
| Update `develop`     | `git checkout develop && git pull origin develop` |
| Stage and commit     | `git add . && git commit -m "message"`            |
| Push your work       | `git push origin feature/<task-name>`             |
