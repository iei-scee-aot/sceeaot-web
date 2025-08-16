"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultipleOpen?: boolean;
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItemComponent = ({
  item,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) => {
  return (
    <div className="w-full border-b border-gray-700 last:border-b-0 py-4 lg:py-6">
      <button
        onClick={onToggle}
        className={`w-full flex justify-between items-center text-left focus:outline-none transition-colors duration-200 font-medium text-[13px] lg:text-[1.5rem] ${
          isOpen ? "text-primary" : "text-secondary"
        }`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span>{item.question}</span>
        <img
          src="/icons/arrow-down.svg"
          alt="Toggle"
          className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div
          id={`accordion-content-${index}`}
          className="text-[13px] lg:text-[1.5rem] text-gray-500 mt-3 lg:mt-4 leading-relaxed animate-fade-in"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
};

const Accordion = ({
  items,
  className = "",
  allowMultipleOpen = false,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);

    if (allowMultipleOpen) {
      // Allow multiple items to be open
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    } else {
      // Only allow one item to be open at a time
      if (newOpenItems.has(index)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(index);
      }
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div
      className={`flex flex-col justify-center items-stretch py-8 lg:py-12 px-4 lg:px-8 ${className}`}
    >
      {items.map((item, index) => (
        <AccordionItemComponent
          key={index}
          item={item}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
