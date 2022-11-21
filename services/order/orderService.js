import { executeApiCall } from "../api";

import { pedido } from './testOrder';

const pedidos = [pedido, {...pedido, orderType: "Reclamo",name: "Starbucks", franchise_address: "Santa Fe 2290",}, {...pedido, orderType: "Reintegro" ,name: "Wendys", franchise_address: "Montañeses 1765"}]

const baseUrl = "/orders";
const currentOrderBaseUrl = "/currentorder";

export const getOrders = (body) => {
    
    return pedidos;
    //return executeApiCall(`${baseUrl}`,"GET",body)
}

export const getOrdersForUser = (idUser) => {
    console.log("User ID: ", idUser);
    return [pedido];
    //return executeApiCall(`${baseUrl}/${idUser}`,"GET")
}

// Current Order:

export const getCurrentOrder = (idUser) => {
    return pedido;
    //return executeApiCall(`${baseUrl}/${idUser}`,"GET");
}

export const createCurrentOrder = (body) => {
    return body;
    //return executeApiCall(`${currentOrderBaseUrl}`,"POST",body)
}

export const updateCurrentOrder = (idUser,body) => {
    console.log("ID received: " , idUser);
    return body;
    //return executeApiCall(`${currentOrderBaseUrl}/${idUser}`,"PUT",body)
}