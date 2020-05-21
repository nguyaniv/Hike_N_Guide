import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrailPreview } from '../cmps/TrailPreview';

 class _HomePage extends Component {
  render() {
    return (
      <div className="home-page">
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const HomePage = connect()(_HomePage);
