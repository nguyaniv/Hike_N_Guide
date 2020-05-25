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
    const { peopleCount } = this.state;

    return (
      <main>
        <h2>Trail name</h2>
        <form>
          <Calendar
            onChange={ date => this.setState({ date }) }
            value={ this.state.date }
            minDate={ new Date() }
          />
          <label>How many people?</label>
          <input type="number" name="peopleCount" value={peopleCount} min="1" />
          <button>Book</button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = {

};
export const BookingForm = connect(mapStateToProps, mapDispatchToProps)(_BookingForm);
