import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/ai-phone-assistant" component={AIPhoneAssistant} />
      <Route path="/services/ai-chatbot" component={AIChatbot} />
      <Route path="/services/website-build" component={WebsiteBuild} />
      <Route path="/services/seo-visibility" component={SEOVisibility} />
      <Route path="/marketing/google-ads" component={GoogleAds} />
      <Route path="/marketing/social-media" component={SocialMedia} />
      <Route path="/marketing/email-sms" component={EmailSMS} />
      <Route path="/marketing/reputation-management" component={ReputationManagement} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={true}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
