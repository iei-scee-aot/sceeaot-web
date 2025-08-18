"use client";

import {
  LinksFooter,
  LinksGrid,
  LinksHeader,
  linksData,
} from "@/components/links";

const LinksPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div>
        {/* Header */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto">
          <div className="px-6 lg:px-12 py-8 lg:py-16">
            <LinksHeader />
            <LinksGrid links={linksData} />
            <LinksFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
