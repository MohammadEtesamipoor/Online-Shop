import { UPLOAD_IMAGE } from "Configs/url";
import HttpService from "Services/HTTP.Service";

export async function UploadImage(data, config) {
    try {
        const response = await HttpService.post(UPLOAD_IMAGE, data, config);
        console.log("test");
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}