import Headlines from '../ui/Headlines';
import { Mentor } from '../../../types';
import MentorsCard from '../ui/MentorsCard';
import Divider from '../ui/Divider';

const MentorSection = ({ mentors }: { mentors: Mentor[] }) => {

  const isMentorsVisible = mentors.length > 0 ? true : false;
    
  return (
    <>
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="Commentary Panel" />
          </div>
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed flex justify-center items-center">
              {isMentorsVisible 
                ? (
                  <div className="grid grid-cols-1 mx-5 py-12 pb-5 md:pb-20 place-items-center">
                    {mentors.map((mentor, index) => (
                      <MentorsCard
                        key={index}
                        Name={mentor.name}
                        Designation={mentor.designation}
                        imagePath={mentor.imagePath}
                        links={mentor.links}
                      />
                    ))}
                  </div>
                )
                : (
                  <div className='pb-5 md:pb-20 place-items-center'>
                    <MentorsCard />
                  </div>
                )
              }
          </div>
        </div> 
        <Divider />
    </>
  )
}

export default MentorSection