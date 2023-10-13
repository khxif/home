import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { ClerkProviderWithRoutes } from "./components/auth/ClerkProviderWithRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
      <Toaster richColors position="bottom-center" />
    </>
  );
}
