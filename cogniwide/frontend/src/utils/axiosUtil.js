import axios from "axios";

export const axiosUtils = axios.create({ baseURL: "http://localhost:8080" });
