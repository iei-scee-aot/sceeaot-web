"use client";

import { useEffect, useState } from "react";

const LOADING_SESSION_KEY = "scee-has-loaded";

export const useGlobalLoading = () => {
  const [shouldShowLoading, setShouldShowLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    // Check if this is a fresh session/reload
    const hasLoadedInSession = sessionStorage.getItem(LOADING_SESSION_KEY);

    if (!hasLoadedInSession) {
      // This is a fresh visit or reload - show loading
      setShouldShowLoading(true);
    } else {
      // This is navigation within the same session - skip loading
      setShouldShowLoading(false);
    }

    setIsInitialized(true);
  }, []);

  const markAsLoaded = () => {
    sessionStorage.setItem(LOADING_SESSION_KEY, "true");
    setShouldShowLoading(false);
  };

  const resetLoading = () => {
    sessionStorage.removeItem(LOADING_SESSION_KEY);
    setShouldShowLoading(true);
  };

  return {
    shouldShowLoading,
    isInitialized,
    markAsLoaded,
    resetLoading,
  };
};
