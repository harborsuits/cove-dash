import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Demos from "./pages/Demos";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/outreach" element={<ComingSoon title="Outreach Campaigns" description="Create and manage marketing campaigns" />} />
            <Route path="/messages" element={<ComingSoon title="Messages" description="Communicate with your leads and clients" />} />
            <Route path="/projects" element={<ComingSoon title="Projects" description="Track and manage client projects" />} />
            <Route path="/sales" element={<ComingSoon title="Sales & Orders" description="Manage orders and invoices" />} />
            <Route path="/schedule" element={<ComingSoon title="Schedule" description="Manage appointments and bookings" />} />
            <Route path="/analytics" element={<ComingSoon title="Analytics" description="View detailed reports and insights" />} />
            <Route path="/settings" element={<ComingSoon title="Settings" description="Configure your system" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
