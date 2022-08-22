import axios from "axios";

/**
 * 기본 api url 주소로 선언한 axios 변수
 */
export const apiBase = axios.create({ baseURL: "http://localhost:8080" });
