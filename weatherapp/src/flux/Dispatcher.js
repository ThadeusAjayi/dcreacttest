import store, { weather } from './Store';

export default (unit) => {
    store(unit);
}

export function showWeather () {
    console.log(weather);
    return weather;
}