// SingleAccordian   -- >use to display 3 box in single box and also use with expand collpoase section ui
// OverUnderAccordian -- >use to display unuder over 2 box  in single box and also use with expand collpoase section ui
// SingleRowAccordian --> use to display name and  1 box in single row and also use with expand collpoase section ui
// ThreeBoxGameCard  -- > use to display 3 box spread money total in single row
// HomeTieAway  -->   use to display 3 box home tie away in single row
// HomeAway  --> use to display 3 box home tie away in single row but don't use tie
import { SportImage_Url } from './Environment'
import { getSportImageUrl } from '../Utility/functions/Helper'

export const HomePageList = [
  //(NBA doesnt come back till October and NHL doesnt come back till October)
  {
    id: 21,
    name: "NCAAF",
    label: "NCAAF",
  },
  // {
  //   id: 22,
  //   name: "NCAA",
  //   label: "NCAA",
  // },
  {
    id: 64,
    name: "NBA",
    label: "NBA",
  },

  // {
  //   id: 183,
  //   name: "MLB",
  //   label: "MLB",
  // },
  {
    id: 19,
    name: "NHL",
    label: "NHL",
  },
  {
    id: 20,
    name: "NFL",
    label: "NFL",
  },

  // {
  //   id: '482422922', /// add actual competition id for WNBA right now using dummy id
  //   name: "WNBA",
  //   label: "WNBA",
  // },
  // {
  //   id: 154919,
  //   name: "UFC",
  //   label: "UFC",

  // }
];

export const Promo = [
  {
    id: 1,
    name: "promo 1",
    image: require("../assests/images/1.png")

  },
  {
    id: 2,
    name: "promo 1",
    image: require("../assests/images/2.png")
  },
  {
    id: 3,
    name: "promo 1",
    image: require("../assests/images/3.png")
  },
  {
    id: 4,
    name: "promo 1",
    image: require("../assests/images/4.png")
  },
  {
    id: 5,
    name: "promo 1",
    image: require("../assests/images/5.png")
  },
];
export const AllSports = [
  {
    id: "389537",
    name: "Aussie Rules",
    label: "aussieRules",
    img: getSportImageUrl('aussie_rules')

  },
  {
    id: "154914",
    name: "Baseball",
    label: "baseball",
    img: getSportImageUrl('Baseball')
  },
  {
    id: "48242",
    name: "Basketball",
    label: "basketball",
    img: getSportImageUrl('Basketball')
  },
  {
    id: "131506",  //"6046",  //419
    name: "Football",
    label: "football",
    img: getSportImageUrl('Football')
  },
  {
    id: "687889",
    name: "Golf",
    label: "golf",
    img: getSportImageUrl('golf')
  },
  {
    id: "154919",
    name: "MMA",
    label: "mma",
    img: getSportImageUrl('MMA')
  },
  {
    id: "12",
    name: "Motor Sport",
    label: "motorsport",
    img: getSportImageUrl('motor_sport')
  },
  {
    id: "274792",
    name: "Rugby League",
    label: "rugbyleague",
    img: getSportImageUrl('rugby_league')
  },
  {
    id: "265917",
    name: "Table Tennis",
    label: "tabletennis",
    img: getSportImageUrl('table_tennis')
  },



  ////data is not coming


  {
    id: "154919",
    name: "Boxing",
    label: "boxing",
    img: getSportImageUrl('Boxing')
  },
  //IPL is over comes back in March)
  // {
  //   id: "452674",
  //   name: "Cricket",
  //   label: "Cricket",
  //   img:  getSportImageUrl('Cricket')
  // },
  // {
  //   id: "6",
  //   name: "Cycling",
  //   label: "Cycling",
  // },
  {
    id: "154923",
    name: "Darts",
    label: "darts",
    img: getSportImageUrl('Darts')
  },


  // {
  //   id: "1149120",
  //   name: "Lacrosse",
  //   label: "Lacrosse",
  // },

  {
    id: "35232",
    name: "Ice Hockey",
    label: "icehockey",
    img: getSportImageUrl('ice_hockey')
  },
  //Comes back in September
  // {
  //   id: "35709",
  //   name: "HandBall",
  //   label: "handBall",
  //   img:  getSportImageUrl('HandBall')
  // },


  {
    id: "274791",
    name: "Rugby Union",
    label: "rugbyunion",
    img: getSportImageUrl('rugby_union')
  },
  // {
  //   id: "15",
  //   name: "Snooker",
  //   label: "Snooker",
  // },
  // {
  //   id: "16",
  //   name: "Soccer",
  //   label: "Soccer",
  // },

  // {
  //   id: "54094",
  //   name: "Tennis",
  //   label: "Tennis",
  // },
  // {
  //   id: "19",
  //   name: "Volleyball",
  //   label: "Volleyball",
  // },
];
export const OtherLinks = [
  {
    id: "1",
    name: "Betting Guide",
    label: "bettingguide",
  },
  {
    id: "2",
    name: "Terms & Conditions",
    label: "termsconditions",
  },
  {
    id: "3",
    name: "Responsible Gaming",
    label: "responsiblegaming",
  },
  {
    id: "4",
    name: "House Rules",
    label: "houserules",
  },
  {
    id: "5",
    name: "Contact Us",
    label: "contact-us",
  },
  // {
  //   id: "5",
  //   name: "Support",
  //   label: "Support",
  // },
  // {
  //   id: "6",
  //   name: "Fantasy",
  //   label: "Fantasy",
  // },
];

