import { instance } from "./axios";

export const USER_GET_SERVICE = async () => {
   
    let response = await instance.get('users');
    return response.data 
};
export const USER_POST_SERVICE = async (newuser) => {
    await instance.post('users',newuser)
};