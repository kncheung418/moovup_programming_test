import React from 'react'
import GoogleMapReact,{ChildComponentProps} from 'google-map-react';
import './Map.scss'
import { ILocation } from '../models/IMap';
import dotenv from 'dotenv'
dotenv.config()
function Marker(props: ChildComponentProps) {
  return <div><i className="fas fa-map-marker-alt"></i></div>
}

const Map:React.FC<ILocation> = (props) => {
    if (!props?.latitude || !props?.longitude) return <div className="map-invalid-location">Location Not Found</div>
    return (
        <div className="map-container">
        {(props?.latitude && props?.longitude) && <GoogleMapReact
          bootstrapURLKeys={ {key: process.env.REACT_APP_GOOGLE_MAP_KEY || ""} }
          center={{lat:props.latitude,lng:props.longitude}}
          zoom={12}
          distanceToMouse={()=>{return 0}}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={props.latitude} lng={props.longitude} />
          
        </GoogleMapReact>}
        {(!props.latitude || !props.longitude)&& <div className="map-invalid-location">Location Not Found</div>}
        </div>
    )
}

export default Map
