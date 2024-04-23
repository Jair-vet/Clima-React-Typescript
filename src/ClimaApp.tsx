import Alert from "./components/Alert"
import { Form } from "./components/Form"
import { Spinner } from "./components/Spinner/Spinner"
import { WeatherDetails } from "./components/WeatherDetails"
import useWeather from "./hooks/useWeather"

export const ClimaApp = () => {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <div>
        <h1 className="mt-2 p-5 text-center text-4xl text-white font-bold">Buscador de Clima Typescript</h1>

        <div className="mt-20 container mx-auto grid md:grid-cols-2 gap-4">
            <div>
                <Form 
                  fetchWeather={fetchWeather}
                />
            </div>
            <div>
              { loading && <Spinner />}
              { notFound && <Alert>Ciudad No Encontrada</Alert>}
              { hasWeatherData  && <WeatherDetails weather={weather}/> }
              {/* { hasWeatherData  
                ? <WeatherDetails weather={weather}/> 
                : <div className="text-2xl mt-32 text-yellow-500 font-bold text-center uppercase">No hay Pais para mostrar</div> 
              } */}
            </div>
        </div>
    </div>
  )
}
