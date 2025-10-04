import MetricCard from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, FolderKanban, Presentation, TrendingUp, Flame } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 32000 },
];

const leadData = [
  { week: "W1", leads: 45 },
  { week: "W2", leads: 52 },
  { week: "W3", leads: 48 },
  { week: "W4", leads: 61 },
];

const recentActivity = [
  { id: 1, type: "lead", message: "New hot lead: Ocean View Restaurant", time: "2 min ago", status: "new" as const },
  { id: 2, type: "demo", message: "Demo viewed by Coastal Cafe", time: "15 min ago", status: "active" as const },
  { id: 3, type: "project", message: "Website launch: Harbor Grill", time: "1 hour ago", status: "completed" as const },
  { id: 4, type: "message", message: "Response from Bay Side Bistro", time: "2 hours ago", status: "active" as const },
  { id: 5, type: "payment", message: "Payment received: $2,500", time: "3 hours ago", status: "completed" as const },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your business overview.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Leads"
          value="247"
          icon={Users}
          variant="primary"
          trend={{ value: "12%", positive: true }}
        />
        <MetricCard
          title="Revenue"
          value="$32.5K"
          icon={DollarSign}
          variant="success"
          trend={{ value: "8%", positive: true }}
        />
        <MetricCard
          title="Active Projects"
          value="18"
          icon={FolderKanban}
          variant="warning"
          trend={{ value: "3%", positive: true }}
        />
        <MetricCard
          title="Demos Created"
          value="64"
          icon={Presentation}
          variant="default"
          trend={{ value: "15%", positive: true }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-success" />
            <h2 className="text-xl font-semibold text-foreground">Revenue Growth</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--success))", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-semibold text-foreground">Lead Generation</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar 
                dataKey="leads" 
                fill="hsl(var(--primary))" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card className="p-6 bg-gradient-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div 
              key={activity.id} 
              className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-colors border border-border/50"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
              <StatusBadge status={activity.status} />
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="space-y-2">
            <p className="text-sm font-medium opacity-90">Hot Leads</p>
            <p className="text-4xl font-bold">42</p>
            <p className="text-xs opacity-75">Requires immediate attention</p>
          </div>
        </Card>
        <Card className="p-6 bg-gradient-success text-success-foreground">
          <div className="space-y-2">
            <p className="text-sm font-medium opacity-90">Conversion Rate</p>
            <p className="text-4xl font-bold">32%</p>
            <p className="text-xs opacity-75">From demo to client</p>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border/50">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Avg Project Value</p>
            <p className="text-4xl font-bold text-foreground">$2,850</p>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
