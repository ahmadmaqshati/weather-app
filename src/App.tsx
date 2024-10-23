import './App.css'
import './index.css';
import DateAndTime from './Header.tsx'
function App() {
  return (
    <div className='flex justify-center items-center h-screen' >
      <div className='container my-0	mx-auto py-0 px-2 w-4/12' >
        <div className='w-full bg-customColor rounded-xl' >
          <DateAndTime />
          <div className='flex justify-between items-center py-0 px-2.5' >
            <img className='w-1/3 h-48' src="https://cdn-icons-png.flaticon.com/512/252/252035.png" alt="" />
            <div className='gap-5 flex justify-center flex-col' >
              <div className='flex items-center' >
                <img className='w-28' src='https://openweathermap.org/img/wn/01d.png' alt="" />
                <h1 className='temp text-temp font-normal' style={{ fontSize: '5.3rem' }}>40</h1>
              </div>
              <div className='flex flex-col justify-start' dir="rtl"  >
                <p className='text-right text-sky text-3xl' >سماء صافية</p>
                <div className='my-8 mx-0 text-sm text-degres' >
                  <span>الكبرى: 16</span>
                  <span> | </span>
                  <span>الصغرى: 16</span>
                </div>
              </div>
            </div>
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
