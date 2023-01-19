import { ShortUrl } from "../models/ShortUrl";
import axios from "axios"

export class BaseService<ShortUrl> {

    async getAll(url:string): Promise<ShortUrl[]> {
        let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        let data: ShortUrl[] = response.data;
        return data
    }

}