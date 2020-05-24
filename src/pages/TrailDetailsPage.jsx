import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadTrail,removeTrail,loadTrails } from '../store/actions/trailsActions'

class _TrailDetailsPage extends Component {

    componentDidMount() {
      const { id } = this.props.match.params;
      this.props.loadTrail(id);
    }

    


    render() {
      const { selectedTrail } = this.props.trails;

      return (

            <main>

                {this.props.trails.selectedTrail && <React.Fragment>
                        
                    {console.log('trails:',this.props.trails)}

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




// {trails: Array(0), selectedTrail: {…}}
// selectedTrail:
// country: "Czech Republic"
// days: "daily"
// descriptions: "The Prachovské skály nature preserve is one of the most popular regions in the Czech Republic. It is one of the oldest nature preserves in the country.↵        The area was declared a nature preserve in 1933. In 2002, the efforts made by conservationists resulted in incorporation of the Prachovské skály Nature Preserve in the Český Ráj Protected Landscape Area. It is recommended to start a tour round the Prachovské Skály from Jičín, an ancient town with a well-preserved central square and numerous historic monuments. The Prachovské Skály are some 6 km far from Jičín, in the direction towards Sobotka, via Holín and Prachov. There are two car parks at the entrance points.↵        ↵        The short round tour is led through a narrow, only 35 cm wide rock gap; from there, you approach two best-known lookout points and return through the Císařská Chodba between robust rock blocks. The tour takes about 3/4 hour.↵        ↵        The long round will take you along seven lookout points, you climb various staircases carved in the rocks and squeeze through narrow gaps between huge stones. The tour is 3.5 km long and it takes approximately 2.5 hours.↵        ↵        Geology↵        The geological history of the Prachovské skály area is rather varicoloured – the beginnings of the sandstone formations date back to the Mesozoic era when the whole territory was flooded with sea water. Millions of years later, the region was pushed up by the effects of powerful tectonic powers, the flood shrank back and the seabed split into separate blocks on which today's treasure of the Český Ráj region were formed: the Suché skály, the Prachovské skály, the Hruboskalsko, the Příhrazské Skály, etc. By gradual erosion, characteristic and world-unique rock formations were formed, distinctive with tall rock towers and deep rock gaps. During the Tertiary era, volcanic activities reshaped the landscape, leaving its print in the form of (residual) basalt volcanoes – the hills of Velíš, Zebín, Trosky, Vyskeř, etc., today's significant landscape dominant features of the region of Český Ráj.↵        ↵        History↵        Some time in the mid 13th century, King Přemysl Otakar I. founded on the basalt hill a magnificent castle named Velíš and the Prachovské Skály became a part of the Royal demesne of Velíš. The demesne was not the Royal property for long: in 1337 it was obtained by the Vartemberk family and then it was possessed by various other noble families. In 1625 the demesne of Velíš was included in the property of the Duke of Frýdlant, Albrecht Eusebius Valdštejn. After his death in 1634 the duchy was devastated. In 1637 the land of Velíš and the Prachovské skály went to Jindřich Schlik, one of the leaders of the uprising in 1620 and the chief commander of the Moravian Army in the Battle of Bílá Hora. After the lost battle, his cousin, Jáchym Ondřej Schlik, was arrested and executed in 1621 at Old Town Square in Prague. However, Jindřich Schlik entered the Imperial Army and developed a great career as a professional soldier. His successors owned the Prachovské Skály until 1948 when the Schlik family property was confiscated.↵        ↵        In 1993, it was restituted and since 2000 the Schlik family has operated the tourist area of the Prachovské skály on its own.↵        ↵        "
// distance: "10km"
// imgUrls: (4) ["https://live.staticflickr.com/3105/2775104716_74cbb14105_b.jpg", "https://www.cesky-raj.info/galerie/obrazky/imager.…=1037&y=691&hash=093868d35ac6fc68e56bd0e329748214", "https://podroze.at7.pl/wp-content/uploads/2019/CzeskaSzwajcaria/prachowskie_skaly9.jpg", "https://1.bp.blogspot.com/-4BALSPSR4i8/XpQo4mItVtI…2SKJspXbrMvtUOwhMkIgCLcBGAsYHQ/s1600/DSCN0733.JPG"]
// location: "x"
// name: "‪Prachovské skály‬"
// _id: "j1v"
// __proto__: Object
// trails: []
// __proto__: Object




// country: "country"
// createdAt: 1590299455280
// days: "12312312"
// difficulty: "Expect"
// distance: "distance"
// imgUrls: "https://lh5.googleusercontent.com/p/AF1QipNHRt8aqSNJL4L6slKGMdsRdvvU1x8eotaN9ys=w408-h306-k-no"
// location: "x"
// name: "new text"
// _id: "Cls"
