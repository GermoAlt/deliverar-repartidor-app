import { executeApiCall } from "../api";

const baseUrl = "/login";

export const userLogin = (user) => {
    let reqBody = {
        username : user.name,
        email : user.email
    }
    return executeApiCall(`${baseUrl}`,"POST",reqBody)
}