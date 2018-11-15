import request from 'request';
import CONSTANTS from '../Constants';

let resp;
export default (unit) => {
    
    request(CONSTANTS.BASE_URL + unit, (err, resp, body) => {
        if (err) return err;
        if (body !== undefined || body != null)
            resp = body;
            console.log(body);
    })
}

export const weather = resp;