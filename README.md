# Newsletter Frontend Application

A modern React-based newsletter management application that allows users to create, manage, and track email campaigns with beautiful themes and recipient management.

## 🚀 Features

- **Newsletter Builder**: Create custom newsletters with multiple themes and templates
- **Recipient Management**: Organize recipients into groups for targeted campaigns
- **Campaign Analytics**: Track campaign performance and email open rates
- **Theme Customization**: Choose from various pre-designed themes with color matching
- **Responsive Design**: Modern, mobile-friendly interface

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Fast build tool and development server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework

### State Management

- **Zustand 5.0.8** - Lightweight state management for campaigns and groups

### UI Components & Libraries

- **Lucide React 0.542.0** - Beautiful icon library
- **React Router DOM 7.8.2** - Client-side routing
- **React Select 5.10.2** - Enhanced select components
- **React Modal 3.16.3** - Modal dialogs
- **React Spinners 0.17.0** - Loading indicators

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📋 Prerequisites

- **Node.js** >= 20.0.0
- **Yarn** or **npm** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd newletter-fe
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Start Development Server

```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
yarn build
# or
npm run build
```

### 5. Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (LetterTemplate, Pill)
│   └── navigation/      # Navigation components (Layout, Navbar, etc.)
├── pages/               # Main application pages
│   ├── BuildPage/       # Newsletter builder interface
│   ├── CampaignsPage/   # Campaign management and analytics
│   ├── RecipientsPage/  # Recipient and group management
│   └── ViewPage/        # Campaign preview
├── navigation/          # Routing configuration
├── zustand/            # State management stores
├── utils/              # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Design & Development Approach

### UI/UX Design

- **Lovable.dev**: Used for initial UI/UX design inspiration and component layouts
- **Color Matching**: GPT-assisted color palette selection for theme consistency
- **Modern Design**: Clean, professional interface with focus on usability

### Development Process

1. **Initial Setup**: Copilot and Cursor for utility functions and base component designs
2. **File Organization**: Cursor-assisted file separation and project structure
3. **Manual Refinement**: Hand-crafted components and business logic implementation
4. **State Management**: Zustand for efficient state handling across components

### AI Tools Used

- **GitHub Copilot**: Code completion and utility function generation
- **Cursor**: File organization, component structure, manual development, and README file
- **GPT**: Color matching and theme design assistance
- **Lovable.dev**: UI/UX design templates and inspiration

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn check` - TypeScript type checking

## 🌐 Application Routes

- `/` - Newsletter Builder (default)
- `/recipients` - Recipient Management
- `/campaigns` - Campaign Analytics
- `/view/:id` - Campaign Preview
- `*` - 404 Not Found

## 📊 State Management

The application uses Zustand for state management with two main stores:

- **Groups Store**: Manages recipient groups and users
- **Campaigns Store**: Handles campaign data and analytics

## 🎯 Key Features Implementation

### Newsletter Builder

- Dynamic theme selection with real-time preview
- Rich text content editing
- Template-based design system

### Recipient Management

- Group-based organization
- Bulk user import/export
- Email validation and management

### Campaign Analytics

- Open rate tracking
- Performance metrics
- Campaign comparison tools

## 🔮 Future Enhancements

- Email template editor
- Advanced analytics dashboard
- A/B testing capabilities
- Integration with email service providers
- User authentication and authorization

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
