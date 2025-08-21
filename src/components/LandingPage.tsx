import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  Brain, 
  Sparkles, 
  MessageSquare, 
  Cpu, 
  Rocket, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Play,
  Globe,
  Code,
  Image as ImageIcon,
  Mic
} from "lucide-react";
import heroImage from "@/assets/hero-ai-interface.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const aiModels = [
    {
      name: "GPT-4 & GPT-3.5",
      icon: <Brain className="h-8 w-8" />,
      strength: "General Intelligence",
      description: "Advanced reasoning and creative tasks"
    },
    {
      name: "Claude",
      icon: <Sparkles className="h-8 w-8" />,
      strength: "Analysis & Writing",
      description: "Superior analytical and writing capabilities"
    },
    {
      name: "Gemini 2.0",
      icon: <Cpu className="h-8 w-8" />,
      strength: "Multimodal AI",
      description: "Advanced vision and understanding"
    },
    {
      name: "Perplexity",
      icon: <Globe className="h-8 w-8" />,
      strength: "Real-time Search",
      description: "Live web search and current information"
    },
    {
      name: "Grok",
      icon: <Rocket className="h-8 w-8" />,
      strength: "Real-time Data",
      description: "X integration and real-time insights"
    },
    {
      name: "Deepseek & Mistral",
      icon: <Code className="h-8 w-8" />,
      strength: "Code Generation",
      description: "Specialized coding and development"
    }
  ];

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Compare all AIs at once",
      description: "Get responses from multiple models simultaneously"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Prompt Boost",
      description: "Auto-optimize prompts for better results"
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Generate images",
      description: "Create stunning visuals with AI"
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Transcribe audio",
      description: "Convert speech to text instantly"
    }
  ];

  const faqs = [
    {
      question: "Is Chirayush AI Fiesta really free?",
      answer: "Yes! We provide access to premium AI models completely free. No hidden costs, no credit limits."
    },
    {
      question: "How many messages can I send?",
      answer: "Unlimited! Send as many messages as you want across all AI models without any restrictions."
    },
    {
      question: "Which AI models are available?",
      answer: "We support GPT-4, GPT-3.5, Claude, Gemini 2.0, Perplexity, Grok, Deepseek, Mistral, and many more premium models."
    },
    {
      question: "Do you store my conversations?",
      answer: "Your privacy is our priority. Conversations are processed securely and not stored permanently."
    },
    {
      question: "How often do you add new models?",
      answer: "We regularly update our platform with the latest AI models as they become available."
    },
    {
      question: "Can I use this for commercial purposes?",
      answer: "Yes! Feel free to use Chirayush AI Fiesta for personal, educational, or commercial projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium animate-float">
                  <Sparkles className="h-4 w-4 mr-2" />
                  World's Most Powerful AIs
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient-primary">Chirayush</span>{" "}
                  <span className="text-gradient-secondary">AI Fiesta</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                  Many Premium AIs{" "}
                  <span className="text-gradient-accent font-bold">FREE</span>.{" "}
                  <span className="text-gradient-primary">Infinite Power</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => navigate('/chat')}
                  className="group"
                >
                  Get Started Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="neon" size="xl" className="group">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-slow" />
              <img 
                src={heroImage} 
                alt="Futuristic AI Interface" 
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="text-gradient-secondary">One Window.</span>{" "}
              <span className="text-gradient-primary">Six Perspectives.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Run prompts across GPT, Claude, Gemini & more instantly. Compare results and find the perfect answer.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">6+</div>
                  <div className="text-muted-foreground">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-secondary mb-2">1</div>
                  <div className="text-muted-foreground">Interface</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-accent mb-2">∞</div>
                  <div className="text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Powered by</span>{" "}
              <span className="text-gradient-secondary">Leading AI</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Access the world's most advanced AI models in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiModels.map((model, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-xl bg-gradient-primary text-primary-foreground group-hover:animate-glow">
                    {model.icon}
                  </div>
                  <CardTitle className="text-xl">{model.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {model.strength}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="mx-auto mb-6 p-6 rounded-full bg-gradient-primary text-primary-foreground w-24 h-24 flex items-center justify-center">
                  <Play className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  See <span className="text-gradient-primary">Chirayush AI Fiesta</span> in Action
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover how Chirayush AI Fiesta delivers what others miss.
                </p>
                <Button variant="hero" size="lg" className="group">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform mr-2" />
                  Watch Demo Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-secondary">Frequently Asked</span>{" "}
              <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Chirayush AI Fiesta
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to Unleash the Power of{" "}
              <span className="text-gradient-primary">Chirayush AI Fiesta</span>?
            </h2>
            <p className="text-2xl text-muted-foreground">
              Join thousands of users experiencing the future of AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/chat')}
                className="group"
              >
                Get Started Now
                <Rocket className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
              </Button>
              <Button variant="neon" size="xl">
                Learn More
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-6 w-6 text-accent fill-current animate-glow" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Chirayush AI Fiesta
              </h3>
              <p className="text-muted-foreground mb-4">
                The world's most powerful AI models, accessible to everyone, completely free.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>© 2024 Chirayush AI Fiesta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;