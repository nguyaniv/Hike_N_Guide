import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrailsFilter from '../cmps/TrailsFilter'
import { List } from '../cmps/List'

import { loadTrails } from '../store/actions/trailsActions';






class _TrailsPage extends Component {

    componentDidMount() {
      this.props.loadTrails()
                               
    }

    render() {
        const { trails } = this.props
        return (

            <main className="trail-page">

                {this.props.trails && <React.Fragment>
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
                    <List items={trails} />

                </React.Fragment>}


            </main>
        )


    }

}




const mapStateToProps = state => {
    return {
        trails: state.trail.trails
    };
};
const mapDispatchToProps = {
    loadTrails
};
export const TrailsPage = connect(mapStateToProps, mapDispatchToProps)(_TrailsPage);
