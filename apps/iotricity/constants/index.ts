import { EventInfo, FAQItem, Mentor, PrizePool, TrackPrize, Winners } from "../types";

export const eventMentors: Mentor[] = [];

export const trackPrizes: TrackPrize[] = [];

export const event: EventInfo = {
    registrationEnd: "2026-04-09T20:00:00",

    registrationLink: "https://forms.gle/XLBaguGiTHRN3vVT7",

    heroBackground: "/images/bg.png",

    patternBackground: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFBE00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

    eventName: "ESCAYPE",

    eventLogo: "/images/logo_primary_1.svg",

    loadingGreetings: "Welcome ESCAYPE the gaming event",

    eventHeroSectionDescription: "The Ultimate Gaming Event hosted by IEI SCEE AOT", 

    eventYear: "2026",

    eventAboutSubDescription: "Competition • Strategy • Community",

    eventAboutDescription: [
      "Welcome to ESCAYPE – the ultimate battleground where skill, strategy, and esports passion collide! Organized by SCEE, this electrifying multi-title gaming event brings together competitive players across some of the most popular titles — Valorant, BGMI, Free Fire, and E-Football.",
      
      "Set to take place from 12th to 16th April 2026, ESCAYPE is a fully online tournament designed to unite gamers from all backgrounds. With a massive prize pool of ₹21,000 along with exciting goodies for all participants, the event promises high-stakes competition and rewarding experiences for everyone involved.",
      
      "ESCAYPE is not just about winning — it’s about proving your dominance, teamwork, and tactical brilliance. Whether you’re a sharpshooter in Valorant, a survival expert in BGMI, a fast-paced Free Fire player, or a maestro in E-Football, this platform gives you the stage to shine.",
      
      "The competition structure ensures rewarding outcomes across all games, with cash prizes distributed to top performers in each category, alongside exclusive goodies for everyone who joins the battle.",

      "ESCAYPE is where competitive spirit meets community, where gamers connect, compete, and create unforgettable moments. Step into the arena, showcase your skills, and rise above the rest",

      "The escaype begins here… are you ready?!!"
    ],
    
    eventCinematicDesctiption: "🚀 The wait is over! Dive into the action, intense battles, and clutch plays from our Ultimate Gaming Arena 🎮⚡",

    // trailer: "https://www.youtube.com/embed/-Bq2TGLDlDg",

    eventStart: "2026-04-12",
    eventEnd: "2026-04-16",
    eventWinnersDate: "2026-04-16T16.00.00",
}

export const faqData: FAQItem[] = [
  {
    question: "What is ESCAYPE?",
    answer: "ESCAYPE is a multi-title online esports tournament organized by SCEE, featuring competitive gameplay across Valorant, BGMI, Free Fire, and E-Football."
  },
  {
    question: "When will ESCAYPE take place?",
    answer: "The event is scheduled from 12th to 16th April 2026 and will be conducted entirely online."
  },
  {
    question: "Who can participate in ESCAYPE?",
    answer: "ESCAYPE is open to undergraduate students of Academy of Technology (1st to 4th year). Mixed teams across different years and departments are allowed."
  },
  {
    question: "What games are included in the event?",
    answer: "The tournament includes Valorant, BGMI (Battlegrounds Mobile India), Free Fire, and E-Football."
  },
  {
    question: " What are the team size requirements?",
    answer: "Valorant requires 4 players per team, while BGMI and Free Fire require a minimum of 3 players per team. E-Football is played individually."
  },
  {
    question: "Can a participant or team register for multiple games?",
    answer: "Yes, a single team or participant can register for multiple games, but each registration must be submitted separately."
  },
  {
    question: "How can we register for ESCAYPE?",
    answer: "Registration will be conducted online through the official ESCAYPE platform. All participant or team details must be submitted before the deadline."
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fees are ₹150 per team for Valorant, ₹120 per team for BGMI and Free Fire, and ₹30 per participant for E-Football."
  },
  {
    question: "Is there any prize pool?",
    answer: "Yes, ESCAYPE features a total prize pool of ₹21,000, along with additional goodies for all participants."
  },
  {
    question: "Can team members be changed after registration?",
    answer: "No, team composition cannot be changed after the registration deadline."
  },
  {
    question: " Is ESCAYPE suitable for beginners?",
    answer: "Yes, both beginners and experienced players are welcome to participate and compete."
  },
  {
    question: "Do I need any specific setup to participate?",
    answer: "Since the event is online, participants must ensure a stable internet connection and the required gaming setup for their respective games."
  },
  {
    question: " What is the format of the tournament?",
    answer: "The format will vary for each game and may include qualifiers, knockout rounds, and finals. Detailed rules will be shared with registered participants."
  },
  {
    question: "How will match schedules be communicated?",
    answer: "Match timings and updates will be shared through official communication channels after registration."
  },
  {
    question: "Is there any limit on the number of teams per game?",
    answer: "Slots may be limited for each game, and registrations will be accepted on a first-come, first-served basis."
  },
  {
    question: " What happens if a player disconnects during a match?",
    answer: "Handling of disconnections will follow game-specific rules, which will be communicated prior to the matches."
  },
  {
    question: " Are there any restrictions on in-game names or IDs?",
    answer: "Participants are expected to use appropriate and non-offensive in-game names. Any violation may lead to penalties or disqualification."
  },
  {
    question: "Can we participate using multiple accounts?",
    answer: "No, participants are not allowed to use multiple accounts. Account sharing or smurfing is strictly prohibited."
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, certificates or participation recognition may be provided to all registered participants."
  },
];

