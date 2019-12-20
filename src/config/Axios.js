import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv'

const Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default Axios;