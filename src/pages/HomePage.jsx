import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 class _HomePage extends Component {

    render() {

        return (

    <div>
        <h2>hello from HomePage !</h2>
        <p>hello from test-branch !</p>

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
  