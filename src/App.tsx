import './App.css';
import './index.css';
import DateAndTime from './Header.tsx';
import WeatherData from './WeatherData.tsx';
import Selector from './Selector.tsx';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [city, setCity] = useState<string>('دمشق'); // Default city
  const { t, i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState<string>('ar');

  useEffect(() => {
    i18n.changeLanguage(currentLocale);
  }, [currentLocale, i18n]);

  // Event handler for changing the language
  function toggleLanguage() {
    const newLocale = currentLocale === 'ar' ? 'en' : 'ar';
    setCurrentLocale(newLocale);
    i18n.changeLanguage(newLocale);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='container my-0 mx-auto py-0 px-2 w-4/12'>
        <Selector onCityChange={setCity} />  {/* Pass the function to update the city */}

        {/* Card */}
        <div dir={currentLocale === 'ar' ? "ltr" : "rtl"} className='w-full bg-customColor rounded-xl'>
          {/* Card Header */}
          <DateAndTime cityName={city} />

          {/* Card Main Content */}
          <div className='flex justify-between items-center py-0 px-2.5'>
            <WeatherData city={city} currentLocale={currentLocale} /> {/* Pass the city to the WeatherData component */}
          </div>
        </div>
        {/* ==Card== */}

        {/* Button for language change */}
        <div className='mt-2'>
          <button
            className='text-2xl border-0 cursor-pointer text-slate-50'
            onClick={toggleLanguage}
          >
            {currentLocale === 'ar' ? ' English' : 'Arabic'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
