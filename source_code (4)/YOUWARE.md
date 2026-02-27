# YOUWARE Project - Authentication System

This project is a modern React application with a built-in authentication system powered by Youbase.

## Features Implemented

- **Authentication**: Managed login and signup UI using `@edgespark/client`.
- **Session Persistence**: User sessions are persisted using Zustand and `localStorage`.
- **Protected Routes**: The application handles auth lifecycle, showing a loading state during session check and redirecting to the login page if not authenticated.
- **Backend Integration**: A Hono-based backend is deployed on Youbase to handle authentication and API requests.

## Project Status

- **Project Type**: React + TypeScript Modern Web Application
- **Backend**: Youbase (Hono + Drizzle)
- **Auth**: EdgeSpark Auth
- **State Management**: Zustand

## Core Design Principles

### Context-Driven Design Strategy
- Scenario Analysis First: Analyze the user's specific use case, target audience, and functional requirements before making design decisions
- Contextual Appropriateness: Choose design styles that align with the content purpose
- User Journey Consideration: Design interactions and visual flow based on how users will actually engage with the content
IMPORTANT: When users don't specify UI style preferences, always default to modern and responsive UI design with minimalist aesthetic

### Modern Visual Sophistication
- Contemporary Aesthetics: Embrace contemporary design trends for modern aesthetics
- Typography Excellence: Master type scale relationships and strategic white space for premium hierarchy
- Advanced Layouts: Use CSS Grid, asymmetrical compositions, and purposeful negative space
- Strategic Color Systems: Choose palettes based on use cases and psychological impact

### Delightful Interactions
- Dynamic Over Static: Prioritize interactive experiences over passive presentations
- Micro-Interactions: Subtle hover effects, smooth transitions, and responsive feedback animations
- Animation Sophistication: Layer motion design that enhances usability without overwhelming
- Surprise Elements: Custom cursors, hidden Easter eggs, playful loading states, and unexpected interactive details (if applicable)

### Technical Excellence
- Reusable, typed React components with clear interfaces
- Leverage React 18's concurrent features to enhance user experience
- Adopt TypeScript for type-safe development experience
- Use Zustand for lightweight state management
- Implement smooth single-page application routing through React Router DOM

## Project Architecture

### Directory Structure

```
project-root/
├── index.html              # Main HTML template
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md              # Project documentation
├── YOUWARE.md             # Development guide and template documentation
├── yw_manifest.json       # Project manifest file
├── vite.config.ts         # Vite build tool configuration
├── tsconfig.json          # TypeScript configuration (main)
├── tsconfig.app.json      # TypeScript configuration for app
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── backend/               # Youbase backend directory
│   ├── src/               # Backend source code
│   └── wrangler.toml      # Cloudflare Workers configuration
└── src/                   # Source code directory
    ├── App.tsx            # Main application component (Auth lifecycle)
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles and Tailwind CSS imports
    ├── api/               # API related code (EdgeSpark client)
    ├── assets/            # Static assets
    ├── components/        # Reusable components
    ├── layouts/           # Layout components
    ├── pages/             # Page components (LoginPage)
    ├── store/             # State management (Auth store)
    ├── styles/            # Style files
    └── types/             # TypeScript type definitions
```

## Authentication Setup

The authentication system uses the EdgeSpark client. The backend is deployed at:
`https://staging--abeyxp01glaxvs20syvl.youbase.cloud`

To manage users or auth settings, use the Youbase dashboard.
