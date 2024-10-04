import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const HeadOfTheDepartment = () => {
  return (
    <div className="m-10 mr-20 ml-20 h-[400px] border border-gray-300 border-dashed rounded-lg flex flex-col justify-between p-5">
      <div className="flex items-center">
        <Image src={star} alt="star" width={24} />
        <h2 className="ml-2 font-bold text-lg">Words from our HOD</h2>
      </div>
      <div className="flex p-5 pl-10 pr-10">
        <Image
          src="https://utfs.io/f/kQP3nlH8TqeSeKzgDDQBzFbSNRv1gTxy3f2HGeUVuAoXW0sl"
          alt="ssc-hod"
          width={300}
          height={300}
        />
        <div className="p-10 pr-20 pl-20">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mt-5 text-yellow-300 text-sm">
            - Sandip Saha Choudhury (Head of the Department of Electrical
            Engineering at Academy of Technology)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadOfTheDepartment;
