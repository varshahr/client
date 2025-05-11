// src/api/getAccessToken.js
export const getAccessToken = async () => {
  const clientId = '371373a6165945668baefb710251a115';
  const clientSecret = 'e36bd6d597064e708659b3cd35ede108';

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
};
