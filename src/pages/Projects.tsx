import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, FolderKanban, Clock, DollarSign, User, FileText, CheckCircle2, Circle } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Harbor View Restaurant Website",
      client: "Harbor View",
      type: "Full Website",
      progress: 75,
      stage: "Design Review",
      payment: "50% Paid",
      dueDate: "Dec 28, 2024",
      team: ["JD", "SM"],
      status: "active" as const,
    },
    {
      id: 2,
      name: "Coastal Cafe E-commerce",
      client: "Coastal Cafe",
      type: "E-commerce Site",
      progress: 45,
      stage: "Development",
      payment: "Deposit Paid",
      dueDate: "Jan 15, 2025",
      team: ["JD", "AL"],
      status: "active" as const,
    },
    {
      id: 3,
      name: "Seaside Boutique Refresh",
      client: "Seaside Boutique",
      type: "Redesign",
      progress: 100,
      stage: "Delivered",
      payment: "Paid in Full",
      dueDate: "Dec 10, 2024",
      team: ["SM"],
      status: "completed" as const,
    },
    {
      id: 4,
      name: "Marina Yoga Landing Page",
      client: "Marina Yoga",
      type: "Landing Page",
      progress: 20,
      stage: "Planning",
      payment: "Pending",
      dueDate: "Jan 20, 2025",
      team: ["AL"],
      status: "pending" as const,
    },
  ];

  const milestones = [
    { id: 1, title: "Discovery & Requirements", completed: true, date: "Nov 15" },
    { id: 2, title: "Design Mockups", completed: true, date: "Nov 28" },
    { id: 3, title: "Client Review", completed: true, date: "Dec 5" },
    { id: 4, title: "Development Phase", completed: false, date: "Dec 20" },
    { id: 5, title: "Testing & QA", completed: false, date: "Dec 23" },
    { id: 6, title: "Launch", completed: false, date: "Dec 28" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">Track and manage client projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <FolderKanban className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Due Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">$42k</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gradient-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {project.client}
                      <span className="text-muted-foreground/50">•</span>
                      {project.type}
                    </CardDescription>
                  </div>
                  <StatusBadge status={project.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">{project.stage}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Payment:</span>
                    <span className="font-medium text-foreground">{project.payment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Due:</span>
                    <span className="font-medium text-foreground">{project.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Team:</span>
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <Avatar key={idx} className="h-6 w-6 border-2 border-card">
                          <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground">
                            {member}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <FileText className="h-3 w-3" />
                    Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <p className="text-muted-foreground text-center py-8">Active projects view</p>
        </TabsContent>

        <TabsContent value="completed">
          <p className="text-muted-foreground text-center py-8">Completed projects view</p>
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle>Project Timeline Example</CardTitle>
          <CardDescription>Harbor View Restaurant Website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  {milestone.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  {idx < milestones.length - 1 && (
                    <div className={`w-px h-12 ${milestone.completed ? "bg-success" : "bg-border"}`} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`font-medium ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}>
                        {milestone.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                    {milestone.completed && (
                      <Badge variant="secondary">Completed</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
