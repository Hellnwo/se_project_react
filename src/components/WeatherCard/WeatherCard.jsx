import './WeatherCard.css'
import cloudy from '../../assets/cloudy.png'

function WeatherCard() {
    return (
        <div classsName='card-weather'>
            <img src={cloudy} className='card__img' />
            <span className='card__temp'>75°F</span>
        </div>
    )
}

export default WeatherCard;