import { GET_CATEGORIES } from 'Configs/url';
import HttpService from 'Services/HTTP.Service';

export async function GetProductsCategory() {
    try {
        const response = await HttpService.get(GET_CATEGORIES);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
