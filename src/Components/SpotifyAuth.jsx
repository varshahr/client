// SpotifyAuth.jsx

// Function to get Spotify Access Token
export const getSpotifyToken = async () => {
  const clientId = '371373a6165945668baefb710251a115';
  const clientSecret = 'e36bd6d597064e708659b3cd35ede108';
  const authString = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error('Failed to get token: ' + errorText);
    }

    const data = await response.json();
    return data.access_token;
  } catch (err) {
    console.error('Token error:', err);
    return null;
  }
};

// Function to get Spotify categories (for example, "Pop", "Jazz")
export const getSpotifyCategories = async () => {
  const token = await getSpotifyToken();
  if (!token) return [];

  try {
    const response = await fetch('https://api.spotify.com/v1/browse/categories?limit=10', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error('Category fetch failed: ' + errorText);
    }

    const data = await response.json();
    return data.categories.items;
  } catch (err) {
    console.error('Category fetch error:', err);
    return [];
  }
};

// Function to get Spotify songs based on a mood keyword (e.g., "Happy", "Sad")
export const getSongsForMood = async (mood) => {
  const token = await getSpotifyToken();
  if (!token) return [];

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${mood}&type=track&limit=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error('Song fetch failed: ' + errorText);
    }

    const data = await response.json();
    return data.tracks.items
      .map(item => ({
        name: item.name,
        artist: item.artists.map(artist => artist.name).join(", "),
        previewUrl: item.preview_url,
        image: item.album.images[0]?.url,
      }))
      .filter(track => track.previewUrl); // only include tracks with preview audio
  } catch (err) {
    console.error('Song fetch error:', err);
    return [];
  }
};
