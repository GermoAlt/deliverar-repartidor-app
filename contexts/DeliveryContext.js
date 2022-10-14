import React from 'react';

export const DeliveryContext = React.createContext({
    currentDelivery: {
        name: null,
        franchise_address: null,
        client_address: null,
        status: null,
        meals: []
    },
    setCurrentDelivery : () => {}
});