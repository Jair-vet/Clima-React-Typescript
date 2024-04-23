import { Weather } from '../hooks/useWeather'
import { formatTemperature } from '../utils'

type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetails = ({weather} : WeatherDetailProps) => {
  return (
    <div className='bg-gray-500 opacity-80 rounded-lg flex-1 items-center justify-center mt-16 contenedor space-y-2 shadow-xl p-5 m-5'>
        <h2 className='text-3xl uppercase text-center font-extrabold text-gray-100'>Respuesta Clima</h2>
        <h3 className='text-2xl text-center text-white uppercase font-bold'>{ weather.name  }</h3>
        <p className="p-4 text-center uppercase text-5xl text-yellow-500 font-bold">{ formatTemperature( weather.main.temp )}&deg;C</p>
        <div className="md:flex justify-center items-center text-center md:gap-4 md:p-4">
            <p className='text-2xl text-white uppercase font-bold'>Min: <span className='text-red-900'>{ formatTemperature( weather.main.temp_min )}&deg;C</span> </p>
            <p className='text-2xl text-white uppercase font-bold'>Max: <span className='text-green-900'>{ formatTemperature( weather.main.temp_max )}&deg;C</span> </p>
        </div>
    </div>
  )
}
