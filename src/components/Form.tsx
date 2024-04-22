import { ChangeEvent, FormEvent, useState } from "react"
import { countries } from "../data/countries"
import { SearchType } from "../types"
import Alert from "./Alert"


type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}


export const Form = ({fetchWeather} : FormProps) => {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })
    const [alert, setAlert] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(search).includes('')){
            setTimeout(() => {
                setAlert('')
            }, 2000)
            setAlert('Todos los campos son obligatorios')
            return
        }

        fetchWeather(search)
    }

  return (
    <div className="contenedor m-10">

        {alert && <Alert>{alert}</Alert>}
        <form
            onSubmit={handleSubmit}
        >
            <div className="space-y-5">
                {/* Ciudad */}
                <div className="flex flex-col">
                    <label
                        htmlFor="text-white text-2xl"
                        className="text-white text-xl uppercase font-bold"
                    >Ciudad</label>
                    <input 
                        type="text" 
                        id="city"
                        name="city"
                        className="bg-transparent text-gray-400 uppercase border rounded-lg p-2 placeholder:uppercase"
                        placeholder="Ciudad"
                        value={search.city}
                        onChange={handleChange}
                    />
                </div>
                {/* Pais */}
                <div className="flex flex-col">
                    <label 
                        htmlFor="ciudad"
                        className="mt-3 text-white text-xl uppercase font-bold"
                    >Pais</label>
                    <select 
                        name="country" 
                        id="country"
                        className="bg-transparent border text-gray-400 uppercase rounded-lg p-2"
                        value={search.country}
                        onChange={handleChange}
                    >
                        <option value=""> Seleccione un País </option>
                        {countries.map(country => (
                            <option
                                key={country.code}
                                value={country.code}
                            >{country.name}</option>
                        ))}
                        
                    </select>
                </div>
                <input 
                    type="submit"
                    value='Consultar Clima' 
                    className="w-full p-2 cursor-pointer duration-300 bg-sky-600 hover:bg-sky-700 uppercase text-white font-bold rounded-md mt-5"
                />
            </div>


        </form>
    </div>
  )
}
