import { useEffect, useState } from "react";
import axios from "axios";


const BASE_URL = 'http://localhost:1337';
const API_KEY = 'df5ae24baa448698205670152e3782bc105de1925fbb3c7c0ee652a206044c517c1d4878a15a2d32988e53ab3faf9de32a510b8ebff0dd69d58ba58b02ab4371aef23b738d8cec2c2320bd145941747e03b4523c94369903cfdd4786a9aacc48098739302307f21dcc0169ff209fd4430d098173c599be70ada2bcb21753cddc';

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