import React, { useEffect } from 'react';

import axios from 'axios';
import { Chip } from '@mui/material';

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres((prev) => [...prev, genre]);
    setGenres((prev) => prev.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres((prev) =>
      prev.filter((selected) => selected.id !== genre.id)
    );
    setGenres((prev) => [...prev, genre]);
    setPage(1);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres(data.genres);
    };

    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, [setGenres, type]);
  return (
    <div style={{ padding: '6px 0' }}>
      {selectedGenres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          clickable
          size='small'
          color='primary'
          style={{ margin: 2, color: 'white' }}
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          clickable
          size='small'
          style={{ margin: 2, color: 'white' }}
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
