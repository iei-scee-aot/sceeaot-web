"use client";

import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import TeamCard from "@/components/ui/TeamCard";
import Image from "next/image";
import { useEffect, useState } from "react";

type TeamData = {
  previousTeam: {
    headline: string;
    imageAlt: string;
    imageUrl: string;
  };
  teams: Array<{
    name: string;
    gridCols: string;
    members: Array<{
      name: string;
      designation: string;
      imagePath: string;
      links: any;
    }>;
  }>;
};

const Page = () => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const res = await fetch("/data/team.json");
        if (!res.ok) throw new Error("Failed to fetch team data");
        const data = await res.json();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchTeamData();
  }, []);

  return (
    <>
      {teamData && (
        <>
          <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
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
              <div className="absolute inset-0 bg-gradient-to-b to-black/85 from-transparent"></div>
            </div>
          </div>
          <Divider2 />

          {/* Dynamic Team Sections */}
          {teamData.teams.map((team, teamIndex) => (
            <div key={teamIndex}>
              <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
                <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
                  <Headlines headLine={team.name} />
                </div>
                <div
                  className={`flex flex-wrap ${team.gridCols} gap-x-10 gap-y-5 md:gap-y-[4.5rem] mx-5 py-12 pb-5 md:pb-20 items-center justify-center`}
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
      )}
    </>
  );
};

export default Page;
