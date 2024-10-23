import { useState } from "react";

interface SelectorProps {
    onCityChange: (city: string) => void;
}

export default function Selector({ onCityChange }: SelectorProps) {
    const [myCity, setMyCity] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission
        onCityChange(myCity); // Pass the city name to the parent
        setMyCity(''); // Reset the input field
    };

    return (
        <div className="mb-2 flex gap-x-1.5">
            <input
                type="text"
                value={myCity}
                onChange={(e) => setMyCity(e.target.value)}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-customColor px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter the name of a country or city" />
            <button
                onClick={handleSubmit}
                type="submit"
                className="flex-none rounded-md bg-customColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Search
            </button>
        </div>
    );
}
