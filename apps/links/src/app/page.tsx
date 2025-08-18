"use client";

import {
  LinksFooter,
  LinksGrid,
  LinksHeader,
  socialMediaLinks,
  websiteLinks,
} from "@/components/links";
import Divider from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";

const LinksPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="px-6 lg:px-12 py-8 lg:py-16">
          <LinksHeader />
        </div>
      </div>
      <Divider />

      {/* Website Links Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Website Links" />
        </div>
        <div className="px-6 lg:px-12 py-8 lg:py-16">
          <LinksGrid links={websiteLinks} />
        </div>
      </div>
      <Divider />

      {/* Social Media Links Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine="Social Media" />
        </div>
        <div className="px-6 lg:px-12 py-8 lg:py-16">
          <LinksGrid links={socialMediaLinks} />
        </div>
      </div>
      <Divider />

      {/* Footer Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="px-6 lg:px-12 py-8 lg:py-16">
          <LinksFooter />
        </div>
      </div>
    </div>
  );
};

export default LinksPage;