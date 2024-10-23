import moment from 'moment'
import { useState, useEffect } from 'react'

export default function DateAndTime() {
    // state for moment
    const [timeAndDate, setTimeAndDate] = useState('');

    useEffect(() => {
        setTimeAndDate(moment().format('MMMM Do YYYY, h:mm:ss a'));

        // Create a timer to update the date and time every second
        const interval = setInterval(() => {
            setTimeAndDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
        //setInterval calls setTimeAndDate every second,
        //which updates the state and triggers a re-render for the component each time.
        //This ensures the displayed time is always current. 

        // Cleanup interval when component be unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='header flex justify-end items-center w-11/12 gap-5 my-0 mx-auto'>
                <p className='moment text-lg mt-9 text-date'>{timeAndDate}</p>
                <h1 className='city-title' style={{ fontSize: '3rem', color: '#fff', fontWeight: "normal" }}>دمشق</h1>
            </div>
            <hr style={{ width: '95%', margin: '0 auto' }} />
        </>
    );
}
