"use client";

interface ComingSoonProps {
  description?: string;
}

const ComingSoon = ({ description }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto px-4">
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
