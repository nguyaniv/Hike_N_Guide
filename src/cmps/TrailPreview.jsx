import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';

// {
//   "_id": "zl4",
//   "name": "Tour de Monte Rosa",
//   "country": "Italy",
//   "difficulty": "advanced",
//   "distance": "163km",
//   "days": 9,
//   "rating": 3,
//   "location": "x",
//   "imgUrls": [
//     "https://montblanctreks.com/thumbs/gallery/tour-du-monte-rosa/img_2673-800x600-q40.jpg",
//     "https://montblanctreks.com/thumbs/gallery/tour-du-monte-rosa/img_2679-800x600-q40.jpg",
//     "https://montblanctreks.com/thumbs/gallery/tour-du-monte-rosa/img_2707-800x600-q40.jpg",
//     "https://montblanctreks.com/thumbs/gallery/tour-du-monte-rosa/img_2715-800x600-q40.jpg"
//   ],
//   "descriptions": "The view into the different valleys in Switzerland and Italy is unforgettable. Hikers see not only the highest and most beautiful mountains in the Alps, but also mountain villages with different cultures and of incomparable character. The stage destinations are well-known: Zermatt, over the Theodul Pass to Cervinia, Alagna, Macugnaga, and back into Switzerland via the Monte Moro Pass, to Saas-Fee and Grächen."
// },

export class TrailPreview extends React.Component {
  state = {
    _id: '',
    name: '',
    country: '',
    rating: 0,
    imgUrls: [],
  };

  componentDidMount() {
    this.setState(this.props.trail);
  }

  render() {
    const {
      _id,
      name,
      country,
      rating,
      imgUrls,
    } = this.state;
    return (
      <article className="trail-preview">
        <Link to={ `/guide/${_id}` }>
          <img className="trail-preview-image" src={ imgUrls[0] } alt={ name }/>
          {/* <div className="trail-preview-info">
            <h2 className="trail-preview-name">{ name }</h2>
            <h3 className="trail-preview-country">{ country }</h3>
          </div> */}
          <div className="guide-preview-info">
            <div className="trail-preview-main-info">
                <span className="trail-preview-name">{ name }</span>
                <Rating className="trail-preview-rating" start={ 0 }
                  stop={ 5 }
                  initialRating={ rating }
                  emptySymbol={ <img className="trail-preview-full-star" src={ star } /> }
                  fullSymbol={ <img className="trail-preview-star" src={ star_o } /> }
                  onChange={ this.handleRatingChange }
                />
            </div>
            <span className="trail-preview-country">{ country }</span>
          </div>
        </Link>
      </article>);
  }
}
