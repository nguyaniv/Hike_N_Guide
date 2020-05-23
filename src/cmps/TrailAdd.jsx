import React from 'react';
import { connect } from 'react-redux';
import { saveTrail } from '../store/actions/trailsActions';

class TrailAdd extends React.Component {
    state = {
      name: '',
      country: '',
      difficulty: '',
      distance: '',
      days: '',
      location: 'x',
      imgUrls: '',
      createdAt: Date.now(),
    }


    inputHandler = ({ target }) => {
      const { name } = target;
      const { value } = target;
      this.setState({ [name]: value });
    }


    restForm = () => {
      this.setState({
        name: '',
        country: '',
        difficulty: 'Funny',
        distance: null,
        days: null,
        location: 'x',
        imgUrls: '',
        createdAt: Date.now(),
      });
    }


    handleSubmit = ev => {
      ev.preventDefault();
      const trail = this.state;
      // console.log('trail from TrailAdd page:', trail);

      this.props.saveTrail(trail);
      this.restForm();
    };

    render() {
      const {
        name, country, difficulty, days, distance, imgUrls,
      } = this.state;


      return (
            <div className="">
                <form onSubmit={ this.handleSubmit }>
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
                    <button className="">Add</button>
                </form>
            </div>

      );
    }
}


const mapStateToProps = state => ({
  trails: state.trail.trails,
});

const mapDispatchToProps = {
  saveTrail,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailAdd);
