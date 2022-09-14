import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from './constants';

export const checkLoginCredentials = () => new Promise((resolve,reject) => {
    AsyncStorage.getItem(constants.ASYNC_STORAGE_CREDENTIALS).then((result) => {
        if (result !== null) {
           resolve(JSON.parse(result));
        } else {
          resolve(null);
        }
    }).catch((error) => {
        console.log(error)
        reject(null);
    });
});

export const persistLogin = (credentials) => new Promise((resolve,reject) => {
    AsyncStorage.setItem(constants.ASYNC_STORAGE_CREDENTIALS,JSON.stringify(credentials)).then(() => {
        resolve(credentials);
    }).catch((error) => {
        console.log(error);
        reject(null);
    });
});