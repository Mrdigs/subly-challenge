# Subly Front-End Challenge

This repository contains the implementation of the Subly front-end challenge, which involves building reusable components in a React and TypeScript environment. The project is deployed on Vercel, and you can view the live demo here: [Subly Challenge Live Demo](https://subly-challenge.vercel.app/).

## Project Setup

### 1. Vite React/TypeScript Template

The project was bootstrapped using the **Vite** React/TypeScript template. I have not used Vite before but keep on hearing good things about it, so this project seemed like a good opportunity to try it out.

### 2. Prettier Configuration

A `.prettierrc` file is included to enforce consistent code formatting across the project. Prettier is set up in my VSCode to format files on save, and so no specific ESLint rules for Prettier have been added, as the editor takes care of it.

### 3. ESLint and Accessibility

The project includes **eslint-plugin-jsx-a11y** to catch accessibility best practice violations early in the development process.

### 4. Husky and Commitlint

**Husky** is used to add Git hooks to enforce quality standards before code is committed. The pre-commit hook runs the test suite to catch issues early, while **Commitlint** is used to enforce **Conventional Commits**. This ensures that commit messages are structured and meaningful, following the format described in the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

### 5. Testing with Jest and ts-jest

**Jest** is configured for testing the project, with **ts-jest** for TypeScript support.

### 6. Continuous Deployment with Vercel

The project is continuously deployed to **Vercel**. A **GitHub Action** has been set up to automatically deploy the project to Vercel whenever a commit is made to the `main` branch. This ensures that changes are reflected in the live environment immediately, and it also serves as a pipeline to catch any build issues early.

You can view the live project at the following URL:
[Subly Challenge Live Demo](https://subly-challenge.vercel.app/).

### 7. Direct Commits to Main Branch

For this technical challenge, all commits are made directly to the `main` branch to make it easier for you to follow the development history. Typically, feature branches would be used for a more formal workflow, but this approach provides simplicity and transparency for the challenge.

## Development Environment Setup

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm**
- **Git**

### Cloning the Repository

```bash
git clone https://github.com/Mrdigs/subly-challenge.git
cd subly-challenge
```

### Installing Dependencies

Install the required packages by running:

```bash
npm install
```

### Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Running Tests

To run the test suite:

```bash
npm test
```

### Building the Project

To build the project for production:

```bash
npm run build
```

The production build will be in the `dist` folder.

## Deployment

This project is continuously deployed to **Vercel** using GitHub Actions. Any changes pushed to the `main` branch trigger the deployment process.

View the live application:  
[Subly Challenge Live Demo](https://subly-challenge-otkwayb0m-darren-scotts-projects.vercel.app/)
