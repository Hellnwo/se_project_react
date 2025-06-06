import './WeatherCard.css'
import cloudy from '../../assets/cloudy.png'

function WeatherCard() {
    return (
        <section classsName='weather-card'>
            <img src={cloudy} className='weather-card__img' />
            <p className='weather-card__temp'>75°F</p>
        </section>
    )
}

export default WeatherCard;