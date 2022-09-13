import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import './contact.css'
import LocationPin from './pin';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap = ( { location, zoomLevel }) => {
    return (
        <div className='google-map'>
            <div className="address-outer-div">
                  <h1>Location</h1>
                  380 Rector Pl #21e, 
                  <br/>
                  New York, NY 10280      
            </div> 
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                />
            </GoogleMapReact>
        </div>
    )
}


export default SimpleMap;