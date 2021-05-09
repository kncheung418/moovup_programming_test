import React from 'react'
import { IPeopleProps } from '../models/IPeople'
import './MapPersonDetail.scss'

const MapPersonDetail: React.FC<IPeopleProps> = (props) => {
    return (
        <div className='map-person-detail'>
            <div className="map-person-detail-icon-container">
                <img src={props.picture} alt="icon" className="map-person-detail-icon"/>
            </div>
            <div className="map-person-detail-name">
                {props.firstName +" "+ props.lastName}
            </div>
            <div className="map-person-detail-email">
                {props.email}
            </div>
        </div>
    )
}
export default MapPersonDetail