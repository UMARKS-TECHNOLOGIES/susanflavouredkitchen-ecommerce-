# 🛒 SusanKitchenEats --- Fullstack E-commerce Application

## Overview

KitchenEats is a fullstack e-commerce platform with product browsing,
cart management, checkout, authentication, and admin tools.\
This README provides a standard workflow, folder structure, and
contribution guidelines for all developers.

## Project Roles

  Role              Responsibility
  ----------------- -------------------------------------------
  Backend Team      API, database, logic, endpoints
  Frontend Team     UI, components, styling, integration
  Lead Developers   Code review, PR approval, repo management

## Tech Stack

**Frontend:** React, TailwindCSS, React Router\
**Backend:** Node.js, Express.js\
**Database:** MongoDB\
**Version Control:** Git + GitHub\
**Environment:** Node 18+

# Getting Started

## 1. Clone the Repository

    git clone <repo-url>
    cd kitchen-eats

# Project Structure

```
src/
├── components/
│   ├── common/
│   ├── ui/
│   └── features/
├── pages/
├── hooks/
├── context/
├── services/
├── utils/
├── assets/
├── App.jsx
└── main.jsx
```
# Environment Variables

## Frontend (.env)

REACT_APP_API_BASE_URL=<http://localhost:5000>

```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

fetch(`${API_BASE_URL}/api/some-endpoint`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## Backend (.env)

    PORT=5000
    MONGO_URI=
    JWT_SECRET=

# Development Commands

## Frontend

    cd client
    npm install
    npm run dev

# Branching Strategy

## Main Branches

  Branch   Purpose
  -------- ----------------------------------
  main     Production-ready code only
  dev      Collaborative development branch

## Naming Convention

    feature/<description>     
    fix/<description>         
    refactor/<description>    
    chore/<description>       
    docs/<description>        

Examples:

    feature/cart-page
    fix/login-validation
    refactor/product-service
    docs/update-readme

# Workflow (IMPORTANT)

## 1. Always pull latest dev

    git checkout dev
    git pull origin dev

## 2. Create new branch

    git checkout -b feature/cart-page

## 3. Make changes & commit

    git add .
    git commit -m "feat: created cart UI"

## 4. Push branch

    git push origin feature/cart-page

## 5. Open Pull Request (PR)

- Base branch: dev\
- Add a meaningful title\
- Add description of what changed\
- Assign reviewers

## 6. Lead developers will review

Fix review comments before merge.

## 7. Do NOT

❌ Push directly to main\
❌ Merge your own PR\
❌ Work on dev or main directly\
❌ Commit without branch naming

# Code Quality Rules

## Frontend

- Use functional components
- Use proper folder structure
- Follow reusable component patterns
- Use Tailwind properly (no inline CSS unless necessary)
- Keep components small and readable

## Backend

- Use controllers/services structure
- Validate all inputs
- Do not write logic directly inside routes
- Use async/await
- Return proper JSON responses

# Pull Request Checklist

Before submitting a PR:

- [ ] Branch created from dev
- [ ] No direct commits to main
- [ ] Code runs without breaking
- [ ] Linting passes
- [ ] Descriptive commit message
- [ ] PR title is meaningful
- [ ] Screenshots included (if UI)
- [ ] Ready for review

# Troubleshooting

  Issue                Solution
  -------------------- -----------------------------------
  npm install fails    Delete node_modules and reinstall
  API not connecting   Check VITE_API_BASE_URL
  Merge conflicts      Ask lead before resolving

# Contribution

All contributors must follow the Git workflow and naming rules.\
PRs without proper structure or documentation will be rejected.

# Contact

Lead Developers:\

- Fibonacci\
- Victor
