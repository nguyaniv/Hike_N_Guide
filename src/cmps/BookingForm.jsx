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
    const {
      bookForm, trails, handelInput, handelDate,
    } = this.props;


    return (
        <form className="booking-form">
          <select
          className="booking-form-selected-trail"
          name="trailSelected"
          onChange={ handelInput }
          value={ bookForm.trailSelected }>
            {
              trails.map((trail, idx) => (
                  <option key={ trail._id } value={ idx }>{trail.name}</option>))
            }
          </select>
          <Calendar
            onChange={ date => { handelDate(date); } }
            value={ bookForm.date }
            minDate={ new Date() }
          />
          <div className="booking-form-people-count-container">
            <label className="booking-form-title">How many people?</label>
            <input className="booking-form-people-count" type="number" name="peopleCount" value={ bookForm.peopleCount } min="1" onChange={ handelInput } />
          </div>
          <div>
            <div className="booking-form-price-container" >
              <label className="booking-form-title">Price:</label>
              <span className="price">${ bookForm.peopleCount * this.props.price}</span>
            </div>
            <button className="booking-form-submit-button">Book</button>
          </div>
        </form>
    );
  }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = {

};
export const BookingForm = connect(mapStateToProps, mapDispatchToProps)(_BookingForm);
