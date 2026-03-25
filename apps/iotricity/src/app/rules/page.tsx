import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import { event, eventRules, lastUpdated, supportEmail } from "../../../constants";

export default function RulesPage() {

  return (
    <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
      {eventRules.map((section, index) => (
        <div key={section.section}>
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine={section.section} />
            </div>

            <div className="px-4 lg:px-8 py-6 lg:py-8">
              <div className="space-y-6 lg:space-y-8">
                {section.rules.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-3 lg:space-y-4">
                    <h3 className="text-base lg:text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      {item.content}
                    </p>
                    {itemIndex < section.rules.length - 1 && (
                      <div className="border-b border-gray-700 pt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {index < eventRules.length - 1 && <Divider2 />}
        </div>
      ))}

      <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="px-4 lg:px-8 py-6 lg:py-8">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Important Note
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              These rules are subject to updates. Please check the official
              announcements for any modifications. For specific queries or
              clarifications, contact the organizing committee through official
              channels. Participation in {event.eventName} implies
              acceptance of all rules and guidelines mentioned above.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-600">
              <p className="text-xs text-gray-400">
                Last updated: {lastUpdated} | For support:{" "}
                {supportEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
