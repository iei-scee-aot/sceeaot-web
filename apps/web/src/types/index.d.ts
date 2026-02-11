export interface prevTeamProps {
    id: number;
    headline: string;
    imageAlt: string;
    imageUrl: string;
}

export interface currentTeamProps {
    id: number;
    name: string;
    gridCols: string;
    members: teamMembersProps[]
}

export interface teamMembersProps {
    id?: number;
    name: string;
    designation: string;
    imagePath: string;
    links?: string[];
}