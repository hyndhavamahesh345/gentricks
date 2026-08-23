import React, { useState } from 'react';
import { useStackingSheets } from './hooks/useStackingSheets';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { CinematicHero } from './components/sections/CinematicHero';
import { CoreThesisSection } from './components/sections/CoreThesisSection';
import { EcosystemCinematic } from './components/sections/EcosystemCinematic';
import { JourneySection } from './components/sections/JourneySection';
import { EditorialPeople } from './components/sections/EditorialPeople';
import { VisualStoryScene } from './components/sections/VisualStoryScene';
import { WhatGentricksIsBuilding } from './components/sections/WhatGentricksIsBuilding';
import { FinalHorizon } from './components/sections/FinalHorizon';
import { Footer } from './components/sections/Footer';
import { ModalRoot } from './components/modals/ModalRoot';

export const App: React.FC = () => {
  // Initialize Stacking-Sheet Engine & IntersectionObserver
  useStackingSheets();

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [navVisible, setNavVisible] = useState(true);

  const handleOpenModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-gentricks-yellow selection:text-black">
      {/* Subtle Editorial Grain Overlay */}
      <div className="subtle-grain" />

      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Sticky Minimal Navigation Header */}
      <Navigation onOpenModal={handleOpenModal} visible={navVisible} />

      {/* Main Flow of Stacking Editorial Scenes */}
      <main className="relative w-full">
        {/* Scene 01: Hero & Introduction (z-10) */}
        <CinematicHero
          onOpenModal={handleOpenModal}
          onIntroComplete={() => setNavVisible(true)}
        />

        {/* Scene 02: The Idea & Manifesto (z-20) */}
        <CoreThesisSection onOpenModal={handleOpenModal} />

        {/* Scene 03: The Ecosystem Directory (z-30) */}
        <EcosystemCinematic onOpenModal={handleOpenModal} />

        {/* Scene 04: The Builder Pathway (z-40) */}
        <JourneySection />

        {/* Scene 05: People & Community Cohorts (z-50) */}
        <EditorialPeople />

        {/* Scene 06: Build & Technical Lab (z-60) */}
        <VisualStoryScene onOpenModal={handleOpenModal} />

        {/* Scene 07: Opportunities Catalog (z-70) */}
        <WhatGentricksIsBuilding onOpenModal={handleOpenModal} />

        {/* Scene 08: Final Horizon & Brand Resolution (z-80) */}
        <FinalHorizon onOpenModal={handleOpenModal} />
      </main>

      {/* Minimal Footer (z-90) */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Unified Interactive Modals */}
      <ModalRoot activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
