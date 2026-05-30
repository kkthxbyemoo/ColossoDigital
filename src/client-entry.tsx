import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import "./styles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="min-h-screen">
          <Nav />
          <main>
            <Hero />
            <Audience />
            <Services />
            <Packages />
            <Process />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
