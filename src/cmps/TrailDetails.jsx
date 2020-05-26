import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadTrail, removeTrail, loadTrails, editTrail } from '../store/actions/trailsActions';
import history from '../history';
import ShowMoreText from 'react-show-more-text';
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
    descriptions: ''
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }


  componentDidMount() {
    this.props.loadTrails()
    this.props.loadTrail(this.props.id)
      .then(() => {
        this.setState({
          ...this.props.trails.selectedTrail
        })
      })

  }


  inputHandler = ({ target }) => {
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })

  }


  onEditHandler = () => {
    this.setState({ isEditMode: true })
  }

  onFinishEditHandler = (ev) => {
    ev.preventDefault();
    this.setState({ isEditMode: false })
    let trail = this.state
    this.props.editTrail(trail)
      .then(() => {
        this.props.loadTrails();
      })


  }

  render() {
    if (this.state.isEditMode) {

      const { name, country, difficulty, distance, days, imgUrls, descriptions } = this.state
      return (

        <main className="">
          <form onSubmit={this.onFinishEditHandler}>
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
              imgs: <input type="text" value={imgUrls} name="imgUrls" onChange={this.inputHandler} />
            </label>
            <br />
            <label>
              descriptions: <textarea cols="80" rows="30" value={descriptions} name="descriptions" onChange={this.inputHandler}></textarea>
            </label>
            <button className="">Finish Edit</button>
          </form>
        </main>
      )
    }

    const { selectedTrail } = this.props.trails;
    return (
      <main>
        {this.props.trails.selectedTrail && <React.Fragment>

          <h2>{selectedTrail.name}</h2>
          <Link className="a" to={'/trail'} > Back to List </Link>
          {/* imgs starts here */}
          <div>
            <img width="740" height="471" src={selectedTrail.imgUrls[0]} />
            <img width="740" height="471" src={selectedTrail.imgUrls[1]} />
            <img width="740" height="471" src={selectedTrail.imgUrls[2]} />
            <img width="740" height="471" src={selectedTrail.imgUrls[3]} />
          </div>
          {/* trail genertal info starts here */}


          {
            <ShowMoreText

              lines={3}
              more='Show more'
              less='Show less'
              anchorClass=''
              onClick={this.executeOnClick}
              expanded={false}
              width={750} >

              <section>
                {selectedTrail.descriptions}
                <p>difficulty: {selectedTrail.difficulty} </p>
                
                <p>country: {selectedTrail.country} </p>
                <p>days: {selectedTrail.days} </p>
                <p> Distance: {selectedTrail.distance} </p>
                <p>rating: {selectedTrail.rating} </p>
              </section>
            </ShowMoreText>
          }


          <button onClick={() => {
            this.props.removeTrail(selectedTrail._id)
              .then(() => history.push('/trail'))
          }
          }>Delete Trail</button>
          <section>
           

            <button onClick={() => {
              this.onEditHandler()
            }}>edit</button>
          </section>
          
          
            {/* MAP */}
            <MapContainer location={selectedTrail.location} />

          
          {/* reviews form starts here */}
          <section>
            <form action="">
              <textarea name="" id="" cols="80" rows="15"></textarea>
              <br />
              <button>Submit</button>
            </form>
          </section>
          {/* reviews form ends here */}
        </React.Fragment>}
      </main>
    )
  }
}


const mapStateToProps = state => ({
  trails: state.trail,
});
const mapDispatchToProps = {
  loadTrail,
  loadTrails,
  removeTrail,
  editTrail
};
export const TrailDetails = connect(mapStateToProps, mapDispatchToProps)(_TrailDetail);








