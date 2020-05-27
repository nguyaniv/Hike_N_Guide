import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class _BookingForm extends Component {
  state = {
    peopleCount: 1,
    date: new Date(),
  };

  componentDidMount() {

  }

  render() {
    const { bookForm, trails, handelInput } = this.props;


    return (
      <section className="booking-form">
        <div className="booking-form-contain">
          <div className="booking-form-container">
            <form>
              <select name="trailSelected" onChange={ handelInput } value={ bookForm.trailSelected }>
                {
                  trails.map((trail, idx) => {
                    return (
                      <option key={ trail._id } value={ idx }>{trail.name}</option>);
                  })
                }
              </select>
              <Calendar
                onChange={ date => this.setState({ date }) }
                value={ bookForm.date }
                minDate={ new Date() }
              />
              <div>
                <label className="booking-form-title">How many people?</label>
                <input type="number" name="peopleCount" value={ bookForm.peopleCount } min="1" />
              </div>
              <div>
                <div className="booking-form-price-contain" >
                  <label className="booking-form-title">Price:</label>
                  <p className="price">$160</p>
                </div>
                <button className="btn-submit">Book</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = {

};
export const BookingForm = connect(mapStateToProps, mapDispatchToProps)(_BookingForm);
