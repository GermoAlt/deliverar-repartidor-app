import { executeApiCall } from "../api";

const baseUrl = "/login";

export const userLogin = (user) => {
    let reqBody = {
        username : user.name,
        email : user.email
    }
    return reqBody;
    /*let reqBody = {
        "username": "Kylian Mbappe",
        "email": "kylianmbappe.repartidor@gmail.com"
    }*/
    //return executeApiCall(`${baseUrl}`,"POST",body)
}