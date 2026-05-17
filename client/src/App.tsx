import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PageTransition from "./components/PageTransition";
import AIDemoWidget from "./components/AIDemoWidget";
import { useLenisScroll } from "./hooks/useLenisScroll";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AIPhoneAssistant from "./pages/services/AIPhoneAssistant";
import AIChatbot from "./pages/services/AIChatbot";
import WebsiteBuild from "./pages/services/WebsiteBuild";
import SEOVisibility from "./pages/services/SEOVisibility";
import GoogleAds from "./pages/marketing/GoogleAds";
import SocialMedia from "./pages/marketing/SocialMedia";
import EmailSMS from "./pages/marketing/EmailSMS";
import ReputationManagement from "./pages/marketing/ReputationManagement";
import ServicesOverview from "./pages/ServicesOverview";

function AnimatedRoute({ component: Component }: { component: React.ComponentType }) {
  return (
    <PageTransition>
      <Component />
    </PageTransition>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <Switch key={location}>
      <Route path="/" component={() => <AnimatedRoute component={Home} />} />
      <Route path="/services" component={() => <AnimatedRoute component={ServicesOverview} />} />
      <Route path="/services/ai-phone-assistant" component={() => <AnimatedRoute component={AIPhoneAssistant} />} />
      <Route path="/services/ai-chatbot" component={() => <AnimatedRoute component={AIChatbot} />} />
      <Route path="/services/website-build" component={() => <AnimatedRoute component={WebsiteBuild} />} />
      <Route path="/services/seo-visibility" component={() => <AnimatedRoute component={SEOVisibility} />} />
      <Route path="/marketing/google-ads" component={() => <AnimatedRoute component={GoogleAds} />} />
      <Route path="/marketing/social-media" component={() => <AnimatedRoute component={SocialMedia} />} />
      <Route path="/marketing/email-sms" component={() => <AnimatedRoute component={EmailSMS} />} />
      <Route path="/marketing/reputation-management" component={() => <AnimatedRoute component={ReputationManagement} />} />
      <Route path="/404" component={() => <AnimatedRoute component={NotFound} />} />
      <Route component={() => <AnimatedRoute component={NotFound} />} />
    </Switch>
  );
}

function App() {
  useLenisScroll();
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={true}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <AIDemoWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
