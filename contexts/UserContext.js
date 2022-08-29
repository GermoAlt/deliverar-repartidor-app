import React from 'react';

export const UserContext = React.createContext({
    user: {
        "usuario": null,
        "password": null,
    },
    setUser : () => {}
});