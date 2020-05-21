import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class _TrailDetailsPage extends Component {

    state = {
       
             
            _id: "fg3d",
            name: "Sahara desert",
            location: {
                lat: 3213412423423,
                lng: 8473984760564,
            },
            country: "Egypt",
            difficulty: "for beginners",
           
            distance: 30,
            days: 3,
            imgUrls: ["https://i.picsum.photos/id/319/536/354.jpg", "https://i.picsum.photos/id/970/536/354.jpg",
             "https://i.picsum.photos/id/450/536/354.jpg", "https://i.picsum.photos/id/408/536/354.jpg"],
             descriptions: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nesciunt cupiditate voluptatibus itaque dignissimos doloremque beatae quo, minima atque veritatis eos ex fugit ipsam nostrum maxime inventore velit magnam commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea ipsum facere, fugiat repudiandae excepturi ducimus vel perferendis repellendus, odio sequi rem fugit distinctio accusantium. Quia voluptates odio consequuntur mollitia. "
        }
    


    render() {


              const  {imgUrls,distance,country,name,difficulty,days,descriptions,rating} = this.state
        return (

            <main>


                <h2>Trail name</h2>

                {/* imgs starts here */}
                <div>
                    <img src={imgUrls[0]} />
                    <img src={imgUrls[1]} />
                    <img src={imgUrls[2]} />
                    <img src={imgUrls[3]} />
                </div>
                {/* imgs ends here */}


                {/* trail genertal info starts here */}
                <section>
                    <p>difficulty: {difficulty}</p>
                    <p>country: {country}</p>
                    <p>days: {days}</p>
                    <p> Distance: {distance}</p>
                    <p>rating: {rating}</p>
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
                        {descriptions}
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
                            <br/>
                        <button>Submit</button>
                    </form>


                </section>


                {/* reviews form ends here */}


            </main>

        )
    }



}


export const TrailDetailsPage = connect()(_TrailDetailsPage);
