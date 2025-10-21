
# HR.AIverse - AI Powered HR Solutions Landing Page


This is a modern, fully responsive, multi-page landing site for **HR.AIverse**, a fictional company specializing in AI-powered Human Resources solutions. The project is built with React, TypeScript, and Tailwind CSS, featuring a sleek dark theme, smooth animations, and a clean, professional design.

## Features

- **Fully Responsive Design**: Optimized for a seamless experience on desktops, tablets, and mobile devices.
- **Single Page Application (SPA) Feel**: State-based navigation allows for instant page transitions without full reloads.
- **Interactive & Sticky Header**: The navigation bar is fixed for easy access and changes its appearance on scroll for a dynamic effect.
- **Component-Based Architecture**: The UI is built with reusable and modular components for maintainability and scalability.
- **Engaging Animations**: Subtle fade-in and slide-in animations on sections like "About" and "Contact" are triggered on scroll, enhancing user experience.
- **Functional Contact Form**: A client-side validated contact form with clear user feedback for submission status (sending, success, error).
- **Client Testimonial Carousel**: An auto-playing, interactive carousel to showcase client feedback.
- **Custom Branding & Icons**: Features a custom logo and a unique set of SVG icons tailored to the site's services.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: CSS Transitions & a custom `useIntersectionObserver` React Hook.
- **Build Tool**: Vite (or similar modern bundler)

## Project Structure

The project is organized into a clear and logical directory structure:

```
/
├── public/
│   └── (Static assets like favicon)
├── src/
│   ├── components/
│   │   ├── icons/       # Reusable SVG icon components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   └── Testimonials.tsx
│   ├── hooks/
│   │   └── useIntersectionObserver.ts # Custom hook for scroll animations
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FeaturesPage.tsx
│   │   └── TestimonialsPage.tsx
│   ├── App.tsx          # Main app component with routing logic
│   └── index.tsx        # React entry point
├── index.html           # Main HTML file
├── package.json
└── README.md
```

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hr-aIverse-landing-page.git
    cd hr-aIverse-landing-page
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:5173` (or another port if specified).

## Author

**Hafsa Raja**

- **GitHub**: [@hrranger5](https://github.com/hrranger5/)
- **LinkedIn**: [Hafsa Raja](https://www.linkedin.com/in/hafsa-raja-5224a8365/)
- **Instagram**: [@hafsaraja_official5](https://www.instagram.com/hafsaraja_official5/)
- **Email**: [hrranger555@gmail.com](mailto:hrranger555@gmail.com)

## Acknowledgements

-   Images sourced from [Unsplash](https://unsplash.com/).
-   Avatar placeholders from [Pravatar](https://i.pravatar.cc/).
