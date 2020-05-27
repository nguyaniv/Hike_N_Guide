import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Review } from '../cmps/Review'
//services
import userService from '../services/user.service';
import { langCodeToName } from '../services/language.service';

//actions
import { loadReviews } from '../store/actions/reviewActions'

//Components/Pages
import { ReviewAdd } from '../cmps/ReviewAdd';
import { ReviewList } from '../cmps/ReviewList'
import { BookingForm } from '../cmps/BookingForm';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _BookingPage extends Component {
  state = {
    guide: '',
    bookForm: {
      trailSelected: 0,
      peopleCount: 1,
      date: new Date(),
    },
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.loadGuide(id);
    //review load
    const reviews = await this.props.loadReviews({guideId: id})
    this.setState({ reviews }, () => { console.log(this.state) })
  }

  loadGuide = id => {
    console.log('id', id);
    userService.getById(id)
      .then(guide => {
        this.setState({ guide })
  })}

  handelInput = ev => {
    const { name } = ev.target;
    const value = ev.target.type === 'number' ? parseInt(ev.target.value, 10) : ev.target.value;

    this.setState(prevState => ({ bookForm: { ...prevState.bookForm, [name]: value } }),
      () => { console.log('state:', this.state); });
  }

  render() {
    const { guide, bookForm } = this.state;
    return (
      <main className="booking-page">
        {guide
          && <div className="booking-page-contain">

            <BookingForm trails={this.state.guide.trails} handelInput={this.handelInput}
              bookForm={this.state.bookForm} />
            <section className="booking-page-content">
              <div className="booking-page-details">
                <img className="booking-page-avatar" src={guide.imgUrl} width="75px" />
                <p className="booking-page-full-name">{guide.fullName}</p>
                <div className="booking-page-rate-box" >
                  <p className="pra-rating">Rating:</p>
                  <Rating
                    start={0}
                    stop={5}
                    initialRating={guide.rating}
                    emptySymbol={<img src={star} width="16" />}
                    fullSymbol={<img src={star_o} width="16" />}
                    readonly
                  />
                  <p className="total-rating">({guide.reviewers_count})</p>
                </div>
                <div>
                  <p className="booking-page-title">Languages:</p>
                  <p>{guide.languages.map(langCodeToName).join(', ')}</p>
                </div>
                <section>
                  <div>
                    <p>need to be here description</p>
                  </div>
                  <img className="booking-page-img-trail" src={guide.trails[bookForm.trailSelected].imgUrls[0]} />
                </section>
              </div>
              <section className="booking-page-add-review">
                <p className="title">Write a review about {guide.fullName}</p>
                {!this.props.loggedInUser
                  ? <ReviewAdd guide={guide} />
                  : <div><Link>Sign up</Link > or <Link>Log in</Link> to write your comment </div>}
              </section>
            </section>
          </div>}
        {guide && this.state.reviews &&
          <ReviewList reviews={this.state.reviews} />
        }



      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.user.loggedInUser,
  reviews: state.review.reviews,

});
const mapDispatchToProps = {
  loadReviews
};
export const BookingPage = connect(mapStateToProps, mapDispatchToProps)(_BookingPage);
