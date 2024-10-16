import { ITeams } from "./TeamsService";

export const TeamsApi: ITeams[] = [
    {
        id: 1,
        name: "BWT Alpine F1 Team",
        raceData: {
            fastestLaps: 15,
            worldChamp: 2,
            poles: 20
        },
        carInfo: {
            powerUnit: "Renault",
            chassis: "A524"
        },
        teamInfo: {
            base: "Enstone, United Kingdom",
            teamChief: "Oliver Oakes",
            technicalChief: "David Sanchez",
            firstEntry: 1986
        }
    },
    {
        id: 2,
        name: "Aston Martin Aramco F1 Team",
        raceData: {
            fastestLaps: 3,
            worldChamp: 0,
            poles: 1
        },
        carInfo: {
            powerUnit: "Mercedes",
            chassis: "AMR24"
        },
        teamInfo: {
            base: "Silverstone, United Kingdom",
            teamChief: "Mike Krack",
            technicalChief: "Dan Fallows",
            firstEntry: 2018
        }
    },
    {
        id: 3,
        name: "Scuderia Ferrari",
        raceData: {
            fastestLaps: 262,
            worldChamp: 16,
            poles: 252
        },
        carInfo: {
            powerUnit: "Ferrari",
            chassis: "SF-24"
        },
        teamInfo: {
            base: "Maranello, Italy",
            teamChief: "Frédéric Vasseur",
            technicalChief: "Enrico Gualtieri",
            firstEntry: 1950
        }
    },
    {
        id: 4,
        name: "MoneyGram Haas F1 Team",
        raceData: {
            fastestLaps: 2,
            worldChamp: 0,
            poles: 1
        },
        carInfo: {
            powerUnit: "Ferrari",
            chassis: "VF-24"
        },
        teamInfo: {
            base: "Kannapolis, United States",
            teamChief: "Ayao Komatsu",
            technicalChief: "Andrea De Zordo",
            firstEntry: 2016
        }
    },
    {
        id: 5,
        name: "Stake F1 Team Kick Sauber",
        raceData: {
            fastestLaps: 7,
            worldChamp: 0,
            poles: 1
        },
        carInfo: {
            powerUnit: "Ferrari",
            chassis: "C44"
        },
        teamInfo: {
            base: "Hinwil, Switzerland",
            teamChief: "Alessandro Alunni Bravi",
            technicalChief: "James Key",
            firstEntry: 1993
        }
    },
    {
        id: 6,
        name: "McLaren Formula 1 Team",
        raceData: {
            fastestLaps: 170,
            worldChamp: 8,
            poles: 162
        },
        carInfo: {
            powerUnit: "Mercedes",
            chassis: "MCL38"
        },
        teamInfo: {
            base: "Woking, United Kingdom",
            teamChief: "Andrea Stella",
            technicalChief: "Peter Prodromou / Neil Houldey",
            firstEntry: 1966
        }
    },
    {
        id: 7,
        name: "Mercedes-AMG PETRONAS F1 Team",
        raceData: {
            fastestLaps: 100,
            worldChamp: 8,
            poles: 131
        },
        carInfo: {
            powerUnit: "Mercedes",
            chassis: "W15"
        },
        teamInfo: {
            base: "Brackley, United Kingdom",
            teamChief: "Toto Wolff",
            technicalChief: "James Allison",
            firstEntry: 1970
        }
    },
    {
        id: 8,
        name: "Visa Cash App RB Formula One Team",
        raceData: {
            fastestLaps: 4,
            worldChamp: 0,
            poles: 1
        },
        carInfo: {
            powerUnit: "Honda RBPT",
            chassis: "VCARB 01"
        },
        teamInfo: {
            base: "Faenza, Italy",
            teamChief: "Laurent Mekies",
            technicalChief: "Jody Egginton",
            firstEntry: 1985
        }
    },
    {
        id: 9,
        name: "Oracle Red Bull Racing",
        raceData: {
            fastestLaps: 98,
            worldChamp: 6,
            poles: 105
        },
        carInfo: {
            powerUnit: "Honda RBPT",
            chassis: "RB20"
        },
        teamInfo: {
            base: "Milton Keynes, United Kingdom",
            teamChief: "Christian Horner",
            technicalChief: "Pierre Waché",
            firstEntry: 1997
        }
    },
    {
        id: 10,
        name: "Williams Racing",
        raceData: {
            fastestLaps: 133,
            worldChamp: 9,
            poles: 128
        },
        carInfo: {
            powerUnit: "Mercedes",
            chassis: "FW46"
        },
        teamInfo: {
            base: "Grove, United Kingdom",
            teamChief: "James Vowles",
            technicalChief: "Pat Fry",
            firstEntry: 1978
        }
    }
];
