import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://form-data-serer-site.onrender.com/'
  });

  export default fetcher;