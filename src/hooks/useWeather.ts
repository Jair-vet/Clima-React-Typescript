import axios from 'axios'
import { SearchType } from "../types";
import { z } from 'zod'
import { useState } from 'react';

// Type Guard o Assertio
// Comprobar el typo de dato
// function isWeatherResponse(weather : unknown) {
//     return(
//         Boolean(weather) &&
//         typeof weather === 'object' &&
//         typeof(weather as Weather).name === 'string' &&
//         typeof(weather as Weather).main.temp === 'number' &&
//         typeof(weather as Weather).main.temp_min === 'number' &&
//         typeof(weather as Weather).main.temp_max === 'number'
//     )
// }

// ZOD
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
})
export type Weather = z.infer<typeof Weather>

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
    }
}


export default function useWeather(){

    const [weather, setWeather] = useState<Weather>(initialState)

    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data } = await axios(geoURL)
            
            const lat = data[0].lat
            const lon = data[0].lon
            
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
           
            // Catear el Type 
            // const {data: weatherResult} = await axios<Weather>(weatherURL)
            // console.log(weatherResult.main.temp);
            // console.log(weatherResult.main.temp);
            
            // Type Guards
            // const {data: weatherResult} = await axios<Weather>(weatherURL)
            // const result = isWeatherResponse(weatherResult)
            // if(result){
            //     console.log(weatherResult.name)
            // } else {
            //     console.log("Respuesta mal Formada");
            // }
        
            // ZOD Libreria
            const {data: weatherResult} = await axios(weatherURL)
            const result = Weather.safeParse(weatherResult)
            if(result.success) {
                setWeather(result.data)
            }

        } catch (error) {
            console.log(error);
        }
        
    }



    return {
        fetchWeather,
        weather
    }
}