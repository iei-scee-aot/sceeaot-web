import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const FacultyAdvisors = () => {
  return (
    <div className="m-10 mr-20 ml-20 h-[400px] border border-gray-300 border-dashed rounded-lg flex flex-col justify-between p-5">
      <div className="flex items-center">
        <Image src={star} alt="star" width={24} />
        <h2 className="ml-2 font-bold text-lg">Our Guilding Stars</h2>
      </div>
      <div className="flex justify-between  p-5 pr-20 pl-20">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSlzIJ0Eia8mU7yTrJOcWACkx4IfqK63HXgR02"
            alt="Prof. Debjani Bhattacharya"
            height={260}
            width={260}
          />
          <p className="pt-4 text-yellow-300 font-bold">
            Prof. Debjani Bhattacharya
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSmgx6DwKe3rmHtzawIpdXjAl2W5ZPKD6xcfBe"
            alt="Dr. Abhinaba Dutta"
            height={260}
            width={260}
          />
          <p className="pt-4 text-yellow-300 font-bold">Dr. Abhinaba Dutta</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSlucBEYia8mU7yTrJOcWACkx4IfqK63HXgR02"
            alt="Prof. Abhijit Basu"
            height={260}
            width={260}
          />
          <p className="pt-4 text-yellow-300 font-bold">Prof. Abhijit Basu</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAdvisors;
