import store from './Store';

export default async (unit) => {
    let res = await store(unit);
    return res;
}
