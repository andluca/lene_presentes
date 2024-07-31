import React from "react";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./providers/query-client";
import { router } from "./routes";
import ErrorBoundaryProvider from "./providers/error-boundary";


import "./global.css";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ErrorBoundaryProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundaryProvider>
    </React.StrictMode>
  );
};

export default App;
