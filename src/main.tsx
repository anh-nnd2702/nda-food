import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientID = import.meta.env.VITE_GG_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId={clientID}>
    <App />
  </GoogleOAuthProvider>
  // </StrictMode>
);
