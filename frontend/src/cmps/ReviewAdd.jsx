import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';

//Images
import star from '../img/star.svg';
import star_o from '../img/‏‏star-o.svg';


class _ReviewAdd extends Component {
    state = {
      rating: 1,
      txt: '',
      by: {},
    }

    componentDidMount() {
      const { user } = this.props;
      if (this.props.guide) {
        this.setState({ by: user, guide: this.props.guide });
      } else if (this.props.user) {
        this.setState({ by: user, user: this.props.user });
      }
    }

    handledChange = ev => {
      const { name, value } = ev.target;
      this.setState({ [name]: value });
    }

    onSend = ev => {
      ev.preventDefault();
      const review = this.state;
    }

    render() {
      const {
        rating, txt, user, guide,
      } = this.state;
      return (
            <section className="reviewAdd">
                <p>Rate: </p>
                <Rating start={ 0 }
                    stop={ 5 }
                    initialRating={ rating }
                    emptySymbol={ <img src={ star } width="30" /> }
                    fullSymbol={ <img src={ star_o } width="30" /> }
                    onChange={ rate => {
                      this.setState({ rating: rate });
                    } }
                />
                <form onSubmit={ this.onSend }>
                    <textarea name="txt" value={ txt } onChange={ this.handledChange }
                        cols="30" rows="10" placeholder="What do you think about me?" required>
                    </textarea>
                    <button>Send</button>
                </form>
            </section>
      );
    }
}

// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const ReviewAdd = connect()(_ReviewAdd);
