import React from 'react';
import { Link } from 'react-router-dom';

// const trail = {
//   "_id": "fg3d",
//   "name": "Sahara desert",
//   "location": {
//       "lat": 3213412423423,
//       "lng": 8473984760564,
//   },
//   "country": "Egypt",
//   "difficulty": "easy/medium/hard",
//   "distance": 30,
//   "days": 3,
//   "imgUrls": ["", ""]
// }

export const TrailPreview = (props) => {
  const {
    _id,
    name,
    country,
    imgUrls,
  } = props.trail;
  return (
  <article className="trail-preview landscape-ratio">
    <Link to={ `/guide/${_id}` }>
      <img className="trail-preview-image" src={ imgUrls[0] } alt={ name }/>
      <div className="trail-preview-info">
        <h2 className="trail-preview-name">{ name }</h2>
        <h3 className="trail-preview-country">{ country }</h3>
      </div>
    </Link>
  </article>);
};
