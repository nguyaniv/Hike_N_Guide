import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrailsFilter from '../cmps/TrailsFilter'
import { List } from '../cmps/List'
import trailService from '../services/trail.service'







class _TrailsPage extends Component {

    state = {
        trails :[]
    }


    componentDidMount(){
        this.loadTrails()
    }
    

    loadTrails = () => {
        const trails = trailService.query()
        this.setState({ trails })
    }

    

    render() {
        const {trails} = this.state
        console.log(trails);
        
        return (

            <main>

                {trails && <React.Fragment>
                    <h2>hello from TrailsPage !</h2>

                    {/* country filter section starts here */}

                    <section>
                        {/* <input name="country"  type="text" placeholder="search trails in country" /> */}
                    </section>

                    {/* country filter section ends here */}



                    {/* side-filter starts here */}
                    {/* <TrailsFilter /> */}
                    {/* side-filter ends here */}



                    {/* previews */}

                    {/* uncomment when previews are ready */}
                    <List items={trails}  />

                </React.Fragment>}


            </main>
        )


    }

}




// const mapStateToProps = state => {
//     return {

//     };
//   };
//   const mapDispatchToProps = {

//   };
export const TrailsPage = connect()(_TrailsPage);
