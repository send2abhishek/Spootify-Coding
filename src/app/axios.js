import axios from "axios";

// import configuration from "config";
let access_token =
  "BQBBhuvFxWuC5r-Gt1u04Mqz0gbSg2Z-YoR7r_Pdb2DTfUcPt5OHhcjJqbHNQucN853r6fuvIkmUQX6rpj8";
let axiosObject;
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
if (process.env.NODE_ENV === "development") {
  axiosObject = axios.create({
    baseURL: "https://api.spotify.com/v1",
  });
} else {
  axiosObject = axios.create({
    baseURL: `${window.location.origin}/api`,
  });
}

export default axiosObject;
