import { createContext, useContext, useState, useCallback } from 'react';

interface PageTransitionContextType {
  isTransitioning: boolean;
  triggerTransition: (callback: () => void, duration?: number) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = useCallback((callback: () => void, duration: number = 600) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, duration);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }
  return context;
}
