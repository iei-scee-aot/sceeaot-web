import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const FacultyAdvisors = () => {
  return (
    <div
      className="mt-20 py-10 px-20 mx-20 bg-stone-700 rounded-3xl shadow-lg ">
      <div className="flex items-center mb-4">
        <Image src={star} alt="star" width={24} />
        <h2 className="ml-2 font-bold text-4xl">Our Guiding Stars</h2>
      </div>
      <div className="flex gap-24 justify-between p-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSlzIJ0Eia8mU7yTrJOcWACkx4IfqK63HXgR02"
            alt="Prof. Debjani Bhattacharya"
            height={220}
            width={220}
            className="rounded-lg hover:scale-105 transition-transform duration-200" 
          />
          <p className="pt-4 text-yellow-300 font-bold transform transition-transform duration-200 hover:scale-105"> 
            Prof. Debjani Bhattacharya
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSmgx6DwKe3rmHtzawIpdXjAl2W5ZPKD6xcfBe"
            alt="Dr. Abhinaba Dutta"
            height={220}
            width={220}
            className="rounded-lg hover:scale-105 transition-transform duration-200" 
          />
          <p className="pt-4 text-yellow-300 font-bold transform transition-transform duration-200 hover:scale-105"> 
            Dr. Abhinaba Dutta
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSlucBEYia8mU7yTrJOcWACkx4IfqK63HXgR02"
            alt="Prof. Abhijit Basu"
            height={220}
            width={220}
            className="rounded-lg hover:scale-105 transition-transform duration-200" 
          />
          <p className="pt-4 text-yellow-300 font-bold transform transition-transform duration-200 hover:scale-105">
            Prof. Abhijit Basu
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAdvisors;
