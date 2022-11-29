import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
export const fetchBmiData = async ({weight,height}) => {   
    const response = await axios.get(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,
    {
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key' : '74804162c4mshaa410f577e14bb4p18740bjsndb808b289504',
            'X-RapidAPI-Host' : 'body-mass-index-bmi-calculator.p.rapidapi.com'
        }
    });
    return response;
};

export const handleBmiQuery = (weight,height) => {
    const {data, error, isLoading} = useQuery(['bmiData', weight,height], () => fetchBmiData({weight,height}));
    return {data, error, isLoading};
}