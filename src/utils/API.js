import axios from "axios";
import config from "../config";

let API_KEY = config.API_KEY;

export default {
    getData: function (symbol) {
        return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`)
    }
}