import { GET_PRODUCTS } from 'Configs/url';
import HttpService from 'Services/HTTP.Service';

export async function GetProducts() {
    try {
        const response = await HttpService.get(GET_PRODUCTS);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

// export async function GetProduct(id) {
//     try {
//         const response = await http.get(GET_PRODUCTS + '/' + id);
//         return response;
//     } catch (e) {
//         return Promise.reject(e);
//     }
// }