export const eventSchedule = [
  {
    id: 1,
    title: "Online Registration Opens",
    date: "March 27, 2026",
    type: "Registration",
  },
  {
    id: 2,
    title: "Offile Registration Opens",
    date: "April 01, 2026",
    type: "Registration",
  },
  {
    id: 3,
    title: "Registration Ends",
    date: "April 09, 2026",
    type: "Registration",
  },
  {
    id: 4,
    title: "Day 1",
    date: "April 12, 2026",
    type: "Tournament",
  },
  {
    id: 5,
    title: "Day 2",
    date: "April 13, 2026",
    type: "Tournament",
  },
  {
    id: 6,
    title: "Day 3 - Final Round",
    date: "April 16, 2026",
    type: "Tournament",
  },
  {
    id: 7,
    title: "Prize Distribution",
    date: "April 16, 2026",
    type: "Ceremony",
  }
]

export const eventRules = [
  {
    section: "General Rules",
    rules: [
      {
        title: "Eligibility Criteria",
        content: "ESCAYPE is open to all undergraduate students of Academy of Technology (1st to 4th year). Mixed teams across departments and years are encouraged. Participants must register for their respective games and ensure fair play in this online tournament."
      },
      {
        title: "Team Formation",
        content: "Teams must meet game-specific requirements: 4 members for Valorant, and a minimum of 3 members for BGMI and Free Fire. Mixed teams across different years and departments are allowed. Team composition cannot be changed after the registration deadline."
      },
      {
        title: "Registration Process",
        content: "Registration will be conducted online through the official ESCAYPE platform with complete participant/team details. A single team or participant can register for multiple games, but each entry must be submitted separately. The registration deadline is strictly enforced, and no late entries will be accepted."
      },
      {
        title: "Code of Conduct",
        content: "All participants must maintain professional behavior, ensure respectful communication, and follow fair play throughout the event. Any form of harassment, misconduct, hacking, smurfing, or account sharing is strictly prohibited and will lead to immediate disqualification. Participants must adhere to all event rules and guidelines."
      }
    ]
  }
];

export const eventWinners: Winners[] = []

export const prizePool: PrizePool[] = [
  {
    event: "Game 1",
    gradientClass: "group-hover:from-orange-500/20 group-hover:to-yellow-500/10",
    game: "BGMI",
    totalPrizePool: "₹5K",
    prizes: [
      {
        rank: "1ST",
        amount: "₹3K"
      },
      {
        rank: "2ND",
        amount: "₹2K"
      },
      {
        rank: "3RD",
        amount: "₹1K"
      }
    ]
  },
  {
    event: "Game 2",
    game: "Free Fire",
    gradientClass: "group-hover:from-red-600/20 group-hover:to-orange-500/10",
    totalPrizePool: "₹5K",
    prizes: [
      {
        rank: "1ST",
        amount: "₹3K"
      },
      {
        rank: "2ND",
        amount: "₹2K"
      },
      {
        rank: "3RD",
        amount: "₹1K"
      }
    ]
  },
  {
    event: "Game 3",
    game: "E-Football",
    gradientClass: "group-hover:from-blue-600/20 group-hover:to-cyan-400/10",
    totalPrizePool: "₹3K",
    prizes: [
      {
        rank: "1ST",
        amount: "₹1.5K"
      },
      {
        rank: "2ND",
        amount: "₹1K"
      },
      {
        rank: "3RD",
        amount: "₹500"
      }
    ]
  },
  {
    event: "Game 4",
    game: "Valorant",
    gradientClass: "group-hover:from-rose-600/20 group-hover:to-red-600/10",
    totalPrizePool: "₹5K",
    prizes: [
      {
        rank: "1ST",
        amount: "₹3K"
      },
      {
        rank: "2ND",
        amount: "₹2K"
      },
      {
        rank: "3RD",
        amount: "₹1K"
      }
    ]
  },  
]

const dummyData: Winners[] = [
  {
    event: "Game 1",
    gradientClass: "group-hover:from-orange-500/20 group-hover:to-yellow-500/10",
    game: "BGMI",
    championsName: "Team 1",
    prizes: [
      {
        rank: "1ST",
        teamName: "Team 1"
      },
      {
        rank: "2ND",
        teamName: "Team 2"
      },
      {
        rank: "3RD",
        teamName: "Team 3"
      }
    ]
  },
  {
    event: "Game 2",
    game: "Free Fire",
    gradientClass: "group-hover:from-red-600/20 group-hover:to-orange-500/10",
    championsName: "Team 2",
    prizes: [
      {
        rank: "1ST",
        teamName: "Team 1"
      },
      {
        rank: "2ND",
        teamName: "Team 2"
      },
      {
        rank: "3RD",
        teamName: "Team 3"
      }
    ]
  },
  {
    event: "Game 3",
    game: "E-Football",
    gradientClass: "group-hover:from-blue-600/20 group-hover:to-cyan-400/10",
    championsName: "Team 3",
    prizes: [
      {
        rank: "1ST",
        teamName: "Team 1"
      },
      {
        rank: "2ND",
        teamName: "Team 2"
      },
      {
        rank: "3RD",
        teamName: "Team 3"
      }
    ]
  },
  {
    event: "Game 4",
    game: "Valorant",
    gradientClass: "group-hover:from-rose-600/20 group-hover:to-red-600/10",
    championsName: "Team 4",
    prizes: [
      {
        rank: "1ST",
        teamName: "Team 1"
      },
      {
        rank: "2ND",
        teamName: "Team 2"
      },
      {
        rank: "3RD",
        teamName: "Team 3"
      }
    ]
  }, 
]

export const hasTrackPrizes = false;
export const hasSponsors = false;
export const timelineVisible = true;

export const lastUpdated = "March, 2026";
export const supportEmail = "sceeaot@gmail.com"