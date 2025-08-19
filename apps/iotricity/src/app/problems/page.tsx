"use client";

import Accordion from "@/components/ui/Accordion";
import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import { useEffect, useState } from "react";

interface Question {
  id: number;
  statement: string;
  description: string;
}

interface QuestionCategory {
  title: string;
  description: string;
  questions: Question[];
}

interface QuestionsData {
  "2nd_year_cse": QuestionCategory;
  "2nd_year_ee": QuestionCategory;
  "3rd_year_cse": QuestionCategory;
  "3rd_year_ee": QuestionCategory;
}

export default function ProblemsPage() {
  const [questionsData, setQuestionsData] = useState<QuestionsData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Date logic: show message until 30th August 2025 (inclusive)
  const now = new Date();
  const goLiveDate = new Date("2025-08-30T20:00:00+05:30");
  const beforeGoLive = now < goLiveDate;

  useEffect(() => {
    if (beforeGoLive) {
      setLoading(false);
      return;
    }
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/iotricitys2-questions.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch questions: ${response.status}`);
        }
        const data = await response.json();
        setQuestionsData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load questions"
        );
        setQuestionsData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [beforeGoLive]);

  const formatAccordionItems = (questions: Question[]) => {
    return questions.map((question) => ({
      question: `${question.id}. ${question.statement}`,
      answer: question.description,
    }));
  };

  if (beforeGoLive) {
    return (
      <div className="min-h-screen bg-background text-secondary">
        {/* Main container with side borders */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 min-h-screen flex flex-col items-center justify-center px-4 relative">
          {/* Main Message */}
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary font-apparat">
              Coming Soon
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-secondary/80 font-pxg leading-relaxed">
              Problem Statements will go live on{" "}
              <span className="font-semibold text-primary">
                30th August 2025
              </span>
            </p>
          </div>

          {/* Footer Message */}
          <div className="mt-12 text-center">
            <p className="text-sm text-secondary/60 font-pxg">
              Stay tuned! The challenges are being carefully crafted for you.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
        <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center justify-center py-12">
            <p className="text-lg">Loading problem statements...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !questionsData) {
    return (
      <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
        <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <p className="text-lg text-red-400 mb-2">
                Failed to load problem statements
              </p>
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const categories = [
    { key: "2nd_year_cse", data: questionsData["2nd_year_cse"] },
    { key: "2nd_year_ee", data: questionsData["2nd_year_ee"] },
    { key: "3rd_year_cse", data: questionsData["3rd_year_cse"] },
    { key: "3rd_year_ee", data: questionsData["3rd_year_ee"] },
  ];

  return (
    <main className="relative flex flex-col mx-auto min-h-screen bg-background text-secondary font-sans overflow-x-hidden">
      {categories.map((category, index) => (
        <div key={category.key}>
          <div className="w-[calc(100%-1.875rem)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine={category.data.title} />
            </div>

            <div className="px-4 lg:px-8 py-6 lg:py-8">
              <div className="mb-6 lg:mb-8">
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                  {category.data.description}
                </p>
              </div>

              {category.data.questions && category.data.questions.length > 0 ? (
                <div className="space-y-4">
                  <Accordion
                    items={formatAccordionItems(category.data.questions)}
                    allowMultipleOpen={true}
                    className="w-full"
                  />
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">
                    No problems available for this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>

          {index < categories.length - 1 && <Divider2 />}
        </div>
      ))}
    </main>
  );
}
