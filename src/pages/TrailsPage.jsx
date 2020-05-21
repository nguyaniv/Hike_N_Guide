import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrailsFilter from '../cmps/TrailsFilter'
import {List} from '../cmps/List'
class _TrailsPage extends Component {

    render() {

        return (

            <main>
                <h2>hello from TrailsPage !</h2>

                {/* country filter section starts here */}

                <section>
                <input name="country" value="country" type="text" placeholder="search trails in country" />
                </section>

                {/* country filter section ends here */}



                {/* side-filter starts here */}
                    <TrailsFilter />
                {/* side-filter ends here */}



                        {/* previews */}

                            {/* uncomment when previews are ready */}
                                {/* <List /> */}



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
