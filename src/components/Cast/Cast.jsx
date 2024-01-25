import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import showErrorMessage from 'services/toast';

import css from './cast.module.css';
import CastCard from 'components/CastCard';
const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCost = async movieId => {
      try {
        const response = await fetchMovieCast(movieId);
        if (response.status === 200) {
          setCast(response.data.cast);
        }
        throw new Error('Cast was not found');
      } catch (error) {
        showErrorMessage(error.message);
      }
    };
    getMovieCost(movieId);
  }, []);

  return (
    <div className={css.castList}>
      {casts.map(cast => (
        <CastCard cast={cast} />
      ))}
    </div>
  );
};

export default Cast;
