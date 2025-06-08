import './WeatherCard.css'
import { weatherOptions, defaultWeatherOptions } from '../../utils/constants.js'


function WeatherCard( { weatherData } ) {
const filteredOption = weatherOptions.filter((option) => {
    return (
        option.day === weatherData.isDay &&
        option.condition === weatherData.condition
    );
});

let weatherOption;
if (filteredOption.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? 'day' : 'night'];
} else {
    weatherOption = filteredOption[0];
}

    return (
        <section classsName='weather-card'>
            <img src={weatherOption.url} alt={`Card showing ${weatherOption?.day ? 'day' : 'night'} time ${weatherOption?.condition} weather`} className='weather-card__img' />
            <p className='weather-card__temp'>{weatherData.temp.F} ° </p>
        </section>
    )
}

export default WeatherCard;