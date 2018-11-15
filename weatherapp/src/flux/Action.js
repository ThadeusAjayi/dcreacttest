import dispatcher from './Dispatcher';

export default async (unit) => {
    let res = await dispatcher(unit);
    return res;
}