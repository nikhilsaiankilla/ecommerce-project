import { useEffect, useState } from "react";
import axios from "axios";


const BASE_URL = 'https://nikstore-strapi-backend-2.onrender.com';
const API_KEY = 'f811247fa3220fc711a8160cf57a3b5b4e8206c889304bc52a43952692bab2c95cab01196d9aaaca9396d02fc25386f586fd12e354aa949644fbe8a32f62ba9a3fcdcdb8cb887da7a3e0480b892a2c7c87ff767ec3c5759ad62f3bc7616e8b07d21dff3dd3b4788122fbb25af27f892671a8fbe7a13db29c7d03fd237aa638ca';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading('loading');
            try {
                const response = await axios.get(BASE_URL + url, {
                    headers: {
                        Authorization: 'bearer ' + API_KEY
                    }
                })
                setData(response?.data);
                setLoading(null);
            } catch (error) {
                setError(error);
                setLoading('error');
            }
        }

        fetchData();
    }, [url])

    return { data, error, loading };
}

export default useFetch;