import * as axios from "axios";

// const instance = axios.create({
//     baseURL: "https://social-network.samuraijs.com/api/1.0/",
//     withCredentials: true,
//     headers: {
//         "API-KEY":
//             "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
//     }
// })
//
// export const usersAPI =  {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
//             .then(response => response.data);
//     }
// }

const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    headers: {
        "API-KEY":
            "9d64cb7219261444377ecf9c36ed62d9"
    }
})

export const weatherNowAPI = {
    getWeatherNow (citiesName) {
        return instance.get(`weather?q=${citiesName}&units=metric`)
    }
}