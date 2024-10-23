import axios from "axios";
import { useState, useEffect } from "react";

// Define a type for weather data
interface WeatherInfo {
    temp: number | null;
    discrip: string;
    min: number | null;
    max: number | null;
    icon: string;
}

export default function WeatherData() {
    // Set the initial weather state using the WeatherInfo type
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
        temp: null,
        discrip: '',
        min: null,
        max: null,
        icon: ''
    });

    async function getWeatherData() {
        try {
            const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=33.5&lon=36.27&appid=8ff9c9060a9b0b4c9f8acc037fb878a6');
            const temp = Math.round(res.data.main.temp - 273);
            const discrip = res.data.weather[0].description;
            const min = Math.round(res.data.main.temp_min - 273);
            const max = Math.round(res.data.main.temp_max - 273);

            // Update the weather state
            setWeatherInfo({ temp, discrip, min, max, icon: '' });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <div className='gap-5 flex justify-center flex-col'>
            <div className='flex items-center'>
                <img className='w-28' src='https://openweathermap.org/img/wn/01d.png' alt="" />
                <h1 className='temp text-temp font-normal' style={{ fontSize: '3.4rem' }}>{weatherInfo.temp}</h1>
            </div>
            <div className='flex flex-col justify-start' dir="rtl">
                <p className='text-right text-sky text-3xl'>{weatherInfo.discrip}</p>
                <div className='my-8 mx-0 text-sm text-degres'>
                    <span>Max: {weatherInfo.max}</span>
                    <span> | </span>
                    <span>Min: {weatherInfo.min}</span>
                </div>
            </div>
        </div>
    );
}
