import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Brain, 
  Cpu, 
  Globe, 
  Rocket, 
  Code,
  ArrowLeft,
  Menu,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  model?: string;
  timestamp: Date;
}

interface AIModel {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  provider: 'openrouter' | 'gemini';
  modelName: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedModels, setSelectedModels] = useState<string[]>(['gpt-3.5-turbo', 'gemini-2.0-flash-exp']);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const aiModels: AIModel[] = [
    {
      id: 'gpt-3.5-turbo',
      name: 'GPT-3.5 Turbo',
      icon: <Brain className="h-4 w-4" />,
      color: 'text-primary',
      provider: 'openrouter',
      modelName: 'openai/gpt-3.5-turbo'
    },
    {
      id: 'deepseek-r1',
      name: 'Deepseek R1',
      icon: <Code className="h-4 w-4" />,
      color: 'text-secondary',
      provider: 'openrouter',
      modelName: 'deepseek/deepseek-r1'
    },
    {
      id: 'gemma-2-9b',
      name: 'Gemma 2 9B',
      icon: <Sparkles className="h-4 w-4" />,
      color: 'text-accent',
      provider: 'openrouter',
      modelName: 'google/gemma-2-9b-it:free'
    },
    {
      id: 'mistral-7b',
      name: 'Mistral 7B',
      icon: <Rocket className="h-4 w-4" />,
      color: 'text-secondary-glow',
      provider: 'openrouter',
      modelName: 'mistralai/mistral-7b-instruct:free'
    },
    {
      id: 'gemini-2.0-flash-exp',
      name: 'Gemini 2.0 Flash',
      icon: <Cpu className="h-4 w-4" />,
      color: 'text-primary-glow',
      provider: 'gemini',
      modelName: 'gemini-2.0-flash-exp'
    },
    {
      id: 'gemini-1.5-flash',
      name: 'Gemini 1.5 Flash',
      icon: <Globe className="h-4 w-4" />,
      color: 'text-accent-glow',
      provider: 'gemini',
      modelName: 'gemini-1.5-flash'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleModel = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const sendToOpenRouter = async (message: string, model: AIModel) => {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Chirayush AI Fiesta'
        },
        body: JSON.stringify({
          model: model.modelName,
          messages: [
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No response received';
    } catch (error) {
      console.error(`Error with ${model.name}:`, error);
      throw error;
    }
  };

  const sendToGemini = async (message: string, model: AIModel) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model.modelName}:generateContent?key=AIzaSyDn10G697FEpLIqwpZFw1miD80RARAT3EU`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: message
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
    } catch (error) {
      console.error(`Error with ${model.name}:`, error);
      throw error;
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (selectedModels.length === 0) {
      toast({
        title: "No models selected",
        description: "Please select at least one AI model to chat with.",
        variant: "destructive"
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const selectedModelObjects = aiModels.filter(model => selectedModels.includes(model.id));
      
      const responses = await Promise.allSettled(
        selectedModelObjects.map(async (model) => {
          try {
            let content: string;
            
            if (model.provider === 'openrouter') {
              content = await sendToOpenRouter(inputMessage, model);
            } else {
              content = await sendToGemini(inputMessage, model);
            }

            const assistantMessage: Message = {
              id: `${Date.now()}-${model.id}`,
              content,
              role: 'assistant',
              model: model.name,
              timestamp: new Date()
            };

            return assistantMessage;
          } catch (error) {
            const errorMessage: Message = {
              id: `${Date.now()}-${model.id}-error`,
              content: `Error: Unable to get response from ${model.name}. Please try again.`,
              role: 'assistant',
              model: model.name,
              timestamp: new Date()
            };
            return errorMessage;
          }
        })
      );

      const newMessages = responses
        .filter((result): result is PromiseFulfilledResult<Message> => result.status === 'fulfilled')
        .map(result => result.value);

      setMessages(prev => [...prev, ...newMessages]);

      if (newMessages.length === 0) {
        toast({
          title: "All requests failed",
          description: "Unable to get responses from any AI model. Please check your connection and try again.",
          variant: "destructive"
        });
      }

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-border/50 bg-card/30 backdrop-blur-sm flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-xl font-bold text-gradient-primary">AI Fiesta</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Select AI models to compare responses
          </p>
        </div>

        {/* Model Selection */}
        <div className="flex-1 p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Settings className="h-5 w-5" />
            AI Models
          </h2>
          <div className="space-y-3">
            {aiModels.map((model) => (
              <Card 
                key={model.id}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedModels.includes(model.id) 
                    ? 'ring-2 ring-primary shadow-glow-primary bg-primary/10' 
                    : 'hover:bg-accent/20'
                }`}
                onClick={() => toggleModel(model.id)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={model.color}>
                    {model.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{model.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize">{model.provider}</p>
                  </div>
                  {selectedModels.includes(model.id) && (
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>{selectedModels.length}</strong> models selected
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Responses will be generated from all selected models
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-gradient-primary">Chat</span>{" "}
                <span className="text-gradient-secondary">with Multiple AIs</span>
              </h1>
              <p className="text-muted-foreground">
                Compare responses from the world's leading AI models
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-16">
                <div className="mx-auto mb-6 p-6 rounded-full bg-gradient-primary text-primary-foreground w-20 h-20 flex items-center justify-center">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Welcome to AI Fiesta!</h2>
                <p className="text-muted-foreground mb-6">
                  Start chatting with multiple AI models at once. Select your preferred models and ask anything!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm">
                  <div className="p-4 rounded-lg bg-card/50 border border-border/50">
                    <h3 className="font-medium mb-2">💡 Example Questions</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Explain quantum computing</li>
                      <li>• Write a Python function</li>
                      <li>• Creative writing ideas</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border/50">
                    <h3 className="font-medium mb-2">🚀 Features</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Compare AI responses</li>
                      <li>• Multiple models at once</li>
                      <li>• Real-time results</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                {message.role === 'user' ? (
                  <div className="flex justify-end">
                    <div className="flex items-end gap-3 max-w-[80%]">
                      <Card className="bg-primary text-primary-foreground">
                        <CardContent className="p-4">
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </CardContent>
                      </Card>
                      <div className="p-2 rounded-full bg-primary text-primary-foreground">
                        <User className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="p-2 rounded-full bg-gradient-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="space-y-2">
                        <Card className="bg-card border-border/50">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {message.model}
                              </Badge>
                            </div>
                            <p className="whitespace-pre-wrap">{message.content}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-gradient-primary text-primary-foreground animate-pulse">
                    <Bot className="h-4 w-4" />
                  </div>
                  <Card className="bg-card border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                        <span className="text-muted-foreground">Generating responses...</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-6 border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="min-h-[60px] text-lg resize-none border-border/50 bg-background/50 backdrop-blur-sm"
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                variant="hero"
                size="lg"
                className="h-[60px] px-8"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {selectedModels.length} models selected • Press Enter to send
              </span>
              {selectedModels.length > 0 && (
                <span className="text-primary">Ready to chat!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;