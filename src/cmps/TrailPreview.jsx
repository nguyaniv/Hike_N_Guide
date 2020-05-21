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

export const TrailPreview = ({
  _id,
  name,
  country,
  imgUrls,
}) => (
  <article className="trail-preview">
    <Link to={ `/trail/${_id}` }>
      {/* <img className="trail-preview-image" src={ imgUrls[0] } alt={ name }/> */}
      <img className="trail-preview-image" src={ "" } alt={ name }/>
      <h2 className="trail-preview-name">{ name }</h2>
      <h3 className="trail-preview-country">{ country }</h3>
    </Link>
  </article>
);
