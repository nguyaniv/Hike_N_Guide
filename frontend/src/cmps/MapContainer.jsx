import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    render() {
        console.log(this.props.location)
        const containerStyle = {
            position: 'static',  
            width: '100%',
            height: '40%',
          }
          

        return (
            <Map
             style={containerStyle} 
            google={this.props.google}
                initialCenter={{
                    lat: this.props.location.lat,
                    lng: this.props.location.lng
                }}

                onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )



    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDw7z6CMCiRYFpFmT4LIk7JWqyqvSWm1R8')
})(MapContainer)
