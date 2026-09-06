# 🎮 FreeToGame Dashboard

A responsive, dark-mode-enabled React & TypeScript gaming dashboard built with Vite, Tailwind CSS, and DaisyUI. It allows users to discover, filter, and sort free-to-play games using the [FreeToGame API](https://www.freetogame.com/api-doc).

**Repository URL:** [https://github.com/airmjay/freetogame-dashboard](https://github.com/airmjay/freetogame-dashboard)

---

## ✨ Key Features

- **Dynamic Filtering:** Filter games by category/genre (Shooter, MOBA, Racing, Anime, etc.) and target platform (PC, Browser, or All).
- **Sorting Options:** Sort results by popularity, release date, relevance, or alphabetical order.
- **Persistent Dark Mode:** Class-based dark mode toggle synced with `localStorage` and configured via inline script to prevent Flash of Unstyled Content (FOUC) on page reload.
- **Resilient Custom API Hook (`useDatas`):**
  - Safely handles FreeToGame API response quirks (where error responses return an HTTP 200 status with an error object).
  - Validates array structures with `Array.isArray()` before calling `.slice()`.
  - Clears stale error messages and game data (`setError("")`) on every new request.
  - Utilizes Axios `AbortController` to handle request cancellation and prevent race conditions.
- **Responsive Layout:** Grid-based layout with an adaptive sidebar and navbar tailored for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend:** React 18+, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, DaisyUI
- **HTTP Client:** Axios
- **State & Hooks:** Custom Hooks (`useDatas`, `Capitalize`), React State & Effects

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/airmjay/freetogame-dashboard.git](https://github.com/airmjay/freetogame-dashboard.git)
   cd freetogame-dashboard
   ```
