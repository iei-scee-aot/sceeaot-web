"use client";

interface EventScheduleItemProps {
  title: string;
  icon: string;
  date: string;
  time: string;
  type: string;
  isLast?: boolean;
}

const EventScheduleItem = ({
  title,
  icon,
  date,
  time,
  type,
  isLast = false,
}: EventScheduleItemProps) => {
  const getTypeStyles = (type: string) => {
    // Using only colors from globals.css: primary, secondary, background, foreground
    switch (type) {
      case "start":
        return "bg-primary text-background border-primary";
      case "end":
        return "bg-primary text-background border-primary";
      case "session":
        return "bg-primary/20 text-primary border-primary/40";
      case "judging":
      case "announcement":
        return "bg-secondary/10 text-secondary border-secondary/30";
      case "finale":
      case "result":
        return "bg-primary/30 text-primary border-primary/60";
      case "ceremony":
        return "bg-primary text-background border-primary";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  return (
    <div className="flex items-start gap-4 relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-primary/30 z-0"></div>
      )}

      {/* Timeline Node */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${getTypeStyles(
          type
        )} z-10 flex-shrink-0`}
      >
        <span className="text-lg">{icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${
            type === "start" || type === "end" || type === "ceremony"
              ? "bg-primary/10 border-primary/40"
              : "bg-secondary/5 border-secondary/20"
          }`}
        >
          <h3
            className="font-bold text-base lg:text-lg mb-2 text-secondary"
            style={{ fontFamily: "KMR Apparat1" }}
          >
            {title}
          </h3>
          <div className="space-y-1">
            <p className="text-sm lg:text-base text-primary font-medium">
              {date}
            </p>
            {time && (
              <p className="text-sm text-secondary/80 font-mono">{time}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScheduleItem;
