import { GET_CATEGORIES } from 'Configs/url';
import { useDispatch } from 'react-redux';
import HttpService from 'Services/HTTP.Service';
import { GET_DATA } from 'store/type/BasketType';

export async function GetProductsCategory() {
    try {
        const response = await HttpService.get(GET_CATEGORIES);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
