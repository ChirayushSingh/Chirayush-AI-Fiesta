# 🤖 Chirayush AI Fiesta – World's Most Powerful AIs

> Access GPT, Claude, Gemini & more instantly. Compare all AIs at once with unlimited power.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://lovable.dev/projects/af2bc877-cdec-455e-9422-bfb3b910b8d6)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

### 🎯 Multi-AI Chat Interface
- **6 AI Models**: GPT-3.5 Turbo, Deepseek R1, Gemma 2 9B, Mistral 7B, Gemini 2.0 Flash, Gemini 1.5 Flash
- **Side-by-Side Comparison**: Compare responses from multiple AIs simultaneously
- **Toggle Models**: Enable/disable specific AI models as needed
- **Real-time Responses**: Get instant responses from all selected models

### 🎨 Design & UX
- **Dark Futuristic Theme**: Neon gradients with green, purple, and yellow accents
- **Smooth Animations**: Powered by Tailwind CSS and custom animations
- **Responsive Design**: Optimized for desktop and mobile devices
- **Sora Font**: Clean, modern typography throughout

### 🚀 Technical Features
- **OpenRouter Integration**: Access to multiple open-source models
- **Google Gemini Integration**: Latest Gemini 2.0 and 1.5 Flash models
- **React Query**: Efficient API state management
- **TypeScript**: Full type safety
- **Modular Architecture**: Clean, maintainable component structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **API Integration**: OpenRouter API, Google Gemini API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Lovable Platform

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chirayush-ai-fiesta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with your API keys
   VITE_OPENROUTER_API_KEY=your_openrouter_key
   VITE_GEMINI_API_KEY=your_gemini_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── LandingPage.tsx     # Main landing page
├── pages/
│   ├── Index.tsx           # Home page
│   ├── Chat.tsx            # Chat interface
│   └── NotFound.tsx        # 404 page
├── assets/                 # Images and static files
├── lib/
│   └── utils.ts            # Utility functions
├── hooks/                  # Custom React hooks
└── styles/
    └── index.css           # Global styles & design tokens
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **HSL Color Tokens**: Semantic color variables
- **Neon Gradients**: Custom gradient utilities
- **Glow Effects**: CSS shadow utilities for neon effects
- **Typography Scale**: Consistent font sizes and weights
- **Component Variants**: Multiple button and card styles

## 🤖 Supported AI Models

| Model | Provider | Strengths |
|-------|----------|-----------|
| GPT-3.5 Turbo | OpenRouter | General purpose, fast responses |
| Deepseek R1 | OpenRouter | Code generation, technical tasks |
| Gemma 2 9B | OpenRouter | Efficient, lightweight responses |
| Mistral 7B | OpenRouter | Multilingual, instruction following |
| Gemini 2.0 Flash | Google | Latest model, multimodal capabilities |
| Gemini 1.5 Flash | Google | Fast, efficient responses |

## 🔧 Configuration

### API Keys Setup
The application requires API keys from:
- **OpenRouter**: For GPT-3.5, Deepseek, Gemma, and Mistral models
- **Google AI Studio**: For Gemini models

### Customization
- Modify `src/index.css` for design tokens
- Update `tailwind.config.ts` for theme configuration
- Customize AI models in `src/pages/Chat.tsx`

## 📱 Features in Detail

### Landing Page
- Hero section with compelling value proposition
- Feature highlights with animations
- AI model showcase
- FAQ section with common questions
- Call-to-action buttons leading to chat interface

### Chat Interface
- ChatGPT-like interface with modern design
- Model selection sidebar with toggle switches
- Vertical response comparison layout
- Real-time typing indicators
- Error handling and retry mechanisms

## 🔒 Security & Privacy

- API keys are handled securely
- No user data is stored locally
- All communications are encrypted
- Respects AI provider terms of service

## 🚀 Deployment

### Using Lovable
1. Visit your [Lovable Project](https://lovable.dev/projects/af2bc877-cdec-455e-9422-bfb3b910b8d6)
2. Click Share → Publish
3. Your app will be live instantly

### Custom Deployment
```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenRouter](https://openrouter.ai/) for AI model access
- [Google AI Studio](https://aistudio.google.com/) for Gemini models
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Lovable](https://lovable.dev/) for development platform

## 📞 Contact

- **Project Link**: [https://lovable.dev/projects/af2bc877-cdec-455e-9422-bfb3b910b8d6](https://lovable.dev/projects/af2bc877-cdec-455e-9422-bfb3b910b8d6)
- **GitHub**: [Your GitHub Profile]
- **Email**: [Your Email]

---

<p align="center">
  <b>🤖 Experience the Future of AI Chat Today!</b>
</p>

<p align="center">
  Made with ❤️ using <a href="https://lovable.dev">Lovable</a>
</p>