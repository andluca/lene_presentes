import React from "react";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./providers/query-client";
import { router } from "./routes";
import ErrorBoundaryProvider from "./providers/error-boundary";
import "./global.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ErrorBoundaryProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundaryProvider>
      <ToastContainer />
    </React.StrictMode>
  );
};

export default App;
