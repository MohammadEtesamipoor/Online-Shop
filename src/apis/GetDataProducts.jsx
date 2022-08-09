import HTTPService from "Services/HTTP.Service";
import {API_URL} from "Configs/variable.config";

export const GetDataProducts = async()=>{
    const response = await HTTPService.get(API_URL);
    return response.data
}