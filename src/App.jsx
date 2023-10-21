import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { ClerkProviderWithRoutes } from "./components/auth/ClerkProviderWithRoutes";
import ScrollToTop from "./components/ScrollToTop";

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
