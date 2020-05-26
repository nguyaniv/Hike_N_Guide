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
    this.props.loadTrails();
    this.props.loadTrail(this.props.id)
      .then(() => {
        this.setState({
          ...this.props.trails.selectedTrail,
        });
      });
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

        <main className="">
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
        </main>
      );
    }

    const { selectedTrail } = this.props.trails;
    return (
      <div className="no-padding">

        {this.props.trails.selectedTrail && <div>
          <img className="homepage-background" alt="" src={ selectedTrail.imgUrls[1] } />

          <h2>{selectedTrail.name}</h2>
          <Link className="a" to={ '/trail' } > Back to List </Link>
          {
            <ShowMoreText

              lines={ 3 }
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={ this.executeOnClick }
              expanded={ false }
              width={ 750 } >

              <section>
                {selectedTrail.descriptions}
                <br />
                {selectedTrail.imgUrls.map((image, i) => <img
                  key={ i }
                  className="card"
                  alt={ selectedTrail.name }
                  src={ selectedTrail.imgUrls[i] }
                />)}

                <MapContainer location={ selectedTrail.location } />


                <p>difficulty: {selectedTrail.difficulty} </p>

                <p>country: {selectedTrail.country} </p>
                <p>days: {selectedTrail.days} </p>
                <p> Distance: {selectedTrail.distance} </p>
                <p>rating: {selectedTrail.rating} </p>
              </section>


            </ShowMoreText>
          }


            <button className="space-orange" onClick={ () => {
              this.onEditHandler();
            } }>edit</button>
            <button className="space-red" onClick={ () => {
              this.props.removeTrail(selectedTrail._id)
                .then(() => history.push('/trail'));
            }
          }>Delete Trail</button>
          <section>


            <button onClick={ () => {
              this.onEditHandler();
            } }>edit</button>
          </section>
          {/* reviews form starts here */}
          <section className="trail-review">
            <form action="">
              <textarea name="" id="" cols="80" rows="15"></textarea>
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
