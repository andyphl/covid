import axios from "axios";

const config = {
  baseURL:
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/",
  headers: {
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_APIKEY,
  },
};

const configuredAxios = axios.create(config);

export default configuredAxios;
