import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

const FacultyAdvisors = () => {
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
        <h2 className="ml-2 font-bold text-4xl">Our Guiding Stars</h2>
      </div>
      <div className="flex justify-between p-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://utfs.io/f/kQP3nlH8TqeSlzIJ0Eia8mU7yTrJOcWACkx4IfqK63HXgR02"
            alt="Prof. Debjani Bhattacharya"
            height={260}
            width={260}
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
            height={260}
            width={260}
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
            height={260}
            width={260}
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
