"use client";

import { useEffect } from "react";

export default function RegistrationPage() {
  useEffect(() => {
    // Redirect immediately when the component mounts
    // window.location.href = "https://unstop.com/o/jlaz2pf";
  }, []);

  // This content will only be visible for a brief moment before redirect
  return (
    <div className="min-h-screen bg-background text-secondary flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg">Redirecting to registration...</p>
        <p className="text-sm text-gray-400 mt-2">
          If you are not redirected automatically,
          <a
            href="https://unstop.com/o/jlaz2pf"
            className="text-primary hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
