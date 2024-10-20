import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const HeadOfTheDepartment = () => {
  return (
    <div
      className="mt-20 mb-0 pb-0 p-5 mx-20 flex flex-col rounded-3xl  "
      style={{
        backgroundColor: "rgba(59, 60, 60, 0.75)",
      }}
    >
      <div className="flex pl-3 items-center mb-4">
        <Image src={star} alt="star" width={24} />
        <h2 className="ml-2 font-bold text-3xl">Words from our HOD</h2>
      </div>
      <div className="flex px-3 flex-col md:flex-row justify-center ">
        <div className="flex flex-col items-center mt-5 flex-shrink-0">
          <div className="flex items-center justify-center">
            <Image
              src="https://utfs.io/f/kQP3nlH8TqeSeKzgDDQBzFbSNRv1gTxy3f2HGeUVuAoXW0sl"
              alt="ssc-hod"
              width={250}
              height={450}
              className="rounded-lg transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
          <div className="w-full mt-3 items-center text-center ">
            <span className="">
              Dr. Sandip Saha Chowdhury
            </span>
          </div>
        </div>
        <div className="flex-grow p-5 ml-5 pb-5">
          <p className="text-xl font-bold italic transform transition-transform duration-200 hover:scale-[1.02]">
            <span className="text-xl text-yellow-300 mr-2">&#x275D;</span>
            Our department has created a platform to deliver strong fundamentals
            based technical education. We strive to produce electrical engineers
            who are well suited for industry as well as society. As HOD of this
            department, I endeavor to transform them into creators of technology
            with good human values; commitment towards our nation. I on behalf
            of the Department of Electrical Engineering of Academy of Technology
            encourage all my faculty members, technical staff, and students to
            work tirelessly towards developing solutions to challenging problems
            leading to the socio-economic growth of the Nation.
            <span className="text-lg text-yellow-300 ml-2">&#x275E;</span>
          </p>
          <div className="w-full text-right mt-2 mb-0">
            <span className=" font-semibold text-yellow-400">
              - Dr. Sandip Saha Chowdhury <br />
              HOD, Department of Electrical Engineering.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadOfTheDepartment;
