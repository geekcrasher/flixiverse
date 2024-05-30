import axios from "axios";

// @ Axios Instance
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  }
})