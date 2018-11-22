import dispatcher from './Dispatcher';

export default action;

const action = async (unit) => {
    let res = await dispatcher(unit);
    return res;
};

module.exports = action();