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
    type: {},
    title: '',
    editMode: false
  }

  componentDidMount() {

    if (this.props.guide) {
      let { _id, fullName } = this.props.user;
      const miniUser = { _id, fullName }
      const { guide } = this.props
      const id = guide._id
      const guideName = guide.fullName
      const miniGuide = {
        guide: {
          fullName: guideName,
          _id: id
        }
       
      }
      this.setState({ by: miniUser, type: miniGuide }, () => {
     console.log(this.state)
      })
    }
    if (this.props.trail) {
      console.log(this.props.trail)
      
      let { _id, fullName } = this.props.user;
      const miniUser = { _id, fullName }
      const { trail } = this.props
      const id = trail._id
      const trailName = trail.name
      const miniTrail = {
        trail :{
          _id : id,
          name : trailName
        }
      }
      this.setState({by:miniUser, type: miniTrail},()=>{console.log(this.state)
      })
    }
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
    const { rate, txt, title } = this.state;
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
        <form onSubmit={this.onSend}>
          <span>title</span> <input type="text" name="title" value={title} onChange={this.handledChange} />
          <textarea name="txt" value={txt} onChange={this.handledChange}
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
