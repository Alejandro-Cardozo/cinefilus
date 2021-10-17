import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SingleContent from '../components/SingleContent';
// &page=${page}

const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        {content &&
          content.map((el) => (
            <SingleContent
              key={el.id}
              id={el.id}
              poster={el.poster_path}
              title={el.title || el.name}
              date={el.first_air_date || el.release_date}
              media_type={el.media_type}
              vote_average={el.cote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
