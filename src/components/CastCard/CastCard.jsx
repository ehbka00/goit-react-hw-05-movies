import { ReactComponent as PlaceHolder } from '../../images/placeHolder.svg';

import css from './castCard.module.css';

const CastCard = ({ cast }) => (
  <div className={css.wrapper} key={cast.id}>
    <div className={css.actorsCard}>
      {cast.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          alt={cast.name}
        />
      ) : (
        <PlaceHolder width={170} height={255} />
      )}
      <div className={css.cardDetails}>
        <span className={css.cardDetailsName}>
          <b>Name</b>: {cast.name}
        </span>
        <span className={css.cardDetailsCharacter}>
          <b>Character</b>: {cast.character}
        </span>
      </div>
    </div>
  </div>
);

export default CastCard;
