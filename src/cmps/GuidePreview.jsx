import React from 'react';
import { Link } from 'react-router-dom';

// const user = {
//   "_id": "1234",
//   "userName": "poiki123",
//   "fullName": "shoka koko",
//   "password": "1234",
//   "isAdmin": false,
//   "languages": ["he", "en"],
//   "trails": [{ "mini-trail" }], // id, name, country,
//   "imgUrl": "me.jpg"
// }

export const GuidePreview = props => {
  const {
    _id,
    fullName,
    imgUrl,
  } = props.guide;
  return (
  <article className="guide-preview square-ratio">
    <Link to={ `/guide/${_id}` }>
      <img className="guide-preview-image" src={ imgUrl } alt={ fullName }/>
      <div className="guide-preview-info">
        <h2 className="guide-preview-name fs24">{ fullName }</h2>
      </div>
    </Link>
  </article>);
};
