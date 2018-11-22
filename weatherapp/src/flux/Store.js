import CONSTANTS from '../Constants';

let resp;
export default async (unit) => {

    try {
        const body = await fetch(CONSTANTS.BASE_URL + unit)

        const json = await body.json();
        return json;

    } catch {
        return "There was an error";
    }

}

export const weather = resp;