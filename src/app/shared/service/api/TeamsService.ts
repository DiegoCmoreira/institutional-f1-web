import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITeams {
    id: number,
    name: string,
    raceData: {
        fastestLaps: number,
        worldChamp: number,
        poles: number
    },
    carInfo: {
        powerUnit: string,
        chassis: string
    },
    teamInfo: {
        base: string,
        teamChief: string,
        technicalChief: string,
        firstEntry: number
    }
}

const getById = async (id: number): Promise<ITeams | ApiException> => {
    try {
        const { data } = await Api().get(`/teams/${id}`);
        return data as ITeams;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar detalhes do usuario');
    }
};

export const TeamsService = {
    getById,
}