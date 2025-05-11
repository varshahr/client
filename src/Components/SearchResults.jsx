import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccessToken } from '../api/getAccessToken';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (!query || !accessToken) return;

    fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10&market=US`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.tracks?.items || []);
      })
      .catch((err) => console.error('Search error:', err));
  }, [query, accessToken]);

  return (
    <div className="search-results-container">
      <h2>Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No previewable results found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((track) => (
            <li key={track.id} className="track-item">
              <img src={track.album.images[0].url} alt={track.name} />
              <div>
                <div><strong>{track.name}</strong></div>
                <div>{track.artists.map((a) => a.name).join(', ')}</div>
                {track.preview_url ? (
                  <audio controls>
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <div style={{ color: '#888', marginTop: '5px' }}>No preview available</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
