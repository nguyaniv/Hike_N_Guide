import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 class _HomePage extends Component {

    render() {

        return (
    <div className="home-page">
        <h2>hello from HomePage !</h2>
        <p className="home-page-para"> hello from test-branch !</p>
        <p>Hello from Yossi</p>
        <p>Hello from Lior</p>
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
  export const HomePage = connect()(_HomePage);
  