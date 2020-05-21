import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD

=======
>>>>>>> c803b39cd2802a4ac83d67532b9a5da07bf119d4



class _TrailDetailsPage extends Component {

    render() {
        return (

            <main>


                <h2>Trail name</h2>

                {/* imgs starts here */}
                <div>
                    <img src="https://i.picsum.photos/id/319/536/354.jpg" />
                    <img src="https://i.picsum.photos/id/970/536/354.jpg" />
                    <img src="https://i.picsum.photos/id/450/536/354.jpg" />
                    <img src="https://i.picsum.photos/id/408/536/354.jpg" />
                </div>

                {/* imgs ends here */}


                {/* trail genertal info starts here */}
                <section>
                    <p>difficulty: some difficulty level</p>
                    <p>days: number</p>
                    <p> Distance: number +km</p>
                    <p>rating: some stars</p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue interdum interdum. Nullam nec tellus facilisis nulla lobortis aliquet sit amet molestie urna. Phasellus sagittis vel dolor id molestie. Etiam mi lorem, ultricies quis maximus eu, auctor in nibh. Maecenas luctus quam sed neque hendrerit porttitor. Aliquam dignissim vestibulum enim a ornare. Etiam vel justo sit amet sapien dignissim lacinia at vitae erat. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rutrum varius nisi, id tempus massa bibendum id.
                    Phasellus vulputate varius est, vel interdum ligula ultricies in. Nulla egestas leo eu nulla hendrerit rhoncus. Nunc commodo urna eu aliquam luctus. Quisque tempor lacus aliquam risus volutpat, non elementum sem mattis. Duis vitae ligula lacinia, dictum lacus ac, sollicitudin quam. Sed quis consectetur lectus, a efficitur libero. Fusce egestas lobortis turpis et varius. Integer ante ante, mollis nec porta vel, eleifend sit amet urna. Nunc vitae urna quis tortor aliquet tempus vel malesuada lectus. Quisque ut ex quam. Aenean fermentum ut quam at malesuada. Nunc efficitur nisi ac ex volutpat elementum. Cras vitae nisi interdum risus auctor aliquam. Nulla lobortis vitae purus congue aliquam. Praesent malesuada suscipit urna, eget maximus augue feugiat in. Mauris volutpat sed purus sit amet porttitor.

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

                        <textarea name="" id="" cols="30" rows="10"></textarea>

                    <button>Submit</button>
                    </form>


                </section>


                {/* reviews form ends here */}


            </main>

        )
    }



}


export const TrailDetailsPage = connect()(_TrailDetailsPage);
