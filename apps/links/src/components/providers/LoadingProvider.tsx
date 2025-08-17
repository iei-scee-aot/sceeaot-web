"use client";

import { useGlobalLoading } from "@/hooks/useGlobalLoading";
import { createContext, ReactNode, useContext } from "react";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingContextType {
  shouldShowLoading: boolean;
  isInitialized: boolean;
  markAsLoaded: () => void;
  resetLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const loadingState = useGlobalLoading();

  const handleLoadingComplete = () => {
    loadingState.markAsLoaded();
  };

  // Don't render anything until we've determined if we should show loading
  if (!loadingState.isInitialized) {
    return null;
  }

  return (
    <LoadingContext.Provider value={loadingState}>
      {loadingState.shouldShowLoading && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}
      <div
        className={`transition-opacity duration-500 ${
          loadingState.shouldShowLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
};
