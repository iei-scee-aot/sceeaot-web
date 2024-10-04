import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordianSection = () => {
  return (
    <div className="m-10 mr-20 ml-20 h-[560px] flex flex-col justify-between p-5 mb-32">
      <h1 className="font-bold text-yellow-300 text-3xl">
        Most Frequenty Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full pt-5 pb-5">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is the main objective of the Electrical Engineering Club?
          </AccordionTrigger>
          <AccordionContent>
            The club aims to provide students with hands-on experience,
            technical skills, and knowledge beyond the classroom, fostering a
            community for students passionate about electrical engineering.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Who can join the Electrical Engineering Club?
          </AccordionTrigger>
          <AccordionContent>
            The club is open to all students interested in electrical
            engineering, regardless of their major or year of study.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What kind of projects or activities does the club work on?
          </AccordionTrigger>
          <AccordionContent>
            Members participate in projects related to circuits,
            microcontrollers, robotics, renewable energy systems, IoT, and other
            cutting-edge technologies. Workshops, hackathons, and competitions
            are also frequently organized.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Are there any membership fees?</AccordionTrigger>
          <AccordionContent>
            Membership fees may vary depending on the resources and materials
            required for certain projects. Most clubs keep fees minimal or free
            to encourage broader participation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do I need prior experience in electrical engineering to join?
          </AccordionTrigger>
          <AccordionContent>
            No prior experience is necessary! The club welcomes beginners and
            provides resources, tutorials, and mentorship to help everyone get
            involved.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            How can the club help me in my academic and professional career?
          </AccordionTrigger>
          <AccordionContent>
            By joining, you&apos;ll gain practical skills through hands-on
            projects, enhance your problem-solving abilities, and network with
            industry professionals, all of which can be valuable for internships
            and jobs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>How often does the club meet?</AccordionTrigger>
          <AccordionContent>
            Meetings are typically held weekly or bi-weekly, depending on the
            club&apos;s schedule and upcoming events. Special workshops and
            projects may require additional meetings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            What tools or software should I be familiar with to participate in
            the club&apos;s activities?
          </AccordionTrigger>
          <AccordionContent>
            While it&apos;s not mandatory to have prior knowledge, familiarity
            with tools like MATLAB, Arduino, Multisim, and circuit simulation
            software will be helpful. The club often provides introductory
            sessions on these tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            How can I propose a project or idea to the club?
          </AccordionTrigger>
          <AccordionContent>
            Members are encouraged to bring their project ideas! You can propose
            your idea during meetings, or approach the club leadership team, and
            if feasible, the club can allocate resources and guide members to
            work on it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            Does the club collaborate with other engineering departments or
            clubs?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Collaboration with other engineering or technology clubs is
            common, especially for interdisciplinary projects that require
            expertise from multiple domains, such as robotics or renewable
            energy systems.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordianSection;
