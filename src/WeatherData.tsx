import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

interface WeatherInfo {
    temp: number | null;
    discrip: string;
    min: number | null;
    max: number | null;
    icon: string | null;
}

interface WeatherDataProps {
    city: string;
    currentLocale: string;
}

export default function WeatherData({ city, currentLocale }: WeatherDataProps) {
    const { t, i18n } = useTranslation();

    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
        temp: null,
        discrip: '',
        min: null,
        max: null,
        icon: null
    });

    async function getWeatherData() {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ff9c9060a9b0b4c9f8acc037fb878a6`);
            const temp = Math.round(res.data.main.temp - 273);
            const discrip = res.data.weather[0].description;
            const min = Math.round(res.data.main.temp_min - 273);
            const max = Math.round(res.data.main.temp_max - 273);
            const icon = res.data.weather[0].icon;
            setWeatherInfo({ temp, discrip, min, max, icon });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [city]); // Fetch data when the city changes

    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    return (
        <>
            <img className='w-1/3 h-48' src="https://cdn-icons-png.flaticon.com/512/252/252035.png" alt="" />
            <div className='gap-5 flex justify-center flex-col'>
                <div className='flex justify-end items-center'>
                    {weatherInfo.icon && (
                        <img className='w-28' src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt='weather icon' />
                    )}
                    <h1 className='mt-4 temp text-temp font-normal' style={{ fontSize: '3.4rem' }}>{weatherInfo.temp}</h1>
                </div>
                <div className='flex flex-col justify-start'>
                    <p style={{ textAlign: currentLocale === 'ar' ? "right" : "left" }} className='text-sky text-3xl'>{t(weatherInfo.discrip)}</p>
                    <div style={{ textAlign: currentLocale === 'ar' ? "right" : "left" }} className='my-8 mx-0 text-sm text-degres'>
                        <span>{t('min')}: {weatherInfo.min}</span>
                        <span> | </span>
                        <span>{t('max')}: {weatherInfo.max}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
