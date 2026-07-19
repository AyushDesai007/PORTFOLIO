# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


PRACTICAL 1 

# Student Portfolio

## Overview
Student Portfolio is a simple React application built using **Vite**. It demonstrates component-based UI development by creating a portfolio page with reusable components such as Header, About, Skills, Projects, and Footer. The project also uses **props** to pass data between components.

---

Features
- Built with React and Vite
- Reusable functional components
- Dynamic Skills list using props
- Single-page portfolio layout
- Clean and responsive user interface
- Easy to extend with new sections

---

## Project Structure

```
student-portfolio/
│── public/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```
#  Practical 2

## Overview
This update enhances the Student Portfolio by implementing **React Router** to create a multi-page application with seamless navigation. Users can now navigate between different sections without reloading the page.



## Features
- Added React Router for client-side routing
- Implemented a reusable Navigation Bar
- Created Home page
- Added Projects page
- Added Contact page
- Multi-route React application with smooth navigation



## Routes

| Route | Description |
|--------|-------------|
| `/` | Home page displaying the portfolio introduction |
| `/projects` | Displays project information |
| `/contact` | Displays contact details |

---

## Updated Project Structure

```text
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

---

## Improvements
- Better application structure
- Easy navigation between pages
- Scalable routing architecture
- Improved code organization using separate page components
```
```


