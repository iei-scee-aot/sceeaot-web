import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const HeadOfTheDepartment = () => {
  return (
    <div
      className="mt-20 mx-auto rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: "rgba(59, 60, 60, 0.75)",
        width: 'calc(80% - 40px)',
        padding: '20px',
      }}
    >
      <div className="flex items-center mb-4">
        <Image src={star} alt="star" width={24} />
        <h2 className="ml-2 font-bold text-4xl">Words from our HOD</h2>
      </div>
      <div className="flex flex-grow">
        <div className="flex-shrink-0">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSeKzgDDQBzFbSNRv1gTxy3f2HGeUVuAoXW0sl"
            alt="ssc-hod"
            width={250}
            height={250}
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-grow p-5 ml-5">
          <p className="text-2xl font-bold italic transform transition-transform duration-200 hover:scale-105">
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
            <span className="text-xl text-yellow-300 ml-2">&#x275E;</span>
          </p>
          <p className="mt-5 font-bold text-yellow-300 text-2xl transform transition-transform duration-200 hover:scale-105">
            - Dr. Sandip Saha Chowdhury <br />
            HOD, Department of Electrical Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadOfTheDepartment;
