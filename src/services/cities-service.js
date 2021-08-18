import {cities} from "../models/cities";

export const getCities = () => {
    return cities.map(value => value.city);
}