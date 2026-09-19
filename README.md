# MiniGames-Story-1

# MiniGames

An adaptive, responsive gaming platform built as part of the RS School course — Story 1 delivers the Home page layout, Auth dialog, and full project tooling setup.

## 🎮 About

MiniGames is a static-layout implementation of a game discovery platform, featuring a hero section, game carousel, leaderboard, and authentication flow — built pixel-perfect from Figma design specs across three breakpoints (375px, 768px, 1920px).

> **Story 1 scope:** Project setup, tooling configuration, and adaptive layout only. Backend integration and interactive functionality (e.g. working carousel/slider) are out of scope for this stage.

## 🛠 Tech Stack

- **Language:** TypeScript
- **Styling:** Sass (SCSS) — no CSS frameworks
- **Bundler:** Vite
- **Linting/Formatting:** ESLint, Prettier
- **Git Hooks:** Husky
- **Architecture:** SPA (vanilla, no frontend framework)

## 📁 Project Structure

src/
pages/ # Page-level views (Home, etc.)
components/ # Reusable UI blocks (header, footer, carousel, etc.)
styles/ # Sass tokens, mixins, global styles
utils/ # Helper functions
types/ # TypeScript type definitions
assets/ # Images, icons, fonts
public/ # Static public assets
mock-data/# Mock data


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/shahnoza-nosirxodjayeva/MiniGames-Story-1.git
cd MiniGames-Story-1
npm install
```

### Development

```bash
npm run dev
```

Opens the app locally with hot reload.

### Production Build

```bash
npm run build
```

Outputs the production-ready build to `dist/`.

### Linting & Formatting

```bash
npm run lint      # Run ESLint across the codebase
npm run format    # Run Prettier across the codebase
```

## 📐 Design

Figma design reference: [https://www.figma.com/design/4MnLizE59gZI2DDxaSgZqi/MiniGames?node-id=1-17&t=EcwK0DlDnZShqIUA-0]

Layout verified against breakpoints: **375px / 768px / 1920px**, checked with the PerfectPixel browser extension.

## 🌳 Branching Strategy

This project follows a story-based branching workflow:

main → story-1 → feature/* branches

Each task is implemented in its own feature branch, merged into the current story branch via Pull Request. See `.github/PULL_REQUEST_TEMPLATE.md` for the PR checklist.

## 🌐 Deployment

Live demo: []

## 📄 License

This project is developed for educational purposes as part of the RS School course.

