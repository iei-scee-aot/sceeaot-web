import TeamCard from "@/components/ui/TeamCard";
import Divider2 from "@/components/ui/Divider";
import { teamMembersProps, currentTeamProps } from "@/types";
import Headlines from "@/components/ui/Headlines";

const CurrentTeamSection = (props: currentTeamProps) => {
    const { members } = props;
    return (
        <div>
            <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
                <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
                    <Headlines headLine={props.name} />
                </div>
                <div
                    className={`flex flex-wrap ${props.gridCols} gap-x-10 gap-y-5 md:gap-y-[4.5rem] mx-5 py-12 pb-5 md:pb-20 items-center justify-center`}
                >
                    {members.map((member: teamMembersProps) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
            <Divider2 />
        </div>
    )
}
export default CurrentTeamSection
