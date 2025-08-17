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

  useEffect(() => {
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
  }, []);

  const formatAccordionItems = (questions: Question[]) => {
    return questions.map((question) => ({
      question: `${question.id}. ${question.statement}`,
      answer: question.description,
    }));
  };

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
