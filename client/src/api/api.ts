import axios from "axios";

export const apiBaseUrl = axios.create({ baseURL: "http://localhost:8080" });
