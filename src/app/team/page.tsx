"use client";

import Image from "next/image";
import teamData from "../../../public/team.json";
import Divider2 from "../_components/Divider2";
import Headlines from "../_components/Headlines";
import Card from "./_components/Card";

const Page = () => {
  return (
    <>
      {/* Previous Team Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
        <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
          <Headlines headLine={teamData.previousTeam.headline} />
        </div>
        <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] flex flex-wrap justify-center">
          <Image
            alt={teamData.previousTeam.imageAlt}
            src={teamData.previousTeam.imageUrl}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent"></div>
        </div>
      </div>
      <Divider2 />

      {/* Dynamic Team Sections */}
      {teamData.teams.map((team, teamIndex) => (
        <div key={teamIndex}>
          <div className="w-[calc(100%-30px)] lg:w-[calc(100%-25rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine={team.name} />
            </div>
            <div
              className={`grid ${team.gridCols} gap-x-4 gap-y-8 md:gap-x-4 lg:gap-x-5 xl:gap-x-4 2xl:gap-x-6 lg:gap-y-12 px-2 md:px-4 lg:px-6 xl:px-4 2xl:px-8 py-8 lg:py-16 justify-items-center`}
            >
              {team.members.map((member, memberIndex) => (
                <Card
                  key={memberIndex}
                  Name={member.name}
                  Designation={member.designation}
                  imagePath={member.imagePath}
                  links={member.links}
                />
              ))}
            </div>
          </div>
          <Divider2 />
        </div>
      ))}
    </>
  );
};

export default Page;
