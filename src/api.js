import axios from "axios";

const API_KEY = "45b9cca46f3f568046545ad327839f17"



axios.defaults.baseURL = "https://api.themoviedb.org/3/"

export async function getTrendingMovies() {
    const response = await axios.get("trending/movie/day", {
        params: {
            api_key:API_KEY
        }
    })
    return response.data.results
}