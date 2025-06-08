import './WeatherCard.css'
import cloudy from '../../assets/cloudy.png'

function WeatherCard( { weatherData } ) {
    return (
        <section classsName='weather-card'>
            <img src={cloudy} className='weather-card__img' />
            <p className='weather-card__temp'>{weatherData.temp.F} ° </p>
        </section>
    )
}

export default WeatherCard;