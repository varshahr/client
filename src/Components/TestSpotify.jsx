import React, { useEffect, useState } from 'react';

const TestSpotify = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
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
      setToken(data.access_token);
    };

    fetchToken();
  }, []);

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Spotify Token</h2>
      <p>{token ? token : 'Fetching token...'}</p>
    </div>
  );
};

export default TestSpotify;
