import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://form-input-data.onrender.com/'
  });

  export default fetcher;