export const popularArray = [
  {
    id: 154914,
    name: "Live",
    label: "Live",
    //img: "",
    count: 18,
  },
  // {
  //   id: 2,
  //   name: "Promos",
  //   label: "Promos",
  //  // img: "https://elasticbeanstalk-us-east-1-715244717776.s3.amazonaws.com/sports/badminton.svg",
  // },
  // {
  //   id: 64,
  //   name: "Boosts",
  //   label: "Boosts",
  //   // img: require("../../../assests/icon/rocket.png"),
  // },
  // {
  //   id: 4,
  //   name: "Casino",
  //   label: "Casino",
  //   // img: require('../../assests/icon/promos.png')
  // },
  //(NBA doesnt come back till October and NHL doesnt come back till October)
  {
    id: 64,
    name: "NBA",
    label: "nba",

  },
  // {
  //   id: 64,
  //   name: "NCAAB",
  //   label: "NCAAB",
  //   // img: require('../../assests/icon/promos.png')
  // },
  {
    id: 183,
    name: "MLB",
    label: "mlb",
    // img: require('../../assests/icon/promos.png')
  },
  // {
  //   id: 761, /// add actual competition id for WNBA right now using dummy id
  //   name: "WNBA",
  //   label: "wnba",
  // },
  {
    id: 154919,
    name: "UFC",
    label: "ufc",

  },
  //(NBA doesnt come back till October and NHL doesnt come back till October)
  {
    id: 19,
    name: "NHL",
    label: "nhl",
    // img: require('../../assests/icon/promos.png')
  },
  {
    id: 75,
    name: "NFL",
    label: "nfl",
    // img: require('../../assests/icon/promos.png')
  },
  // {
  //   id: 64,
  //   name: "Soccer",
  //   label: "Soccer",
  //   // img: require("../../../assests/icon/soccer.png"),
  // },
  // {
  //   id: 10,
  //   name: "Earn",
  //   label: "Earn",
  //   // img: require('../../assests/icon/promos.png')
  // },
  // {
  //   id: 11,
  //   name: "Racing",
  //   label: "Racing",
  //   // img: require('../../assests/icon/promos.png')
  // },
  // {
  //   id: 12,
  //   name: "Free to Play",
  //   label: "Free",
  //   // img: require("../../../assests/icon/promos.png"),
  // },
];

export const BasketBall_LEAGUE = [
  {
    id: "1",
    name: "Argentina LNB",
    path: "/Basketball/argentina-lnb",
  },
  {
    id: "2",
    name: "Brazil NBB",
    path: "/Basketball/brazil-nbb",
  },
  {
    id: "3",
    name: "Croatia A1 Liga",
    path: "/Basketball/croatia",
  },
  {
    id: "4",
    name: "Israel Super Basketball",
    path: "/Basketball/israel-super",
  },
  {
    id: "5",
    name: "Italy Serie A BB",
    path: "/Basketball/italy-serie",
  },

  {
    id: "64",
    name: "NBA",
    path: "/Basketball/nba",
  },

  {
    id: "7",
    name: "NCAA BasketBall",
    path: "/Basketball/ncaa",
  },
  {
    id: "8",
    name: "WNBA",
    path: "/Basketball/wnba",
  },
];
export const BaseBall_LEAGUE = [
  {
    id: "1",
    name: "Mexican Pacific League",
    path: "/baseball/pacific",
  },
  // {
  //   id: "1",
  //   name: "MLB",
  //   path: "/Baseball/mlb",
  // },

  // {
  //   id: "2",
  //   name: "Japanese Baseball",
  //   path: "/Baseball/japanese",
  // },
  // {
  //   id: "3",
  //   name: "Chinese Taipei Baseball",
  //   path: "/Baseball/chinese",
  // },
  // {
  //   id: "4",
  //   name: "Korean Baseball",
  //   path: "/Baseball/korean",
  // },
  // {
  //   id: "5",
  //   name: "Minor League Baseball",
  //   path: "/Baseball/minor",
  // },
];

