import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ProductPage from "./pages/Product";
import ArchitecturePage from "./pages/Architecture";
import UseCasesPage from "./pages/UseCases";
import CaseStudiesPage from "./pages/CaseStudies";
import RoadmapPage from "./pages/Roadmap";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
