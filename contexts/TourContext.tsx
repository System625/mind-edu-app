'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const TOUR_STORAGE_KEY = 'mindedu_tour_completed';

interface TourContextType {
  tourActive: boolean;
  startTour: () => void;
  endTour: () => void;
  hasSeenTour: boolean;
}

const TourContext = createContext<TourContextType>({
  tourActive: false,
  startTour: () => {},
  endTour: () => {},
  hasSeenTour: false,
});

export const useTour = () => useContext(TourContext);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [tourActive, setTourActive] = useState(false);
  const [hasSeenTour, setHasSeenTour] = useState(true); // default true to avoid flash

  useEffect(() => {
    const seen = localStorage.getItem(TOUR_STORAGE_KEY);
    if (!seen) {
      setHasSeenTour(false);
      // Small delay so the page renders before tour starts
      const timer = setTimeout(() => setTourActive(true), 800);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const startTour = useCallback(() => {
    setTourActive(true);
  }, []);

  const endTour = useCallback(() => {
    setTourActive(false);
    setHasSeenTour(true);
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  }, []);

  return (
    <TourContext.Provider value={{ tourActive, startTour, endTour, hasSeenTour }}>
      {children}
    </TourContext.Provider>
  );
}
