import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class _BookingPage extends Component {
    state = {
        user = {
            _id: "1234",
            userName: "poiki123",
            password: "1234",
            fullName: "shoka koko",
            imgUrl: "",
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
                    <img src={user.imgUrl} alt="" />
                    <p>{user.userName}</p>
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
