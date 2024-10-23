import './App.css'
import './index.css';
import DateAndTime from './Header.tsx'
import WeatherData from './WeatherData.tsx';
function App() {
  return (
    <div className='flex justify-center items-center h-screen' >
      <div className='container my-0	mx-auto py-0 px-2 w-4/12' >
        <div className='w-full bg-customColor rounded-xl' >
          <DateAndTime />
          <div className='flex justify-between items-center py-0 px-2.5' >
            <img className='w-1/3 h-48' src="https://cdn-icons-png.flaticon.com/512/252/252035.png" alt="" />
            <WeatherData />
          </div>
        </div>

        <div>
          <button
            className='border-0 cursor-pointer text-slate-50' >
            انجليزي
          </button>
        </div>

      </div>
    </div >

  )

}

export default App
