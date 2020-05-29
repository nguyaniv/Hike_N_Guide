import React, { Component } from 'react';
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { removeReview, editReview } from '../store/actions/reviewActions'



class _Review extends Component {

  state = {
    review: {},
    editMode: false
  }

  componentDidMount() {
    this.setState({
      review: this.props.review
    }, () => {
      // console.log(this.state.review)
    })
  }


  onDeleteGuideReview = () => {
    this.props.removeReview(this.props.review._id)
  }

  reviewEditMode = () => {
    this.setState({ editMode: true })
  }

  onEdit = ev => {
    ev.preventDefault();
    const review = this.state;
    console.log(this.state)
    this.props.editReview(review)
  }


  handledChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      review: {
        ...prevState.review,
        [name]: value
      }
    }))
  }

  render() {
    const wtittenBy = this.props.review.by.fullName
    const { txt, rate, title, } = this.state.review
    return (
      <section>
        {this.state.review && this.state.editMode&& 

          <form className="" onSubmit={this.onEdit}>
          <span>title</span> <input type="text" name="title" value={title} onChange={this.handledChange} />
          <br />
          <textarea name="txt" value={txt} onChange={this.handledChange}
            cols="30" rows="10" placeholder="What do you think about me?" required>
          </textarea>
          <button className="">Send</button>
        </form> 
        }

          {this.state.review && 
          
          
         
        <div className="review-container">
            <div className="review-name-date">
              <Rating className="guide-preview-rating" start={0}
                stop={5}
                initialRating={rate}
                emptySymbol={<img className="trail-preview-full-star" src={star} />}
                fullSymbol={<img className="trail-preview-star" src={star_o} />}
                readonly
              />
              <br />
              <div>
                <p className="review-guide-title">{title}</p>
              </div>
              <br />
              <p> {wtittenBy} </p>
            </div>
            <div className="review-msg">
              <p>{txt}</p>
            </div>
            <button onClick={() => {
              this.onDeleteGuideReview()
            }}>Delete</button>
            <button onClick={() => {
              this.reviewEditMode()
            }}>edit</button>
          </div>
          }
      </section>
    )
  }

}


const mapStateToProps = state => ({
  reviews: state.review.reviews,

});
const mapDispatchToProps = {
  removeReview,
  editReview
};
export const Review = connect(mapStateToProps, mapDispatchToProps)(_Review);
