import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormValidationPage } from "./components/pages/FormValidationPage";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/LoginPage";
import { StatisticsPage } from "./components/pages/StatisticsPage";
import { TranscriptionV2Page } from "./components/pages/TranscriptionV2Page";
import ProtectedRoute from "./utilityComponents";

const router = createBrowserRouter([
  {
    path: "/",

    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/results",
    // element: <ResultUnavailablePage />,
    element: <StatisticsPage />,
  },
  {
    path: "/v2-landing",
    element: (
      <ProtectedRoute>
        <TranscriptionV2Page />
      </ProtectedRoute>
    ),
  },
  {
    path: "/validators",
    element: (
      <ProtectedRoute>
        <FormValidationPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="92393687539-22riomfdrm15bi7p3vellhe3rqr0nja4.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
