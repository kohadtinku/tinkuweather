import React, { useState, useEffect } from 'react'
const TempPath = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Nagpur")




    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8eacc428fb0b65ac38ef892cef08e388`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setCity(data.main)
        }
        fetchAPI()
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className='inputField'
                        defaultValue={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>
                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className='location'>
                                <i className="fa-solid fa-street-view "></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tem_min">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>

                )}
            </div>
        </>
    )
}

export default TempPath