const baseURL = "https://repartidor.deliver.ar"
const apiURL = "" // "/deliverar/v1"

export function executeApiCall(endpoint, method, content) {
    if(method !== "GET") {
        return fetch(baseURL + apiURL + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
    } else {
        return fetch(baseURL + apiURL + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json' 
            }
        })
    }
}

/*
1. /login (POST)
2. /orders (GET)
3. /currentorder (POST) 
4. /currentorder/:userId (GET)
5. /currentorder (PUT)
6. /orders/:userId (GET)
7. /payments/:userId (GET)
*/