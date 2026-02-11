import Image from "next/image";
import Headlines from "@/components/ui/Headlines";
import { prevTeamProps } from "@/types";


const PrevTeamCardSection = ( props: prevTeamProps) => {
    return (
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
            <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
                <Headlines headLine={props.headline} />
            </div>
            <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] flex flex-wrap justify-center">
                <Image
                    alt={props.imageAlt}
                    src={props.imageUrl}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <div className="absolute inset-0 bg-gradient-to-b to-black/85 from-transparent"></div>
            </div>
        </div>
    )
}
export default PrevTeamCardSection
