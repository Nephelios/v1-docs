# 📘 Nephelios Documentation Website

This project is the official documentation website for **Nephelios**, a lightweight and extensible PaaS built in Rust. The site is powered by [Docusaurus 2](https://docusaurus.io/), a modern static site generator optimized for technical documentation.

---

## 🚀 Getting Started

### 📦 Installation

To install project dependencies using `npm`:

```bash
npm install
```

---

### 💻 Local Development

To start a local development server:

```bash
npm run start
```

This will launch the documentation at [http://localhost:3000](http://localhost:3000). The site supports hot reloading, so changes to the content or config are automatically reflected in the browser.

---

### 🏗️ Build

To generate a production-ready static version of the site:

```bash
npm run build
```

The static content will be output to the `build/` directory. You can then deploy it with any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

---

### 🚢 Deployment

#### With SSH

If your GitHub account is configured with SSH:

```bash
USE_SSH=true npm run deploy
```

#### Without SSH

Using HTTPS authentication instead:

```bash
GIT_USER=<YourGitHubUsername> npm run deploy
```

This will build the static site and push it to the `gh-pages` branch of your repository, making it available via GitHub Pages.

---

## 📄 Additional Notes

- The project supports full **Markdown-based content editing**.
- You can extend the site with **custom React components**, plugins, and themes.
- Search, versioning, and multi-language support can easily be enabled.

---

## 💡 Useful Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run start`   | Start dev server with hot reload  |
| `npm run build`   | Build static files for production |
| `npm run deploy`  | Build and deploy to GitHub Pages  |
| `npm run swizzle` | Customize theme components        |
