import { executeApiCall } from "../api";

const baseUrl = "/orders";
const currentOrderBaseUrl = "/currentorders";

export const getOrders = (body) => {
    return executeApiCall(`${baseUrl}/`,"GET",body);
}

export const getOrdersForUser = (idUser) => {
    return executeApiCall(`${baseUrl}/${idUser}`,"GET")
}

// Current Order:

export const getCurrentOrder = (idUser) => {
    return executeApiCall(`${currentOrderBaseUrl}/${idUser}`,"GET");
}

export const createCurrentOrder = (body) => {
    return executeApiCall(`${currentOrderBaseUrl}/`,"POST",body)
}

export const updateCurrentOrder = (body) => {
    return executeApiCall(`${currentOrderBaseUrl}/`,"PUT",body)
}