import { ChangeEvent, useState } from "react"
import { countries } from "../data/countries"
import { SearchType } from "../types"


export const Form = () => {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div className="contenedor m-10">

            {/* {alerta && <p className="alerta">{alerta }</p>} */}
            <form
                // onSubmit={handleSubmit}
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
                            className="bg-transparent border rounded-lg p-2 placeholder:uppercase"
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
