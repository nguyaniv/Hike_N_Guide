import React, { Component } from 'react';


 export class Review extends Component {
  
  
  render() {
    
    console.log(this.props)
    return (
      <main>
        <div className="review-container">
          <div className="review-name-date">
            <p>created by: name  at:time</p>
          </div>
          <div className="review-msg">
            <p>review msg goes here !</p>
          </div>
        </div>
      </main>
    )
  }
}


