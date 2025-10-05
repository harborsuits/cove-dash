import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, Paperclip, Phone, Mail, MoreVertical } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    { id: 1, name: "Harbor View Restaurant", initials: "HV", lastMessage: "That sounds great! When can we schedule?", time: "2m ago", unread: 2, online: true },
    { id: 2, name: "Coastal Cafe", initials: "CC", lastMessage: "I'd like to see the demo you mentioned", time: "1h ago", unread: 0, online: true },
    { id: 3, name: "Seaside Boutique", initials: "SB", lastMessage: "Thanks for the information", time: "3h ago", unread: 1, online: false },
    { id: 4, name: "Marina Yoga Studio", initials: "MY", lastMessage: "What's included in the basic package?", time: "1d ago", unread: 0, online: false },
    { id: 5, name: "Beachfront Realty", initials: "BR", lastMessage: "Let me discuss with my team", time: "2d ago", unread: 0, online: false },
  ];

  const messages = [
    { id: 1, sender: "them", text: "Hi! I'm interested in getting a new website for my restaurant.", time: "10:30 AM" },
    { id: 2, sender: "me", text: "That's great! I'd love to help. Let me show you some examples of restaurant websites we've created.", time: "10:32 AM" },
    { id: 3, sender: "me", text: "Here's a demo: https://demo.pleasantcove.com/harbor-view", time: "10:33 AM" },
    { id: 4, sender: "them", text: "Wow, this looks fantastic! I love the menu integration and reservation system.", time: "10:45 AM" },
    { id: 5, sender: "me", text: "I'm glad you like it! We can customize everything to match your brand. Would you like to schedule a call to discuss your specific needs?", time: "10:47 AM" },
    { id: 6, sender: "them", text: "That sounds great! When can we schedule?", time: "10:52 AM" },
  ];

  const selected = conversations.find(c => c.id === selectedChat);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1">Communicate with your leads and clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        {/* Conversations List */}
        <Card className="bg-gradient-card lg:col-span-1 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="divide-y divide-border">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={cn(
                    "w-full p-4 text-left hover:bg-accent/50 transition-colors",
                    selectedChat === conv.id && "bg-accent"
                  )}
                >
                  <div className="flex gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                          {conv.initials}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 bg-success border-2 border-card rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-foreground truncate">{conv.name}</span>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <Badge className="ml-2">{conv.unread}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Window */}
        <Card className="bg-gradient-card lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  {selected?.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">{selected?.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {selected?.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Mail className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-lg p-3",
                      msg.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-foreground"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={cn(
                      "text-xs mt-1",
                      msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setMessage("");
                  }
                }}
              />
              <Button className="gap-2">
                <Send className="h-4 w-4" />
                Send
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
