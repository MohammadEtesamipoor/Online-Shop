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
export async function PutOrders(data,id) {
    try {
        const response = await HttpService.put(`${GET_ORDERS}/${id}`,data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
export async function PostOrders(data,id) {
    try {
        const response = await HttpService.post(GET_ORDERS,data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}