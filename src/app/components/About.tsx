import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

interface AboutSectionProps {
  paddingHorizontal?: string;
}

const AboutSection =() => {
  return (
    <div
      className="mt-20 py-10 px-20 mx-20 bg-stone-700 rounded-3xl shadow-lg" >
      <div className="flex items-center mb-3">
        <Image className="mt-[1.5rem]" src={star} alt="star" width={24} />
        <h2 className="mt-[1.5rem] ml-2 font-bold text-3xl">About Our Student Chapter</h2>
      </div>
      <div className="text-lg h-full p-5 overflow-auto">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
