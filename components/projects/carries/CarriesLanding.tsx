"use client";

import { LanguageProvider } from "./LanguageContext";
import { ReserveProvider } from "./ReserveContext";
import { CarriesNavbar } from "./sections/Navbar";
import { CarriesHero } from "./sections/Hero";
import { CarriesSobre } from "./sections/Sobre";
import { CarriesMenu } from "./sections/Menu";
import { CarriesEventos } from "./sections/Eventos";
import { CarriesVisite } from "./sections/Visite";
import { CarriesFooter } from "./sections/Footer";
import { ReserveDialog } from "./ReserveDialog";

export function CarriesLanding() {
  return (
    <LanguageProvider>
      <ReserveProvider>
        <div className="theme-carries min-h-screen">
          <CarriesNavbar />
          <main className="flex flex-col">
            <div className="relative">
              <CarriesHero />
              <CarriesSobre />
            </div>
            <CarriesMenu />
            <CarriesEventos />
            <CarriesVisite />
          </main>
          <CarriesFooter />
          <ReserveDialog />
        </div>
      </ReserveProvider>
    </LanguageProvider>
  );
}
