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
import { JoinSection } from './components/sections/JoinSection';
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
        {/* Scene 01: Hero & Introduction (z-10, TEXT + IMAGE) */}
        <CinematicHero
          onOpenModal={handleOpenModal}
          onIntroComplete={() => setNavVisible(true)}
        />

        {/* Scene 02: The Idea & Manifesto (z-20, IMAGE + TEXT) */}
        <CoreThesisSection onOpenModal={handleOpenModal} />

        {/* Scene 03: The Ecosystem Directory (z-30, TEXT + INTERACTIVE IMAGE) */}
        <EcosystemCinematic onOpenModal={handleOpenModal} />

        {/* Scene 04: The Builder Pathway (z-40, TEXT + IMAGE) */}
        <JourneySection />

        {/* Scene 05: People & Community (z-50, IMAGE + TEXT) */}
        <EditorialPeople />

        {/* Scene 06: Build & Technical Lab (z-60, IMAGE + TEXT) */}
        <VisualStoryScene onOpenModal={handleOpenModal} />

        {/* Scene 07: Opportunities Directory (z-70, LIST + TALL IMAGE) */}
        <WhatGentricksIsBuilding onOpenModal={handleOpenModal} />

        {/* Scene 08: Join The Ecosystem (z-80, CTA + WIDE IMAGE) */}
        <JoinSection onOpenModal={handleOpenModal} />

        {/* Scene 09: Final Statement & Resolution (z-90, BLACK / MINIMAL) */}
        <FinalHorizon onOpenModal={handleOpenModal} />
      </main>

      {/* Minimal Footer (z-100) */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Unified Interactive Modals */}
      <ModalRoot activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
