import React, { useState } from 'react';

function UserService  ()  {
    const login = (data) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
};

        const body = new URLSearchParams();
        body.append("grant_type", "password");
        body.append("scope", "Innovator");
        body.append("client_id", "IOMApp");
        body.append("database", data.Database);
        body.append("username", data.UserName);
        body.append("password", data.Password);

        return fetch("http://localhost/InnovatorServer22/oauthserver/connect/token", {
            method: 'POST',
            headers: headers,
            body: body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(result => {
                console.log("Token received:", result.access_token);
                localStorage.setItem("token", result.access_token);
                console.log("Token stored in local storage:", localStorage.getItem('token'));
            });
    };

    return { login };
}

export default UserService;
