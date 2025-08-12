"use client";

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2
          className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-4"
          style={{
            fontFamily: "KMR Apparat1",
            WebkitTextStroke: "1px var(--primary)",
            color: "transparent",
          }}
        >
          {title}
        </h2>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl lg:text-2xl text-primary font-medium">
            Coming Soon
          </span>
        </div>

        {description && (
          <p className="text-base lg:text-lg text-secondary/70 leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-typing-dots"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-typing-dots"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-typing-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
