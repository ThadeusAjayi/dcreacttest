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



    // request(CONSTANTS.BASE_URL + unit, (err, resp, body) => {
    //     if (err) return err;
    //     if (body !== undefined || body != null)
    //         resp = body;
    //         console.log(body);
    // })
}

export const weather = resp;