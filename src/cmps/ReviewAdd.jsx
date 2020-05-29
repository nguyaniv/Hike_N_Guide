import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { saveReview } from '../store/actions/reviewActions';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _ReviewAdd extends Component {
  state = {
    rate: 1,
    by: {},
    txt: '',
    guide: {},
  }

  componentDidMount() {
    const { _id, fullName } = this.props.user;
    const miniUser = { _id, fullName };
    const { guide } = this.props;
    const id = guide._id;
    const guideName = guide.fullName;
    const miniGuide = {
      fullName: guideName,
      _id: id,
    };
    this.setState({ by: miniUser, guide: miniGuide }, () => {
      // console.log(this.state);
    });
    // } else if (this.props.user) {
    // this.setState({ by: user, user: this.props.user });
    // }
  }

  handledChange = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  onSend = ev => {
    ev.preventDefault();
    const review = this.state;
    this.props.saveReview(review);
  }

  render() {
    const { rate, txt } = this.state;
    return (
      <section className="reviewAdd">
        <div className="reviewAdd-rate-contain">
          <p>Rate: </p>
          <Rating start={ 0 }
            stop={ 5 }
            initialRating={ rate }
            emptySymbol={ <img src={ star } alt="star" className="img-star" /> }
            fullSymbol={ <img src={ star_o } alt="full-star" className="img-star" /> }
            onChange={ rate => {
              this.setState({ rate });
            } }
          />
        </div>
        <form onSubmit={ this.onSend }>

          <textarea name="txt" value={ txt } onChange={ this.handledChange }
            cols="30" rows="10" placeholder="What do you think about me?" required>
          </textarea>
          <button className="reviewAdd-submit-btn">Send</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.review.reviews,
  user: state.user.loggedInUser,
});
const mapDispatchToProps = {
  saveReview,
};
export const ReviewAdd = connect(mapStateToProps, mapDispatchToProps)(_ReviewAdd);
