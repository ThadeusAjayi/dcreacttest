import dispatcher from './Dispatcher';


const action = async (unit) => {
    let res = await dispatcher(unit);
    return res;
};

export default action;
//module.exports = action();