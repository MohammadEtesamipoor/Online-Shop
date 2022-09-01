import { GET_PRODUCTS,GET_PRODUCT } from 'Configs/url';
import HttpService from 'Services/HTTP.Service';

export async function AddProducts(data) {
    try {
        const response = await HttpService.post(GET_PRODUCTS,data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function GetProducts(config) {
    try {
        const response = await HttpService.get(GET_PRODUCTS,config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
export async function GetProduct(config) {
    try {
        const response = await HttpService.get(config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function DeleteProducts(id) {
    try {
        const response = await HttpService.delete(GET_PRODUCTS + '/' + id);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function UpdateProducts(id,data) {
    try {
        const response = await HttpService.put(GET_PRODUCTS + '/' + id,data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
