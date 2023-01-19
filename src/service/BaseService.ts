import { ShortUrl } from "../models/ShortUrl";
import { axiosInstance } from "./axiosInstance";

export class BaseService<ShortUrl> {

    async getAll(url:string): Promise<ShortUrl[]> {
        let response = await axiosInstance.get(url)
        let data: ShortUrl[] = response.data;
        return data
    }

}