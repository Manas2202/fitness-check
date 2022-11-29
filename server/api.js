import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
export const fetchVideoData = async ({type}) => {   
    const response = await axios.post("https://BajajTaskBackend.manas2202.repl.co/getVideoContent"
    ,{"data": type},
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response;
};

export const handleVideoQuery = (type) => {
    console.log(type);
    const {data, error, isLoading} = useQuery(['videoData', type], () => fetchVideoData({type}));
    console.log(data.data);
    return {data, error, isLoading};
}