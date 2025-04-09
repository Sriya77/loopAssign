# Modern Dashboard with React and TypeScript

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS. Features include dynamic data visualization, invoice management, and user authentication flows.

## Features

- 📊 Interactive Dashboard with Real-time Data Updates
- 💳 Invoice Generation and PDF Export
- 📱 Fully Responsive Design
- 🔔 Notification System
- 👤 User Authentication Flow
- 📈 Dynamic Charts with Recharts
- 🎨 Modern UI with Tailwind CSS
- 🔍 Search Functionality
- 📱 Mobile-First Approach

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Lucide React for icons
- React Router for navigation
- HTML2Canvas & jsPDF for PDF generation

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── CustomerMap.tsx
│   ├── RevenueChart.tsx
│   ├── Sidebar.tsx
│   ├── StatCard.tsx
│   ├── TopProducts.tsx
│   └── TopTransactions.tsx
├── pages/             # Page components
│   ├── Dashboard.tsx
│   ├── Invoice.tsx
│   └── Goodbye.tsx
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided URL

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

