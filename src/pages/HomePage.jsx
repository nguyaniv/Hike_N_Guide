import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { List } from '../cmps/List';

class _HomePage extends Component {
  render() {
    return (
      <main className="homepage">
        <img src="/img/main-background.jpg" alt="" className="homepage-background"/>
        <h2 className="homepage-main-heading">Find hiking trails and guides worldwide</h2>
        <h2 className="homepage-list-heading">Popular Trails</h2>
        <List items={ exampleTrails }/>
        <h2 className="homepage-list-heading">Popular Guides</h2>
        <List items={ exampleGuides }/>
      </main>
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

// const exampleGuides = [
//   {
//     _id: '1234',
//     userName: 'poiki123',
//     fullName: 'Shoka Soko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'vasvsafdbasf',
//     userName: 'poiki123',
//     fullName: 'Popo Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'egwrvreg',
//     userName: 'poiki123',
//     fullName: 'Ololo Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'svLMBPSNBIPM',
//     userName: 'poiki123',
//     fullName: 'Trololo Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'ASDVMSDVPOJOP',
//     userName: 'poiki123',
//     fullName: 'Puki Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'LMKJBY',
//     userName: 'poiki123',
//     fullName: 'Muki Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'SABVCUAQSGHVCAOVMNIOBUIVY',
//     userName: 'poiki123',
//     fullName: 'Shuki Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
//   {
//     _id: 'HDVONVDSNHVIBSNvsbj',
//     userName: 'poiki123',
//     fullName: 'Bobo Koko',
//     password: '1234',
//     isAdmin: false,
//     languages: ['he', 'en'],
//     trails: [], // id, name, country,
//     imgUrl: 'img/stam.png',
//   },
// ];

const exampleGuides = [
  {
    _id: 'aRmDjhBd4b',
    userName: 'rogeliog',
    fullName: 'Rogelio Geisbauer',
    password: '5zxjlm9A',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/men/29.jpg',
    rating: 3,
    reviewers_count: 4,
    languages: ['he'],
    trails: {},
  },
  {
    _id: 'ZfRlDUZwJB',
    userName: 'reneed',
    fullName: 'Renee Denard',
    password: 'EbxjfZaj',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/women/16.jpg',
    rating: 2,
    reviewers_count: 4,
    languages: ['en'],
    trails: {},
  },
  {
    _id: 'ECE1MhOgcP',
    userName: 'aisham',
    fullName: 'Aisha Magano',
    password: 'N4USCZ5B',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/women/23.jpg',
    rating: 4,
    reviewers_count: 5,
    languages: ['he'],
    trails: {},
  },
  {
    _id: 'K8JCRHqN21',
    userName: 'meerac',
    fullName: 'Meera Crewell',
    password: '7MbgtkpJ',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/men/77.jpg',
    rating: 5,
    reviewers_count: 14,
    languages: ['he'],
    trails: {},
  },
  {
    _id: 'JyHAWrdfz1',
    userName: 'pennyc',
    fullName: 'Penny Curtis',
    password: 'b9At4B2f',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/men/62.jpg',
    rating: 1,
    reviewers_count: 10,
    languages: ['en'],
    trails: {},
  },
  {
    _id: 'wvahkUajdo',
    userName: 'sherryk',
    fullName: 'Sherry Kluger',
    password: '8Z7vHGSa',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/men/59.jpg',
    rating: 5,
    reviewers_count: 11,
    languages: ['en'],
    trails: {},
  },
  {
    _id: 'nIa1jDhYo0',
    userName: 'jacquieh',
    fullName: 'Jacquie Hill',
    password: 'YEPQi3eU',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/men/58.jpg',
    rating: 4,
    reviewers_count: 10,
    languages: ['en'],
    trails: {},
  },
  {
    _id: 'ZmaX5EXPfv',
    userName: 'jessicag',
    fullName: 'Jessica Grigsby',
    password: 'Hmp9nhEy',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/women/93.jpg',
    rating: 3,
    reviewers_count: 8,
    languages: ['he'],
    trails: '{}',
  },
  {
    _id: 'nbQBvvXdIu',
    userName: 'melodyt',
    fullName: 'Melody Tubbytelly',
    password: 'HX238PyM',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/women/70.jpg',
    rating: 5,
    reviewers_count: 6,
    languages: ['he'],
    trails: {},
  },
  {
    _id: '0NwTpQ2Iz5',
    userName: 'abdulf',
    fullName: 'Abdul Feldman',
    password: 'Y3OittiF',
    isAdmin: false,
    imgUrl: 'http://randomuser.me/api/portraits/women/17.jpg',
    rating: 4,
    reviewers_count: 12,
    languages: ['he'],
    trails: {},
  },
];


const exampleTrails = [
  {
    _id: 'fg3d',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
  {
    _id: 'shvijsavoibiosfnv',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
  {
    _id: 'sadvksamnv',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
  {
    _id: 'slmvmsnkan',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
  {
    _id: 'slknvlkn',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
  {
    _id: 'amnslkvnisnaldk',
    name: 'Sahara desert',
    location: {
      lat: 3213412423423,
      lng: 8473984760564,
    },
    country: 'Egypt',
    difficulty: 'easy/medium/hard',
    distance: 30,
    days: 3,
    imgUrls: ['img/stam-trail.jpg', ''],
  },
];
