import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InsuranceIndustry from "./pages/InsuranceIndustry";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import PPCFaqs from "./pages/PPCFaqs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Blog pages
import LocalLeadGeneration from "./pages/blog/LocalLeadGeneration";
import SalesObjectionsPhone from "./pages/blog/SalesObjectionsPhone";
import PhoneLeadsChannels from "./pages/blog/PhoneLeadsChannels";
import SoloLawFirmMarketing from "./pages/blog/SoloLawFirmMarketing";
import BottomFunnelContentLawyers from "./pages/blog/BottomFunnelContentLawyers";
import CallCenterTrends2024 from "./pages/blog/CallCenterTrends2024";
import CallCenterSentimentAnalysis from "./pages/blog/CallCenterSentimentAnalysis";
import MiddleFunnelContentLawyers from "./pages/blog/MiddleFunnelContentLawyers";
import VirtualQueuingCallCenter from "./pages/blog/VirtualQueuingCallCenter";
import CallCenterProblemsSolutions from "./pages/blog/CallCenterProblemsSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/insurance-industry" element={<InsuranceIndustry />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ppc-faqs" element={<PPCFaqs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Blog post routes */}
          <Route
            path="/blog/local-lead-generation"
            element={<LocalLeadGeneration />}
          />
          <Route
            path="/blog/sales-objections-phone"
            element={<SalesObjectionsPhone />}
          />
          <Route
            path="/blog/phone-leads-channels"
            element={<PhoneLeadsChannels />}
          />
          <Route
            path="/blog/solo-law-firm-marketing"
            element={<SoloLawFirmMarketing />}
          />
          <Route
            path="/blog/bottom-funnel-content-lawyers"
            element={<BottomFunnelContentLawyers />}
          />
          <Route
            path="/blog/call-center-trends-2024"
            element={<CallCenterTrends2024 />}
          />
          <Route
            path="/blog/call-center-sentiment-analysis"
            element={<CallCenterSentimentAnalysis />}
          />
          <Route
            path="/blog/middle-funnel-content-lawyers"
            element={<MiddleFunnelContentLawyers />}
          />
          <Route
            path="/blog/virtual-queuing-call-center"
            element={<VirtualQueuingCallCenter />}
          />
          <Route
            path="/blog/call-center-problems-solutions"
            element={<CallCenterProblemsSolutions />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
