import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'

class _BookingPage extends Component {
    state = {
        user: {
            _id: "1234",
            userName: "poiki123",
            password: "1234",
            fullName: "shoka koko",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
            rating: 3.5,
            isAdmin: false,
            languages: ["he", "en"],
            trails: [
                {
                    _id: "fg3d",
                    name: "Sahara desert",
                    imgUrls: ["", ""]
                }
            ] // id, name, country
        }
    }

    render() {
        const { user } = this.state
        return (
            <div className="booking-page">
                <section>
                    <img className="booking-page-img" src={user.imgUrl} width="75px" />
                    <p>{user.fullName}</p>
                    <p>Rating:</p>
                    <div>
                        <Rating
                            placeholderRating={user.rating}
                            fullSymbol={'fa fa-star fa-2x medium'}

                        />

                    </div>
                </section>


            </div>
        )
    }
}




// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const BookingPage = connect()(_BookingPage);
