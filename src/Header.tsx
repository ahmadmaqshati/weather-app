import moment from 'moment';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'moment/locale/ar';

interface DateAndTimeProps {
    cityName: string;
}

export default function DateAndTime({ cityName }: DateAndTimeProps) {
    const { t, i18n } = useTranslation();

    // Set the locale based on the current language
    moment.locale(i18n.language);

    const [timeAndDate, setTimeAndDate] = useState<string>('');

    useEffect(() => {
        setTimeAndDate(moment().format('MMMM Do YYYY, h:mm:ss a'));

        const interval = setInterval(() => {
            setTimeAndDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='header flex justify-end items-center w-11/12 gap-5 my-0 mx-auto'>
                <p className='moment text-lg mt-9 text-date'>{timeAndDate}</p>
                <h1 className='city-title text-5xl text-white font-normal mt-5'>
                    {t(cityName)}
                </h1>
            </div>
            <hr style={{ width: '95%', margin: '0 auto', marginTop: '10px' }} />
        </>
    );
}
