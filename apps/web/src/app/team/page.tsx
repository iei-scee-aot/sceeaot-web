import Divider2 from "@/components/ui/Divider";
import { currentTeam, prevTeam } from "@/constants/teams";
import { currentTeamProps, prevTeamProps } from "@/types";
import PrevTeamCardSection from "@/components/ui/PrevTeamCardSection";
import CurrentTeamSection from "@/components/ui/CurrentTeamSection";


const Page = () => {

  return (
      <>

        {prevTeam.length > 0
            &&
            prevTeam.map((team: prevTeamProps) => <PrevTeamCardSection key={team.id} {...team} />)
        }

        <Divider2 />

        {currentTeam.length > 0
            &&
            currentTeam.map((team: currentTeamProps) => <CurrentTeamSection key={team.id} {...team} />)
        }

      </>
  );
};

export default Page;
