export default {
    BASE_URL: "http://api.openweathermap.org/data/2.5/weather?APPID=f20a0cfe2a9ec18765de12d728319adf&q=lagos,ng&units=",
    ICON_URL : (iconCode) => {
        return `http://openweathermap.org/img/w/${iconCode}.png`
    } 
        
}