import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from '../cmps/List';

class _HomePage extends Component {
  render() {
    return (
      <section className="homepage">
        <h2 className="homepage-list-heading">Popular Guides</h2>
        <List items={ exampleGuides }/>
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

const exampleGuides = [
  {
    _id: '1234',
    userName: 'poiki123',
    fullName: 'Shoka Soko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'vasvsafdbasf',
    userName: 'poiki123',
    fullName: 'Popo Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'egwrvreg',
    userName: 'poiki123',
    fullName: 'Ololo Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'svLMBPSNBIPM',
    userName: 'poiki123',
    fullName: 'Trololo Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'ASDVMSDVPOJOP',
    userName: 'poiki123',
    fullName: 'Puki Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'LMKJBY',
    userName: 'poiki123',
    fullName: 'Muki Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'SABVCUAQSGHVCAOVMNIOBUIVY',
    userName: 'poiki123',
    fullName: 'Shuki Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },
  {
    _id: 'HDVONVDSNHVIBSNvsbj',
    userName: 'poiki123',
    fullName: 'Bobo Koko',
    password: '1234',
    isAdmin: false,
    languages: ['he', 'en'],
    trails: [], // id, name, country,
    imgUrl: 'img/stam.png',
  },

];
