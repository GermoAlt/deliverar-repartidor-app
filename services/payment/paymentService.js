import { executeApiCall } from "../api";

const initPayments = [
    {
        mes: "Octubre",
        ingreso: 24500
    },
    {
        mes: "Septiembre",
        ingreso: 18000
    },
    {
        mes: "Agosto",
        ingreso: 21350
    },
]

const baseUrl = "/payment";

export const getPayments = (idUser) => {
    console.log("Payments for user: ", idUser);
    return initPayments;
    //return executeApiCall(`${baseUrl}/${idUser}`,"GET");
}