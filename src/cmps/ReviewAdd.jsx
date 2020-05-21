import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating'

//Images
import star from '../img/star.svg'
import star_o from '../img/‏‏star-o.svg'


class _ReviewAdd extends Component {
    state = {
        "_id": "2332",
        "by": "mini-user",
        "rate": 3,
        "at": 7678,
        // "guide": {"mini-user"},
        "txt": "Great Guide!"
    }

    render() {
        return (
            <section className="reviewAdd">
                
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
