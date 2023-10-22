import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop";
import { ClerkProviderWithRoutes } from "./components/auth/ClerkProviderWithRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <ClerkProviderWithRoutes />
        </ScrollToTop>
      </BrowserRouter>
      <Toaster richColors position="bottom-center" />
    </>
  );
}
