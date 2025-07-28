"use client";

import Divider2 from "@/components/Divider2";
import Headlines from "@/components/Headlines";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";
import teamData from "../../../public/team.json";

const Page = () => {
  return (
    <>
      {/* Previous Team Section */}
      <div className="w-[calc(100%-30px)] lg:w-[calc(100%-16rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
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
          <div className="w-[calc(100%-30px)] lg:w-[calc(100%-16rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
              <Headlines headLine={team.name} />
            </div>
            <div
              className={`flex flex-wrap ${team.gridCols} gap-x-10 gap-y-20 md:gap-y-14 py-14 md:pb-16 items-center justify-center`}
            >
              {team.members.map((member, memberIndex) => (
                <TeamCard
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
