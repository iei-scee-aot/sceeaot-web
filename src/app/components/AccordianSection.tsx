import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordianSection = () => {
  return (
    <div className="m-10 w-[90%] mx-auto h-auto flex flex-col justify-between p-5 bg-black-800 rounded-lg shadow-lg">
      <h1 className="font-bold text-yellow-300 text-3xl mb-5">
        Most Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            question: "What is the main objective of the Electrical Engineering Club?",
            answer: "The club aims to provide students with hands-on experience, technical skills, and knowledge beyond the classroom, fostering a community for students passionate about electrical engineering.",
          },
          {
            question: "Who can join the Electrical Engineering Club?",
            answer: "The club is open to all students interested in electrical engineering, regardless of their major or year of study.",
          },
          {
            question: "What kind of projects or activities does the club work on?",
            answer: "Members participate in projects related to circuits, microcontrollers, robotics, renewable energy systems, IoT, and other cutting-edge technologies. Workshops, hackathons, and competitions are also frequently organized.",
          },
          {
            question: "Are there any membership fees?",
            answer: "Membership fees may vary depending on the resources and materials required for certain projects. Most clubs keep fees minimal or free to encourage broader participation.",
          },
          {
            question: "Do I need prior experience in electrical engineering to join?",
            answer: "No prior experience is necessary! The club welcomes beginners and provides resources, tutorials, and mentorship to help everyone get involved.",
          },
          {
            question: "How can the club help me in my academic and professional career?",
            answer: "By joining, you'll gain practical skills through hands-on projects, enhance your problem-solving abilities, and network with industry professionals, all of which can be valuable for internships and jobs.",
          },
          {
            question: "How often does the club meet?",
            answer: "Meetings are typically held weekly or bi-weekly, depending on the club's schedule and upcoming events. Special workshops and projects may require additional meetings.",
          },
          {
            question: "What tools or software should I be familiar with to participate in the club's activities?",
            answer: "While it's not mandatory to have prior knowledge, familiarity with tools like MATLAB, Arduino, Multisim, and circuit simulation software will be helpful. The club often provides introductory sessions on these tools.",
          },
          {
            question: "How can I propose a project or idea to the club?",
            answer: "Members are encouraged to bring their project ideas! You can propose your idea during meetings, or approach the club leadership team, and if feasible, the club can allocate resources and guide members to work on it.",
          },
          {
            question: "Does the club collaborate with other engineering departments or clubs?",
            answer: "Yes! Collaboration with other engineering or technology clubs is common, especially for interdisciplinary projects that require expertise from multiple domains, such as robotics or renewable energy systems.",
          },
        ].map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="py-3 text-lg font-semibold hover:bg-gray-700 transition-all">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="py-2 text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordianSection;
