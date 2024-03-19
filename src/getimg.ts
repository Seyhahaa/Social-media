import { base_url } from "./base_url";

export const getImg = (img_path: string)=>{
    return base_url + "/" +img_path;
}