import React from 'react';
import { connect } from 'react-redux';
import { saveTrail, loadTrails } from '../store/actions/trailsActions';
import MapContainer from '../cmps/MapContainer'
class TrailAdd extends React.Component {
  state = {
    name: '',
    country: '',
    difficulty: '',
    distance: '',
    days: '',
    location: {
      lat: 0,
      lng: 0
    },
    imgUrls: [],
    descriptions: '',
    createdAt: Date.now(),
  }


  updateLatLng = (lat,lng) => {
    this.setState({
      location :{
        lat,lng
      }
    },console.log(this.state)
    )
}

  inputHandler = ({ target }) => {
    const { name } = target;

    let { value } = target;
    if (name === 'imgUrls') value = value.split(',');
    this.setState({ [name]: value });
  }


  getLocation=({ target })=> {
    const { name } = target;
    const { value } = target
    this.setState((prevstate) => ({
      location: {
        ...prevstate.location,
        [name]: value
      }
    }))
  }


  resetForm = () => {
    this.setState({
      name: '',
      country: '',
      difficulty: '',
      distance: '',
      days: '',
      location: {
        lat: 0,
        lng: 0
      },
      imgUrls: [],
      createdAt: Date.now(),

    });
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const trail = this.state;
    this.props.saveTrail(trail)
      .then(() => {
        this.props.loadTrails();
      });
    this.resetForm();
  };

  render() {
    const {
      name, country, difficulty, days, distance, imgUrls, descriptions
    } = this.state;

    const { lat, lng } = this.state.location

    return (
      <main className="">
        <form onSubmit={this.handleSubmit}>
          <label>
            name:<input type="text" name="name" value={name} onChange={this.inputHandler} />
          </label>
          <label>
            country: <input className="" type="text" value={country} name="country" onChange={this.inputHandler} />
          </label>
          <label>
            distance: <input className="" type="text" value={distance} name="distance" onChange={this.inputHandler} />
          </label>
          <label>
            difficulty:<select name="difficulty" value={difficulty} onChange={this.inputHandler}>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
              <option value="Expect">Expect</option>
            </select>
          </label>
          <label>
            days: <input type="number" value={days} name="days" onChange={this.inputHandler} />
          </label>

          <label>
            lat: <input type="number" value={lat} name="lat" onChange={this.getLocation} />
          </label>
          <label>
            lng: <input type="number" value={lng} name="lng" onChange={this.getLocation} />
          </label>

          <label>
            imgs: <input type="text" value={imgUrls} name="imgUrls" onChange={this.inputHandler} />
          </label>
          <br />
          <label>
            descriptions: <textarea cols="80" rows="30" value={descriptions} name="descriptions" onChange={this.inputHandler}></textarea>
          </label>
          <button className="">Add</button>
        </form>




        <MapContainer updateLatLng={this.updateLatLng}/>



      </main>

    );
  }
}


const mapStateToProps = state => ({
  trails: state.trail.trails,
});

const mapDispatchToProps = {
  saveTrail,
  loadTrails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailAdd);