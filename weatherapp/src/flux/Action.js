import dispatcher, { showWeather} from './Dispatcher';

export default (unit) => {
    dispatcher(unit);
}


export function getWeather () {
    return showWeather()
}