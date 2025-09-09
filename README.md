# Newsletter Management Application

A modern React-based newsletter platform for creating, managing, and tracking email campaigns with comprehensive analytics and recipient management.

🌐 **Live Demo**: [https://newsletter-fe-six.vercel.app/](https://newsletter-fe-six.vercel.app/)

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

## 🛠️ Tech Stack

- **React 19.1.1** + **TypeScript 5.8.3** - Modern frontend framework
- **Vite 7.1.2** - Fast build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first styling
- **Zustand 5.0.8** - Lightweight state management
- **React Router DOM 7.8.2** - Client-side routing

## 📋 Application Workflow

### 1. Newsletter Creation (`/`)

- **Theme Selection**: Choose from predefined themes with color-customized templates
- **Content Building**: Create newsletter content with rich text editing
- **Recipient Targeting**: Select recipient groups for campaign distribution

### 2. Recipient Management (`/recipients`)

- **Group Organization**: Create and manage recipient groups
- **User Management**: Add, edit, and remove users within groups
- **Bulk Operations**: Import/export user data for efficient management

### 3. Campaign Analytics (`/campaigns`)

- **Performance Tracking**: Monitor open rates and click-through rates
- **Top Leads Analysis**: Identify most engaged recipients
- **Campaign Comparison**: Compare performance across different campaigns

### 4. Campaign Preview (`/view/:id`)

- **Email Preview**: View final newsletter before sending
- **Link Tracking**: Preview tracking links and analytics setup

## 💾 Memory Management

The application uses **Zustand with persistence** for efficient state management:

### Campaigns Store (`campaigns-storage`)

- **Campaign Data**: Stores complete campaign information including themes, content, and recipient links
- **User Link Tracking**: Maintains individual user interaction data (opens, clicks)
- **Analytics State**: Tracks real-time engagement metrics per campaign

### Groups Store (`groups-storage`)

- **Recipient Groups**: Manages organized collections of users
- **User Profiles**: Stores user contact information and metadata
- **Group Relationships**: Maintains user-group associations

**Persistence Strategy**: Both stores automatically persist to `localStorage`, ensuring data survives browser sessions and page refreshes.

## 📊 Analytics System

### Core Metrics

- **Open Rate**: Percentage of recipients who opened the email
- **Click Rate**: Percentage of opens that resulted in CTA clicks
- **Engagement Score**: Combined metric based on opens and clicks

### Top Leads Algorithm

The system aggregates user engagement across all campaigns:

1. **Data Aggregation**: Combines interaction data from multiple campaigns per user
2. **Click Rate Calculation**: `(totalClicks / totalOpens) * 100`
3. **Ranking**: Sorts users by total clicks to identify most engaged recipients
4. **Performance Insights**: Provides actionable data for targeting future campaigns

### Real-time Tracking

- **Link-based Analytics**: Each recipient receives unique tracking links
- **Event Capture**: Automatically tracks email opens and CTA clicks
- **Immediate Updates**: Analytics update in real-time as users interact with emails

## 🏗️ Project Structure

```
src/
├── pages/               # Main application views
│   ├── BuildPage/       # Newsletter creation interface
│   ├── CampaignsPage/   # Analytics and campaign management
│   ├── RecipientsPage/  # User and group management
│   └── ViewPage/        # Campaign preview
├── zustand/            # State management stores
├── components/         # Reusable UI components
└── utils/              # Analytics and utility functions
```

## 🔧 Available Scripts

- `yarn dev` - Development server
- `yarn build` - Production build
- `yarn preview` - Preview production build
- `yarn lint` - Code linting

---

Built with modern React and TypeScript for scalable newsletter management.
