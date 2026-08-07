import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import AuthProvider from "./context/AuthContext";
import { PreviewProvider } from "./context/PreviewContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <AuthProvider>
                    <PreviewProvider>

                        <App />

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            newestOnTop
                            closeOnClick
                            pauseOnHover
                            draggable
                            theme="colored"
                            toastClassName="rounded-xl font-medium text-sm shadow-lg"
                        />

                    </PreviewProvider>
                </AuthProvider>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);