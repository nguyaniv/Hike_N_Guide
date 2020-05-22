import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import trailService from '../services/trail.service';

class _TrailDetailsPage extends Component {
    state = {
      trail: '',

    }

    componentDidMount() {
      const { id } = this.props.match.params;
      // const id = '5u3'
      const trail = trailService.getById(id);
      this.loadTrail(trail);
    }

    loadTrail = trail => {
      this.setState({ trail });
    }


    render() {
      // const { imgUrls, distance, country, name, difficulty, days, descriptions, rating, trail} = this.state
      const { trail } = this.state;

      if (!this.state.trail) return 'hello';
      console.log(this.state.trail);
      return (

            <main>

                {trail && <React.Fragment>

                    <h2>Trail name</h2>

                    {/* imgs starts here */}
                    <div>
                        <img width="740" height="405" src={ trail.imgUrls[0] } />
                        <img width="740" height="405" src={ trail.imgUrls[1] } />
                        <img width="740" height="405" src={ trail.imgUrls[2] } />
                        <img width="740" height="405" src={ trail.imgUrls[3] } />
                    </div>
                    {/* imgs ends here */}

                    {/* trail genertal info starts here */}
                    <section>
                        <p>difficulty: {trail.difficulty}</p>
                        <p>country: {trail.country}</p>
                        <p>days: {trail.days}</p>
                        <p> Distance: {trail.distance}</p>
                        <p>rating: {trail.rating}</p>
                    </section>


                    {/* trail genertal info ends here */}


                    {/* popular guids and link for all the guides of the trail starts here */}
                    <section>
                        <h2>popular guids for this trail</h2>

                        <Link> <li>a guide picture</li></Link>
                        <Link>  <li>a guide picture</li></Link>
                        <Link>  <li>a guide picture</li></Link>

                        <button>Show more</button>
                    </section>

                    {/* popular guids and link for all the guides of the trail ends here */}


                    {/* trails information and map starts here*/}


                    <p>
                        {trail.descriptions}
                    </p>

                    {/* trails information and map ends here*/}


                    {/* map  */}
                    <div>
                        {/* here will be map */}
                    </div>
                    {/* map  */}

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

      );
    }
}


export const TrailDetailsPage = connect()(_TrailDetailsPage);
