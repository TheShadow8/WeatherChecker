import axios from 'axios';

const API_KEY = '8fc7bbec4a47ccda7a1a993301987f4f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}