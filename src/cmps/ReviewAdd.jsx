import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating'

//Images
import star from '../img/star.svg'
import star_o from '../img/‏‏star-o.svg'


class _ReviewAdd extends Component {
    state = {
        rating: 1,
        txt: '',
        user: '',
        guide: ''
    }

    componentDidMount() {
        const { user, guide } = this.props
        this.setState(prevState => ({ review: { user, guide } }))
    }

    handledChange = ({ target }) => {
        const { name, review } = target
        this.setState(preState => ({ review: { ...preState.review, [name]: review }, }))
    }

    onSend = (ev) => {
        ev.preventDefault()

        const review = this.state

    }

    render() {
        const { rating, txt, user, guide } = this.state
        return (
            <section className="reviewAdd">
                <p>Rate: </p>
                <Rating start={0}
                    stop={5}
                    initialRating={rating}
                    emptySymbol={<img src={star} width="30" />}
                    fullSymbol={<img src={star_o} width="30" />}
                    onChange={(rate) => {
                        this.setState(prevState => ({ rating: rate }))
                    }}
                />
                <form onSubmit={this.onSend}>
                    <textarea name="review" value={txt} onChange={this.handledChange}
                        cols="30" rows="10" onChange={this.handledChange} placeholder="What do you think about me?" required>
                    </textarea>
                    <button>Send</button>
                </form>
            </section>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const ReviewAdd = connect()(_ReviewAdd);
