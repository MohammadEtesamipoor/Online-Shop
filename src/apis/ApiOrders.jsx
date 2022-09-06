import { GET_ORDERS } from 'Configs/url';
import HttpService from 'Services/HTTP.Service';

export async function GetOrders() {
    try {
        const response = await HttpService.get('/ordersUser');
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
export async function PostOrders(data,config) {
    try {
        const response = await HttpService.post(`${GET_ORDERS}/${config}`,data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}