import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { HomeScreen } from "./pages/Home/Home";
import { SchemaDetailScreen } from "./pages/SchemaDetails/schema-details.screen";
import { AttestationDetails } from "./pages/attestation-details/attestation-details.screen";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        errorElement: <h1>404 Not Found</h1>,
      },
      {
        path: "/schema/view/:schemaId",
        element: <SchemaDetailScreen />,
        errorElement: <h1>404 Not Found</h1>,
      },
      {
        path: "/attestation/view/:attestationId",
        element: <AttestationDetails />,
      },
    ],
  },
]);
