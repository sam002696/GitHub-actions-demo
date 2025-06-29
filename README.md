# Project Title

## 🚀 Overview

Brief description about the project...

## 🔧 Tech Stack

- React
- Vite
- GitHub Actions
- Netlify

## 📦 CI/CD

This project uses GitHub Actions for a complete CI/CD pipeline that automates:

### 🔨 1. Build

- Runs automatically on every push to the `main` branch.
- Installs dependencies and builds the React + Vite app.
- Artifacts are generated and stored for later steps.

### ✅ 2. Test

- Executes unit/integration tests right after the build.
- Ensures no broken code gets deployed to production.

### 🚀 3. Deploy (Preview)

- On every pull request, a preview deploy is created on **Netlify**.
- A unique preview URL is generated and commented on the PR.
- This allows reviewers to test the app live before merging.

### 🌐 4. Deploy (Production)

- After merging to `main`, production deploy happens automatically to Netlify.
- The deployed site URL is: [Production Site](https://your-netlify-url.netlify.app)

### 🏷️ 5. Release

- Once production deployment is complete, a new **GitHub Release** is created.
- The release is tagged with a timestamp (`vYYYY.MM.DD-HHMMSS`) for traceability.
- This makes it easy to rollback or track features by release.

> All steps are fully automated via GitHub Actions and follow a `build → test → preview deploy → production deploy → release` flow.

## 📡 Live URL

[Production Site](https://your-netlify-url.netlify.app)

## 📜 License

[MIT](LICENSE)
