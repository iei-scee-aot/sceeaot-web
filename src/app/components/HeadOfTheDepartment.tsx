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
            <span className="text-xl text-yellow-300">&#x275D;</span>
            Our department has created a platform to deliver strong fundamentals
            based technical education. We strive to produce electrical engineers
            who are well suited for industry as well as society. As HOD of this
            department, I endeavor to transform them into creators of technology
            with good human values; commitment towards our nation. I on behalf
            of Department of Electrical Engineering of Academy of Technology
            encourage all my faculty members, technical staff and students to
            work tirelessly towards developing solutions to challenging problems
            leading to the socio-economic growth of the Nation.
            <span className="text-xl text-yellow-300">&#x275E;</span>
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
