import React from 'react';

export const DeliveryContext = React.createContext({
    currentDelivery: {
        id: null,
        name: null,
        franchise_address: null,
        client_address: null,
        orderStatus: null,
        meals: []
    },
    setCurrentDelivery : () => {}
});