import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShowMoreText from 'react-show-more-text';
import {
  loadTrail, removeTrail, loadTrails, editTrail,
} from '../store/actions/trailsActions';
import history from '../history';
import MapContainer from './MapContainer';

class _TrailDetail extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    isEditMode: false,
    name: '',
    country: '',
    difficulty: '',
    distance: '',
    days: '',
    location: '',
    imgUrls: '',
    descriptions: '',
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    this.props.loadTrails();
    this.props.loadTrail(this.props._id)
      .then(() => {
        this.setState({
          ...this.props.trails.selectedTrail,
        });
      });
  }

  // componentDidUpdate() {
  //   console.log(this.state.width)
  // }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(prevState => ({
      ...prevState,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }

  inputHandler = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value });
  }


  onEditHandler = () => {
    this.setState({ isEditMode: true });
  }

  onFinishEditHandler = ev => {
    ev.preventDefault();
    this.setState({ isEditMode: false });
    const trail = this.state;
    this.props.editTrail(trail)
      .then(() => {
        this.props.loadTrails();
      });
  }

  render() {
    if (this.state.isEditMode) {
      const {
        name, country, difficulty, distance, days, imgUrls, descriptions,
      } = this.state;
      return (
        <div className="">
          <form onSubmit={ this.onFinishEditHandler }>
            <label>
              name:<input type="text" name="name" value={ name } onChange={ this.inputHandler } />
            </label>
            <label>
              country: <input className="" type="text" value={ country } name="country" onChange={ this.inputHandler } />
            </label>
            <label>
              distance: <input className="" type="text" value={ distance } name="distance" onChange={ this.inputHandler } />
            </label>
            <label>
              difficulty:<select name="difficulty" value={ difficulty } onChange={ this.inputHandler }>
                <option value="Beginner">Beginner</option>
                <option value="Advanced">Advanced</option>
                <option value="Expect">Expect</option>
              </select>
            </label>
            <label>
              days: <input type="number" value={ days } name="days" onChange={ this.inputHandler } />
            </label>

            <label>
              imgs: <input type="text" value={ imgUrls } name="imgUrls" onChange={ this.inputHandler } />
            </label>
            <br />
            <label>
              descriptions: <textarea cols="80" rows="30" value={ descriptions } name="descriptions" onChange={ this.inputHandler }></textarea>
            </label>
            <button className="">Finish Edit</button>
          </form>
        </div>
      );
    }

    const { selectedTrail } = this.props.trails;
    return (
      <div className="trail-details-container">
        {this.props.trails.selectedTrail && <div className="trail-details">
          <img
            className="trail-details-main-image"
            alt={ selectedTrail.name }
            src={ selectedTrail.imgUrls[0] }
          />
          <h2 className="trail-details-heading">{selectedTrail.name}</h2>
          <Link className="back-button" to={ '/trail' } > Back to List </Link>
          {
            <ShowMoreText
              lines={ 3 }
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={ this.executeOnClick }
              expanded={ false }
              width={ this.state.width * 0.6 } >

              <section className="trail-details-info">
                <p>
                  {selectedTrail.descriptions}
                </p>
                <p>
                  <span className="trail-details-info-heading">Difficulty: </span>{selectedTrail.difficulty}
                </p>
                <p>
                  <span className="trail-details-info-heading">Country: </span>{selectedTrail.country}
                </p>
                <p>
                  <span className="trail-details-info-heading">Days: </span>{selectedTrail.days}
                </p>
                <p>
                  <span className="trail-details-info-heading">Distance: </span>{selectedTrail.distance}
                </p>
                <p>
                  <span className="trail-details-info-heading">Rating: </span>{selectedTrail.rating}
                </p>
                <div className="trail-details-images">
                  {selectedTrail.imgUrls.map((image, i) => <img
                    key={ i }
                    className="trail-details-image"
                    alt={ selectedTrail.name }
                    src={ selectedTrail.imgUrls[i] }
                  />)}
                </div>
              </section>
            </ShowMoreText>
          }
          <div className="trail-details-map-container">
            <MapContainer location={ selectedTrail.location } />
          </div>

            <button className="space-orange" onClick={ () => {
              this.onEditHandler();
            } }>edit</button>
            <button className="space-red" onClick={ () => {
              this.props.removeTrail(selectedTrail._id)
                .then(() => history.push('/trail'));
            }
          }>Delete Trail</button>


          {/* reviews form starts here */}
          <h2 className="trail-details-heading">Add review</h2>
          <section className="trail-reviews">
            <form action="" className="trail-reviews-add-form">
              <textarea name="" id=""></textarea>
              <br />
              <button>Submit</button>
            </form>
          </section>
          {/* reviews form ends here */}
        </div>}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  trails: state.trail,
});
const mapDispatchToProps = {
  loadTrail,
  loadTrails,
  removeTrail,
  editTrail,
};
export const TrailDetails = connect(mapStateToProps, mapDispatchToProps)(_TrailDetail);
