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