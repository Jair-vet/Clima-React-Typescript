import { Form } from "./components/Form"
import useWeather from "./hooks/useWeather"

export const ClimaApp = () => {

  const { fetchWeather } = useWeather()


  return (
    <div>
        <h1 className="mt-2 p-5 text-center text-4xl text-white font-bold">Buscador de Clima Typescript</h1>

        <div className="mt-20 container mx-auto grid md:grid-cols-2 gap-4">
            <div>
                <Form 
                  fetchWeather={fetchWeather}
                />
            </div>
            <p className="bg-white">2</p>
        </div>
    </div>
  )
}