export const Lacrosse_LEAGUE = [
  {
    id: "1",
    name: "National Lacrosse League",
    path: "/Lacrosse/National",
  },
  {
    id: "2",
    name: "Premier Lacrosse League",
    path: "/Lacrosse/Premier",
  },
  {
    id: "2",
    name: "NCAA",
    path: "/Lacrosse/NCAA",
  },
]


export const Football_LEAGUE = [
  // {
  //   id: "1",
  //   name: "NFL",
  //   path: "/Football/nfl",
  // },
  // {
  //   id: "2",
  //   name: "NCAA Football",
  //   path: "/Football/ncaa",
  // },
  {
    id: "3",
    name: "CFL",
    path: "/Football/cfl",
  },
  {
    id: "4",
    name: "USFL",
    path: "/Football/usfl",
  },
];
export const IceHockey_LEAGUE = [
  {
    id: "1",
    name: "NHL",
    path: "/icehockey/nhl",
  },
  {
    id: "2",
    name: "Swedish SHL",
    path: "/icehockey/swedish",
  },
  {
    id: "3",
    name: "IIHF World Championship",
    path: "/icehockey/iihf",
  },
];
export const MotorSport_LEAGUE = [
  {
    id: "1",
    name: "Formula 1",
    path: "/motorsport/formula1",
  },
  // {
  //   id: "2",
  //   name: "NASCAR",
  //   path: "/motorsport/nascar",
  // },
  {
    id: "3",
    name: "IndyCar",
    path: "/motorsport/indycar",
  },
];
export const TableTennis_LEAGUE = [
  {
    id: "1",
    name: "Czech Republic Pro League",
    path: "/tabletennis/czech",
  },
  {
    id: "2",
    name: "Russia Liga Pro",
    path: "/tabletennis/russia",
  },
];

export const RugbyUnion_LEAGUE = [
  {
    id: "1",
    name: "French Top 14",
    path: "/rougby-union/FrenchTop",
  },
  {
    id: "2",
    name: "United Rugby Championship",
    path: "/rougby-union/UnitedRugbyChamp",
  },
  {
    id: "3",
    name: "Gallagher Premiership",
    path: "/rougby-union/GallaPrem",
  },
  {
    id: "4",
    name: "European Champions Cup",
    path: "/rougby-union/EuropChampsCup",
  },
  {
    id: "5",
    name: "Women's Rugby World Cup",
    path: "/rougby-union/WomenRugbyWorldCup",
  },
  {
    id: "64",
    name: "World Cup 2023",
    path: "/rougby-union/WorldCup",
  },
  {
    id: "7",
    name: "The Six Nations",
    path: "/rougby-union/SixNation",
  },
  {
    id: "8",
    name: "Major League Rugby",
    path: "/rougby-union/MajorLeagueRugby",
  },
];

export const Rugbyleague_LEAGUE = [
  {
    id: "1",
    name: "NRL",
    path: "/rougby-league/nrl",
  },
  {
    id: "2",
    name: "Super League",
    path: "/rougby-league/SuperLeague",
  },
];
export const Cricket_LEAGUE = [
  {
    id: "1",
    name: "Indian Premier League",
    path: "/cricket/ipl",
  },
  {
    id: "2",
    name: "Test Matches",
    path: "/cricket/testmatches",
  },
];

export const Socccer_LEAGUE = [
  // {
  //   id: "1",
  //   name: "World Cup",
  //   path: "/worldcup",
  // },
  {
    id: "2",
    name: "Spanish La Liga",
    path: "/Spanish"
  },
  {
    id: "3",
    name: "German Bundesliga",
    path: "/German"
  },
  {
    id: "4",
    name: "Italian Series A",
    path: "/Italian"
  },
  {
    id: "5",
    name: "UEFA Championship League",
    path: "/UEFA"
  },
  {
    id: "6",
    name: "Australian A",
    path: "/Australian"
  },
];