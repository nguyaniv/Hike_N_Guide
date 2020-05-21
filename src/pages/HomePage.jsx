import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from '../cmps/List';

class _HomePage extends Component {
  render() {
    return (
      <section className="home-page">
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
export const HomePage = connect()(_HomePage);
