import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadTrail,removeTrail,loadTrails } from '../store/actions/trailsActions'

class _TrailDetailsPage extends Component {

    componentDidMount() {
      const { id } = this.props.match.params;
      this.props.loadTrail(id);
      this.props.loadTrails();

    }

    


    render() {
      const { selectedTrail } = this.props.trails;

      return (

            <main>

                {this.props.trails.selectedTrail && <React.Fragment>
                        
                    {console.log(this.props.trails)}

                    <h2>Trail name</h2>
                    <Link className="a" to={`/trail`} > Back to List </Link>

                    {/* imgs starts here */}
                    <div>
                        <img width="740" height="471"  src={ selectedTrail.imgUrls[0] } />
                         <img width="740" height="471"  src={ selectedTrail.imgUrls[1]} />
                        <img width="740" height="471"  src={ selectedTrail.imgUrls[2] } />
                        <img width="740"  height="471" src={ selectedTrail.imgUrls[3] } /> 
                    </div>
                    {/* imgs ends here */}

                    {/* trail genertal info starts here */}
                    <section>
                        <p>difficulty: {selectedTrail.difficulty}</p>
                        <p>country: {selectedTrail.country}</p>
                        <p>days: {selectedTrail.days}</p>
                        <p> Distance: {selectedTrail.distance}</p>
                        <p>rating: {selectedTrail.rating}</p>
                    </section>


                        <Link to={`/trail`} onClick={()=>
                       {
                        console.log(selectedTrail._id)
                        console.log(this.props.trails)
                        
                        this.props.removeTrail(selectedTrail._id)
                        }
                      
                       
                        }>Delete Trail</Link>

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
                        {selectedTrail.descriptions}
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


const mapStateToProps = state => {
    return {
        trails: state.trail
    };
};
const mapDispatchToProps = {
    loadTrail,
    loadTrails,
    removeTrail
};
export const TrailDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_TrailDetailsPage);
